# Deploy Anleitung — LexRights auf Cloudflare

## Status

✅ Build funktioniert (`npm run cf:build`)
✅ Local preview funktioniert (`npm run cf:preview`)
✅ Worker bundle: `.open-next/worker.js`
✅ Static assets: `.open-next/assets/`
⚠️ Auto-Deploy via Token: **blockiert** — Token braucht Account-Scope (siehe unten)

---

## Token-Problem & Lösung

Der aktuelle Token ist **Zone-scoped auf lexrights.com** — Workers Scripts API ist aber **Account-scoped**. Symptome:

```
GET /accounts/{id}/workers/scripts  → 10000 Authentication error
PUT /accounts/{id}/workers/scripts/* → 10000 Authentication error
GET /accounts/{id}/tokens/verify    → ✅ success (irreführend)
```

### Lösung: Neuer Token mit Account-Scope

1. https://dash.cloudflare.com/profile/api-tokens → **Create Token**
2. Template: **Custom token** (nicht Zone-spezifisch)
3. **Permissions:**
   - Account → Workers Scripts → **Edit** (Write umfasst Read)
   - Account → Workers KV Storage → **Edit**
   - Account → Workers R2 Storage → **Edit**
   - Account → Pages → **Edit**
   - Account → Account Settings → **Read**
   - User → Memberships → **Read** (wichtig für Wrangler!)
   - Zone → DNS → **Edit** (für lexrights.com, optional)
   - Zone → Workers Routes → **Edit** (für lexrights.com)
4. **Account Resources:** Include → all accounts (oder nur das eine)
5. **Zone Resources:** Include → lexrights.com (optional)
6. Neuen Token in `.env.local` ersetzen: `CLOUDFLARE_API_TOKEN="cfat_NEU..."`

**Alten Token revoken** (Sicherheit).

---

## Deploy-Befehle (nach Token-Fix)

```bash
# Build
npm run cf:build

# Preview lokal mit Wrangler
npm run cf:preview        # http://localhost:8787

# Deploy auf Cloudflare (production)
npm run cf:deploy

# Preview-Version (eigene URL, nicht production)
npm run cf:deploy:preview

# Live-Logs vom Worker
npm run cf:tail
```

---

## Erste Deployment-Schritte

```bash
# 1. Token in .env.local ersetzen (s.o.)

# 2. (Optional) KV-Namespace für ISR-Cache anlegen — bringt Performance-Boost,
#    Free-Tier hat 1 GB Storage und 100k Reads/Tag
npx wrangler kv namespace create NEXT_INC_CACHE_KV
# → Binding-ID in wrangler.jsonc unter "kv_namespaces" eintragen
# → Dann in open-next.config.ts incrementalCache aktivieren

# 3. Secrets setzen (ENV vars, die nicht in wrangler.jsonc stehen sollen)
echo "re_xxx" | npx wrangler secret put RESEND_API_KEY

# 4. Deploy
npm run cf:deploy
# → Output: https://lexrights.<your-subdomain>.workers.dev

# 5. Custom Domain (lexrights.com)
#    Im Cloudflare Dashboard:
#    Workers & Pages → lexrights → Settings → Triggers → Custom Domains → Add
#    "lexrights.com" und "www.lexrights.com" hinzufügen
#    → SSL wird automatisch via Cloudflare Universal SSL provisioniert
```

---

## Alternative: Deploy via Cloudflare Dashboard (kein Token nötig)

Falls Token-Update zu mühsam:

1. https://dash.cloudflare.com → Workers & Pages → **Create application**
2. **Pages** Tab → **Connect to Git** (GitHub Repo erstellen falls nicht vorhanden)
3. Build configuration:
   - Build command: `npm run cf:build`
   - Build output directory: `.open-next`
   - Framework preset: **None** (custom OpenNext build)
4. Environment variables: alle aus `wrangler.jsonc` `vars` kopieren + `RESEND_API_KEY` als Secret
5. Deploy

---

## Free-Tier Limits (kostenlos auf Dauer)

| Resource | Free Limit | LexRights typisch |
|---|---|---|
| Workers Requests | 100 000 / Tag | <1 000 / Tag bei Launch |
| Worker CPU | 10 ms / Request | ~2-5 ms (statisch) |
| KV Reads | 100 000 / Tag | sehr niedrig |
| KV Writes | 1 000 / Tag | ISR-Revalidation |
| R2 Storage | 10 GB | nicht benötigt initial |
| Pages Builds | 500 / Monat | ~30 / Monat aktiv |
| Bandwidth | unlimited | unlimited |
| Custom Domains | unlimited | 2 (lexrights.com, www) |
| SSL Certs | unlimited free | Universal SSL |

→ **Bleibt Free** für 12+ Monate Betrieb bei normalem Anwalts-Traffic.

---

## DNS-Einrichtung für lexrights.com

**Wenn die Domain bei Cloudflare registriert ist** (was hier der Fall ist):
- Custom Domain Binding über Dashboard erledigt automatisch DNS + SSL
- Kein A/AAAA Record manuell setzen

**Wenn DNS außerhalb Cloudflare läuft:**
```
CNAME  lexrights.com      lexrights.<subdomain>.workers.dev
CNAME  www.lexrights.com  lexrights.<subdomain>.workers.dev
```

---

## Troubleshooting

### Build fails mit "No matching export"
→ `@opennextjs/cloudflare` Version-Mismatch. Update: `npm install @opennextjs/cloudflare@latest`

### Wrangler dev startet nicht
→ Port 8787 belegt. `pkill wrangler` oder anderen Port: `npx wrangler dev --port 8788`

### Worker läuft, aber 500 Error live
→ Logs prüfen: `npm run cf:tail`
→ Häufige Ursache: Fehlende Secret (z.B. RESEND_API_KEY)

### Form-Submission liefert "send_failed"
→ RESEND_API_KEY nicht gesetzt. Bis API-Key da ist läuft `lib/email.ts` im Fallback-Log-Modus (siehe Server-Logs).
