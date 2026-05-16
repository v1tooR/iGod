/* ============================================================
   Molecules — Cards, Search, Lists, Bottom sheet, Toasts
   ============================================================ */

/* ---------- Sample data ---------- */
const SAMPLE_PRODUCTS = [
  { id: 1, name: "Pão de fermentação natural artesanal 500g", cat: "Alimentos", company: "Casa do Pão", price: ["R$","18","90"], badge: "new", letter: "P", bg: "linear-gradient(135deg,#FAE4C8,#E6CFAB)" },
  { id: 2, name: "Mentoria 1:1 — Empresário cristão", cat: "Serviços", company: "Caminho Sólido", price: ["R$","290","00"], badge: "featured", letter: "M", bg: "linear-gradient(135deg,#E5D6E8,#C8B0CE)" },
  { id: 3, name: "Curso online — Liderança bíblica", cat: "Educação", company: "Escola Caleb", price: ["R$","149","00"], badge: "verified", letter: "C", bg: "linear-gradient(135deg,#D9E8DD,#BAD0C2)" },
  { id: 4, name: "Devocional encadernado em couro", cat: "Livros", company: "Editora Refúgio", price: ["R$","78","50"], letter: "D", bg: "linear-gradient(135deg,#E6D9C5,#CBB892)" },
];

/* ---------- PRODUCT CARDS ---------- */
function ProductCard({ p, expanded, fav, onFav, skeleton, badgeOverride }) {
  if (skeleton) {
    return (
      <div className="product" style={{cursor:"default"}}>
        <div className="product__media" style={{background: "var(--neutral-100)"}}>
          <div className="skeleton" style={{position:"absolute", inset:0}}></div>
        </div>
        <div className="product__body">
          <div className="skeleton" style={{height: 10, width: "40%"}}></div>
          <div className="skeleton" style={{height: 14, width: "85%"}}></div>
          <div className="skeleton" style={{height: 14, width: "65%"}}></div>
          <div className="skeleton" style={{height: 20, width: "35%", marginTop: 6}}></div>
        </div>
      </div>
    );
  }
  const badge = badgeOverride || p.badge;
  return (
    <div className="product">
      <div className="product__media" style={{background: p.bg}}>
        <div className="product__media-inner">{p.letter}</div>
        <div className="product__badges">
          {badge === "new" && <span className="badge badge--new">Novo</span>}
          {badge === "featured" && <span className="badge badge--featured">Destaque</span>}
          {badge === "verified" && <span className="badge badge--verified"><i className="ph-fill ph-seal-check"></i>Verificado</span>}
        </div>
        <button className={`product__fav ${fav ? "is-fav" : ""}`} onClick={(e)=>{e.stopPropagation(); onFav && onFav();}}>
          <i className={`${fav ? "ph-fill" : "ph"} ph-heart`} style={{fontSize:16}}></i>
        </button>
      </div>
      <div className="product__body">
        <div className="product__cat">{p.cat}</div>
        <div className="product__name">{p.name}</div>
        <div className="product__company">
          <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:13}}></i>
          {p.company}
        </div>
        <div className="product__price">
          <span className="price-tag">
            <span className="price-tag__currency">{p.price[0]}</span>
            <span className="price-tag__value">{p.price[1]}</span>
            <span className="price-tag__cents">,{p.price[2]}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductCardsSection() {
  const [favs, setFavs] = useState({1: true});
  const toggle = (id) => setFavs({...favs, [id]: !favs[id]});

  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 01"
        title="Cards de Produto"
        desc="A unidade fundamental do marketplace. Mesma anatomia em grid e em lista — muda só o ritmo visual. Imagem 1:1 garante consistência em layouts mistos."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Grid · 2 colunas (mobile padrão)</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 12, maxWidth: 380, padding: "var(--space-6)", background:"var(--sand-100)", borderRadius:"var(--radius-lg)"}}>
            {SAMPLE_PRODUCTS.slice(0,4).map(p => (
              <ProductCard key={p.id} p={p} fav={favs[p.id]} onFav={()=>toggle(p.id)} />
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Lista expandida · 1 coluna</div>
          <div style={{display: "flex", flexDirection: "column", gap: 12, maxWidth: 460}}>
            {SAMPLE_PRODUCTS.slice(0,2).map(p => (
              <div key={p.id} style={{display:"flex", gap: 14, background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: 12, alignItems:"center"}}>
                <div style={{width: 96, height: 96, borderRadius: 12, background: p.bg, position: "relative", flexShrink: 0, display:"grid", placeItems:"center", fontFamily:"var(--font-display)", fontSize: 36, color: "var(--plum-800)", opacity: .85}}>
                  {p.letter}
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div className="product__cat">{p.cat}</div>
                  <div style={{fontFamily:"var(--font-display)", fontSize: 16, fontWeight: 600, marginTop: 2, letterSpacing: "-0.01em", lineHeight: 1.25}}>{p.name}</div>
                  <div className="product__company" style={{marginTop:4}}>
                    <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:13}}></i>
                    {p.company}
                  </div>
                  <div style={{marginTop: 6}}>
                    <span className="price-tag">
                      <span className="price-tag__currency">{p.price[0]}</span>
                      <span className="price-tag__value">{p.price[1]}</span>
                      <span className="price-tag__cents">,{p.price[2]}</span>
                    </span>
                  </div>
                </div>
                <button className="btn btn--icon btn--md btn--secondary btn--circle"><i className="ph ph-shopping-bag-open"></i></button>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Skeleton · loading</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 12, maxWidth: 380, padding: "var(--space-6)", background:"var(--sand-100)", borderRadius:"var(--radius-lg)"}}>
            <ProductCard skeleton />
            <ProductCard skeleton />
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Variantes de badge</div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 12, maxWidth: 520}}>
            <ProductCard p={SAMPLE_PRODUCTS[0]} badgeOverride="new" />
            <ProductCard p={SAMPLE_PRODUCTS[1]} badgeOverride="featured" />
            <ProductCard p={SAMPLE_PRODUCTS[2]} badgeOverride="verified" />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- COMPANY CARDS ---------- */
const COMPANIES = [
  { name: "Casa do Pão", cat: "Padaria artesanal", city: "São Paulo · SP", initial: "CP", color: "linear-gradient(135deg, #C95A1B, #7B3613)", verified: true },
  { name: "Caminho Sólido Mentoria", cat: "Consultoria empresarial", city: "Belo Horizonte · MG", initial: "CS", color: "linear-gradient(135deg, #4A2F52, #1A0F1D)", verified: true },
  { name: "Editora Refúgio", cat: "Livros e devocionais", city: "Curitiba · PR", initial: "ER", color: "linear-gradient(135deg, #2D7A4F, #1F5736)", verified: false },
  { name: "Tribo Imobiliária Cristã", cat: "Imobiliária", city: "Brasília · DF", initial: "TI", color: "linear-gradient(135deg, #2C5F87, #1B405E)", verified: true },
];

function CompanyCardsSection() {
  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 02"
        title="Cards de Empresa"
        desc="Empresa é o coração da iGod — quem está por trás do produto importa tanto quanto o produto. Logo, nome, categoria, cidade e selo de verificação compõem a identidade mínima."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Horizontal · lista</div>
          <div style={{display: "flex", flexDirection: "column", gap: 12, maxWidth: 460}}>
            {COMPANIES.slice(0,3).map((c, i) => (
              <div className="company" key={i}>
                <div className="company__logo" style={{background: c.color}}>{c.initial}</div>
                <div className="company__body">
                  <div className="company__name">
                    {c.name}
                    {c.verified && <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)"}}></i>}
                  </div>
                  <div className="company__meta">
                    <span>{c.cat}</span>
                    <span style={{width:3, height:3, borderRadius:"50%", background:"var(--neutral-400)"}}></span>
                    <span>{c.city}</span>
                  </div>
                </div>
                <button className="btn btn--sm btn--secondary">Ver loja</button>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Vertical · grid (scroll horizontal no mobile)</div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))", gap: 12}}>
            {COMPANIES.map((c, i) => (
              <div key={i} style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", padding: 16, display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap: 8}}>
                <div className="company__logo" style={{background: c.color, width: 64, height: 64, fontSize: 24, borderRadius: 16}}>{c.initial}</div>
                <div style={{fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, marginTop: 6, letterSpacing:"-0.01em", display:"flex", alignItems:"center", gap: 4}}>
                  {c.name}
                  {c.verified && <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize: 14}}></i>}
                </div>
                <div style={{fontSize: 11, color:"var(--neutral-500)"}}>{c.cat}</div>
                <div style={{fontSize: 11, color:"var(--neutral-400)", marginTop:-4}}>{c.city}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- CATEGORY CARDS ---------- */
const CATEGORIES = [
  { name: "Alimentos", icon: "bread", color: "var(--ember-50)", iconColor: "var(--ember-600)" },
  { name: "Serviços", icon: "wrench", color: "var(--info-50)", iconColor: "var(--info-700)" },
  { name: "Tecnologia", icon: "cpu", color: "#ECE3F3", iconColor: "#4F2A6E" },
  { name: "Educação", icon: "book-open", color: "var(--success-50)", iconColor: "var(--success-700)" },
  { name: "Saúde", icon: "heartbeat", color: "var(--error-50)", iconColor: "var(--error-700)" },
  { name: "Causas", icon: "hand-heart", color: "#FBE9D5", iconColor: "#8A4516" },
  { name: "Imobiliária", icon: "house-line", color: "#E1EDE3", iconColor: "var(--success-700)" },
  { name: "Eventos", icon: "calendar-star", color: "#E3DDEF", iconColor: "var(--plum-700)" },
];

function CategoryCardsSection() {
  const [active, setActive] = useState("Alimentos");
  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 03"
        title="Cards de Categoria"
        desc="A entrada do app. Ícone Phosphor + fundo de baixa saturação derivado da semântica de cor. Em scroll horizontal no mobile; em grid no desktop."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Card padrão · ícone + nome</div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, maxWidth: 720}}>
            {CATEGORIES.map(c => (
              <div className="cat-card" key={c.name}>
                <div className="cat-card__icon" style={{background: c.color, color: c.iconColor}}>
                  <i className={`ph-fill ph-${c.icon}`} style={{fontSize: 20}}></i>
                </div>
                <div className="cat-card__name">{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Chips (filtros e tags ativas)</div>
          <div className="demo">
            {CATEGORIES.slice(0, 6).map(c => (
              <span key={c.name} className={`chip ${active === c.name ? "is-active" : ""}`} onClick={()=>setActive(c.name)}>
                <i className={`ph ph-${c.icon}`}></i>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- SEARCH BAR ---------- */
function SearchBarSection() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("pão");
  const suggestions = [
    { type: "produto", title: "Pão de fermentação natural", sub: "Casa do Pão · Alimentos" },
    { type: "produto", title: "Pão sem glúten artesanal", sub: "Padaria do Pão Vivo · Alimentos" },
    { type: "empresa", title: "Casa do Pão", sub: "Padaria · São Paulo, SP · verificada" },
    { type: "categoria", title: "Padarias artesanais", sub: "248 empresas" },
  ];
  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 04"
        title="Search Bar"
        desc="A busca é o entrypoint principal da iGod depois das categorias. Combina input com botão de filtros sólido (plum) à direita — esquerda + direita aproveitam o polegar."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Versão mobile completa</div>
          <div style={{display:"flex", justifyContent:"center", padding: "var(--space-7)", background:"var(--sand-100)", borderRadius:"var(--radius-lg)"}}>
            <div style={{width: 343, display:"flex", gap: 8}}>
              <div className="input-wrap" style={{flex: 1}}>
                <span className="input-wrap__icon"><i className="ph ph-magnifying-glass" style={{fontSize:18}}></i></span>
                <input className="input input--icon-left" placeholder="Buscar produtos, serviços, empresas…" onFocus={()=>setOpen(true)} value={q} onChange={e=>setQ(e.target.value)} />
              </div>
              <button className="btn btn--icon btn--md btn--dark" style={{width:44, height:44, borderRadius: 10}}><i className="ph-bold ph-sliders-horizontal"></i></button>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Com sugestões dropdown</div>
          <div style={{display:"flex", justifyContent:"center", padding: "var(--space-7)", background:"var(--sand-100)", borderRadius:"var(--radius-lg)"}}>
            <div style={{width: 343, position: "relative"}}>
              <div style={{display:"flex", gap: 8}}>
                <div className="input-wrap" style={{flex: 1}}>
                  <span className="input-wrap__icon"><i className="ph ph-magnifying-glass" style={{fontSize:18}}></i></span>
                  <input className="input input--icon-left input--icon-right" value={q} onChange={e=>setQ(e.target.value)} style={{borderColor:"var(--ember-500)", boxShadow:"var(--shadow-focus)"}}/>
                  <span className="input-wrap__icon input-wrap__icon--right" onClick={()=>setQ("")}>
                    <i className="ph ph-x-circle" style={{fontSize:18}}></i>
                  </span>
                </div>
                <button className="btn btn--icon btn--md btn--dark" style={{width:44, height:44, borderRadius: 10}}><i className="ph-bold ph-sliders-horizontal"></i></button>
              </div>

              <div style={{position:"absolute", top: 52, left: 0, right: 52, background:"var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius: "var(--radius-lg)", boxShadow:"var(--shadow-high)", overflow:"hidden"}}>
                <div style={{padding: "10px 14px 6px", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: "var(--neutral-400)", textTransform: "uppercase"}}>Sugestões para “{q}”</div>
                {suggestions.map((s, i) => (
                  <div key={i} className="list-item" style={{borderBottom: i === suggestions.length - 1 ? "none" : "1px solid var(--hairline)"}}>
                    <div style={{width: 36, height: 36, borderRadius: 10, background: s.type==="produto"?"var(--ember-50)":s.type==="empresa"?"var(--plum-100)":"var(--sand-200)", display:"grid", placeItems:"center", color: s.type==="produto"?"var(--ember-600)":"var(--plum-700)"}}>
                      <i className={`ph ${s.type==="produto"?"ph-package":s.type==="empresa"?"ph-storefront":"ph-squares-four"}`}></i>
                    </div>
                    <div className="list-item__body">
                      <div className="list-item__title">{s.title}</div>
                      <div className="list-item__sub">{s.sub}</div>
                    </div>
                    <i className="ph ph-arrow-up-left list-item__arrow"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- LISTS ---------- */
function ListsSection() {
  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 05"
        title="List items"
        desc="Itens densos para listas de resultados, ordens, mensagens. Hairline entre itens, área de toque mínima 56px."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Produto em lista</div>
          <div style={{maxWidth: 460, background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", overflow:"hidden"}}>
            {SAMPLE_PRODUCTS.slice(0, 3).map((p, i) => (
              <div key={p.id} className="list-item" style={{borderBottom: i === 2 ? "none" : "1px solid var(--hairline)"}}>
                <div style={{width: 48, height: 48, borderRadius: 12, background: p.bg, flexShrink:0, display:"grid", placeItems:"center", fontFamily:"var(--font-display)", color:"var(--plum-800)", fontWeight: 600, opacity: .9}}>{p.letter}</div>
                <div className="list-item__body">
                  <div className="list-item__title">{p.name}</div>
                  <div className="list-item__sub">{p.company} · {p.cat}</div>
                </div>
                <span className="price-tag">
                  <span className="price-tag__currency">{p.price[0]}</span>
                  <span className="price-tag__value">{p.price[1]}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Empresa em lista</div>
          <div style={{maxWidth: 460, background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", overflow:"hidden"}}>
            {COMPANIES.map((c, i) => (
              <div key={i} className="list-item" style={{borderBottom: i === COMPANIES.length - 1 ? "none" : "1px solid var(--hairline)"}}>
                <div className="company__logo" style={{background: c.color, width: 48, height: 48, fontSize: 16, borderRadius: 12}}>{c.initial}</div>
                <div className="list-item__body">
                  <div className="list-item__title" style={{display:"flex", alignItems:"center", gap: 4}}>
                    {c.name}
                    {c.verified && <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:14}}></i>}
                  </div>
                  <div className="list-item__sub">{c.cat} · {c.city}</div>
                </div>
                <i className="ph ph-caret-right list-item__arrow"></i>
              </div>
            ))}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Categoria com ícone</div>
          <div style={{maxWidth: 460, background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: "var(--radius-lg)", overflow:"hidden"}}>
            {CATEGORIES.slice(0,5).map((c, i) => (
              <div key={c.name} className="list-item" style={{borderBottom: i === 4 ? "none" : "1px solid var(--hairline)"}}>
                <div className="cat-card__icon" style={{background: c.color, color: c.iconColor, width: 44, height: 44}}>
                  <i className={`ph-fill ph-${c.icon}`} style={{fontSize: 20}}></i>
                </div>
                <div className="list-item__body">
                  <div className="list-item__title">{c.name}</div>
                  <div className="list-item__sub">{42 + i * 17} empresas · {180 + i * 41} produtos</div>
                </div>
                <i className="ph ph-caret-right list-item__arrow"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- BOTTOM SHEET ---------- */
function BottomSheetSection() {
  const [show, setShow] = useState("filters");

  const sheets = {
    filters: (
      <>
        <div className="bottom-sheet__title">Filtros</div>
        <div className="bottom-sheet__body" style={{padding: 20}}>
          <div className="form-row__label">Categoria</div>
          <div style={{display:"flex", gap: 8, flexWrap:"wrap", marginBottom: 20}}>
            {CATEGORIES.slice(0,5).map((c, i) => (
              <span key={c.name} className={`chip ${i === 0 ? "is-active" : ""}`}>{c.name}</span>
            ))}
          </div>
          <div className="form-row__label">Faixa de preço</div>
          <div style={{display:"flex", gap: 12, marginBottom: 20}}>
            <input className="input" defaultValue="R$ 0" />
            <input className="input" defaultValue="R$ 500" />
          </div>
          <div className="form-row__label">Filtros</div>
          <label className="choice" style={{display:"flex", marginBottom: 12}}>
            <input type="checkbox" defaultChecked />
            <span className="choice__box">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 7 6 10 11 4"/></svg>
            </span>
            Apenas empresas verificadas
          </label>
          <label className="choice" style={{display:"flex", marginBottom: 24}}>
            <input type="checkbox" />
            <span className="choice__box">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 7 6 10 11 4"/></svg>
            </span>
            Entrega na minha cidade
          </label>
          <div style={{display:"flex", gap: 8}}>
            <button className="btn btn--lg btn--secondary btn--full">Limpar</button>
            <button className="btn btn--lg btn--primary btn--full">Aplicar (42 resultados)</button>
          </div>
        </div>
      </>
    ),
    confirm: (
      <>
        <div className="bottom-sheet__body" style={{padding: "32px 24px", textAlign:"center"}}>
          <div style={{width: 64, height: 64, borderRadius: 18, background:"var(--error-50)", color:"var(--error-500)", display:"grid", placeItems:"center", margin:"0 auto 16px"}}>
            <i className="ph ph-trash" style={{fontSize: 32}}></i>
          </div>
          <h3 style={{fontFamily:"var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing:"-0.02em"}}>Remover este produto?</h3>
          <p style={{fontSize: 14, color: "var(--neutral-600)", marginTop: 8, lineHeight: 1.5}}>
            O produto sairá da sua sacola. Você pode adicioná-lo novamente a qualquer momento.
          </p>
          <div style={{display:"flex", gap: 8, marginTop: 24}}>
            <button className="btn btn--lg btn--secondary btn--full">Manter</button>
            <button className="btn btn--lg btn--destructive btn--full">Remover</button>
          </div>
        </div>
      </>
    ),
    preview: (
      <>
        <div className="bottom-sheet__body" style={{padding: 0}}>
          <div style={{background: SAMPLE_PRODUCTS[0].bg, aspectRatio: 1.2, position:"relative", display:"grid", placeItems:"center"}}>
            <div style={{fontFamily:"var(--font-display)", fontSize: 100, color:"var(--plum-800)", opacity: .25}}>P</div>
          </div>
          <div style={{padding: 20}}>
            <div className="product__cat">{SAMPLE_PRODUCTS[0].cat}</div>
            <h3 style={{fontFamily:"var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing:"-0.02em", marginTop: 6}}>{SAMPLE_PRODUCTS[0].name}</h3>
            <div className="product__company" style={{marginTop:6}}>
              <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:13}}></i>
              {SAMPLE_PRODUCTS[0].company}
            </div>
            <div style={{marginTop: 16, display:"flex", alignItems:"baseline", gap: 4}}>
              <span style={{fontSize: 14, color: "var(--neutral-500)"}}>R$</span>
              <span style={{fontFamily:"var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing:"-0.02em"}}>18,90</span>
            </div>
            <p style={{fontSize: 14, color: "var(--neutral-600)", marginTop: 12, lineHeight: 1.55}}>Pão de fermentação natural feito artesanalmente todas as manhãs com farinha orgânica.</p>
            <div style={{display:"flex", gap: 8, marginTop: 20}}>
              <button className="btn btn--lg btn--secondary"><i className="ph ph-heart"></i></button>
              <button className="btn btn--lg btn--primary btn--full"><i className="ph-bold ph-whatsapp-logo"></i>Falar com a empresa</button>
            </div>
          </div>
        </div>
      </>
    ),
  };

  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 06"
        title="Bottom Sheet"
        desc="O modal mobile padrão. Sobe do bottom com 70% de altura máxima, handle no topo. Filtros, confirmações destrutivas e preview de produto vivem aqui."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Variantes</div>
          <div className="demo" style={{gap: 12}}>
            <button className={`btn btn--md ${show === "filters" ? "btn--primary" : "btn--secondary"}`} onClick={()=>setShow("filters")}>Filtros</button>
            <button className={`btn btn--md ${show === "confirm" ? "btn--primary" : "btn--secondary"}`} onClick={()=>setShow("confirm")}>Confirmação</button>
            <button className={`btn btn--md ${show === "preview" ? "btn--primary" : "btn--secondary"}`} onClick={()=>setShow("preview")}>Preview de produto</button>
          </div>
        </div>

        <div className="subsection">
          <div style={{display:"flex", justifyContent:"center", padding: "var(--space-7)", background:"var(--sand-100)", borderRadius:"var(--radius-lg)"}}>
            <div style={{width: 343, height: 600, background: "var(--neutral-900)", borderRadius: 28, padding: 6, position:"relative", overflow:"hidden"}}>
              <div style={{width: "100%", height: "100%", borderRadius: 22, background: "var(--sand-50)", position: "relative", overflow:"hidden"}}>
                <div style={{padding: 16, paddingTop: 50}}>
                  <div style={{fontFamily:"var(--font-display)", fontSize: 18, fontWeight: 600}}>Resultado da busca</div>
                  <div style={{fontSize: 12, color:"var(--neutral-500)", marginTop:2}}>42 produtos encontrados</div>
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 8, marginTop: 12, opacity: .4}}>
                    {SAMPLE_PRODUCTS.slice(0,2).map(p => <ProductCard key={p.id} p={p} />)}
                  </div>
                </div>

                <div className="bottom-sheet">
                  <div className="bottom-sheet__inner">
                    <div className="bottom-sheet__handle"></div>
                    {sheets[show]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- TOASTS ---------- */
function ToastsSection() {
  return (
    <>
      <SectionHead
        eyebrow="Moléculas / 07"
        title="Toasts e alertas"
        desc="Feedback breve, não-bloqueante. Topo da tela em desktop, abaixo da bottom-nav em mobile. Fundo preto warm com texto cream — alta legibilidade, baixa interrupção."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Variantes</div>
          <div className="demo demo--column">
            <div className="toast toast--success">
              <div className="toast__icon"><i className="ph-fill ph-check-circle" style={{fontSize:24}}></i></div>
              <div className="toast__body">
                <div className="toast__title">Produto adicionado aos favoritos</div>
                <div className="toast__desc">Você pode encontrar todos os seus favoritos no Perfil.</div>
              </div>
              <button style={{background:"none", border:"none", color: "inherit", opacity: .6, cursor:"pointer"}}><i className="ph ph-x"></i></button>
            </div>
            <div className="toast toast--error">
              <div className="toast__icon"><i className="ph-fill ph-x-circle" style={{fontSize:24}}></i></div>
              <div className="toast__body">
                <div className="toast__title">Não foi possível finalizar o pagamento</div>
                <div className="toast__desc">Verifique os dados do cartão e tente novamente.</div>
              </div>
            </div>
            <div className="toast toast--warning">
              <div className="toast__icon"><i className="ph-fill ph-warning-circle" style={{fontSize:24}}></i></div>
              <div className="toast__body">
                <div className="toast__title">Endereço de entrega ainda não confirmado</div>
                <div className="toast__desc">Atualize antes do checkout.</div>
              </div>
            </div>
            <div className="toast toast--info">
              <div className="toast__icon"><i className="ph-fill ph-info" style={{fontSize:24}}></i></div>
              <div className="toast__body">
                <div className="toast__title">Sua empresa foi enviada para verificação</div>
                <div className="toast__desc">Em até 48h você recebe o selo iGod por e-mail.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  ProductCard,
  SAMPLE_PRODUCTS, COMPANIES, CATEGORIES,
  ProductCardsSection, CompanyCardsSection, CategoryCardsSection,
  SearchBarSection, ListsSection, BottomSheetSection, ToastsSection
});
