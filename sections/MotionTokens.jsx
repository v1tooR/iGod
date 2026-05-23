/* ============================================================
   Motion + Design Tokens export
   ============================================================ */

function MotionSection() {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pageKey, setPageKey] = useState(0);
  const [toastOpen, setToastOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [tab, setTab] = useState("a");

  return (
    <>
      <SectionHead
        eyebrow="Sistema / 01"
        title="Padrões de Motion"
        desc="Motion na iGod é editorial — entradas suaves, sem bounce físico. Easings warm: ease-out 220ms para tudo. O movimento não chama atenção; sustenta a hierarquia."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Tokens de duração e easing</div>
          <div className="demo demo--column">
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-4)", width:"100%"}}>
              {[
                { token: "--dur-fast", val: "120ms", use: "Hover, press, micro" },
                { token: "--dur-base", val: "220ms", use: "Mudança de estado padrão" },
                { token: "--dur-slow", val: "420ms", use: "Entrada de tela, sheet" },
                { token: "--ease-out", val: "cubic-bezier(.2,.8,.2,1)", use: "Padrão · saída suave" },
                { token: "--ease-spring", val: "cubic-bezier(.34,1.3,.64,1)", use: "Apenas para entrada de toast/sheet" },
              ].map(t => (
                <div key={t.token} style={{padding: 14, background: "var(--sand-100)", borderRadius: 10, border:"1px solid var(--hairline)"}}>
                  <div style={{fontFamily:"var(--font-mono)", fontSize: 12, color:"var(--ember-600)", fontWeight: 600}}>{t.token}</div>
                  <div style={{fontFamily:"var(--font-mono)", fontSize: 12, color:"var(--neutral-700)", marginTop: 4}}>{t.val}</div>
                  <div style={{fontSize: 12, color:"var(--neutral-500)", marginTop: 6}}>{t.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Demonstrações</div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)"}}>

            {/* Page transition */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12, overflow:"hidden"}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>page-transition</div>
              <div style={{position:"relative", height: 120, background:"var(--sand-100)", borderRadius: 10, overflow:"hidden"}}>
                <div key={pageKey} style={{
                  position:"absolute", inset: 0,
                  padding: 16,
                  background: pageKey % 2 === 0 ? "var(--plum-800)" : "var(--ember-500)",
                  color: "white",
                  animation: "page-in 0.42s var(--ease-out)"
                }}>
                  <div style={{fontFamily:"var(--font-display)", fontSize: 16, fontWeight: 600}}>Tela {pageKey + 1}</div>
                  <div style={{fontSize: 12, opacity: .8, marginTop: 6}}>Entrada com fade + Y translate 8px</div>
                </div>
              </div>
              <button className="btn btn--sm btn--secondary" onClick={()=>setPageKey(pageKey + 1)}>Trocar de tela</button>
            </div>

            {/* Card hover */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>card-hover</div>
              <div
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                style={{
                  padding: 18,
                  background: "var(--sand-100)",
                  borderRadius: 12,
                  transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
                  transform: hover ? "translateY(-3px)" : "translateY(0)",
                  boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-flat)",
                  cursor:"pointer"
                }}>
                <div style={{fontFamily:"var(--font-display)", fontSize: 16, fontWeight: 600}}>Passe o mouse aqui</div>
                <div style={{fontSize: 12, color:"var(--neutral-600)", marginTop: 4}}>−3px Y · md shadow · 220ms</div>
              </div>
            </div>

            {/* Button press */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>button-press</div>
              <button
                onMouseDown={()=>setPressed(true)}
                onMouseUp={()=>setPressed(false)}
                onMouseLeave={()=>setPressed(false)}
                className="btn btn--lg btn--primary"
                style={{transform: pressed ? "scale(.96)" : "scale(1)"}}>
                Pressione e segure
              </button>
              <div style={{fontSize: 12, color:"var(--neutral-500)"}}>scale(.96) · 120ms · ease-out</div>
            </div>

            {/* Skeleton shimmer */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>skeleton-shimmer</div>
              <div style={{display:"flex", flexDirection:"column", gap: 8}}>
                <div className="skeleton" style={{height: 14, width:"80%"}}></div>
                <div className="skeleton" style={{height: 14, width:"60%"}}></div>
                <div className="skeleton" style={{height: 14, width:"70%"}}></div>
              </div>
              <div style={{fontSize: 12, color:"var(--neutral-500)"}}>1.4s linear · loop infinito</div>
            </div>

            {/* Toast */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12, minHeight: 200, position:"relative", overflow:"hidden"}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>toast-enter</div>
              <button className="btn btn--sm btn--secondary" style={{alignSelf:"flex-start"}} onClick={()=>{setToastOpen(true); setTimeout(()=>setToastOpen(false), 2400)}}>Disparar toast</button>
              {toastOpen && (
                <div className="toast toast--success" style={{position:"absolute", bottom: 16, left: 16, right: 16, animation:"toast-in 0.42s var(--ease-out)"}}>
                  <div className="toast__icon"><i className="ph-fill ph-check-circle" style={{fontSize:20}}></i></div>
                  <div className="toast__body"><div className="toast__title">Produto adicionado</div></div>
                </div>
              )}
              <div style={{fontSize: 12, color:"var(--neutral-500)", marginTop:"auto"}}>fade + slide-up 12px · 420ms</div>
            </div>

            {/* Bottom sheet */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12, minHeight: 200, position:"relative", overflow:"hidden"}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>bottom-sheet-open</div>
              <button className="btn btn--sm btn--secondary" style={{alignSelf:"flex-start"}} onClick={()=>setSheetOpen(!sheetOpen)}>{sheetOpen ? "Fechar" : "Abrir sheet"}</button>
              {sheetOpen && (
                <div style={{position:"absolute", left:0, right:0, bottom:0, top: 70, background:"rgba(26,15,29,.5)", animation:"fadein 0.3s var(--ease-out)"}}>
                  <div style={{position:"absolute", left: 0, right: 0, bottom: 0, background:"white", borderRadius:"16px 16px 0 0", padding: "8px 16px 16px", animation:"slideup 0.35s var(--ease-out)"}}>
                    <div style={{width: 32, height: 4, background:"var(--neutral-300)", borderRadius: 2, margin:"4px auto 12px"}}></div>
                    <div style={{fontFamily:"var(--font-display)", fontWeight:600, fontSize: 14}}>Conteúdo da sheet</div>
                  </div>
                </div>
              )}
              <div style={{fontSize: 12, color:"var(--neutral-500)", marginTop:"auto"}}>backdrop fade + slide-up · 350ms</div>
            </div>

            {/* Tab transition */}
            <div style={{background: "var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:"var(--radius-lg)", padding: 20, display:"flex", flexDirection:"column", gap: 12}}>
              <div className="mono" style={{color:"var(--neutral-500)"}}>tab-indicator</div>
              <div style={{display:"flex", borderBottom:"1px solid var(--hairline)", position:"relative"}}>
                {[["a","Produtos"],["b","Sobre"],["c","Contato"]].map(([id, l]) => (
                  <button key={id} onClick={()=>setTab(id)} style={{flex: 1, background:"none", border:"none", padding:"10px 0", fontSize: 13, fontWeight: 600, color: tab === id ? "var(--plum-800)" : "var(--neutral-500)", cursor: "pointer", position:"relative"}}>
                    {l}
                  </button>
                ))}
                <div style={{position:"absolute", bottom: -1, height: 2, background:"var(--plum-800)", borderRadius: 2, left: tab === "a" ? "0%" : tab === "b" ? "33.33%" : "66.66%", width: "33.33%", transition:"left var(--dur-base) var(--ease-out)"}}></div>
              </div>
              <div style={{fontSize: 12, color:"var(--neutral-500)"}}>indicador desliza · 220ms ease-out</div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes page-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes toast-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>
    </>
  );
}

/* ---------- TOKENS export block ---------- */
function TokensSection() {
  const [copied, setCopied] = useState(false);
  const tokenCode = `:root {
  /* Colors — Plum (primário dominante) */
  --plum-50:  #F7F2F7;  --plum-100: #EDE2EE;  --plum-200: #D6C2DA;
  --plum-300: #B597BC;  --plum-400: #8B6892;  --plum-500: #65466D;
  --plum-600: #4A2F52;  --plum-700: #36213D;  --plum-800: #2A1B2E;
  --plum-900: #1A0F1D;

  /* Colors — Ember (brand action) */
  --ember-50:  #FEF4ED; --ember-100: #FDE5D2; --ember-200: #FBC79F;
  --ember-300: #F8A267; --ember-400: #F08544; --ember-500: #E8712A;
  --ember-600: #C95A1B; --ember-700: #A14716; --ember-800: #7B3613;
  --ember-900: #5C2810;

  /* Colors — Sand (fundos warm) */
  --sand-50: #FFFCF6;  --sand-100: #FAF6EE; --sand-200: #F2EBDD;
  --sand-300: #E6DBC3; --sand-400: #D2C19E;

  /* Colors — Neutral (texto, bordas) */
  --neutral-50: #FAF8F5;  --neutral-100: #F1EEE9; --neutral-200: #E1DCD3;
  --neutral-300: #C9C2B6; --neutral-400: #9B9389; --neutral-500: #6D6760;
  --neutral-600: #4D4944; --neutral-700: #36332F; --neutral-800: #211F1D;
  --neutral-900: #100F0E;

  /* Semantic */
  --success-500: #1877F2;  --warning-500: #C88A1F;
  --error-500: #B83A3A;    --info-500: #2C5F87;

  /* Surface aliases */
  --bg: var(--sand-100);
  --bg-elevated: #FFFFFF;
  --bg-inverse: var(--plum-800);
  --fg-primary: var(--neutral-900);
  --fg-secondary: var(--neutral-600);
  --fg-muted: var(--neutral-400);
  --hairline: rgba(33, 31, 29, .08);
  --accent: var(--ember-500);
  --accent-press: var(--ember-600);

  /* Typography */
  --font-display: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-body: 'Inter Tight', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --fs-display-xl: 56px; --fs-display-lg: 44px;
  --fs-h1: 32px; --fs-h2: 26px; --fs-h3: 22px; --fs-h4: 18px;
  --fs-body-lg: 18px; --fs-body: 16px; --fs-body-sm: 14px;
  --fs-caption: 12px; --fs-label: 11px;

  --lh-display: 1.05; --lh-heading: 1.2; --lh-body: 1.55;
  --tracking-display: -0.025em; --tracking-eyebrow: 0.12em;

  /* Spacing — base 4px */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-7: 32px; --space-8: 40px;
  --space-9: 48px; --space-10: 64px; --space-11: 80px; --space-12: 96px;

  /* Radius */
  --radius-none: 0;    --radius-sm: 6px;   --radius-md: 10px;
  --radius-lg: 16px;   --radius-xl: 24px;  --radius-full: 9999px;

  /* Shadows */
  --shadow-flat: none;
  --shadow-low:  0 1px 2px rgba(33, 31, 29, .06);
  --shadow-md:   0 4px 12px -2px rgba(33,31,29,.10), 0 2px 4px -2px rgba(33,31,29,.06);
  --shadow-high: 0 12px 32px -8px rgba(33,31,29,.16), 0 4px 8px -2px rgba(33,31,29,.06);
  --shadow-overlay: 0 24px 64px -16px rgba(26,15,29,.28), 0 8px 16px -4px rgba(33,31,29,.12);
  --shadow-focus: 0 0 0 3px rgba(232, 113, 42, .28);

  /* Motion */
  --ease-out: cubic-bezier(.2,.8,.2,1);
  --ease-in:  cubic-bezier(.4,0,.6,.4);
  --ease-spring: cubic-bezier(.34,1.3,.64,1);
  --dur-fast: 120ms;  --dur-base: 220ms;  --dur-slow: 420ms;

  /* Z-index */
  --z-base: 0;    --z-sticky: 10;   --z-overlay: 100;
  --z-modal: 200; --z-toast: 300;

  /* Layout */
  --container: 1200px;
  --gutter: 24px;
  --gutter-mobile: 16px;
}`;

  const copy = () => {
    navigator.clipboard.writeText(tokenCode);
    setCopied(true);
    setTimeout(()=>setCopied(false), 1600);
  };

  return (
    <>
      <SectionHead
        eyebrow="Sistema / 02"
        title="Design Tokens"
        desc="Bloco CSS pronto para ser copiado e colado no projeto. Todos os tokens deste sistema. A fonte é Google Fonts; importe Bricolage Grotesque e Inter Tight antes desse bloco."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">CSS Variables completas</div>
          <div className="codeblock">
            <button className="codeblock__copy" onClick={copy}>
              {copied ? "✓ Copiado!" : <><i className="ph ph-copy"></i> Copiar</>}
            </button>
            {tokenCode}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Imports necessários no HTML</div>
          <div className="codeblock">
{`<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Inter+Tight:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Phosphor Icons -->
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>`}
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { MotionSection, TokensSection });
