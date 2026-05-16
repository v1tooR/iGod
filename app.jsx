/* ============================================================
   iGod Design System — App Shell
   ============================================================ */
const { useState, useEffect, useRef, useMemo } = React;

const NAV = [
  {
    title: "Visão geral",
    items: [
      { id: "intro", label: "Introdução" },
    ]
  },
  {
    title: "Identidade Visual",
    items: [
      { id: "cores", label: "Cores" },
      { id: "tipografia", label: "Tipografia" },
      { id: "iconografia", label: "Iconografia" },
      { id: "espacamento", label: "Espaçamento e grid" },
      { id: "raios", label: "Bordas" },
      { id: "sombras", label: "Sombras e elevação" },
    ]
  },
  {
    title: "Componentes — Átomos",
    items: [
      { id: "botoes", label: "Botões" },
      { id: "inputs", label: "Inputs e formulários" },
      { id: "tags", label: "Tags e Badges" },
      { id: "avatares", label: "Avatares" },
      { id: "dividers", label: "Dividers" },
    ]
  },
  {
    title: "Componentes — Moléculas",
    items: [
      { id: "cards-produto", label: "Cards de Produto" },
      { id: "cards-empresa", label: "Cards de Empresa" },
      { id: "cards-categoria", label: "Cards de Categoria" },
      { id: "search-bar", label: "Search Bar" },
      { id: "listas", label: "List Items" },
      { id: "bottomsheet", label: "Bottom Sheet" },
      { id: "toasts", label: "Toasts" },
    ]
  },
  {
    title: "Mockups",
    items: [
      { id: "mockups", label: "Telas mobile" },
      { id: "mockups-desktop", label: "Telas desktop" },
    ]
  },
  {
    title: "Sistema",
    items: [
      { id: "motion", label: "Padrões de Motion" },
      { id: "tokens", label: "Design Tokens" },
    ]
  },
];

function Sidebar({ active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src="assets/igod-logo.png" alt="iGod" style={{height: 36, width: "auto", display: "block"}} />
        <div style={{borderLeft: "1px solid var(--hairline)", paddingLeft: 10, marginLeft: 4}}>
          <div style={{fontSize: 11, color: "var(--neutral-500)", letterSpacing: "0.04em", fontWeight: 500}}>Design System</div>
          <div style={{fontSize: 11, color: "var(--neutral-400)", fontFamily: "var(--font-mono)"}}>v0.1 · MVP 1</div>
        </div>
      </div>

      {NAV.map(group => (
        <div className="sidebar__section" key={group.title}>
          <div className="sidebar__section-title">{group.title}</div>
          {group.items.map(item => (
            <button
              key={item.id}
              className={`sidebar__item ${active === item.id ? "is-active" : ""}`}
              onClick={() => onChange(item.id)}
            >
              <span className="sidebar__item-dot"></span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ))}

      <div className="sidebar__footer">
        Marketplace cristão · ecossistema de fé, propósito e relacionamento.
        <br /><br />
        Para o MVP 1 da iGod.
      </div>
    </aside>
  );
}

/* ---------- INTRODUCTION ---------- */
function IntroSection() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__crumb">Design System · iGod</div>
        <h1 className="page-header__title">Tecnologia com alma, marketplace com propósito.</h1>
        <p className="page-header__desc">
          A iGod conecta consumidores, empresários, produtos, serviços e causas em
          um ecossistema cristão baseado em fé, confiança, propósito e relacionamento.
          Este Design System é o guia visual e funcional do MVP 1 — pensado mobile-first,
          com calor humano sem clichê religioso, e a sofisticação de produto de uma startup tech séria.
        </p>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Pilares de design</h2>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)"}}>
          {[
            {
              n: "01",
              t: "Calor sem religiosidade visual",
              d: "Sem cruzes, bíblias ou símbolos explícitos. A fé vive no nome, na copy e no propósito — a estética é de startup."
            },
            {
              n: "02",
              t: "Mobile-first, sempre",
              d: "Cada componente nasce em 375px. Densidade de informação calibrada para o polegar e para a vida real do consumidor."
            },
            {
              n: "03",
              t: "Profundidade discreta",
              d: "Flat moderno com sombras quentes e suaves. Gradientes pesados ficam de fora. Camadas se sugerem por hairlines e papel sobre papel."
            },
            {
              n: "04",
              t: "Brasa como ação",
              d: "O laranja #E8712A é reservado para ação, energia e momentos-chave — nunca como fundo dominante. A ameixa profunda carrega a marca."
            },
          ].map(p => (
            <div key={p.n} style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--hairline)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)"
            }}>
              <div className="eyebrow" style={{marginBottom: 12}}>{p.n}</div>
              <h3 style={{fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: 8, letterSpacing: "-0.02em"}}>{p.t}</h3>
              <p style={{fontSize: 14, color: "var(--neutral-600)", lineHeight: 1.55}}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Inspirações de espírito</h2>
          <p className="section__desc">Não os copiamos visualmente; herdamos a postura.</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap: "var(--space-4)"}}>
          {[
            { brand: "Nubank", what: "Audácia + clareza · descomplicar com propósito." },
            { brand: "iFood", what: "Praticidade mobile · marketplace que entende o polegar." },
            { brand: "Linear", what: "Sofisticação de produto · cada pixel intencional." },
            { brand: "Airbnb", what: "Comunidade + confiança · pertencimento como UX." },
          ].map(b => (
            <div key={b.brand} style={{
              padding: "var(--space-5)",
              borderLeft: "3px solid var(--ember-500)",
              background: "var(--sand-100)",
              borderRadius: "0 var(--radius-md) var(--radius-md) 0"
            }}>
              <div style={{fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, color: "var(--plum-800)", marginBottom: 4}}>{b.brand}</div>
              <div style={{fontSize: 13, color: "var(--neutral-600)", lineHeight: 1.5}}>{b.what}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- MAIN APP ---------- */
function App() {
  const [section, setSection] = useState("intro");
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

  // Map of section id to component
  const renderSection = () => {
    switch (section) {
      case "intro": return <IntroSection />;
      // Foundations
      case "cores": return <ColorsSection />;
      case "tipografia": return <TypographySection />;
      case "iconografia": return <IconsSection />;
      case "espacamento": return <SpacingSection />;
      case "raios": return <RadiusSection />;
      case "sombras": return <ShadowsSection />;
      // Atoms
      case "botoes": return <ButtonsSection />;
      case "inputs": return <InputsSection />;
      case "tags": return <TagsSection />;
      case "avatares": return <AvatarsSection />;
      case "dividers": return <DividersSection />;
      // Molecules
      case "cards-produto": return <ProductCardsSection />;
      case "cards-empresa": return <CompanyCardsSection />;
      case "cards-categoria": return <CategoryCardsSection />;
      case "search-bar": return <SearchBarSection />;
      case "listas": return <ListsSection />;
      case "bottomsheet": return <BottomSheetSection />;
      case "toasts": return <ToastsSection />;
      // Mockups
      case "mockups": return <MockupsSection />;
      case "mockups-desktop": return <DesktopMockupsSection />;
      // System
      case "motion": return <MotionSection />;
      case "tokens": return <TokensSection />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="app">
      <Sidebar active={section} onChange={setSection} />
      <main className="main" ref={mainRef}>
        {renderSection()}
      </main>
      {window.IGodTweaks ? React.createElement(window.IGodTweaks) : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
