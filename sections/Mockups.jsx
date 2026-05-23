/* ============================================================
   Mockups Mobile — 7 telas completas, interativas
   ============================================================ */

/* ---------- Phone shell ---------- */
function Phone({ children, darkStatus }) {
  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="phone__notch"></div>
        <StatusBar dark={darkStatus} />
        {children}
      </div>
    </div>
  );
}

function StatusBar({ dark }) {
  return (
    <div className={`statusbar ${dark ? "statusbar--dark" : ""}`}>
      <div>9:41</div>
      <div className="statusbar__icons">
        <i className="ph-fill ph-cell-signal-high"></i>
        <i className="ph-fill ph-wifi-high"></i>
        <i className="ph-fill ph-battery-full"></i>
      </div>
    </div>
  );
}

function BottomNav({ active = "home" }) {
  const items = [
    { id: "home", label: "Início", icon: "house" },
    { id: "search", label: "Buscar", icon: "magnifying-glass" },
    { id: "shops", label: "Empresas", icon: "storefront" },
    { id: "eco", label: "Ecossistema", icon: "users-three" },
    { id: "me", label: "Perfil", icon: "user" },
  ];
  return (
    <div className="bottom-nav">
      {items.map(it => (
        <button key={it.id} className={`bottom-nav__item ${active === it.id ? "is-active" : ""}`}>
          <i className={`${active === it.id ? "ph-fill" : "ph"} ph-${it.icon}`} style={{fontSize: 22}}></i>
          <span className="bottom-nav__label">{it.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- 1. HOME ---------- */
function PhoneHome() {
  return (
    <Phone>
      <div className="app-header">
        <div>
          <div className="app-header__sub">Olá, Marina</div>
          <div className="app-header__title">iGod</div>
        </div>
        <div style={{display:"flex", gap: 8}}>
          <button className="app-header__icon">
            <i className="ph ph-bell" style={{fontSize: 20}}></i>
            <span className="badge badge--notif" style={{position:"absolute", top:-2, right:-2}}>3</span>
          </button>
          <button className="app-header__icon" style={{padding: 0, background:"linear-gradient(135deg,#4A2F52,#1A0F1D)", color:"white", fontFamily:"var(--font-display)", fontWeight: 600, fontSize: 14}}>MS</button>
        </div>
      </div>

      <div className="phone__body">
        {/* Search */}
        <div style={{margin: "8px 16px 14px", display:"flex", gap: 8}}>
          <div style={{flex:1, height: 44, padding:"0 14px 0 40px", background:"var(--bg-elevated)", border:"1px solid var(--hairline)", borderRadius:14, fontSize:13, color:"var(--neutral-500)", display:"flex", alignItems:"center", position:"relative"}}>
            <i className="ph ph-magnifying-glass" style={{position:"absolute", left:14, fontSize:18, color:"var(--neutral-500)"}}></i>
            Buscar no marketplace cristão…
          </div>
          <button style={{width:44, height: 44, background:"var(--plum-800)", color:"var(--sand-50)", border:"none", borderRadius: 14, display:"grid", placeItems:"center"}}>
            <i className="ph-bold ph-sliders-horizontal" style={{fontSize: 18}}></i>
          </button>
        </div>

        <div className="purpose-ticker">
          <div className="purpose-ticker__icon"><i className="ph-fill ph-sparkle" style={{fontSize: 14}}></i></div>
          <div className="purpose-ticker__track">Comprar com quem compartilha seu proposito · fortalecer familias · impulsionar negocios de fe · servir a comunidade</div>
        </div>

        <div className="church-filter">
          {["Todas as igrejas", "Minha igreja", "Batista", "Presbiteriana", "Comunidade"].map((church, i) => (
            <span key={church} className={`church-filter__chip ${i === 1 ? "is-active" : ""}`}>
              {i === 1 && <i className="ph-fill ph-check-circle"></i>}
              {church}
            </span>
          ))}
        </div>

        {/* Categories horizontal */}
        <div className="h-scroll" style={{paddingBottom: 4}}>
          {CATEGORIES.map(c => (
            <div key={c.name} style={{display:"flex", flexDirection:"column", alignItems:"center", gap: 6, minWidth: 64, cursor:"pointer"}}>
              <div style={{width: 56, height: 56, borderRadius: 18, background: c.color, color: c.iconColor, display:"grid", placeItems:"center"}}>
                <i className={`ph-fill ph-${c.icon}`} style={{fontSize: 24}}></i>
              </div>
              <div style={{fontSize: 11, fontWeight: 500, color:"var(--neutral-700)", textAlign:"center"}}>{c.name}</div>
            </div>
          ))}
        </div>

        <div className="worship-card">
          <div className="worship-card__art">
            <i className="ph-fill ph-spotify-logo" style={{fontSize: 28}}></i>
          </div>
          <div className="worship-card__body">
            <div className="worship-card__label">Louvor no Spotify</div>
            <div className="worship-card__title">Manha de fe · playlist iGod</div>
            <div className="worship-card__sub">32 louvores para comecar o dia</div>
          </div>
          <button className="worship-card__play"><i className="ph-fill ph-play" style={{fontSize: 16}}></i></button>
        </div>

        <div className="verse-card">
          <div className="verse-card__head">
            <div className="verse-card__title"><i className="ph ph-book-open-text"></i>Versiculo do dia</div>
            <span className="verse-card__status">Em estudo</span>
          </div>
          <div className="verse-card__text">"Consagre ao Senhor tudo o que voce faz, e os seus planos serao bem-sucedidos." <strong>Proverbios 16:3</strong></div>
        </div>

        {/* Hero */}
        <div className="m-hero">
          <div className="m-hero__spark"></div>
          <div className="m-hero__eyebrow">Esta semana</div>
          <div className="m-hero__title">Empresas verificadas, perto de você.</div>
          <button className="m-hero__cta">Explorar empresas <i className="ph-bold ph-arrow-right"></i></button>
        </div>

        {/* Destaques */}
        <div className="m-section-head">
          <div className="m-section-head__title">Produtos em destaque</div>
          <div className="m-section-head__link">Ver todos <i className="ph ph-caret-right"></i></div>
        </div>
        <div className="m-grid">
          {SAMPLE_PRODUCTS.slice(0,4).map(p => <ProductCard key={p.id} p={p} />)}
        </div>

        {/* Empresas verificadas */}
        <div className="m-section-head">
          <div className="m-section-head__title">Empresas verificadas</div>
          <div className="m-section-head__link">Ver todos <i className="ph ph-caret-right"></i></div>
        </div>
        <div className="h-scroll">
          {COMPANIES.map((c, i) => (
            <div key={i} style={{minWidth: 220, background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 14, display:"flex", flexDirection:"column", alignItems:"flex-start", gap: 10}}>
              <div style={{display:"flex", alignItems:"center", gap: 10, width:"100%"}}>
                <div className="company__logo" style={{background: c.color, width: 44, height: 44, fontSize: 14, borderRadius: 12}}>{c.initial}</div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{fontFamily:"var(--font-display)", fontSize: 13, fontWeight: 600, letterSpacing:"-0.01em", display:"flex", alignItems:"center", gap: 4, lineHeight: 1.2}}>
                    <span style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{c.name}</span>
                    {c.verified && <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:13, flexShrink:0}}></i>}
                  </div>
                  <div style={{fontSize: 11, color:"var(--neutral-500)", marginTop: 2}}>{c.cat}</div>
                </div>
              </div>
              <div style={{display:"flex", gap: 4, fontSize: 11, color:"var(--neutral-500)", alignItems:"center"}}>
                <i className="ph ph-map-pin"></i> {c.city}
              </div>
              <button className="btn btn--sm btn--secondary btn--full" style={{height: 32}}>Ver loja</button>
            </div>
          ))}
        </div>

        <div style={{height: 16}}></div>
      </div>

      <BottomNav active="home" />
    </Phone>
  );
}

/* ---------- 2. LISTAGEM ---------- */
function PhoneListing() {
  const [active, setActive] = useState("Alimentos");
  return (
    <Phone>
      <div className="app-header">
        <button className="app-header__icon"><i className="ph ph-arrow-left" style={{fontSize: 20}}></i></button>
        <div style={{flex:1, textAlign:"center"}}>
          <div className="app-header__title" style={{fontSize: 16}}>Alimentos e bebidas</div>
          <div className="app-header__sub">248 produtos</div>
        </div>
        <button className="app-header__icon"><i className="ph ph-magnifying-glass" style={{fontSize: 20}}></i></button>
      </div>

      <div className="phone__body">
        {/* Filters chips */}
        <div className="h-scroll" style={{padding:"4px 16px 12px"}}>
          {["Filtros", "Igreja: Minha igreja", ...CATEGORIES.slice(0, 6).map(c=>c.name)].map((n, i) => (
            <span key={n} className={`chip ${active === n ? "is-active" : ""}`} onClick={()=>setActive(n)}>
              {i === 0 && <i className="ph-bold ph-sliders-horizontal"></i>}
              {i === 1 && <i className="ph ph-church"></i>}
              {n}
              {i === 0 && <span className="badge--notif badge" style={{minWidth: 16, height: 16, fontSize: 9}}>2</span>}
            </span>
          ))}
        </div>

        {/* Order */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding: "8px 16px", borderTop:"1px solid var(--hairline)", borderBottom:"1px solid var(--hairline)"}}>
          <div style={{fontSize: 12, color:"var(--neutral-600)"}}>
            <strong style={{color:"var(--neutral-900)"}}>42 resultados</strong> em São Paulo, SP
          </div>
          <button style={{background:"none", border:"none", fontSize: 13, color:"var(--ember-600)", fontWeight: 600, display:"flex", alignItems:"center", gap: 4, cursor:"pointer"}}>
            Mais relevantes <i className="ph ph-caret-down"></i>
          </button>
        </div>

        {/* Grid */}
        <div className="m-grid">
          {[...SAMPLE_PRODUCTS, ...SAMPLE_PRODUCTS].slice(0, 6).map((p, i) => <ProductCard key={i} p={p} />)}
        </div>
        <div style={{height: 16}}></div>
      </div>

      <BottomNav active="search" />
    </Phone>
  );
}

/* ---------- 3. PRODUTO ---------- */
function PhoneProduct() {
  return (
    <Phone darkStatus={false}>
      <div className="phone__body">
        <div className="detail-hero">
          <div className="detail-hero__mark">P</div>
          <button className="detail-hero__back"><i className="ph-bold ph-arrow-left" style={{fontSize: 18}}></i></button>
          <button className="detail-hero__fav"><i className="ph-fill ph-heart" style={{fontSize: 18, color:"var(--ember-500)"}}></i></button>
          <div className="detail-hero__dots">
            <div className="detail-hero__dot is-active"></div>
            <div className="detail-hero__dot"></div>
            <div className="detail-hero__dot"></div>
          </div>
        </div>

        <div className="detail-info">
          <div style={{display:"flex", gap:6, marginBottom: 4}}>
            <span className="tag tag--cat-food"><i className="ph ph-bread"></i>Alimentos</span>
            <span className="badge badge--new">Novo</span>
          </div>
          <div className="detail-info__title">Pão de fermentação natural artesanal 500g</div>
          <div className="detail-info__price">
            <span className="detail-info__price-currency">R$</span>
            <span className="detail-info__price-val">18,90</span>
            <span style={{fontSize: 13, color:"var(--neutral-400)", textDecoration:"line-through", marginLeft: 8}}>R$ 24,90</span>
          </div>
        </div>

        <div className="detail-company">
          <div className="company__logo" style={{background: "linear-gradient(135deg,#C95A1B,#7B3613)", width: 44, height: 44, fontSize: 14, borderRadius: 12}}>CP</div>
          <div className="detail-company__body">
            <div className="detail-company__name">Casa do Pão <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize:13}}></i></div>
            <div className="detail-company__meta">Padaria · São Paulo, SP</div>
          </div>
          <button className="detail-company__cta">Ver loja</button>
        </div>

        <div className="detail-desc">
          <div className="detail-desc__title">Sobre este produto</div>
          <p>Pão artesanal de fermentação natural, feito todas as manhãs com farinha orgânica brasileira. Casca crocante, miolo alveolado e sabor profundo. Embalado em papel kraft sem plástico.</p>
        </div>

        <div className="detail-desc" style={{paddingTop: 0}}>
          <div className="detail-desc__title">Você também vai gostar</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 10}}>
            {SAMPLE_PRODUCTS.slice(1, 3).map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>

        <div style={{height: 16}}></div>
      </div>

      {/* CTA fixa fora do scroll, acima da bottom-nav */}
      <div style={{padding: "10px 16px", background: "var(--bg-elevated)", borderTop: "1px solid var(--hairline)", display:"flex", gap: 8, flexShrink: 0}}>
        <button className="btn btn--lg btn--secondary" style={{width: 48, padding: 0, flexShrink: 0}}><i className="ph ph-shopping-bag-open" style={{fontSize: 20}}></i></button>
        <button className="btn btn--lg btn--primary btn--full">
          <i className="ph-bold ph-whatsapp-logo"></i>Falar no WhatsApp
        </button>
      </div>

      <BottomNav active="search" />
    </Phone>
  );
}

/* ---------- 4. PERFIL DE EMPRESA ---------- */
function PhoneCompany() {
  const [tab, setTab] = useState("produtos");
  return (
    <Phone darkStatus>
      <div className="phone__body" style={{paddingTop: 0}}>
        <div className="cover">
          <div className="cover__overlay"></div>
          <button style={{position:"absolute", top: 50, left: 16, width: 40, height: 40, borderRadius: 20, background:"rgba(255,252,246,.24)", color:"white", border:"none", display:"grid", placeItems:"center", backdropFilter:"blur(8px)"}}><i className="ph-bold ph-arrow-left" style={{fontSize: 18}}></i></button>
          <button style={{position:"absolute", top: 50, right: 16, width: 40, height: 40, borderRadius: 20, background:"rgba(255,252,246,.24)", color:"white", border:"none", display:"grid", placeItems:"center", backdropFilter:"blur(8px)"}}><i className="ph ph-dots-three" style={{fontSize: 18}}></i></button>
        </div>

        <div style={{padding:"0 16px", marginTop: -32, position:"relative"}}>
          <div className="company__logo" style={{background: "linear-gradient(135deg,#C95A1B,#7B3613)", width: 72, height: 72, fontSize: 22, borderRadius: 18, border:"3px solid var(--sand-50)"}}>CP</div>
          <div style={{marginTop: 12, fontFamily:"var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing:"-0.02em", display:"flex", alignItems:"center", gap: 6}}>
            Casa do Pão <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize: 18}}></i>
          </div>
          <div style={{display:"flex", gap: 8, alignItems:"center", marginTop: 4, fontSize: 13, color:"var(--neutral-600)"}}>
            <i className="ph ph-bread" style={{color:"var(--ember-600)"}}></i>Padaria artesanal
            <span style={{width:3, height:3, borderRadius:"50%", background:"var(--neutral-400)"}}></span>
            <i className="ph ph-map-pin"></i> São Paulo, SP
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="stat__value">4.9</div>
            <div className="stat__label">★ Avaliação</div>
          </div>
          <div className="stat" style={{borderLeft:"1px solid var(--hairline)", paddingLeft: 16}}>
            <div className="stat__value">2,3 mil</div>
            <div className="stat__label">Vendas</div>
          </div>
          <div className="stat" style={{borderLeft:"1px solid var(--hairline)", paddingLeft: 16}}>
            <div className="stat__value">2018</div>
            <div className="stat__label">Desde</div>
          </div>
        </div>

        <div style={{padding:"0 16px 12px", display:"flex", gap: 8}}>
          <button className="btn btn--md btn--primary btn--full"><i className="ph-bold ph-whatsapp-logo"></i>WhatsApp</button>
          <button className="btn btn--md btn--secondary"><i className="ph ph-heart"></i></button>
          <button className="btn btn--md btn--secondary"><i className="ph ph-share-network"></i></button>
        </div>

        <div className="m-tabs">
          {[["produtos","Produtos"],["sobre","Sobre"],["contato","Contato"]].map(([id, label]) => (
            <button key={id} className={`m-tab ${tab === id ? "is-active" : ""}`} onClick={()=>setTab(id)}>{label}</button>
          ))}
        </div>

        {tab === "produtos" && (
          <div className="m-grid">
            {[...SAMPLE_PRODUCTS, ...SAMPLE_PRODUCTS.slice(0,2)].map((p, i) => <ProductCard key={i} p={p} />)}
          </div>
        )}
        {tab === "sobre" && (
          <div style={{padding: 16, fontSize: 14, lineHeight: 1.6, color:"var(--neutral-700)"}}>
            <p>A Casa do Pão é uma padaria familiar fundada em 2018 por João e Marina, em São Paulo. Nasceu do sonho de oferecer pão de verdade — sem aditivos, com fermentação natural e ingredientes orgânicos. Toda manhã, antes do sol, a massa começa.</p>
            <div className="detail-desc__title" style={{marginTop: 16}}>Compromissos</div>
            <ul style={{paddingLeft: 18, marginTop: 8}}>
              <li>Farinha 100% orgânica brasileira</li>
              <li>Sem conservantes ou açúcar refinado</li>
              <li>10% do lucro destinado ao Lar Esperança</li>
            </ul>
          </div>
        )}
        {tab === "contato" && (
          <div style={{padding: 16, display:"flex", flexDirection:"column", gap: 12}}>
            <div className="list-item" style={{padding: 12, border:"1px solid var(--hairline)", borderRadius:12}}>
              <div className="menu-item__icon menu-item__icon--ember"><i className="ph-fill ph-whatsapp-logo"></i></div>
              <div className="list-item__body">
                <div className="list-item__title">(11) 98765-4321</div>
                <div className="list-item__sub">Atendimento 8h–18h</div>
              </div>
              <i className="ph ph-caret-right list-item__arrow"></i>
            </div>
            <div className="list-item" style={{padding: 12, border:"1px solid var(--hairline)", borderRadius:12}}>
              <div className="menu-item__icon"><i className="ph ph-map-pin"></i></div>
              <div className="list-item__body">
                <div className="list-item__title">R. das Oliveiras, 245 · Vila Madalena</div>
                <div className="list-item__sub">São Paulo, SP · 05435-000</div>
              </div>
              <i className="ph ph-caret-right list-item__arrow"></i>
            </div>
          </div>
        )}
        <div style={{height: 16}}></div>
      </div>

      <BottomNav active="shops" />
    </Phone>
  );
}

/* ---------- 5. CARRINHO ---------- */
function PhoneCart() {
  const [items, setItems] = useState([
    { ...SAMPLE_PRODUCTS[0], qty: 2 },
    { ...SAMPLE_PRODUCTS[2], qty: 1 },
    { ...SAMPLE_PRODUCTS[3], qty: 1 },
  ]);
  const setQty = (id, delta) => setItems(items.map(it => it.id === id ? {...it, qty: Math.max(1, it.qty + delta)} : it));

  const subtotal = items.reduce((s, it) => s + Number(it.price[1]) * it.qty, 0);

  return (
    <Phone>
      <div className="app-header">
        <button className="app-header__icon"><i className="ph ph-arrow-left" style={{fontSize: 20}}></i></button>
        <div className="app-header__title">Sua sacola</div>
        <div style={{width: 40}}></div>
      </div>

      <div className="phone__body">
        <div style={{padding: "0 16px 8px"}}>
          <div style={{padding: "10px 12px", background:"var(--ember-50)", borderRadius: 10, fontSize: 12, color:"var(--ember-700)", display:"flex", alignItems:"center", gap: 8}}>
            <i className="ph-fill ph-spark" style={{fontSize: 16}}></i>
            <span>Você está a <strong>R$ 52,30</strong> do frete grátis</span>
          </div>
        </div>

        {items.map(it => (
          <div className="cart-row" key={it.id}>
            <div className="cart-row__img" style={{background: it.bg}}>{it.letter}</div>
            <div className="cart-row__body">
              <div className="cart-row__name">{it.name}</div>
              <div className="cart-row__company">
                <i className="ph-fill ph-seal-check" style={{color:"var(--success-500)", fontSize: 12}}></i>
                {it.company}
              </div>
              <div className="cart-row__bottom">
                <span className="price-tag">
                  <span className="price-tag__currency">R$</span>
                  <span className="price-tag__value" style={{fontSize: 16}}>{it.price[1]}</span>
                  <span className="price-tag__cents">,{it.price[2]}</span>
                </span>
                <div className="qty">
                  <button onClick={()=>setQty(it.id, -1)}><i className="ph-bold ph-minus" style={{fontSize: 12}}></i></button>
                  <span className="qty__val">{it.qty}</span>
                  <button onClick={()=>setQty(it.id, +1)}><i className="ph-bold ph-plus" style={{fontSize: 12}}></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="summary">
          <div className="summary__row"><span>Subtotal · {items.length} itens</span><span>R$ {subtotal.toFixed(2).replace(".", ",")}</span></div>
          <div className="summary__row"><span>Frete</span><span style={{color:"var(--success-500)"}}>A calcular</span></div>
          <div className="summary__row"><span>Desconto iGod</span><span style={{color:"var(--ember-600)"}}>−R$ 12,00</span></div>
          <div className="summary__row summary__row--total"><span>Total</span><span>R$ {(subtotal - 12).toFixed(2).replace(".", ",")}</span></div>
        </div>

        <div style={{padding: "0 16px 16px"}}>
          <button className="btn btn--lg btn--primary btn--full">Finalizar compra <i className="ph-bold ph-arrow-right"></i></button>
        </div>
      </div>

      <BottomNav active="me" />
    </Phone>
  );
}

/* ---------- 6. CHECKOUT ---------- */
function PhoneCheckout() {
  const [step, setStep] = useState(2);
  const [pay, setPay] = useState("pix");

  return (
    <Phone>
      <div className="app-header">
        <button className="app-header__icon"><i className="ph ph-arrow-left" style={{fontSize: 20}}></i></button>
        <div className="app-header__title">Finalizar compra</div>
        <div style={{width: 40}}></div>
      </div>

      <div className="phone__body">
        {/* Progress */}
        <div style={{padding: "10px 16px", display:"flex", alignItems:"center", gap: 6}}>
          {[1,2,3].map(s => (
            <React.Fragment key={s}>
              <div style={{width: 24, height: 24, borderRadius: 12, background: s <= step ? "var(--plum-800)" : "var(--neutral-200)", color: s <= step ? "white" : "var(--neutral-500)", display:"grid", placeItems:"center", fontSize: 12, fontWeight: 600}}>
                {s < step ? <i className="ph-bold ph-check" style={{fontSize: 12}}></i> : s}
              </div>
              {s < 3 && <div style={{flex:1, height: 2, background: s < step ? "var(--plum-800)" : "var(--neutral-200)"}}></div>}
            </React.Fragment>
          ))}
        </div>

        <div style={{padding: "0 16px 8px", fontSize: 11, color: "var(--neutral-500)", display:"flex", justifyContent:"space-between"}}>
          <span>Endereço</span>
          <span style={{color:"var(--neutral-900)", fontWeight: 600}}>Pagamento</span>
          <span>Revisão</span>
        </div>

        <div style={{padding: "12px 16px 4px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: "var(--neutral-500)", textTransform:"uppercase"}}>Entrega em</div>
        <div className="address-card">
          <div className="address-card__icon"><i className="ph ph-house-line" style={{fontSize: 18}}></i></div>
          <div className="address-card__body">
            <div className="address-card__title">Casa · Marina Souza</div>
            <div className="address-card__sub">R. das Acácias, 184 · Pinheiros · São Paulo, SP</div>
          </div>
          <button className="btn btn--icon btn--sm btn--ghost btn--circle"><i className="ph ph-pencil-simple"></i></button>
        </div>

        <div style={{padding: "12px 16px 4px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: "var(--neutral-500)", textTransform:"uppercase"}}>Forma de pagamento</div>

        {[
          { id: "pix", icon: "ph-fill ph-currency-circle-dollar", iconColor: "var(--success-500)", iconBg: "var(--success-50)", name: "Pix", sub: "5% de desconto · aprovação imediata" },
          { id: "card", icon: "ph-fill ph-credit-card", iconColor: "var(--plum-700)", iconBg: "var(--plum-100)", name: "Cartão de crédito", sub: "Até 3x sem juros · •••• 4521" },
          { id: "whatsapp", icon: "ph-fill ph-whatsapp-logo", iconColor: "var(--ember-600)", iconBg: "var(--ember-50)", name: "Combinar com a empresa", sub: "Boleto, transferência ou outros" },
        ].map(opt => (
          <div key={opt.id} className="pay-opt" onClick={()=>setPay(opt.id)} style={{background: pay === opt.id ? "var(--sand-100)" : "transparent"}}>
            <div className="pay-opt__icon" style={{background: opt.iconBg, color: opt.iconColor}}>
              <i className={opt.icon} style={{fontSize: 20}}></i>
            </div>
            <div className="pay-opt__body">
              <div className="pay-opt__name">{opt.name}</div>
              <div className="pay-opt__sub">{opt.sub}</div>
            </div>
            <div style={{width: 22, height: 22, borderRadius: "50%", border: `1.5px solid ${pay === opt.id ? "var(--ember-500)" : "var(--neutral-300)"}`, background: pay === opt.id ? "var(--ember-500)" : "transparent", display:"grid", placeItems:"center"}}>
              {pay === opt.id && <span style={{width: 8, height: 8, borderRadius:"50%", background:"white"}}></span>}
            </div>
          </div>
        ))}

        <div className="summary">
          <div className="summary__row"><span>Total da compra</span><span style={{fontWeight:600}}>R$ 56,80</span></div>
          <div className="summary__row" style={{color:"var(--success-500)"}}><span>Desconto Pix (5%)</span><span>−R$ 2,84</span></div>
          <div className="summary__row summary__row--total"><span>Você paga</span><span>R$ 53,96</span></div>
        </div>

        <div style={{padding: "0 16px 16px"}}>
          <button className="btn btn--lg btn--primary btn--full">Confirmar e pagar com Pix</button>
          <div style={{fontSize: 11, color:"var(--neutral-500)", textAlign:"center", marginTop: 8, lineHeight: 1.5}}>
            Ao continuar você concorda com os <strong style={{color:"var(--neutral-700)"}}>Termos da iGod</strong>.
          </div>
        </div>
      </div>

      <BottomNav active="me" />
    </Phone>
  );
}

/* ---------- 7. PERFIL DO USUÁRIO ---------- */
function PhoneProfile() {
  return (
    <Phone>
      <div className="app-header">
        <div className="app-header__title">Perfil</div>
        <button className="app-header__icon"><i className="ph ph-gear" style={{fontSize: 20}}></i></button>
      </div>

      <div className="phone__body">
        <div className="profile-head">
          <div className="avatar avatar--lg" style={{background:"linear-gradient(135deg,#4A2F52,#1A0F1D)", color:"white"}}>
            MS
            <span className="avatar__verify"><i className="ph-fill ph-check" style={{fontSize: 14}}></i></span>
          </div>
          <div className="profile-head__body">
            <div className="profile-head__name">Marina Souza</div>
            <div className="profile-head__email">marina@igreja.com.br</div>
            <div style={{marginTop: 4}}>
              <span className="badge badge--featured" style={{height: 18}}>Membro iGod desde 2024</span>
            </div>
          </div>
        </div>

        <div className="stats" style={{paddingTop: 4}}>
          <div className="stat">
            <div className="stat__value">12</div>
            <div className="stat__label">Pedidos</div>
          </div>
          <div className="stat" style={{borderLeft:"1px solid var(--hairline)", paddingLeft: 16}}>
            <div className="stat__value">28</div>
            <div className="stat__label">Favoritos</div>
          </div>
          <div className="stat" style={{borderLeft:"1px solid var(--hairline)", paddingLeft: 16}}>
            <div className="stat__value">R$ 87</div>
            <div className="stat__label">Doados em causas</div>
          </div>
        </div>

        <div style={{padding: "12px 16px 4px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: "var(--neutral-500)", textTransform:"uppercase"}}>Minha conta</div>
        {[
          { icon: "shopping-bag", iconType: "ember", name: "Meus pedidos", sub: "3 em andamento" },
          { icon: "heart", iconType: "ember", name: "Favoritos", sub: "28 produtos salvos" },
          { icon: "map-pin", iconType: "neutral", name: "Endereços", sub: "2 endereços" },
          { icon: "credit-card", iconType: "neutral", name: "Métodos de pagamento", sub: "Pix · Mastercard •••• 4521" },
        ].map((m, i) => (
          <div key={i} className="menu-item">
            <div className={`menu-item__icon menu-item__icon--${m.iconType === "ember" ? "ember" : ""}`}>
              <i className={`ph ph-${m.icon}`} style={{fontSize: 18}}></i>
            </div>
            <div>
              <div className="menu-item__title">{m.name}</div>
              <div style={{fontSize: 12, color:"var(--neutral-500)"}}>{m.sub}</div>
            </div>
            <i className="ph ph-caret-right menu-item__arrow" style={{marginLeft:"auto"}}></i>
          </div>
        ))}

        <div style={{padding: "16px 16px 4px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: "var(--neutral-500)", textTransform:"uppercase"}}>Ecossistema iGod</div>
        {[
          { icon: "storefront", iconType: "plum", name: "Tornar-se empresa parceira", sub: "Vender no marketplace" },
          { icon: "hand-heart", iconType: "plum", name: "Doar para causas", sub: "12 causas verificadas" },
          { icon: "users-three", iconType: "plum", name: "Mentoria e comunidade", sub: "Em breve" },
        ].map((m, i) => (
          <div key={i} className="menu-item">
            <div className="menu-item__icon menu-item__icon--plum">
              <i className={`ph ph-${m.icon}`} style={{fontSize: 18}}></i>
            </div>
            <div>
              <div className="menu-item__title">{m.name}</div>
              <div style={{fontSize: 12, color:"var(--neutral-500)"}}>{m.sub}</div>
            </div>
            <i className="ph ph-caret-right menu-item__arrow" style={{marginLeft:"auto"}}></i>
          </div>
        ))}

        <div style={{padding: 16, marginTop: 8}}>
          <button className="btn btn--md btn--ghost btn--full" style={{color:"var(--error-500)"}}><i className="ph ph-sign-out"></i>Sair da conta</button>
        </div>
      </div>

      <BottomNav active="me" />
    </Phone>
  );
}

/* ---------- MOCKUPS SECTION ---------- */
function MockupsSection() {
  const screens = [
    { num: "01", name: "Home", comp: PhoneHome },
    { num: "02", name: "Listagem de produtos", comp: PhoneListing },
    { num: "03", name: "Página de produto", comp: PhoneProduct },
    { num: "04", name: "Perfil de empresa", comp: PhoneCompany },
    { num: "05", name: "Carrinho", comp: PhoneCart },
    { num: "06", name: "Checkout", comp: PhoneCheckout },
    { num: "07", name: "Perfil do usuário", comp: PhoneProfile },
  ];

  const [focus, setFocus] = useState(null);
  const Focus = focus ? screens[focus].comp : null;

  return (
    <>
      <SectionHead
        eyebrow="Mockups Mobile"
        title="Telas completas"
        desc="Sete telas do MVP montadas com os componentes do sistema. Cada uma é interativa — clique nos botões, navegue entre abas, ajuste a sacola. Toque em uma tela para abrir em destaque."
      />

      <div className="section">
        <div className="screens-grid">
          {screens.map((s, i) => {
            const Comp = s.comp;
            return (
              <div className="screen-card" key={s.num}>
                <div className="screen-card__num">{s.num}</div>
                <div onClick={()=>setFocus(i)} style={{cursor:"zoom-in", transform:"scale(.7)", transformOrigin: "top center", margin:"-114px -56px -180px"}}>
                  <Comp />
                </div>
                <div className="screen-card__name">{s.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {focus !== null && (
        <div style={{position:"fixed", inset:0, background:"rgba(26,15,29,.78)", zIndex: 200, display:"flex", alignItems:"center", justifyContent:"center", padding: 32, backdropFilter:"blur(8px)"}}
             onClick={()=>setFocus(null)}>
          <div onClick={e=>e.stopPropagation()} style={{display:"flex", flexDirection:"column", alignItems:"center", gap: 16}}>
            <div style={{color:"var(--sand-50)", display:"flex", alignItems:"center", gap: 12, fontFamily:"var(--font-display)", fontSize: 16, fontWeight: 600}}>
              <span style={{fontFamily:"var(--font-mono)", fontSize: 12, opacity: .6}}>{screens[focus].num}</span>
              {screens[focus].name}
            </div>
            <Focus />
            <button onClick={()=>setFocus(null)} style={{background:"rgba(255,252,246,.1)", border:"1px solid rgba(255,252,246,.2)", color:"var(--sand-50)", padding:"8px 16px", borderRadius: 999, cursor:"pointer", fontSize: 13, fontWeight: 500}}>Fechar (Esc)</button>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, {
  Phone, BottomNav,
  PhoneHome, PhoneListing, PhoneProduct, PhoneCompany,
  PhoneCart, PhoneCheckout, PhoneProfile, MockupsSection
});
