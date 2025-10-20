import"./Bzak7iHL.js";import{i as H}from"./vaeYXnz6.js";import{h as $,i as J,p as j,f as m,c as d,s as c,r as u,n as k,t as A,a as b,b as V,u as N,F as Q,aj as z,ag as X,g as _,Z as q}from"./CGDq_wfd.js";import{h as g}from"./Dw668-Tr.js";import{p as Z,l as f,b as v}from"./Ci7lTiXK.js";import{s as C}from"./Cgm7OfjV.js";import{r as Y}from"./DdpEupM6.js";import{a as ee}from"./DLdlFW72.js";import{b as ne}from"./CP1QOfo9.js";function te(n,i,a,r,t){var o;$&&J();var e=(o=i.$$slots)==null?void 0:o[a],s=!1;e===!0&&(e=i.children,s=!0),e===void 0||e(n,s?()=>r:r)}function ie(n,i,a,r){var t=n.__style;if($||t!==i){var e=ee(i);(!$||e!==n.getAttribute("style"))&&(e==null?n.removeAttribute("style"):n.style.cssText=e),n.__style=i}return r}var se=m('<article class="prose prose-slate max-w-none lg:prose-lg"><!> <footer class="mt-12 rounded-xl border border-dashed border-muted/30 bg-surface/70 px-6 py-4 text-sm text-muted/80">Dieser Beitrag ist Teil des kommentierten Lernblogs. Vertiefe das Thema in den Docs unter <a class="text-accent" href="/docs">/docs</a> oder erweitere <code>metadata</code> in <code> </code>.</footer></article>');function w(n,i){j(i,!1);let a=Z(i,"metadata",8);H();var r=se(),t=d(r);te(t,i,"default",{});var e=c(t,2),s=c(d(e),5),o=d(s,!0);u(s),k(),u(e),u(r),A(()=>C(o,(Q(a()),N(()=>{var p;return(p=a())==null?void 0:p.title})))),b(n,r),V()}const B={layout:"blog",title:"Hallo SvelteKit: Warum dieses Template existiert",date:"2025-01-10",tags:["sveltekit","lernpfad","setup"],topics:["Frontend","Svelte"],excerpt:"Ein persönlicher Einstieg in dieses Lernprojekt: Warum SvelteKit, welche Architektur dahintersteckt und wie du sofort loslegst.",cover:"/images/cover-hello-svelte.svg"},{layout:hn,title:gn,date:mn,tags:kn,topics:bn,excerpt:fn,cover:vn}=B;var re=m('<p>Willkommen zum ersten Beitrag des Lernblogs! Ich erinnere mich noch lebhaft an die Fragen, die mich als Junior-Entwickler umgetrieben haben: <em>Wie bringe ich Content, Komponenten und Build-Tools unter einen Hut?</em> Warum sollte ich mich für <strong>SvelteKit</strong> entscheiden, wenn doch <strong>Next.js</strong> und <strong>Nuxt</strong> so populär sind? Diese Fragen bilden den Ausgangspunkt für das Template, das du gerade erkundest.</p> <h2 id="was-dich-erwartet">Was dich erwartet<a href="#was-dich-erwartet" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>SvelteKit löst drei typische Probleme gleichzeitig:</p> <ol><li><strong>Routing & Daten:</strong> Dateibasierte Routen plus Load-Funktionen schützen dich vor wildem Boilerplate.</li> <li><strong>Templating & Reaktivität:</strong> Die Svelte-Syntax ist einfach zu lesen – perfekt, wenn du bisher nur HTML/CSS konntest.</li> <li><strong>Progressive Enhancement:</strong> SSR und CSR greifen nahtlos ineinander. Du musst dich nicht entscheiden.</li></ol> <p>In späteren Artikeln schauen wir uns an, wie <code>import.meta.glob</code> die Content-Autodiscovery übernimmt und wie wir daraus Suchindizes generieren. Das ist besonders spannend, weil wir keine Datenbank brauchen. Alles lebt in <code>/content/blog</code>.</p> <h2 id="projektstruktur-verstehen">Projektstruktur verstehen<a href="#projektstruktur-verstehen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Ein wichtiger Baustein ist das Zusammenspiel aus Layout, Komponenten und Daten:</p> <pre class="language-text"><!></pre> <p>Stell dir den Content-Indexer wie eine Mini-Datenbank im Dateisystem vor. Jeder Markdown- oder Svelte-Post liefert Metadaten (<code>metadata</code>), die wir zu einem strukturierten <code>BlogPost</code> zusammenziehen. Daraus entstehen Filter, Suche und Feeds.</p> <h2 id="direkt-loslegen">Direkt loslegen<a href="#direkt-loslegen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ol><li><code>npm install</code> installieren alle Abhängigkeiten, inklusive <strong>Tailwind</strong> und <strong>Fuse.js</strong>.</li> <li><code>npm run dev</code> startet den lokalen Server. Du erreichst das Dashboard unter <code>http://localhost:5173</code>.</li> <li>Öffne <code>/docs/01-uebersicht</code>, um den Lernpfad zu lesen.</li></ol> <h2 id="warum-stark-kommentiert">Warum stark kommentiert?<a href="#warum-stark-kommentiert" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Wir verfolgen bewusst einen „Lehrmodus“. Jede Datei startet mit einem Header-Kommentar, Kernfunktionen besitzen TSDoc-Signaturen und Inline-Hinweise erklären Entscheidungen. So kannst du Änderungen nachvollziehen und gleichzeitig Best Practices einsammeln. Dieser Beitrag ist der Startpunkt: Du weißt jetzt, warum es das Template gibt und was dich in den nächsten Kapiteln erwartet.</p>',1);function ae(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>B,{children:(r,t)=>{var e=re(),s=c(z(e),14),o=d(s);g(o,()=>`<code class="language-text">src/
├─ routes/        → Seiten &amp; Layouts
├─ lib/components → UI-Bausteine
└─ lib/content    → Indexing &amp; Hashtags</code>`),u(s),k(10),b(r,e)},$$slots:{default:!0}}))}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:ae,metadata:B},Symbol.toStringTag,{value:"Module"})),E={layout:"blog",title:"Responsives Design mit Tailwind und Container-Queries",date:"2025-01-22",tags:["responsive","tailwindcss","container"],topics:["CSS","Responsive"],excerpt:"Ein praxisnaher Leitfaden, wie du fluides Typography, Container-Queries und moderne Tailwind-Utilities kombinierst.",cover:"/images/cover-responsive.svg"},{layout:wn,title:zn,date:Sn,tags:Dn,topics:yn,excerpt:Tn,cover:xn}=E;var le=m(`<p>In Workshops taucht ständig die Frage auf, ob Tailwind nicht „zu starr“ für echtes Responsive Design sei. Dieser Beitrag zeigt das Gegenteil: Wir kombinieren <strong>Fluid Typography</strong>, <strong>Container-Queries</strong> und Utility-First-Klassen, um Layouts wirklich adaptiv zu bauen. Das Wissen brauchst du später, wenn du die Komponenten dieses Templates erweitern möchtest.</p> <h2 id="fluid-typography">Fluid Typography<a href="#fluid-typography" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die globale CSS-Datei definiert für <code>&lt;html&gt;</code> eine dynamische Schriftgröße:</p> <pre class="language-css"><!></pre> <p><code>clamp()</code> verbindet eine Minimal-, eine bevorzugte und eine Maximalgröße. Dadurch wächst der Text fließend mit Viewport-Breite – ganz ohne Medienabfragen. Du kannst denselben Ansatz für Abstände verwenden, z. B. <code>padding: clamp(1rem, 2vw, 2.5rem);</code>.</p> <h2 id="container-queries">Container-Queries<a href="#container-queries" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Tailwind bringt seit Version 3.2 das Plugin <code>@tailwindcss/container-queries</code> mit. Damit bekommst du Utilities wie <code>@container</code> und <code>@lg:</code>, die sich auf Containerbreiten statt auf Viewports beziehen. In <code>ContentCard.svelte</code> könntest du damit experimentieren:</p> <pre class="language-svelte"><!></pre> <p>Die Vorteile spürst du besonders bei verschachtelten Layouts, in denen Komponenten in unterschiedlichen Kontexten erscheinen. Du musst nicht mehr raten, wie groß der gesamte Viewport ist, sondern reagierst granular auf den Platz der Komponente.</p> <h2 id="interaktives-beispiel">Interaktives Beispiel<a href="#interaktives-beispiel" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <div class="my-6 rounded-xl border border-muted/30 bg-surface/80 p-4"><label class="flex items-center gap-3 text-sm text-muted/80"> <input type="range" min="240" max="860"/></label> <div class="@container mt-4 rounded-lg bg-accent/10 p-4 transition-all"><p class="@md:text-lg @xl:text-xl text-sm leading-relaxed text-emphasis">Beobachte, wie sich die Schriftgröße und die Abstände verändern, sobald die Container-Breite
      bestimmte Schwellen übersteigt. Das ist der Kern von komponentengetriebenem Responsive Design.</p></div></div> <h2 id="takeaways">Takeaways<a href="#takeaways" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ol><li><strong>Fluid Typography</strong> reduziert harte Breakpoints.</li> <li><strong>Container-Queries</strong> machen Komponenten resilient gegenüber Kontextwechseln.</li> <li><strong>Tailwind Utilities</strong> generieren den CSS-Code für dich – du musst nur das Konzept verstehen.</li></ol> <p>Experimentiere im Projekt: Passe das Layout der Blog-Liste an und dokumentiere deine Schritte. Genau dafür ist dieses Template gedacht. Es hilft dir, moderne CSS-Techniken sicher anzuwenden.</p>`,1);function ce(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);let r=q(320);w(n,v(()=>a,()=>E,{children:(t,e)=>{var s=le(),o=c(z(s),6),p=d(o);g(p,()=>`<code class="language-css"><span class="token selector">html</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>15px<span class="token punctuation">,</span> 0.95vw + 0.5rem<span class="token punctuation">,</span> 18px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),u(o);var l=c(o,8),h=d(l);g(h,()=>`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>@container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>@lg:text-lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Dieser Text wird größer, sobald die Karte breiter als 48rem wird.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`),u(l);var D=c(l,6),S=d(D),y=d(S),T=c(y);Y(T),u(S);var G=c(S,2);u(D),k(6),A(()=>{C(y,`Container-Breite (${_(r)??""}px) `),ie(G,`width: ${_(r)}px`)}),ne(T,()=>_(r),U=>X(r,U)),b(t,s)},$$slots:{default:!0}}))}const de=Object.freeze(Object.defineProperty({__proto__:null,default:ce,metadata:E},Symbol.toStringTag,{value:"Module"})),M={layout:"blog",title:"Content-Architektur mit import.meta.glob",date:"2025-02-18",tags:["content","glob","metadata"],topics:["Content-Architektur"],excerpt:"Wie der Content-Indexer funktioniert, welche Datenstruktur wir zurückgeben und warum wir mehrere Glob-Maps nutzen.",cover:"/images/cover-content.svg"},{layout:_n,title:$n,date:An,tags:Cn,topics:Bn,excerpt:En,cover:Mn}=M;var ue=m(`<p>Die Content-Architektur dieses Templates soll dich befähigen, neue Formate hinzuzufügen, ohne Build-Skripte anfassen zu müssen. <strong><code>import.meta.glob</code></strong> ist dabei der heimliche Star. Anstatt einzelne Dateien zu importieren, scannen wir das gesamte Verzeichnis <code>/content/blog</code> und erzeugen daraus eine strukturierte Sammlung.</p> <h2 id="drei-glob-aufrufe-drei-aufgaben">Drei Glob-Aufrufe, drei Aufgaben<a href="#drei-glob-aufrufe-drei-aufgaben" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>src/lib/content/index.ts</code> enthält drei Maps:</p> <ol><li><code>contentModules</code>: Liefert für jede Datei das Svelte/MDsveX-Modul inkl. <code>metadata</code>.</li> <li><code>rawMarkdownMap</code>: liefert Markdown/MDX als Rohstring.</li> <li><code>rawSvelteMap</code>: greift den Quelltext von <code>.svelte</code>-Posts ab.</li></ol> <h3 id="warum-zwei-raw-maps">Warum zwei Raw-Maps?<a href="#warum-zwei-raw-maps" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h3> <p>Fuse.js benötigt Text, um Suchtreffer zu bewerten. MDsveX stellt diesen Text nicht automatisch bereit. Mit <code>as: 'raw'</code> erhalten wir den originalen Dateiinhalt und können daraus Auszüge oder Auto-Hashtags generieren. Sogar Svelte-Dateien lassen sich so analysieren, solange keine externen Imports fehlen.</p> <h2 id="datenmodell">Datenmodell<a href="#datenmodell" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>createPost()</code> konvertiert Rohdaten in einen <code>BlogPost</code>:</p> <ul><li><code>slug</code>: Dateipfad ohne Endung.</li> <li><code>excerpt</code>: Aus Frontmatter oder generierter Auszug.</li> <li><code>tags</code>: Normalisierte Hashtags (kleingeschrieben).</li> <li><code>topics</code>: Klartext-Kategorien.</li> <li><code>autoHashtags</code>: Ergebnis der NLP-Heuristik aus <code>hashtag.ts</code>.</li> <li><code>component</code>: Die eigentliche Svelte/MDsveX-Komponente.</li></ul> <p>Der fertige Index besteht aus <code>posts</code>, <code>hashtags</code>, <code>topics</code> und <code>searchDocuments</code>. Dank Caching (<code>cache</code> Variable) muss die Berechnung nur einmal pro Build ausgeführt werden.</p> <h2 id="fehlerhandling">Fehlerhandling<a href="#fehlerhandling" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Fehlt das Frontmatter, werfen wir einen Fehler:</p> <pre class="language-ts"><!></pre> <p>So fällt es sofort auf, wenn jemand eine Datei vergisst zu annotieren. Ergänze im Team ggf. einen ESLint- oder Git-Hook, der Content-Dateien prüft.</p> <h2 id="weiterführende-ideen">Weiterführende Ideen<a href="#weiterf%C3%BChrende-ideen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ul><li>Ergänze zusätzliche Felder wie <code>readingTime</code> oder <code>draft</code>.</li> <li>Implementiere Internationalisierung, indem du <code>locale</code> ins Frontmatter aufnimmst und beim Indexieren filterst.</li> <li>Lagere die Normalisierungsschritte (<code>toSlug</code>, <code>createPost</code>) in eigene Dateien aus, wenn die Logik wächst.</li></ul> <p>Sobald du diese Architektur verinnerlicht hast, kannst du nahezu beliebige Inhaltstypen integrieren – von Rezepten bis zu Release Notes. Wichtig ist, immer klare Datenmodelle zu definieren, damit Komponenten und Tests stabil bleiben.</p>`,1);function pe(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>M,{children:(r,t)=>{var e=ue(),s=c(z(e),24),o=d(s);g(o,()=>`<code class="language-ts"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>metadata<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Beitrag </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> verfügt über kein Frontmatter.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),u(s),k(8),b(r,e)},$$slots:{default:!0}}))}const he=Object.freeze(Object.defineProperty({__proto__:null,default:pe,metadata:M},Symbol.toStringTag,{value:"Module"})),P={layout:"blog",title:"Automatisches Theming mit System-Respekt",date:"2025-02-02",tags:["theming","darkmode","accessibility"],topics:["Designsysteme","Dark-Mode"],excerpt:"Wie das Theme-Toggle funktioniert, welche Rolle CSS-Variablen spielen und wie du `prefers-color-scheme`, `prefers-contrast` und `prefers-reduced-motion` kombinierst.",cover:"/images/cover-darkmode.svg"},{layout:Pn,title:Fn,date:Kn,tags:Ln,topics:In,excerpt:Wn,cover:Rn}=P;var ge=m(`<p>Dark Mode ist kein nettes Extra mehr, sondern Erwartung. Gleichzeitig sollten wir <strong>Systempräferenzen respektieren</strong> und nicht einfach den Nutzer zwingen, manuell einen Schalter zu suchen. Dieses Template verbindet daher drei Ebenen: automatische Erkennung, manueller Toggle und Metadaten-Update.</p> <h2 id="css-variablen-als-herzstück">CSS-Variablen als Herzstück<a href="#css-variablen-als-herzst%C3%BCck" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>In <code>src/styles/globals.css</code> findest du Variablen wie <code>--color-surface</code> oder <code>--color-accent</code>. Tailwind greift darauf über <code>rgb(var(--color-*) / &lt;alpha&gt;)</code> zu. Das macht zwei Dinge möglich:</p> <ol><li><strong>Theme-Switch</strong> mit CSS allein – die Variablen werden per <code>[data-theme="dark"]</code> überschrieben.</li> <li><strong>Feinsteuerung</strong> über Tailwind – du kannst in Komponenten <code>bg-surface/80</code> nutzen, ohne zu wissen, welche Farbe gerade aktiv ist.</li></ol> <h2 id="scriptlogik-des-toggles">Scriptlogik des Toggles<a href="#scriptlogik-des-toggles" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>ThemeToggle.svelte</code> arbeitet mit einem <code>writable</code>-Store. Wichtige Schritte:</p> <ul><li>Beim <code>onMount</code> wird der zuletzt gewählte Wert aus <code>localStorage</code> gelesen.</li> <li><code>applyTheme()</code> setzt <code>document.documentElement.dataset.theme</code>.</li> <li>Die Funktion aktualisiert zusätzlich <code>&lt;meta name="theme-color"&gt;</code>, damit Browser-Chrome zum Theme passt.</li> <li>Ein <code>matchMedia('(prefers-contrast: more)')</code> überwacht Kontraständerungen und setzt <code>data-contrast</code>.</li></ul> <p>Schau dir besonders an, wie wir das <code>Theme</code>-Label für Screenreader aktualisieren. <code>aria-live="polite"</code> informiert assistive Technologien über die Änderung, ohne den Fokus zu klauen.</p> <h2 id="bewegungspräferenzen">Bewegungspräferenzen<a href="#bewegungspr%C3%A4ferenzen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Ein gern übersehener Aspekt ist <code>prefers-reduced-motion</code>. Im globalen CSS brechen wir Animationen ab, wenn der Nutzer reduzierte Bewegung wünscht:</p> <pre class="language-css"><!></pre> <p>Das wirkt drastisch, verhindert aber Trigger bei vestibulären Einschränkungen. Wenn du Animationen brauchst, kannst du für einzelne Elemente Ausnahmen definieren – dokumentiere das dann unbedingt.</p> <h2 id="trade-offs">Trade-offs<a href="#trade-offs" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ul><li>Der Toggle setzt <code>window.scrollTo(&#123; behavior: 'smooth' &#125;)</code>, wodurch <code>prefers-reduced-motion</code> greifen sollte. Prüfe das in deinem Browser mit aktivierter Einstellung.</li> <li><code>localStorage</code> existiert nur im Browser. Deshalb läuft die Initialisierung in <code>onMount</code>.</li> <li><code>themeColors</code> definieren wir als konstantes Mapping in TypeScript. Wenn du neue Themes hinzufügst, vergiss nicht, die Meta-Farben anzupassen.</li></ul> <p>Damit hast du den kompletten Theming-Stack verstanden. Spiel mit zusätzlichen Themes, etwa „Sepia“ oder „High-Contrast“, und erweitere die UI. Dokumentiere deine Änderungen im README, damit das Team nachvollziehen kann, wie du Accessibility berücksichtigt hast.</p>`,1);function me(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>P,{children:(r,t)=>{var e=ge(),s=c(z(e),20),o=d(s);g(o,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-reduced-motion</span><span class="token punctuation">:</span> reduce<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">*</span> <span class="token punctuation">&#123;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.01ms <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.01ms <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),u(s),k(8),b(r,e)},$$slots:{default:!0}}))}const ke=Object.freeze(Object.defineProperty({__proto__:null,default:me,metadata:P},Symbol.toStringTag,{value:"Module"})),be=`a
aber
aberhalb
alle
allem
allen
aller
alles
als
am
an
ander
andere
anderem
anderen
anderer
anderes
andern
andernfalls
anders
auch
auf
aus
außer
außerdem
bei
beide
beiden
beim
bin
bis
bist
da
dadurch
dafür
dagegen
dahin
daher
damit
danach
daneben
dann
darauf
darin
darüber
darum
darunter
das
dass
dein
deine
deinem
deinen
deiner
deines
dem
den
denn
der
deren
derer
des
dessen
deshalb
die
dies
diese
diesem
diesen
dieser
dieses
dir
doch
dort
du
durch
ein
eine
einem
einen
einer
eines
einige
einigem
einigen
einiger
einiges
einmal
er
es
etwas
euch
euer
eure
eurem
euren
eurer
eures
für
gegen
gegenüber
hab
haben
hat
hatte
hätten
hin
hinter
ich
ihr
ihm
ihn
ihnen
ihr
ihre
ihrem
ihren
ihrer
ihres
im
in
ins
ist
ja
jed
jede
jedem
jeden
jeder
jedes
jener
jenes
jetzt
kann
kannst
kein
keine
keinem
keinen
keiner
keines
können
könnt
machen
man
manche
manchem
manchen
mancher
manches
mehr
mein
meine
meinem
meinen
meiner
meines
mit
muss
müssen
musst
nach
nachdem
neben
nein
nicht
noch
nun
nur
ob
oder
ohne
sehr
sein
seine
seinem
seinen
seiner
seines
selbst
sich
sie
sind
so
solche
solchem
solchen
solcher
solches
soll
sollte
sondern
sonst
über
um
und
uns
unser
unsere
unserem
unseren
unserer
unseres
unter
vom
von
vor
während
war
wäre
waren
warst
was
weg
weil
weiter
welche
welchem
welchen
welcher
welches
wenn
wer
werde
werden
werdet
weshalb
wie
wieder
will
wollen
worden
wurde
wurden
wurdet
zu
zum
zur
zwischen
`,fe=new Set(be.split(`
`).map(n=>n.trim().toLowerCase()).filter(Boolean)),ve=/[^a-z0-9äöüß\-]/gi,we=3;function ze(n){return n.replace(/^#+/,"").replace(ve,"").toLowerCase()}function O(n,i={}){const{max:a=5,minOccurrences:r=2,whitelist:t=[]}=i,e=n.toLowerCase().split(/\s+/).map(l=>ze(l)).filter(l=>l.length>=we&&(!fe.has(l)||t.includes(l))),s=new Map;for(const l of e)s.set(l,(s.get(l)??0)+1);const p=Array.from(s.entries()).filter(([l,h])=>h>=r||t.includes(l)).sort((l,h)=>h[1]===l[1]?l[0].localeCompare(h[0],"de"):h[1]-l[1]).map(([l])=>l).slice(0,a);for(const l of t)p.includes(l)||p.push(l);return p}const F={layout:"blog",title:"Auto-Hashtags: Eine kleine NLP-Übung",date:"2025-03-05",tags:["hashtags","nlp","heuristik"],topics:["NLP","Metadaten"],excerpt:"Schritt-für-Schritt-Erklärung der Heuristik in `extractHashtags`, inklusive Tipps für Erweiterungen.",cover:"/images/cover-hashtags.svg"},{layout:Hn,title:jn,date:Vn,tags:Nn,topics:On,excerpt:Gn,cover:Un}=F;var Se=m('<p>Automatisierte Hashtags wirken wie Magie, sind aber in Wahrheit eine Abfolge einfacher Schritte. In <code>hashtag.ts</code> zeige ich dir eine <strong>Heuristik</strong>, die du an deine Bedürfnisse anpassen kannst. Lass uns die Bestandteile durchgehen.</p> <h2 id="stopwort-filter">Stopwort-Filter<a href="#stopwort-filter" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die Datei <code>stopwords.de.txt</code> enthält rund 120 deutsche Stoppwörter. Beim Extrahieren spalten wir den Text in Tokens (<code>split(/\\s+/)</code>) und filtern Wörter, die entweder zu kurz sind (<code>MIN_TOKEN_LENGTH</code>) oder in der Stopwortliste auftauchen. Eine optionale <code>whitelist</code> erlaubt Ausnahmen – praktisch für Produktnamen.</p> <h2 id="normalisierung">Normalisierung<a href="#normalisierung" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>normalizeHashtag</code> entfernt Sonderzeichen und wandelt alles in Kleinbuchstaben um. Dadurch führt „Dark-Mode“, „darkmode“ und „#DarkMode“ zum selben Token. Ohne diese Normalisierung würdest du doppelte Hashtags riskieren.</p> <h2 id="frequenzanalyse">Frequenzanalyse<a href="#frequenzanalyse" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die Token werden in einer <code>Map</code> gezählt. Danach sortieren wir absteigend nach Häufigkeit, mit alphabetischem Tie-Break:</p> <pre class="language-ts"><!></pre> <p><code>minOccurrences</code> verhindert, dass einmalig erwähnte Wörter im Ranking auftauchen. Für kurze Artikel kannst du den Wert reduzieren.</p> <h2 id="demo">Demo<a href="#demo" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <div class="rounded-lg border border-muted/30 bg-surface/70 p-4 text-sm"><p class="font-semibold text-emphasis">Beispiel: Analyse eines Texts</p> <pre class="mt-2 text-xs text-muted/80"></pre> <p class="mt-2 text-accent"> </p></div> <h2 id="grenzen--ausblick">Grenzen & Ausblick<a href="#grenzen--ausblick" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ul><li><strong>Sprachen</strong>: Die Stopwortliste ist deutsch. Für englische Artikel brauchst du eine zweite Datei.</li> <li><strong>Morphologie</strong>: Worte wie „komponieren“ und „Komponenten“ sind verwandt, werden aber separat gezählt. Für bessere Ergebnisse könntest du einen Stemmer integrieren.</li> <li><strong>Semantik</strong>: Die Heuristik versteht keine Synonyme. Wenn du echte Themenklassifikation willst, probiere TF-IDF oder embeddings.</li></ul> <p>Trotz dieser Grenzen reicht die Heuristik für viele Content-Projekte. Wichtig ist, dass du deine Annahmen dokumentierst. Schreibe in der README, warum du dich für dieses Verfahren entschieden hast – so können zukünftige Teammitglieder auf deiner Arbeit aufbauen.</p>',1);function De(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);j(i,!1);const t=O(`SvelteKit kombiniert File-based Routing, Server Rendering und progressive Enhancement. 
  Die reaktive Syntax vereinfacht UI-Entwicklung, während Vite als Build-Tool für schnelle HMR sorgt.`,{max:5});H(),w(n,v(()=>a,()=>F,{children:(e,s)=>{var o=Se(),p=c(z(o),14),l=d(p);g(l,()=>`<code class="language-ts"><span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>counts<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>token<span class="token punctuation">,</span> occurrences<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> occurrences <span class="token operator">>=</span> minOccurrences <span class="token operator">||</span> whitelist<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">?</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'de'</span><span class="token punctuation">)</span> <span class="token operator">:</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`),u(p);var h=c(p,6),D=c(d(h),2);D.textContent=`SvelteKit kombiniert File-based Routing, Server Rendering und progressive Enhancement. 
  Die reaktive Syntax vereinfacht UI-Entwicklung, während Vite als Build-Tool für schnelle HMR sorgt.`;var S=c(D,2),y=d(S);u(S),u(h),k(6),A(T=>C(y,`Erkannte Hashtags: ${T??""}`),[()=>N(()=>t.join(", "))]),b(e,o)},$$slots:{default:!0}})),V()}const ye=Object.freeze(Object.defineProperty({__proto__:null,default:De,metadata:F},Symbol.toStringTag,{value:"Module"})),K={layout:"blog",title:"Performance-Tuning: Lighthouse-ready mit SvelteKit",date:"2025-03-18",tags:["performance","lighthouse","caching"],topics:["Leistung"],excerpt:"Konkrete Maßnahmen, wie du dieses Template für schnelle Ladezeiten optimierst – inklusive Tipps zu Prerendering, Caching und Critical CSS.",cover:"/images/cover-performance.svg"},{layout:Jn,title:Qn,date:Xn,tags:qn,topics:Zn,excerpt:Yn,cover:et}=K;var Te=m(`<p>Performance ist kein „später mal“-Thema. Je früher du optimierst, desto günstiger bleiben die Anpassungen. SvelteKit hilft bereits durch SSR und HMR, doch ein paar Stellschrauben solltest du dir genauer ansehen.</p> <h2 id="prerendering--cdn">Prerendering & CDN<a href="#prerendering--cdn" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Das Template setzt <code>export const prerender = true;</code> im Root-Layout. Dadurch rendert SvelteKit alle Seiten statisch. Auf Vercel kombinierst du das mit Edge-Caching:</p> <pre class="language-bash"><!></pre> <p>Die vorbereiteten HTML-Dateien liegen im CDN, während Client-Side-Navigation weiterhin funktioniert. Wenn du dynamische Inhalte brauchst, entferne <code>prerender</code> nur dort, wo du wirklich SSR benötigst.</p> <h2 id="assets-optimieren">Assets optimieren<a href="#assets-optimieren" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ul><li>Lege Grafiken im Ordner <code>/static/images</code> ab. Vercel serviert sie unverändert.</li> <li>Verwende <code>width</code>/<code>height</code> Attribute bei <code>&lt;img&gt;</code>, damit der Browser Layout-Shifts vermeidet.</li> <li>Für <code>cover</code>-Bilder kannst du SVGs nutzen, die sich verlustfrei skalieren und minimal groß sind.</li></ul> <h2 id="critical-css">Critical CSS<a href="#critical-css" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Tailwind generiert viele Klassen, aber Vite entfernt ungenutzte Utilities durch Tree Shaking. Dennoch solltest du:</p> <ol><li>Keine wilden <code>w-[123px]</code>-Klassen generieren, wenn du sie nicht brauchst.</li> <li>Mit <code>@apply</code> sparsam umgehen, um die Stylesheet-Größe nicht explodieren zu lassen.</li></ol> <h2 id="javascript-reduzieren">JavaScript reduzieren<a href="#javascript-reduzieren" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Ein häufiger Fehler ist, jede kleinste Interaktion in ein Svelte-Component zu packen. Nutze <code>progressive enhancement</code>: Formulare können immer noch <code>&lt;form&gt;</code>-Submit benutzen, bevor du sie mit JS veredelst. In diesem Template bleibt die Suche komplett clientseitig, aber das Filtering im Blog läuft ohne zusätzliche Netzwerk-Calls.</p> <h2 id="messung">Messung<a href="#messung" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Starte Lighthouse im Chrome DevTools oder kombiniere bei Bedarf Playwright mit <code>axe-playwright</code>, wenn du automatisierte Checks ergänzen möchtest. Achte auf:</p> <ul><li><strong>Largest Contentful Paint</strong>: Die Hero-Sektion wird statisch ausgeliefert, also schnell.</li> <li><strong>Cumulative Layout Shift</strong>: Dank definierter Bildgrößen bleibt der Wert niedrig.</li> <li><strong>Total Blocking Time</strong>: Gering, weil wir auf schwere JS-Bundles verzichten.</li></ul> <h2 id="ausblick">Ausblick<a href="#ausblick" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Wenn die Seite wächst, denk über Code-Splitting und Lazy-Loading für seltene Komponenten nach. SvelteKit unterstützt <code>await import('./HeavyComponent.svelte')</code> out of the box. Dokumentiere in deinem Repo, welche Performance-Budgets ihr habt – nur so bleibt Performance-Teamaufgabe statt Einzelaktion.</p>`,1);function xe(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>K,{children:(r,t)=>{var e=Te(),s=c(z(e),6),o=d(s);g(o,()=>`<code class="language-bash"><span class="token function">npm</span> run build
vercel deploy <span class="token parameter variable">--prebuilt</span></code>`),u(s),k(26),b(r,e)},$$slots:{default:!0}}))}const _e=Object.freeze(Object.defineProperty({__proto__:null,default:xe,metadata:K},Symbol.toStringTag,{value:"Module"})),L={layout:"blog",title:"SEO-Basics für SvelteKit Blogs",date:"2025-04-04",tags:["seo","sitemap","metadata"],topics:["SEO"],excerpt:"Meta-Tags, OpenGraph, JSON-LD und technische Basics: Alles, was du brauchst, damit Suchmaschinen dein SvelteKit-Blog lieben.",cover:"/images/cover-seo.svg"},{layout:nt,title:tt,date:it,tags:st,topics:rt,excerpt:at,cover:ot}=L;var $e=m('<p>Suchmaschinenoptimierung wirkt mystisch, doch 80 % bestehen aus sauberer Struktur. Dieses Template liefert die technischen Grundlagen. Wenn du die Mechanismen verstehst, kannst du später auf Content-Strategie fokussieren.</p> <h2 id="meta-tags--open-graph">Meta-Tags & Open Graph<a href="#meta-tags--open-graph" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>+layout.svelte</code> setzt Standard-Metadaten:</p> <ul><li><code>&lt;title&gt;</code> und <code>&lt;meta name="description"&gt;</code></li> <li><code>og:title</code>, <code>og:description</code>, <code>og:image</code></li> <li>Twitter Cards</li></ul> <p>Unterseiten können via <code>load</code> (oder <code>+page.ts</code>) eigene Werte zurückgeben. Im Blogpost-Loader überschreiben wir <code>seo.title</code>, <code>seo.description</code> und <code>seo.ogImage</code>. Damit erscheinen einzelne Artikel mit ihrem Cover in Social Previews.</p> <h2 id="json-ld">JSON-LD<a href="#json-ld" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Zwei JSON-LD-Snippets sind eingebaut:</p> <ol><li><code>Blog</code>-Schema im Root-Layout.</li> <li><code>BlogPosting</code> im Einzelartikel (<code>[slug]</code>).</li></ol> <p>Beispiel:</p> <pre class="language-json"><!></pre> <p>Über die <code>keywords</code> informierst du Suchmaschinen über relevante Begriffe. Aktualisiere die Werte, sobald du neue Tags einführst.</p> <h2 id="sitemap--rss">Sitemap & RSS<a href="#sitemap--rss" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die Routen <code>/sitemap.xml</code> und <code>/rss.xml</code> generieren Feeds dynamisch aus dem Content-Index. Durch <code>prerender</code> landen sie statisch im Build. Kontrolliere beide Dateien nach Deployment, um sicherzustellen, dass die Domain (<code>siteConfig.url</code>) stimmt.</p> <h2 id="robots--canonical">Robots & Canonical<a href="#robots--canonical" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Ein <code>robots.txt</code> ist optional, aber empfehlenswert. Du kannst eine statische Datei in <code>/static</code> ablegen. Canonical-Links lassen sich pro Seite via <code>&lt;link rel="canonical"&gt;</code> ergänzen, falls du Duplicate-Content befürchtest.</p> <h2 id="content-qualität">Content-Qualität<a href="#content-qualit%C3%A4t" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Technik ist nur die halbe Miete. Erstelle Inhalte mit klarem Fokus:</p> <ul><li>Eine H1 pro Seite.</li> <li>Strukturierte Zwischenüberschriften (H2/H3).</li> <li>Ausreichende Textlänge (mindestens 200 Worte).</li> <li>Sinnvolle interne Links (z. B. auf <code>/docs</code>).</li></ul> <p>Kombinierst du diese Grundlagen mit sauberem Deployment, erreichst du solide SEO-Ergebnisse ohne Black-Hat-Tricks. Dokumentiere Änderungen im README, damit Teammitglieder wissen, welche SEO-Annahmen ihr trefft.</p>',1);function Ae(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>L,{children:(r,t)=>{var e=$e(),s=c(z(e),18),o=d(s);g(o,()=>`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"@context"</span><span class="token operator">:</span> <span class="token string">"https://schema.org"</span><span class="token punctuation">,</span>
  <span class="token property">"@type"</span><span class="token operator">:</span> <span class="token string">"BlogPosting"</span><span class="token punctuation">,</span>
  <span class="token property">"headline"</span><span class="token operator">:</span> <span class="token string">"SEO-Basics für SvelteKit Blogs"</span><span class="token punctuation">,</span>
  <span class="token property">"datePublished"</span><span class="token operator">:</span> <span class="token string">"2025-04-04"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token string">"seo,sveltekit,sitemap"</span>
<span class="token punctuation">&#125;</span></code>`),u(s),k(18),b(r,e)},$$slots:{default:!0}}))}const Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Ae,metadata:L},Symbol.toStringTag,{value:"Module"})),I={layout:"blog",title:"UX im Web: Kleine Details, große Wirkung",date:"2025-04-19",tags:["ux","microcopy","feedback"],topics:["UX-Optimierung"],excerpt:"Warum Micro-Interactions, Fokus-States und klare Microcopy die Benutzererfahrung deines Blogs verbessern.",cover:"/images/cover-ux.svg"},{layout:lt,title:ct,date:dt,tags:ut,topics:pt,excerpt:ht,cover:gt}=I;var Be=m('<p>Benutzererfahrung ist das Ergebnis vieler kleiner Entscheidungen. Dieses Template versucht, UX-Prinzipien in Code zu übersetzen – vom Fokus-State über Microcopy bis hin zu hilfreicher Empty-State-Kommunikation.</p> <h2 id="fokus-sichtbar-machen">Fokus sichtbar machen<a href="#fokus-sichtbar-machen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Standard-Fokusrahmen werden oft entfernt, weil sie „nicht schön“ sind. Wir gehen den umgekehrten Weg: <code>.focus-ring</code> erstellt einen gut sichtbaren Outline:</p> <pre class="language-css"><!></pre> <p>Komponenten wie <code>ThemeToggle</code> und <code>ContentCard</code> nutzen diese Klasse. Das Ergebnis: Tastaturnutzer:innen finden sich zurecht, ohne ein zusätzliches A11y-Toolkit zu benötigen.</p> <h2 id="microcopy--feedback">Microcopy & Feedback<a href="#microcopy--feedback" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Leere Suchergebnisse? Statt einer blanken Fläche zeigt <code>SearchResults.svelte</code> einen Hinweistext. Dieser Text motiviert, andere Begriffe zu testen. Solche Messages verbessern die wahrgenommene Qualität enorm, weil sie Empathie zeigen.</p> <h3 id="beispiel-für-gutes-feedback">Beispiel für gutes Feedback<a href="#beispiel-f%C3%BCr-gutes-feedback" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h3> <pre class="language-svelte"><!></pre> <p>Kombiniere das mit Icons oder Illustrationen, wenn du die Gestaltung weiter ausbauen möchtest.</p> <h2 id="navigationskonzept">Navigationskonzept<a href="#navigationskonzept" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ul><li><strong>DesktopNav</strong>: Sidebar mit erklärenden Texten. So verstehen neue Nutzer sofort, welche Sektionen existieren.</li> <li><strong>MobileNav</strong>: Sticky Bottom Bar, die wichtige Ziele per Tap erreichbar macht. Ein <code>ThemeToggle</code> ist integriert, damit Nutzer nicht scrollen müssen.</li></ul> <h2 id="debounce--fehlertoleranz">Debounce & Fehlertoleranz<a href="#debounce--fehlertoleranz" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die Suche nutzt eine 250-ms-Debounce. Dadurch bleibt die UI reaktiv, auch wenn Nutzer schnell tippen. Fuse.js erlaubt leichte Tippfehler – ein wichtiges UX-Detail.</p> <h2 id="fazit">Fazit<a href="#fazit" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>UX entsteht, wenn du an die Reise der Nutzer denkst, nicht nur an technische Anforderungen. Frage dich bei jeder Änderung: „Wie fühlt sich das für jemanden an, der die Seite zum ersten Mal öffnet?“ Die Antworten führen zu besseren Entscheidungen – und genau dabei soll dir dieses Template helfen.</p>',1);function Ee(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>I,{children:(r,t)=>{var e=Be(),s=c(z(e),6),o=d(s);g(o,()=>`<code class="language-css"><span class="token selector">.focus-ring:focus-visible</span> <span class="token punctuation">&#123;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 3px solid <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--color-accent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">outline-offset</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),u(s);var p=c(s,10),l=d(p);g(l,()=>`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> results<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rounded-lg border border-dashed ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Keine Treffer für „<span class="token language-javascript"><span class="token punctuation">&#123;</span>query<span class="token punctuation">&#125;</span></span>“. Versuche andere Schlüsselwörter.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>`),u(p),k(14),b(r,e)},$$slots:{default:!0}}))}const Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ee,metadata:I},Symbol.toStringTag,{value:"Module"})),W={layout:"blog",title:"Barrierefreiheit testen: axe und pa11y im Einsatz",date:"2025-05-07",tags:["a11y","testing","tooling"],topics:["Barrierefreiheit"],excerpt:"Wie du Accessibility-Checks automatisierst und welche manuellen Tests du zusätzlich durchführen solltest.",cover:"/images/cover-a11y.svg"},{layout:mt,title:kt,date:bt,tags:ft,topics:vt,excerpt:wt,cover:zt}=W;var Pe=m('<p>Barrierefreiheit ist kein Häkchen auf einer Liste, sondern ein kontinuierlicher Prozess. Dennoch helfen automatisierte Tools, typische Fehler schnell aufzuspüren. Dieses Template konzentriert sich auf Content und Theming; für automatisierte Accessibility-Checks kannst du bei Bedarf Tools wie <strong>axe</strong> oder <strong>pa11y</strong> ergänzen.</p> <h2 id="axe-im-alltag">Axe im Alltag<a href="#axe-im-alltag" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Nutze die Browser-Erweiterung „axe DevTools“ oder den CLI-Befehl <code>npx axe https://example.com</code>, um Seiten gegen WCAG 2.1 AA zu prüfen. So erkennst du schnell Probleme bei Landmark-Struktur, Kontrast oder ARIA-Attributen. Für wiederkehrende Prüfungen kannst du eine Playwright-Suite mit <code>axe-playwright</code> aufsetzen – installiere dafür <code>@playwright/test</code> und <code>axe-playwright</code> als Dev-Abhängigkeiten und führe Checks im Headless-Browser aus.</p> <h2 id="pa11y-manuell">Pa11y manuell<a href="#pa11y-manuell" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p><code>pa11y</code> lässt sich ebenfalls via CLI starten: <code>npx pa11y http://localhost:5173</code>. Die Auswertung listet Verstöße mit CSS-Selektor und Beschreibung auf. In CI-Pipelines kannst du <code>pa11y-ci</code> mit einer JSON-Konfiguration verwenden, falls du Accessibility automatisiert beobachten möchtest.</p> <h2 id="manuelle-tests">Manuelle Tests<a href="#manuelle-tests" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Automatisierung ersetzt nicht das manuelle Testen. Prüfe zusätzlich:</p> <ul><li><strong>Tastaturnavigation</strong>: Kommst du überall hin, ohne Maus?</li> <li><strong>Screenreader</strong>: Lies zentrale Seiten mit NVDA oder VoiceOver vor.</li> <li><strong>Kontrast</strong>: Teste <code>prefers-contrast: more</code>, um sicherzustellen, dass dein Theme lesbar bleibt.</li></ul> <h2 id="dokumentation">Dokumentation<a href="#dokumentation" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Beschreibe im README, wie du Accessibility testest. Verlinke Checklisten (z. B. WCAG-Quickref) und notiere bekannte Einschränkungen. Wenn du bewusst ein zugelassenes Pattern nutzt (z. B. Disclosure), verweise auf die WAI-ARIA-Authoring Practices.</p> <p>Barrierefreiheit ist Teamarbeit. Automatisierte Checks spüren Regressionen auf, manuelle Tests vermitteln die Perspektive deiner Nutzer:innen. Beides gehört zusammen.</p>',1);function Fe(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>W,{children:(r,t)=>{var e=Pe();k(20),b(r,e)},$$slots:{default:!0}}))}const Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Fe,metadata:W},Symbol.toStringTag,{value:"Module"})),R={layout:"blog",title:"Deployment auf Vercel: Von `npm run build` zur Live-Site",date:"2025-05-22",tags:["deployment","vercel","ci"],topics:["Deployment"],excerpt:"Schritt-für-Schritt-Anleitung, wie du dieses Template auf Vercel ausrollst – inklusive CI-Setup und Tipps für Preview-Umgebungen.",cover:"/images/cover-vercel.svg"},{layout:St,title:Dt,date:yt,tags:Tt,topics:xt,excerpt:_t,cover:$t}=R;var Le=m('<p>Vercel ist der natürliche Partner für SvelteKit, weil das Framework vom selben Team entwickelt wird. Dieser Artikel zeigt dir, wie du das Template deployest, Preview-Umgebungen einrichtest und Continuous Integration mit GitHub Actions kombinierst. Ziel ist, dass du den kompletten Prozess automatisierst.</p> <h2 id="projekt-vorbereiten">Projekt vorbereiten<a href="#projekt-vorbereiten" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <ol><li>Stelle sicher, dass dein Repository auf GitHub liegt. Vercel synchronisiert sich per OAuth mit deinem Account.</li> <li>Prüfe, dass <code>siteConfig.url</code> auf die finale Domain zeigt – sonst generieren RSS und Sitemap falsche Links.</li> <li>Führe <code>npm run build</code> lokal aus. So erkennst du Build-Fehler, bevor Vercel sie melden muss.</li></ol> <h2 id="deployment-schritte">Deployment-Schritte<a href="#deployment-schritte" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <pre class="language-bash"><!></pre> <p>Der Flag <code>--prebuilt</code> nutzt dein lokales <code>npm run build</code>-Ergebnis. Im CI kannst du <code>vercel build</code> verwenden, um den Build auf Vercel auszuführen. Standardmäßig legt Vercel eine Preview-URL pro Pull Request an – ideal, um Änderungen im Team zu testen.</p> <h2 id="environment-variablen">Environment-Variablen<a href="#environment-variablen" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Dieses Template benötigt keine Secrets, aber du kannst in Vercel <code>Environment Variables</code> hinterlegen (z. B. API-Keys). Lege sie für <em>Production</em>, <em>Preview</em> und <em>Development</em> separat an. In SvelteKit greifst du über <code>env</code>-Module auf die Werte zu.</p> <h2 id="ci-integrieren">CI integrieren<a href="#ci-integrieren" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Die GitHub-Action (<code>.github/workflows/ci.yml</code>) führt Checks aus. Ergänze einen Deployment-Schritt, der nach erfolgreichem Build <code>vercel deploy --prebuilt</code> startet. Du kannst auch Preview-Deployments automatisch kommentieren lassen, indem du das <code>vercel-action</code> GitHub-Action verwendest.</p> <h2 id="monitoring--rollbacks">Monitoring & Rollbacks<a href="#monitoring--rollbacks" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Vercel bietet ein Aktivitätslog mit Deployments. Jeder Build erhält einen eindeutigen Hash. Wenn etwas schiefgeht, aktiviere die gewünschte Version per „Promote to Production“. Für Logging kannst du Vercel Analytics oder externe Tools (Logflare, Sentry) nutzen.</p> <h2 id="fazit">Fazit<a href="#fazit" class="heading-anchor" aria-label="Direktlink zu dieser Überschrift" title="Direktlink zu dieser Überschrift">#</a></h2> <p>Deployment sollte kein Stress sein. Mit SvelteKit + Vercel erreichst du wenige Minuten Time-to-Live: Push → Checks → Preview → Merge → Produktion. Dokumentiere deinen Prozess in der README, damit niemand raten muss, welche Befehle notwendig sind. So schafft ihr ein reproduzierbares Setup, das auch neue Teammitglieder schnell verstehen.</p>',1);function Ie(n,i){const a=f(i,["children","$$slots","$$events","$$legacy"]);w(n,v(()=>a,()=>R,{children:(r,t)=>{var e=Le(),s=c(z(e),8),o=d(s);g(o,()=>`<code class="language-bash"><span class="token comment"># Projekt auf Vercel initialisieren</span>
vercel login
vercel <span class="token function">link</span>

<span class="token comment"># Ersten Build im Preview-Modus deployen</span>
vercel <span class="token parameter variable">--prebuilt</span></code>`),u(s),k(18),b(r,e)},$$slots:{default:!0}}))}const We=Object.freeze(Object.defineProperty({__proto__:null,default:Ie,metadata:R},Symbol.toStringTag,{value:"Module"})),Re=`---
layout: blog
title: "Hallo SvelteKit: Warum dieses Template existiert"
date: "2025-01-10"
tags:
  - sveltekit
  - lernpfad
  - setup
topics:
  - Frontend
  - Svelte
excerpt: "Ein persönlicher Einstieg in dieses Lernprojekt: Warum SvelteKit, welche Architektur dahintersteckt und wie du sofort loslegst."
cover: "/images/cover-hello-svelte.svg"
---

Willkommen zum ersten Beitrag des Lernblogs! Ich erinnere mich noch lebhaft an die Fragen, die mich als Junior-Entwickler umgetrieben haben: *Wie bringe ich Content, Komponenten und Build-Tools unter einen Hut?* Warum sollte ich mich für **SvelteKit** entscheiden, wenn doch **Next.js** und **Nuxt** so populär sind? Diese Fragen bilden den Ausgangspunkt für das Template, das du gerade erkundest.

## Was dich erwartet

SvelteKit löst drei typische Probleme gleichzeitig:

1. **Routing & Daten:** Dateibasierte Routen plus Load-Funktionen schützen dich vor wildem Boilerplate.
2. **Templating & Reaktivität:** Die Svelte-Syntax ist einfach zu lesen – perfekt, wenn du bisher nur HTML/CSS konntest.
3. **Progressive Enhancement:** SSR und CSR greifen nahtlos ineinander. Du musst dich nicht entscheiden.

In späteren Artikeln schauen wir uns an, wie \`import.meta.glob\` die Content-Autodiscovery übernimmt und wie wir daraus Suchindizes generieren. Das ist besonders spannend, weil wir keine Datenbank brauchen. Alles lebt in \`/content/blog\`.

## Projektstruktur verstehen

Ein wichtiger Baustein ist das Zusammenspiel aus Layout, Komponenten und Daten:

\`\`\`text
src/
├─ routes/        → Seiten & Layouts
├─ lib/components → UI-Bausteine
└─ lib/content    → Indexing & Hashtags
\`\`\`

Stell dir den Content-Indexer wie eine Mini-Datenbank im Dateisystem vor. Jeder Markdown- oder Svelte-Post liefert Metadaten (\`metadata\`), die wir zu einem strukturierten \`BlogPost\` zusammenziehen. Daraus entstehen Filter, Suche und Feeds.

## Direkt loslegen

1. \`npm install\` installieren alle Abhängigkeiten, inklusive **Tailwind** und **Fuse.js**.
2. \`npm run dev\` startet den lokalen Server. Du erreichst das Dashboard unter \`http://localhost:5173\`.
3. Öffne \`/docs/01-uebersicht\`, um den Lernpfad zu lesen.

## Warum stark kommentiert?

Wir verfolgen bewusst einen „Lehrmodus“. Jede Datei startet mit einem Header-Kommentar, Kernfunktionen besitzen TSDoc-Signaturen und Inline-Hinweise erklären Entscheidungen. So kannst du Änderungen nachvollziehen und gleichzeitig Best Practices einsammeln. Dieser Beitrag ist der Startpunkt: Du weißt jetzt, warum es das Template gibt und was dich in den nächsten Kapiteln erwartet.
`,He=`---
layout: blog
title: "Responsives Design mit Tailwind und Container-Queries"
date: "2025-01-22"
tags:
  - responsive
  - tailwindcss
  - container
topics:
  - CSS
  - Responsive
excerpt: "Ein praxisnaher Leitfaden, wie du fluides Typography, Container-Queries und moderne Tailwind-Utilities kombinierst."
cover: "/images/cover-responsive.svg"
---

<script>
  let containerWidth = 320;
<\/script>

In Workshops taucht ständig die Frage auf, ob Tailwind nicht „zu starr“ für echtes Responsive Design sei. Dieser Beitrag zeigt das Gegenteil: Wir kombinieren **Fluid Typography**, **Container-Queries** und Utility-First-Klassen, um Layouts wirklich adaptiv zu bauen. Das Wissen brauchst du später, wenn du die Komponenten dieses Templates erweitern möchtest.

## Fluid Typography

Die globale CSS-Datei definiert für \`<html>\` eine dynamische Schriftgröße:

\`\`\`css
html {
  font-size: clamp(15px, 0.95vw + 0.5rem, 18px);
}
\`\`\`

\`clamp()\` verbindet eine Minimal-, eine bevorzugte und eine Maximalgröße. Dadurch wächst der Text fließend mit Viewport-Breite – ganz ohne Medienabfragen. Du kannst denselben Ansatz für Abstände verwenden, z. B. \`padding: clamp(1rem, 2vw, 2.5rem);\`.

## Container-Queries

Tailwind bringt seit Version 3.2 das Plugin \`@tailwindcss/container-queries\` mit. Damit bekommst du Utilities wie \`@container\` und \`@lg:\`, die sich auf Containerbreiten statt auf Viewports beziehen. In \`ContentCard.svelte\` könntest du damit experimentieren:

\`\`\`svelte
<div class="@container">
  <p class="@lg:text-lg">
    Dieser Text wird größer, sobald die Karte breiter als 48rem wird.
  </p>
</div>
\`\`\`

Die Vorteile spürst du besonders bei verschachtelten Layouts, in denen Komponenten in unterschiedlichen Kontexten erscheinen. Du musst nicht mehr raten, wie groß der gesamte Viewport ist, sondern reagierst granular auf den Platz der Komponente.

## Interaktives Beispiel

<div class="my-6 rounded-xl border border-muted/30 bg-surface/80 p-4">
  <label class="flex items-center gap-3 text-sm text-muted/80">
    Container-Breite ({containerWidth}px)
    <input type="range" min="240" max="860" bind:value={containerWidth} />
  </label>
  <div
    class="@container mt-4 rounded-lg bg-accent/10 p-4 transition-all"
    style={\`width: \${containerWidth}px\`}
  >
    <p class="@md:text-lg @xl:text-xl text-sm leading-relaxed text-emphasis">
      Beobachte, wie sich die Schriftgröße und die Abstände verändern, sobald die Container-Breite
      bestimmte Schwellen übersteigt. Das ist der Kern von komponentengetriebenem Responsive Design.
    </p>
  </div>
</div>

## Takeaways

1. **Fluid Typography** reduziert harte Breakpoints.
2. **Container-Queries** machen Komponenten resilient gegenüber Kontextwechseln.
3. **Tailwind Utilities** generieren den CSS-Code für dich – du musst nur das Konzept verstehen.

Experimentiere im Projekt: Passe das Layout der Blog-Liste an und dokumentiere deine Schritte. Genau dafür ist dieses Template gedacht. Es hilft dir, moderne CSS-Techniken sicher anzuwenden.
`,je='---\nlayout: blog\ntitle: "Content-Architektur mit import.meta.glob"\ndate: "2025-02-18"\ntags:\n  - content\n  - glob\n  - metadata\ntopics:\n  - Content-Architektur\nexcerpt: "Wie der Content-Indexer funktioniert, welche Datenstruktur wir zurückgeben und warum wir mehrere Glob-Maps nutzen."\ncover: "/images/cover-content.svg"\n---\n\nDie Content-Architektur dieses Templates soll dich befähigen, neue Formate hinzuzufügen, ohne Build-Skripte anfassen zu müssen. **`import.meta.glob`** ist dabei der heimliche Star. Anstatt einzelne Dateien zu importieren, scannen wir das gesamte Verzeichnis `/content/blog` und erzeugen daraus eine strukturierte Sammlung.\n\n## Drei Glob-Aufrufe, drei Aufgaben\n\n`src/lib/content/index.ts` enthält drei Maps:\n\n1. `contentModules`: Liefert für jede Datei das Svelte/MDsveX-Modul inkl. `metadata`.\n2. `rawMarkdownMap`: liefert Markdown/MDX als Rohstring.\n3. `rawSvelteMap`: greift den Quelltext von `.svelte`-Posts ab.\n\n### Warum zwei Raw-Maps?\n\nFuse.js benötigt Text, um Suchtreffer zu bewerten. MDsveX stellt diesen Text nicht automatisch bereit. Mit `as: \'raw\'` erhalten wir den originalen Dateiinhalt und können daraus Auszüge oder Auto-Hashtags generieren. Sogar Svelte-Dateien lassen sich so analysieren, solange keine externen Imports fehlen.\n\n## Datenmodell\n\n`createPost()` konvertiert Rohdaten in einen `BlogPost`:\n\n- `slug`: Dateipfad ohne Endung.\n- `excerpt`: Aus Frontmatter oder generierter Auszug.\n- `tags`: Normalisierte Hashtags (kleingeschrieben).\n- `topics`: Klartext-Kategorien.\n- `autoHashtags`: Ergebnis der NLP-Heuristik aus `hashtag.ts`.\n- `component`: Die eigentliche Svelte/MDsveX-Komponente.\n\nDer fertige Index besteht aus `posts`, `hashtags`, `topics` und `searchDocuments`. Dank Caching (`cache` Variable) muss die Berechnung nur einmal pro Build ausgeführt werden.\n\n## Fehlerhandling\n\nFehlt das Frontmatter, werfen wir einen Fehler:\n\n```ts\nif (!metadata) {\n  throw new Error(`Beitrag ${slug} verfügt über kein Frontmatter.`);\n}\n```\n\nSo fällt es sofort auf, wenn jemand eine Datei vergisst zu annotieren. Ergänze im Team ggf. einen ESLint- oder Git-Hook, der Content-Dateien prüft.\n\n## Weiterführende Ideen\n\n- Ergänze zusätzliche Felder wie `readingTime` oder `draft`.\n- Implementiere Internationalisierung, indem du `locale` ins Frontmatter aufnimmst und beim Indexieren filterst.\n- Lagere die Normalisierungsschritte (`toSlug`, `createPost`) in eigene Dateien aus, wenn die Logik wächst.\n\nSobald du diese Architektur verinnerlicht hast, kannst du nahezu beliebige Inhaltstypen integrieren – von Rezepten bis zu Release Notes. Wichtig ist, immer klare Datenmodelle zu definieren, damit Komponenten und Tests stabil bleiben.\n',Ve=`---
layout: blog
title: "Automatisches Theming mit System-Respekt"
date: "2025-02-02"
tags:
  - theming
  - darkmode
  - accessibility
topics:
  - Designsysteme
  - Dark-Mode
excerpt: "Wie das Theme-Toggle funktioniert, welche Rolle CSS-Variablen spielen und wie du \`prefers-color-scheme\`, \`prefers-contrast\` und \`prefers-reduced-motion\` kombinierst."
cover: "/images/cover-darkmode.svg"
---

Dark Mode ist kein nettes Extra mehr, sondern Erwartung. Gleichzeitig sollten wir **Systempräferenzen respektieren** und nicht einfach den Nutzer zwingen, manuell einen Schalter zu suchen. Dieses Template verbindet daher drei Ebenen: automatische Erkennung, manueller Toggle und Metadaten-Update.

## CSS-Variablen als Herzstück

In \`src/styles/globals.css\` findest du Variablen wie \`--color-surface\` oder \`--color-accent\`. Tailwind greift darauf über \`rgb(var(--color-*) / <alpha>)\` zu. Das macht zwei Dinge möglich:

1. **Theme-Switch** mit CSS allein – die Variablen werden per \`[data-theme="dark"]\` überschrieben.
2. **Feinsteuerung** über Tailwind – du kannst in Komponenten \`bg-surface/80\` nutzen, ohne zu wissen, welche Farbe gerade aktiv ist.

## Scriptlogik des Toggles

\`ThemeToggle.svelte\` arbeitet mit einem \`writable\`-Store. Wichtige Schritte:

- Beim \`onMount\` wird der zuletzt gewählte Wert aus \`localStorage\` gelesen.
- \`applyTheme()\` setzt \`document.documentElement.dataset.theme\`.
- Die Funktion aktualisiert zusätzlich \`<meta name="theme-color">\`, damit Browser-Chrome zum Theme passt.
- Ein \`matchMedia('(prefers-contrast: more)')\` überwacht Kontraständerungen und setzt \`data-contrast\`.

Schau dir besonders an, wie wir das \`Theme\`-Label für Screenreader aktualisieren. \`aria-live="polite"\` informiert assistive Technologien über die Änderung, ohne den Fokus zu klauen.

## Bewegungspräferenzen

Ein gern übersehener Aspekt ist \`prefers-reduced-motion\`. Im globalen CSS brechen wir Animationen ab, wenn der Nutzer reduzierte Bewegung wünscht:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

Das wirkt drastisch, verhindert aber Trigger bei vestibulären Einschränkungen. Wenn du Animationen brauchst, kannst du für einzelne Elemente Ausnahmen definieren – dokumentiere das dann unbedingt.

## Trade-offs

- Der Toggle setzt \`window.scrollTo({ behavior: 'smooth' })\`, wodurch \`prefers-reduced-motion\` greifen sollte. Prüfe das in deinem Browser mit aktivierter Einstellung.
- \`localStorage\` existiert nur im Browser. Deshalb läuft die Initialisierung in \`onMount\`.
- \`themeColors\` definieren wir als konstantes Mapping in TypeScript. Wenn du neue Themes hinzufügst, vergiss nicht, die Meta-Farben anzupassen.

Damit hast du den kompletten Theming-Stack verstanden. Spiel mit zusätzlichen Themes, etwa „Sepia“ oder „High-Contrast“, und erweitere die UI. Dokumentiere deine Änderungen im README, damit das Team nachvollziehen kann, wie du Accessibility berücksichtigt hast.
`,Ne=`---
layout: blog
title: "Auto-Hashtags: Eine kleine NLP-Übung"
date: "2025-03-05"
tags:
  - hashtags
  - nlp
  - heuristik
topics:
  - NLP
  - Metadaten
excerpt: "Schritt-für-Schritt-Erklärung der Heuristik in \`extractHashtags\`, inklusive Tipps für Erweiterungen."
cover: "/images/cover-hashtags.svg"
---

<script>
  import { extractHashtags } from '$content/hashtag';

  const sampleText = \`SvelteKit kombiniert File-based Routing, Server Rendering und progressive Enhancement. 
  Die reaktive Syntax vereinfacht UI-Entwicklung, während Vite als Build-Tool für schnelle HMR sorgt.\`;

  const hashtags = extractHashtags(sampleText, { max: 5 });
<\/script>

Automatisierte Hashtags wirken wie Magie, sind aber in Wahrheit eine Abfolge einfacher Schritte. In \`hashtag.ts\` zeige ich dir eine **Heuristik**, die du an deine Bedürfnisse anpassen kannst. Lass uns die Bestandteile durchgehen.

## Stopwort-Filter

Die Datei \`stopwords.de.txt\` enthält rund 120 deutsche Stoppwörter. Beim Extrahieren spalten wir den Text in Tokens (\`split(/\\s+/)\`) und filtern Wörter, die entweder zu kurz sind (\`MIN_TOKEN_LENGTH\`) oder in der Stopwortliste auftauchen. Eine optionale \`whitelist\` erlaubt Ausnahmen – praktisch für Produktnamen.

## Normalisierung

\`normalizeHashtag\` entfernt Sonderzeichen und wandelt alles in Kleinbuchstaben um. Dadurch führt „Dark-Mode“, „darkmode“ und „#DarkMode“ zum selben Token. Ohne diese Normalisierung würdest du doppelte Hashtags riskieren.

## Frequenzanalyse

Die Token werden in einer \`Map\` gezählt. Danach sortieren wir absteigend nach Häufigkeit, mit alphabetischem Tie-Break:

\`\`\`ts
const sorted = Array.from(counts.entries())
  .filter(([token, occurrences]) => occurrences >= minOccurrences || whitelist.includes(token))
  .sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0], 'de') : b[1] - a[1]));
\`\`\`

\`minOccurrences\` verhindert, dass einmalig erwähnte Wörter im Ranking auftauchen. Für kurze Artikel kannst du den Wert reduzieren.

## Demo

<div class="rounded-lg border border-muted/30 bg-surface/70 p-4 text-sm">
  <p class="font-semibold text-emphasis">Beispiel: Analyse eines Texts</p>
  <pre class="mt-2 text-xs text-muted/80">{sampleText}</pre>
  <p class="mt-2 text-accent">Erkannte Hashtags: {hashtags.join(', ')}</p>
</div>

## Grenzen & Ausblick

- **Sprachen**: Die Stopwortliste ist deutsch. Für englische Artikel brauchst du eine zweite Datei.
- **Morphologie**: Worte wie „komponieren“ und „Komponenten“ sind verwandt, werden aber separat gezählt. Für bessere Ergebnisse könntest du einen Stemmer integrieren.
- **Semantik**: Die Heuristik versteht keine Synonyme. Wenn du echte Themenklassifikation willst, probiere TF-IDF oder embeddings.

Trotz dieser Grenzen reicht die Heuristik für viele Content-Projekte. Wichtig ist, dass du deine Annahmen dokumentierst. Schreibe in der README, warum du dich für dieses Verfahren entschieden hast – so können zukünftige Teammitglieder auf deiner Arbeit aufbauen.
`,Oe=`---
layout: blog
title: "Performance-Tuning: Lighthouse-ready mit SvelteKit"
date: "2025-03-18"
tags:
  - performance
  - lighthouse
  - caching
topics:
  - Leistung
excerpt: "Konkrete Maßnahmen, wie du dieses Template für schnelle Ladezeiten optimierst – inklusive Tipps zu Prerendering, Caching und Critical CSS."
cover: "/images/cover-performance.svg"
---

Performance ist kein „später mal“-Thema. Je früher du optimierst, desto günstiger bleiben die Anpassungen. SvelteKit hilft bereits durch SSR und HMR, doch ein paar Stellschrauben solltest du dir genauer ansehen.

## Prerendering & CDN

Das Template setzt \`export const prerender = true;\` im Root-Layout. Dadurch rendert SvelteKit alle Seiten statisch. Auf Vercel kombinierst du das mit Edge-Caching:

\`\`\`bash
npm run build
vercel deploy --prebuilt
\`\`\`

Die vorbereiteten HTML-Dateien liegen im CDN, während Client-Side-Navigation weiterhin funktioniert. Wenn du dynamische Inhalte brauchst, entferne \`prerender\` nur dort, wo du wirklich SSR benötigst.

## Assets optimieren

- Lege Grafiken im Ordner \`/static/images\` ab. Vercel serviert sie unverändert.
- Verwende \`width\`/\`height\` Attribute bei \`<img>\`, damit der Browser Layout-Shifts vermeidet.
- Für \`cover\`-Bilder kannst du SVGs nutzen, die sich verlustfrei skalieren und minimal groß sind.

## Critical CSS

Tailwind generiert viele Klassen, aber Vite entfernt ungenutzte Utilities durch Tree Shaking. Dennoch solltest du:

1. Keine wilden \`w-[123px]\`-Klassen generieren, wenn du sie nicht brauchst.
2. Mit \`@apply\` sparsam umgehen, um die Stylesheet-Größe nicht explodieren zu lassen.

## JavaScript reduzieren

Ein häufiger Fehler ist, jede kleinste Interaktion in ein Svelte-Component zu packen. Nutze \`progressive enhancement\`: Formulare können immer noch \`<form>\`-Submit benutzen, bevor du sie mit JS veredelst. In diesem Template bleibt die Suche komplett clientseitig, aber das Filtering im Blog läuft ohne zusätzliche Netzwerk-Calls.

## Messung

Starte Lighthouse im Chrome DevTools oder kombiniere bei Bedarf Playwright mit \`axe-playwright\`, wenn du automatisierte Checks ergänzen möchtest. Achte auf:

- **Largest Contentful Paint**: Die Hero-Sektion wird statisch ausgeliefert, also schnell.
- **Cumulative Layout Shift**: Dank definierter Bildgrößen bleibt der Wert niedrig.
- **Total Blocking Time**: Gering, weil wir auf schwere JS-Bundles verzichten.

## Ausblick

Wenn die Seite wächst, denk über Code-Splitting und Lazy-Loading für seltene Komponenten nach. SvelteKit unterstützt \`await import('./HeavyComponent.svelte')\` out of the box. Dokumentiere in deinem Repo, welche Performance-Budgets ihr habt – nur so bleibt Performance-Teamaufgabe statt Einzelaktion.
`,Ge=`---
layout: blog
title: "SEO-Basics für SvelteKit Blogs"
date: "2025-04-04"
tags:
  - seo
  - sitemap
  - metadata
topics:
  - SEO
excerpt: "Meta-Tags, OpenGraph, JSON-LD und technische Basics: Alles, was du brauchst, damit Suchmaschinen dein SvelteKit-Blog lieben."
cover: "/images/cover-seo.svg"
---

Suchmaschinenoptimierung wirkt mystisch, doch 80 % bestehen aus sauberer Struktur. Dieses Template liefert die technischen Grundlagen. Wenn du die Mechanismen verstehst, kannst du später auf Content-Strategie fokussieren.

## Meta-Tags & Open Graph

\`+layout.svelte\` setzt Standard-Metadaten:

- \`<title>\` und \`<meta name="description">\`
- \`og:title\`, \`og:description\`, \`og:image\`
- Twitter Cards

Unterseiten können via \`load\` (oder \`+page.ts\`) eigene Werte zurückgeben. Im Blogpost-Loader überschreiben wir \`seo.title\`, \`seo.description\` und \`seo.ogImage\`. Damit erscheinen einzelne Artikel mit ihrem Cover in Social Previews.

## JSON-LD

Zwei JSON-LD-Snippets sind eingebaut:

1. \`Blog\`-Schema im Root-Layout.
2. \`BlogPosting\` im Einzelartikel (\`[slug]\`).

Beispiel:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SEO-Basics für SvelteKit Blogs",
  "datePublished": "2025-04-04",
  "keywords": "seo,sveltekit,sitemap"
}
\`\`\`

Über die \`keywords\` informierst du Suchmaschinen über relevante Begriffe. Aktualisiere die Werte, sobald du neue Tags einführst.

## Sitemap & RSS

Die Routen \`/sitemap.xml\` und \`/rss.xml\` generieren Feeds dynamisch aus dem Content-Index. Durch \`prerender\` landen sie statisch im Build. Kontrolliere beide Dateien nach Deployment, um sicherzustellen, dass die Domain (\`siteConfig.url\`) stimmt.

## Robots & Canonical

Ein \`robots.txt\` ist optional, aber empfehlenswert. Du kannst eine statische Datei in \`/static\` ablegen. Canonical-Links lassen sich pro Seite via \`<link rel="canonical">\` ergänzen, falls du Duplicate-Content befürchtest.

## Content-Qualität

Technik ist nur die halbe Miete. Erstelle Inhalte mit klarem Fokus:

- Eine H1 pro Seite.
- Strukturierte Zwischenüberschriften (H2/H3).
- Ausreichende Textlänge (mindestens 200 Worte).
- Sinnvolle interne Links (z. B. auf \`/docs\`).

Kombinierst du diese Grundlagen mit sauberem Deployment, erreichst du solide SEO-Ergebnisse ohne Black-Hat-Tricks. Dokumentiere Änderungen im README, damit Teammitglieder wissen, welche SEO-Annahmen ihr trefft.
`,Ue=`---
layout: blog
title: "UX im Web: Kleine Details, große Wirkung"
date: "2025-04-19"
tags:
  - ux
  - microcopy
  - feedback
topics:
  - UX-Optimierung
excerpt: "Warum Micro-Interactions, Fokus-States und klare Microcopy die Benutzererfahrung deines Blogs verbessern."
cover: "/images/cover-ux.svg"
---

Benutzererfahrung ist das Ergebnis vieler kleiner Entscheidungen. Dieses Template versucht, UX-Prinzipien in Code zu übersetzen – vom Fokus-State über Microcopy bis hin zu hilfreicher Empty-State-Kommunikation.

## Fokus sichtbar machen

Standard-Fokusrahmen werden oft entfernt, weil sie „nicht schön“ sind. Wir gehen den umgekehrten Weg: \`.focus-ring\` erstellt einen gut sichtbaren Outline:

\`\`\`css
.focus-ring:focus-visible {
  outline: 3px solid rgb(var(--color-accent));
  outline-offset: 2px;
}
\`\`\`

Komponenten wie \`ThemeToggle\` und \`ContentCard\` nutzen diese Klasse. Das Ergebnis: Tastaturnutzer:innen finden sich zurecht, ohne ein zusätzliches A11y-Toolkit zu benötigen.

## Microcopy & Feedback

Leere Suchergebnisse? Statt einer blanken Fläche zeigt \`SearchResults.svelte\` einen Hinweistext. Dieser Text motiviert, andere Begriffe zu testen. Solche Messages verbessern die wahrgenommene Qualität enorm, weil sie Empathie zeigen.

### Beispiel für gutes Feedback

\`\`\`svelte
{#if results.length === 0}
  <p class="rounded-lg border border-dashed ...">
    Keine Treffer für „{query}“. Versuche andere Schlüsselwörter.
  </p>
{/if}
\`\`\`

Kombiniere das mit Icons oder Illustrationen, wenn du die Gestaltung weiter ausbauen möchtest.

## Navigationskonzept

- **DesktopNav**: Sidebar mit erklärenden Texten. So verstehen neue Nutzer sofort, welche Sektionen existieren.
- **MobileNav**: Sticky Bottom Bar, die wichtige Ziele per Tap erreichbar macht. Ein \`ThemeToggle\` ist integriert, damit Nutzer nicht scrollen müssen.

## Debounce & Fehlertoleranz

Die Suche nutzt eine 250-ms-Debounce. Dadurch bleibt die UI reaktiv, auch wenn Nutzer schnell tippen. Fuse.js erlaubt leichte Tippfehler – ein wichtiges UX-Detail.

## Fazit

UX entsteht, wenn du an die Reise der Nutzer denkst, nicht nur an technische Anforderungen. Frage dich bei jeder Änderung: „Wie fühlt sich das für jemanden an, der die Seite zum ersten Mal öffnet?“ Die Antworten führen zu besseren Entscheidungen – und genau dabei soll dir dieses Template helfen.
`,Je=`---
layout: blog
title: "Barrierefreiheit testen: axe und pa11y im Einsatz"
date: "2025-05-07"
tags:
  - a11y
  - testing
  - tooling
topics:
  - Barrierefreiheit
excerpt: "Wie du Accessibility-Checks automatisierst und welche manuellen Tests du zusätzlich durchführen solltest."
cover: "/images/cover-a11y.svg"
---

Barrierefreiheit ist kein Häkchen auf einer Liste, sondern ein kontinuierlicher Prozess. Dennoch helfen automatisierte Tools, typische Fehler schnell aufzuspüren. Dieses Template konzentriert sich auf Content und Theming; für automatisierte Accessibility-Checks kannst du bei Bedarf Tools wie **axe** oder **pa11y** ergänzen.

## Axe im Alltag

Nutze die Browser-Erweiterung „axe DevTools“ oder den CLI-Befehl \`npx axe https://example.com\`, um Seiten gegen WCAG 2.1 AA zu prüfen. So erkennst du schnell Probleme bei Landmark-Struktur, Kontrast oder ARIA-Attributen. Für wiederkehrende Prüfungen kannst du eine Playwright-Suite mit \`axe-playwright\` aufsetzen – installiere dafür \`@playwright/test\` und \`axe-playwright\` als Dev-Abhängigkeiten und führe Checks im Headless-Browser aus.

## Pa11y manuell

\`pa11y\` lässt sich ebenfalls via CLI starten: \`npx pa11y http://localhost:5173\`. Die Auswertung listet Verstöße mit CSS-Selektor und Beschreibung auf. In CI-Pipelines kannst du \`pa11y-ci\` mit einer JSON-Konfiguration verwenden, falls du Accessibility automatisiert beobachten möchtest.

## Manuelle Tests

Automatisierung ersetzt nicht das manuelle Testen. Prüfe zusätzlich:

- **Tastaturnavigation**: Kommst du überall hin, ohne Maus?
- **Screenreader**: Lies zentrale Seiten mit NVDA oder VoiceOver vor.
- **Kontrast**: Teste \`prefers-contrast: more\`, um sicherzustellen, dass dein Theme lesbar bleibt.

## Dokumentation

Beschreibe im README, wie du Accessibility testest. Verlinke Checklisten (z. B. WCAG-Quickref) und notiere bekannte Einschränkungen. Wenn du bewusst ein zugelassenes Pattern nutzt (z. B. Disclosure), verweise auf die WAI-ARIA-Authoring Practices.

Barrierefreiheit ist Teamarbeit. Automatisierte Checks spüren Regressionen auf, manuelle Tests vermitteln die Perspektive deiner Nutzer:innen. Beides gehört zusammen.
`,Qe=`---
layout: blog
title: "Deployment auf Vercel: Von \`npm run build\` zur Live-Site"
date: "2025-05-22"
tags:
  - deployment
  - vercel
  - ci
topics:
  - Deployment
excerpt: "Schritt-für-Schritt-Anleitung, wie du dieses Template auf Vercel ausrollst – inklusive CI-Setup und Tipps für Preview-Umgebungen."
cover: "/images/cover-vercel.svg"
---

Vercel ist der natürliche Partner für SvelteKit, weil das Framework vom selben Team entwickelt wird. Dieser Artikel zeigt dir, wie du das Template deployest, Preview-Umgebungen einrichtest und Continuous Integration mit GitHub Actions kombinierst. Ziel ist, dass du den kompletten Prozess automatisierst.

## Projekt vorbereiten

1. Stelle sicher, dass dein Repository auf GitHub liegt. Vercel synchronisiert sich per OAuth mit deinem Account.
2. Prüfe, dass \`siteConfig.url\` auf die finale Domain zeigt – sonst generieren RSS und Sitemap falsche Links.
3. Führe \`npm run build\` lokal aus. So erkennst du Build-Fehler, bevor Vercel sie melden muss.

## Deployment-Schritte

\`\`\`bash
# Projekt auf Vercel initialisieren
vercel login
vercel link

# Ersten Build im Preview-Modus deployen
vercel --prebuilt
\`\`\`

Der Flag \`--prebuilt\` nutzt dein lokales \`npm run build\`-Ergebnis. Im CI kannst du \`vercel build\` verwenden, um den Build auf Vercel auszuführen. Standardmäßig legt Vercel eine Preview-URL pro Pull Request an – ideal, um Änderungen im Team zu testen.

## Environment-Variablen

Dieses Template benötigt keine Secrets, aber du kannst in Vercel \`Environment Variables\` hinterlegen (z. B. API-Keys). Lege sie für *Production*, *Preview* und *Development* separat an. In SvelteKit greifst du über \`env\`-Module auf die Werte zu.

## CI integrieren

Die GitHub-Action (\`.github/workflows/ci.yml\`) führt Checks aus. Ergänze einen Deployment-Schritt, der nach erfolgreichem Build \`vercel deploy --prebuilt\` startet. Du kannst auch Preview-Deployments automatisch kommentieren lassen, indem du das \`vercel-action\` GitHub-Action verwendest.

## Monitoring & Rollbacks

Vercel bietet ein Aktivitätslog mit Deployments. Jeder Build erhält einen eindeutigen Hash. Wenn etwas schiefgeht, aktiviere die gewünschte Version per „Promote to Production“. Für Logging kannst du Vercel Analytics oder externe Tools (Logflare, Sentry) nutzen.

## Fazit

Deployment sollte kein Stress sein. Mit SvelteKit + Vercel erreichst du wenige Minuten Time-to-Live: Push → Checks → Preview → Merge → Produktion. Dokumentiere deinen Prozess in der README, damit niemand raten muss, welche Befehle notwendig sind. So schafft ihr ein reproduzierbares Setup, das auch neue Teammitglieder schnell verstehen.
`,Xe=Object.assign({"/content/blog/2025-01-hello-svelte.md":oe,"/content/blog/2025-01-responsive-design.svx":de,"/content/blog/2025-02-content-architektur.md":he,"/content/blog/2025-02-darkmode-theming.md":ke,"/content/blog/2025-03-auto-hashtags.svx":ye,"/content/blog/2025-03-performance-tuning.md":_e,"/content/blog/2025-04-seo-tipps.md":Ce,"/content/blog/2025-04-ux-im-web.md":Me,"/content/blog/2025-05-barrierefreiheit-check.md":Ke,"/content/blog/2025-05-deployment-vercel.svx":We}),qe=Object.assign({"/content/blog/2025-01-hello-svelte.md":Re,"/content/blog/2025-01-responsive-design.svx":He,"/content/blog/2025-02-content-architektur.md":je,"/content/blog/2025-02-darkmode-theming.md":Ve,"/content/blog/2025-03-auto-hashtags.svx":Ne,"/content/blog/2025-03-performance-tuning.md":Oe,"/content/blog/2025-04-seo-tipps.md":Ge,"/content/blog/2025-04-ux-im-web.md":Ue,"/content/blog/2025-05-barrierefreiheit-check.md":Je,"/content/blog/2025-05-deployment-vercel.svx":Qe}),Ze=Object.assign({});let x=null;function Ye(n){return n.replace("/content/blog/","").replace(/\.(md|svx|svelte)$/,"")}function en(n){return qe[n]??Ze[n]??""}function nn(n,i){const a=Ye(n),r=i.default,t=i.metadata??r.metadata;if(!t)throw new Error(`Beitrag ${a} verfügt über kein Frontmatter. Bitte ergänzen.`);const e=en(n),s=t.excerpt??e.replace(/[#>*_`~\[\]\(\)!]/g," ").replace(/\s+/g," ").trim().slice(0,220),o=(t.tags??[]).map(h=>h.toLowerCase()),p=(t.topics??[]).map(h=>h.trim()),l=O(e,{max:5,whitelist:o});return{slug:a,title:t.title,date:t.date,cover:t.cover,excerpt:s,tags:o,topics:p,autoHashtags:l,content:e,component:i.default}}function tn(){if(x)return x;const n=Object.entries(Xe).map(([t,e])=>nn(t,e)).sort((t,e)=>new Date(e.date).getTime()-new Date(t.date).getTime()),i=Array.from(new Set(n.flatMap(t=>[...t.tags,...t.autoHashtags]))).sort((t,e)=>t.localeCompare(e,"de")),a=Array.from(new Set(n.flatMap(t=>t.topics))).sort((t,e)=>t.localeCompare(e,"de")),r=n.map(t=>({slug:t.slug,title:t.title,excerpt:t.excerpt,tags:t.tags,topics:t.topics,autoHashtags:t.autoHashtags,content:t.content}));return x={posts:n,hashtags:i,topics:a,searchDocuments:r},x}function At(n){return tn().posts.find(a=>a.slug===n)}export{tn as a,At as g,te as s};
