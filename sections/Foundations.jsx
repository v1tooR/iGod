/* ============================================================
   Foundations — Cores, Tipografia, Ícones, Espaço, Raio, Sombra
   ============================================================ */

/* ---------- helper ---------- */
function SectionHead({ title, desc, eyebrow }) {
  return (
    <div className="page-header">
      {eyebrow && <div className="page-header__crumb">{eyebrow}</div>}
      <h1 className="page-header__title">{title}</h1>
      {desc && <p className="page-header__desc">{desc}</p>}
    </div>
  );
}

function Swatch({ name, token, hex, dark }) {
  const fg = dark ? "var(--sand-50)" : "var(--neutral-900)";
  const secFg = dark ? "rgba(255,252,246,.65)" : "var(--neutral-500)";
  return (
    <div style={{
      background: hex,
      color: fg,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      minHeight: 88,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "1px solid var(--hairline)",
    }}>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.02em" }}>{name}</div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: .9 }}>{hex}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: secFg, marginTop: 2 }}>{token}</div>
      </div>
    </div>
  );
}

function ColorScale({ title, name, scale, dark }) {
  return (
    <div className="subsection">
      <div className="subsection__title">{title}</div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "var(--space-3)"
      }}>
        {scale.map(s => (
          <Swatch
            key={s.step}
            name={`${name} ${s.step}`}
            token={`--${name.toLowerCase()}-${s.step}`}
            hex={s.hex}
            dark={s.step >= 500}
          />
        ))}
      </div>
    </div>
  );
}

function ColorsSection() {
  const plum = [
    { step: 50, hex: "#F7F2F7" },{ step: 100, hex: "#EDE2EE" },{ step: 200, hex: "#D6C2DA" },{ step: 300, hex: "#B597BC" },{ step: 400, hex: "#8B6892" },
    { step: 500, hex: "#65466D" },{ step: 600, hex: "#4A2F52" },{ step: 700, hex: "#36213D" },{ step: 800, hex: "#2A1B2E" },{ step: 900, hex: "#1A0F1D" },
  ];
  const ember = [
    { step: 50, hex: "#FEF4ED" },{ step: 100, hex: "#FDE5D2" },{ step: 200, hex: "#FBC79F" },{ step: 300, hex: "#F8A267" },{ step: 400, hex: "#F08544" },
    { step: 500, hex: "#E8712A" },{ step: 600, hex: "#C95A1B" },{ step: 700, hex: "#A14716" },{ step: 800, hex: "#7B3613" },{ step: 900, hex: "#5C2810" },
  ];
  const sand = [
    { step: 50, hex: "#FFFCF6" },{ step: 100, hex: "#FAF6EE" },{ step: 200, hex: "#F2EBDD" },{ step: 300, hex: "#E6DBC3" },{ step: 400, hex: "#D2C19E" },
  ];
  const neutral = [
    { step: 50, hex: "#FAF8F5" },{ step: 100, hex: "#F1EEE9" },{ step: 200, hex: "#E1DCD3" },{ step: 300, hex: "#C9C2B6" },{ step: 400, hex: "#9B9389" },
    { step: 500, hex: "#6D6760" },{ step: 600, hex: "#4D4944" },{ step: 700, hex: "#36332F" },{ step: 800, hex: "#211F1D" },{ step: 900, hex: "#100F0E" },
  ];
  const semantic = [
    { name: "Success", token: "--success-500", hex: "#1877F2", bg: "#E7F0FF" },
    { name: "Warning", token: "--warning-500", hex: "#C88A1F", bg: "#FBF1DE" },
    { name: "Error",   token: "--error-500",   hex: "#B83A3A", bg: "#F8E3E3" },
    { name: "Info",    token: "--info-500",    hex: "#2C5F87", bg: "#E3ECF3" },
  ];

  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 01"
        title="Cores"
        desc="A ameixa profunda lidera. O laranja brasa é energia reservada para ação. Creme é o ar. Decisões cromáticas têm hierarquia clara — quem manda na tela é o propósito, não a paleta."
      />

      {/* Razão da paleta */}
      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Lógica da paleta</h2>
          <p className="section__desc">O laranja da marca não domina — ele acende. A profundidade vem da ameixa.</p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)"}}>
          <div style={{padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "var(--plum-800)", color: "var(--sand-50)", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div className="eyebrow" style={{color: "var(--ember-300)"}}>Primário · Plum</div>
            <div>
              <div style={{fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em"}}>Profundidade</div>
              <p style={{fontSize: 13, opacity: .75, marginTop: 6, lineHeight: 1.5}}>Marca, headers, superfícies premium, fundos sérios. A cor que carrega autoridade e calma.</p>
            </div>
          </div>
          <div style={{padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "var(--ember-500)", color: "white", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <div className="eyebrow" style={{color: "rgba(255,255,255,.8)"}}>Spark · Ember</div>
            <div>
              <div style={{fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em"}}>Ação</div>
              <p style={{fontSize: 13, opacity: .9, marginTop: 6, lineHeight: 1.5}}>CTAs, badges de destaque, ícones-chave. Reservado — nunca preenche fundos amplos.</p>
            </div>
          </div>
          <div style={{padding: "var(--space-6)", borderRadius: "var(--radius-lg)", background: "var(--sand-100)", color: "var(--neutral-900)", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--hairline)"}}>
            <div className="eyebrow">Suporte · Sand & Neutral</div>
            <div>
              <div style={{fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em"}}>Respiro</div>
              <p style={{fontSize: 13, color: "var(--neutral-600)", marginTop: 6, lineHeight: 1.5}}>Fundos, papéis e cinzas warm. O lugar onde a hierarquia descansa entre os destaques.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Escalas */}
      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Escalas completas</h2>
          <p className="section__desc">50 = mais claro · 900 = mais escuro</p>
        </div>
        <ColorScale title="Plum (primário)" name="plum" scale={plum} />
        <ColorScale title="Ember (brand action)" name="ember" scale={ember} />
        <ColorScale title="Sand (fundos warm)" name="sand" scale={sand} />
        <ColorScale title="Neutral (texto, bordas)" name="neutral" scale={neutral} />
      </div>

      {/* Semânticas */}
      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Cores semânticas</h2>
          <p className="section__desc">Feedback de sistema · sempre acompanhadas de fundo light para uso em toasts e alerts</p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-4)"}}>
          {semantic.map(s => (
            <div key={s.name} style={{borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--hairline)"}}>
              <div style={{background: s.hex, color: "white", padding: "var(--space-5)"}}>
                <div style={{fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em"}}>{s.name}</div>
                <div style={{fontFamily: "var(--font-mono)", fontSize: 12, opacity: .85, marginTop: 4}}>{s.hex}</div>
              </div>
              <div style={{background: s.bg, padding: "var(--space-4)", fontSize: 12, color: "var(--neutral-700)", fontFamily: "var(--font-mono)"}}>
                bg · {s.bg}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combinações */}
      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Combinações recomendadas</h2>
          <p className="section__desc">Pares testados de fundo + texto + acento</p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)"}}>
          {[
            { bg: "var(--sand-50)", fg: "var(--neutral-900)", accent: "var(--ember-500)", note: "Tela padrão · 80% do app" },
            { bg: "var(--plum-800)", fg: "var(--sand-50)", accent: "var(--ember-400)", note: "Hero · cards premium · CTA reverse" },
            { bg: "var(--bg-elevated)", fg: "var(--neutral-900)", accent: "var(--plum-800)", note: "Cards · listas · superfícies elevadas" },
            { bg: "var(--ember-50)", fg: "var(--ember-700)", accent: "var(--ember-500)", note: "Highlight quente · notificação leve" },
          ].map((c, i) => (
            <div key={i} style={{background: c.bg, color: c.fg, padding: "var(--space-6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--hairline)", minHeight: 160, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
              <div style={{fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em"}}>Encontre produtos cristãos perto de você.</div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12}}>
                <span style={{opacity: .7}}>{c.note}</span>
                <span style={{width: 24, height: 24, borderRadius: 6, background: c.accent}}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- TYPOGRAPHY ---------- */
function TypeRow({ name, size, lh, weight, sample, fontFamily }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: "var(--space-5)",
      padding: "var(--space-5) 0",
      borderBottom: "1px solid var(--hairline)",
      alignItems: "baseline"
    }}>
      <div>
        <div style={{fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em"}}>{name}</div>
        <div style={{fontSize: 12, color: "var(--neutral-500)", marginTop: 4, fontFamily: "var(--font-mono)"}}>
          {size}px · lh {lh} · w{weight}
        </div>
      </div>
      <div style={{
        fontFamily: fontFamily,
        fontSize: size,
        lineHeight: lh,
        fontWeight: weight,
        color: "var(--neutral-900)",
        letterSpacing: size >= 30 ? "-0.025em" : "-0.01em"
      }}>{sample}</div>
    </div>
  );
}

function TypographySection() {
  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 02"
        title="Tipografia"
        desc="Bricolage Grotesque traz caráter editorial moderno aos títulos — geometria com personalidade. Inter Tight cobre o corpo: legível em listas densas, leve em descrições de produto."
      />

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Famílias</h2>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)"}}>
          <div style={{padding: "var(--space-7)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)"}}>
            <div className="eyebrow">Display · Headings</div>
            <div style={{fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, marginTop: 12}}>Bricolage</div>
            <div style={{fontFamily: "var(--font-display)", fontSize: 14, color: "var(--neutral-500)", marginTop: 8}}>400 · 500 · 600 · 700 · variable opsz</div>
            <p style={{fontSize: 13, color: "var(--neutral-600)", marginTop: 16, lineHeight: 1.55}}>Personalidade serena com cantos firmes. Funciona em manchete e em rótulo. Use sentence case sempre que possível.</p>
          </div>
          <div style={{padding: "var(--space-7)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)"}}>
            <div className="eyebrow">Body · UI</div>
            <div style={{fontFamily: "var(--font-body)", fontSize: 72, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, marginTop: 12}}>Inter Tight</div>
            <div style={{fontFamily: "var(--font-body)", fontSize: 14, color: "var(--neutral-500)", marginTop: 8}}>400 · 500 · 600 · 700</div>
            <p style={{fontSize: 13, color: "var(--neutral-600)", marginTop: 16, lineHeight: 1.55}}>Geométrica, neutra, calibrada para densidades baixas e médias. Usada em todo corpo, descrição de produto, navegação e formulários.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Escala tipográfica</h2>
          <p className="section__desc">Mobile-first · todos os tamanhos em px</p>
        </div>
        <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: "0 var(--space-6)"}}>
          <TypeRow name="Display XL" size={56} lh={1.05} weight={600} fontFamily="var(--font-display)" sample="Fé que se converte em prosperidade." />
          <TypeRow name="Display LG" size={44} lh={1.05} weight={600} fontFamily="var(--font-display)" sample="Marketplace cristão com propósito." />
          <TypeRow name="H1" size={32} lh={1.15} weight={600} fontFamily="var(--font-display)" sample="Empresas verificadas perto de você" />
          <TypeRow name="H2" size={26} lh={1.2} weight={600} fontFamily="var(--font-display)" sample="Produtos em destaque hoje" />
          <TypeRow name="H3" size={22} lh={1.25} weight={600} fontFamily="var(--font-display)" sample="Padaria Casa do Pão" />
          <TypeRow name="H4" size={18} lh={1.3} weight={600} fontFamily="var(--font-display)" sample="Sobre essa empresa" />
          <TypeRow name="Body Large" size={18} lh={1.55} weight={400} fontFamily="var(--font-body)" sample="A iGod conecta empresários e consumidores em um mesmo ecossistema." />
          <TypeRow name="Body" size={16} lh={1.55} weight={400} fontFamily="var(--font-body)" sample="Receba ofertas selecionadas de empresas cristãs verificadas na sua cidade." />
          <TypeRow name="Body Small" size={14} lh={1.55} weight={400} fontFamily="var(--font-body)" sample="Atendimento por WhatsApp em até 1 hora." />
          <TypeRow name="Caption" size={12} lh={1.45} weight={500} fontFamily="var(--font-body)" sample="Frete grátis acima de R$ 99" />
          <TypeRow name="Label" size={11} lh={1.2} weight={600} fontFamily="var(--font-body)" sample="VERIFICADO · SÃO PAULO · SP" />
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Uso em contexto</h2>
        </div>
        <div style={{padding: "var(--space-9)", background: "var(--sand-100)", borderRadius: "var(--radius-xl)", border: "1px solid var(--hairline)"}}>
          <div className="eyebrow">DESTAQUE DA SEMANA</div>
          <h1 style={{fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginTop: 12, maxWidth: 720}}>
            Comprar com quem compartilha o seu propósito.
          </h1>
          <p style={{fontSize: 18, color: "var(--neutral-600)", lineHeight: 1.55, marginTop: 16, maxWidth: 600}}>
            Encontre produtos, serviços e empresas cristãs verificadas — perto de você, com o mesmo cuidado que você tem com sua família.
          </p>
        </div>
      </div>
    </>
  );
}

/* ---------- ICONS ---------- */
function IconCell({ name, size, weight }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      padding: "var(--space-4)",
      background: "var(--bg-elevated)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-md)",
      minHeight: 110
    }}>
      <div style={{flex: 1, display: "grid", placeItems: "center"}}>
        <i className={`ph${weight === "regular" ? "" : `-${weight}`} ph-${name}`} style={{fontSize: size, color: "var(--neutral-800)"}}></i>
      </div>
      <div style={{fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neutral-500)"}}>{name}</div>
    </div>
  );
}

function IconsSection() {
  const sample = ["house", "magnifying-glass", "storefront", "users-three", "user-circle", "heart", "shopping-bag", "wallet", "map-pin", "chat-circle", "bell", "tag", "package", "currency-circle-dollar", "hand-heart", "sparkle"];

  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 03"
        title="Iconografia"
        desc="Phosphor Icons é a família oficial — editorial, com 6 pesos disponíveis e geometria consistente. Padrão da iGod: ícones em peso regular para navegação, bold para itens ativos, fill para ações afirmativas."
      />

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Pesos</h2>
          <p className="section__desc">Use 'regular' em 90% dos casos · 'bold' em estados ativos · 'fill' em ações afirmativas e badges</p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "var(--space-3)"}}>
          {["thin", "light", "regular", "bold", "fill", "duotone"].map(w => (
            <div key={w} style={{textAlign: "center", padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-md)"}}>
              <i className={`ph${w === "regular" ? "" : `-${w}`} ph-storefront`} style={{fontSize: 36, color: "var(--plum-800)"}}></i>
              <div style={{fontSize: 11, color: "var(--neutral-500)", marginTop: 8, fontFamily: "var(--font-mono)"}}>{w}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Tamanhos</h2>
          <p className="section__desc">16 · 20 · 24 · 32 · 48 px</p>
        </div>
        <div style={{display: "flex", gap: "var(--space-7)", alignItems: "center", padding: "var(--space-7)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)"}}>
          {[16, 20, 24, 32, 48].map(s => (
            <div key={s} style={{textAlign: "center"}}>
              <i className="ph ph-storefront" style={{fontSize: s, color: "var(--neutral-800)"}}></i>
              <div style={{fontSize: 11, color: "var(--neutral-500)", marginTop: 8, fontFamily: "var(--font-mono)"}}>{s}px</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Conjunto base</h2>
          <p className="section__desc">Ícones do MVP — navegação, ações e categorias</p>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "var(--space-3)"}}>
          {sample.map(n => <IconCell key={n} name={n} size={28} weight="regular" />)}
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Estados especiais</h2>
        </div>
        <div style={{display: "flex", gap: "var(--space-6)", flexWrap: "wrap"}}>
          <div style={{padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 140}}>
            <div style={{position: "relative"}}>
              <i className="ph ph-bell" style={{fontSize: 32, color: "var(--neutral-800)"}}></i>
              <span style={{position: "absolute", top: -4, right: -8}} className="badge--notif badge">3</span>
            </div>
            <div style={{fontSize: 12, color: "var(--neutral-600)", fontFamily: "var(--font-mono)"}}>com badge</div>
          </div>
          <div style={{padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 140}}>
            <i className="ph-fill ph-heart" style={{fontSize: 32, color: "var(--ember-500)"}}></i>
            <div style={{fontSize: 12, color: "var(--neutral-600)", fontFamily: "var(--font-mono)"}}>favorito ativo</div>
          </div>
          <div style={{padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 140}}>
            <i className="ph-fill ph-seal-check" style={{fontSize: 32, color: "var(--success-500)"}}></i>
            <div style={{fontSize: 12, color: "var(--neutral-600)", fontFamily: "var(--font-mono)"}}>verificado</div>
          </div>
          <div style={{padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-md)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 140}}>
            <i className="ph-duotone ph-sparkle" style={{fontSize: 32, color: "var(--ember-600)"}}></i>
            <div style={{fontSize: 12, color: "var(--neutral-600)", fontFamily: "var(--font-mono)"}}>destaque marca</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- SPACING & GRID ---------- */
function SpacingSection() {
  const scale = [
    { token: "space-1", px: 4 },{ token: "space-2", px: 8 },{ token: "space-3", px: 12 },{ token: "space-4", px: 16 },
    { token: "space-5", px: 20 },{ token: "space-6", px: 24 },{ token: "space-7", px: 32 },{ token: "space-8", px: 40 },
    { token: "space-9", px: 48 },{ token: "space-10", px: 64 },{ token: "space-11", px: 80 },{ token: "space-12", px: 96 },
  ];
  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 04"
        title="Espaçamento e grid"
        desc="Base 4px · escala que cresce em ritmo musical. O grid mobile prioriza respiração — densidade vem da hierarquia tipográfica, não de elementos colados."
      />

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Escala de espaçamento</h2>
          <p className="section__desc">Unidade base: 4px</p>
        </div>
        <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-3)"}}>
          {scale.map(s => (
            <div key={s.token} style={{display: "grid", gridTemplateColumns: "120px 80px 1fr", alignItems: "center", gap: "var(--space-4)"}}>
              <div style={{fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--neutral-700)"}}>--{s.token}</div>
              <div style={{fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--neutral-500)"}}>{s.px}px</div>
              <div style={{height: 24, width: s.px, background: "var(--ember-500)", borderRadius: 3}}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Grid Mobile (375px)</h2>
          <p className="section__desc">4 colunas · gutter 16 · margem 16</p>
        </div>
        <div style={{display: "flex", justifyContent: "center", padding: "var(--space-7)", background: "var(--sand-100)", borderRadius: "var(--radius-lg)"}}>
          <div style={{width: 375, position: "relative", height: 200, background: "var(--bg-elevated)", borderRadius: "var(--radius-md)", border: "1px solid var(--hairline)", overflow: "hidden"}}>
            <div style={{position: "absolute", inset: "0 16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16}}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{background: "rgba(232,113,42,.18)", border: "1px dashed var(--ember-500)"}}></div>
              ))}
            </div>
            <div style={{position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neutral-500)"}}>375px · 16 / 16 / 16</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__head">
          <h2 className="section__title">Grid Desktop (1280px)</h2>
          <p className="section__desc">12 colunas · gutter 24 · margem 64 · container max 1200</p>
        </div>
        <div style={{padding: "var(--space-6)", background: "var(--sand-100)", borderRadius: "var(--radius-lg)", overflowX: "auto"}}>
          <div style={{width: 1280, position: "relative", height: 180, background: "var(--bg-elevated)", borderRadius: "var(--radius-md)", border: "1px solid var(--hairline)", margin: "0 auto"}}>
            <div style={{position: "absolute", inset: "0 64px", display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24}}>
              {Array.from({length: 12}).map((_, i) => (
                <div key={i} style={{background: "rgba(232,113,42,.15)", border: "1px dashed var(--ember-500)"}}></div>
              ))}
            </div>
            <div style={{position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neutral-500)"}}>1280px · margem 64 · 12 col · gap 24</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- RADIUS ---------- */
function RadiusSection() {
  const levels = [
    { name: "none", token: "--radius-none", px: 0 },
    { name: "sm",   token: "--radius-sm",   px: 6 },
    { name: "md",   token: "--radius-md",   px: 10 },
    { name: "lg",   token: "--radius-lg",   px: 16 },
    { name: "xl",   token: "--radius-xl",   px: 24 },
    { name: "full", token: "--radius-full", px: "9999" },
  ];
  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 05"
        title="Bordas e raios"
        desc="O raio é hierarquia: quanto mais importante a superfície, maior o raio. Chips e badges usam pill (full). Cards padrão lg. Modais e premium xl."
      />

      <div className="section">
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "var(--space-5)"}}>
          {levels.map(l => (
            <div key={l.name} style={{padding: "var(--space-5)", background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", textAlign: "center"}}>
              <div style={{
                width: 96, height: 96,
                margin: "0 auto var(--space-4)",
                background: "var(--plum-800)",
                borderRadius: l.px === "9999" ? "9999px" : l.px + "px"
              }}></div>
              <div style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600}}>{l.name}</div>
              <div style={{fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neutral-500)", marginTop: 4}}>{l.px}{l.px === "9999" ? "" : "px"}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- SHADOWS ---------- */
function ShadowsSection() {
  const levels = [
    { name: "flat", token: "--shadow-flat", desc: "Sem elevação · inputs em repouso, áreas de fundo" },
    { name: "low",  token: "--shadow-low", desc: "1 px · separadores de cartão sutis" },
    { name: "md",   token: "--shadow-md", desc: "Cards em hover · destaques discretos" },
    { name: "high", token: "--shadow-high", desc: "Bottom sheet · modais inline" },
    { name: "overlay", token: "--shadow-overlay", desc: "Modais centrais · toasts no topo" },
  ];
  return (
    <>
      <SectionHead
        eyebrow="Identidade Visual / 06"
        title="Sombras e elevação"
        desc="5 níveis · sempre warm (tinta neutral-900, não preto puro). Camadas funcionam como papel sobre papel, não como UI flutuante de SaaS."
      />
      <div className="section">
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-6)", padding: "var(--space-7) var(--space-5)", background: "var(--sand-100)", borderRadius: "var(--radius-lg)"}}>
          {levels.map(l => (
            <div key={l.name} style={{
              padding: "var(--space-6)",
              background: "var(--bg-elevated)",
              borderRadius: "var(--radius-lg)",
              boxShadow: `var(${l.token})`,
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div style={{fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em"}}>{l.name}</div>
              <div>
                <div style={{fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--neutral-500)"}}>{l.token}</div>
                <div style={{fontSize: 12, color: "var(--neutral-600)", marginTop: 6, lineHeight: 1.5}}>{l.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* Export to window */
Object.assign(window, {
  SectionHead,
  ColorsSection, TypographySection, IconsSection,
  SpacingSection, RadiusSection, ShadowsSection
});
