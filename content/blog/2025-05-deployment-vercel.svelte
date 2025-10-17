<script lang="ts">
  export const metadata = {
    layout: 'blog',
    title: 'Deployment auf Vercel: Von `npm run build` zur Live-Site',
    date: '2025-05-22',
    tags: ['deployment', 'vercel', 'ci'],
    topics: ['Deployment'],
    excerpt:
      'Schritt-für-Schritt-Anleitung, wie du dieses Template auf Vercel ausrollst – inklusive CI-Setup und Tipps für Preview-Umgebungen.',
    cover: '/images/cover-vercel.svg'
  };
</script>

<p>
  Vercel ist der natürliche Partner für SvelteKit, weil das Framework vom selben Team entwickelt
  wird. Dieser Artikel zeigt dir, wie du das Template deployest, Preview-Umgebungen einrichtest
  und Continuous Integration mit GitHub Actions kombinierst. Ziel ist, dass du den kompletten
  Prozess automatisierst.
</p>

<h2>Projekt vorbereiten</h2>

<ol>
  <li>
    Stelle sicher, dass dein Repository auf GitHub liegt. Vercel synchronisiert sich per OAuth mit
    deinem Account.
  </li>
  <li>
    Prüfe, dass `siteConfig.url` auf die finale Domain zeigt – sonst generieren RSS und Sitemap
    falsche Links.
  </li>
  <li>
    Führe <code>npm run build</code> lokal aus. So erkennst du Build-Fehler, bevor Vercel sie melden
    muss.
  </li>
</ol>

<h2>Deployment-Schritte</h2>

<pre><code class="language-bash"># Projekt auf Vercel initialisieren
vercel login
vercel link

# Ersten Build im Preview-Modus deployen
vercel --prebuilt
</code></pre>

<p>
  Der Flag <code>--prebuilt</code> nutzt dein lokales <code>npm run build</code>-Ergebnis. Im CI
  kannst du <code>vercel build</code> verwenden, um den Build auf Vercel auszuführen. Standardmäßig
  legt Vercel eine Preview-URL pro Pull Request an – ideal, um Änderungen im Team zu testen.
</p>

<h2>Environment-Variablen</h2>

<p>
  Dieses Template benötigt keine Secrets, aber du kannst in Vercel `Environment Variables`
  hinterlegen (z. B. API-Keys). Lege sie für <em>Production</em>, <em>Preview</em> und
  <em>Development</em> separat an. In SvelteKit greifst du über `env`-Module auf die Werte zu.
</p>

<h2>CI integrieren</h2>

<p>
  Die GitHub-Action (`.github/workflows/ci.yml`) führt Tests und Linting aus. Ergänze einen
  Deployment-Schritt, der nach erfolgreichem Build <code>vercel deploy --prebuilt</code> startet.
  Du kannst auch Preview-Deployments automatisch kommentieren lassen, indem du das
  <code>vercel-action</code>-GitHub-Action verwendest.
</p>

<h2>Monitoring & Rollbacks</h2>

<p>
  Vercel bietet ein Aktivitätslog mit Deployments. Jeder Build erhält einen eindeutigen Hash. Wenn
  etwas schiefgeht, aktiviere die gewünschte Version per „Promote to Production“. Für Logging
  kannst du Vercel Analytics oder externe Tools (Logflare, Sentry) nutzen.
</p>

<h2>Fazit</h2>

<p>
  Deployment sollte kein Stress sein. Mit SvelteKit + Vercel erreichst du wenige Minuten
  Time-to-Live: Push → Tests → Preview → Merge → Produktion. Dokumentiere deinen Prozess in der
  README, damit niemand raten muss, welche Befehle notwendig sind. So schafft ihr ein
  reproduzierbares Setup, das auch neue Teammitglieder schnell verstehen.
</p>
