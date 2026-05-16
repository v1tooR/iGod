/* ============================================================
   Atoms — Botões, Inputs, Tags, Avatares, Dividers
   ============================================================ */

/* ---------- BUTTONS ---------- */
function ButtonsSection() {
  return (
    <>
      <SectionHead
        eyebrow="Átomos / 01"
        title="Botões"
        desc="A brasa é primária — sempre quando uma única ação principal precisa ser óbvia. Secundários e ghosts conversam no fundo. Destrutivos só aparecem em fluxos de remoção/cancelamento."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Variantes</div>
          <div className="demo">
            <button className="btn btn--md btn--primary">Falar no WhatsApp</button>
            <button className="btn btn--md btn--secondary">Ver detalhes</button>
            <button className="btn btn--md btn--ghost">Cancelar</button>
            <button className="btn btn--md btn--dark">Compartilhar</button>
            <button className="btn btn--md btn--destructive">Remover dos favoritos</button>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Tamanhos · SM · MD · LG</div>
          <div className="demo">
            <button className="btn btn--sm btn--primary">Comprar</button>
            <button className="btn btn--md btn--primary">Comprar</button>
            <button className="btn btn--lg btn--primary">Comprar</button>
            <span style={{width:24}}></span>
            <button className="btn btn--sm btn--secondary">Salvar</button>
            <button className="btn btn--md btn--secondary">Salvar</button>
            <button className="btn btn--lg btn--secondary">Salvar</button>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Estados — primary MD</div>
          <div className="demo">
            <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start"}}>
              <button className="btn btn--md btn--primary">Default</button>
              <div className="mono" style={{color:"var(--neutral-500)"}}>default</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start"}}>
              <button className="btn btn--md btn--primary" style={{background:"var(--ember-600)"}}>Hover</button>
              <div className="mono" style={{color:"var(--neutral-500)"}}>hover</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start"}}>
              <button className="btn btn--md btn--primary" style={{background:"var(--ember-700)", transform: "scale(.97)"}}>Active</button>
              <div className="mono" style={{color:"var(--neutral-500)"}}>active</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start"}}>
              <button className="btn btn--md btn--primary" style={{boxShadow:"var(--shadow-focus)"}}>Focus</button>
              <div className="mono" style={{color:"var(--neutral-500)"}}>focus</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start"}}>
              <button className="btn btn--md btn--primary" disabled>Disabled</button>
              <div className="mono" style={{color:"var(--neutral-500)"}}>disabled</div>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Ícone + texto · Icon-only · Loading · Full-width</div>
          <div className="demo demo--column">
            <div style={{display:"flex", gap:12, flexWrap:"wrap", alignItems:"center"}}>
              <button className="btn btn--md btn--primary"><i className="ph-bold ph-whatsapp-logo"></i>Falar no WhatsApp</button>
              <button className="btn btn--md btn--secondary">Adicionar à sacola<i className="ph ph-arrow-right"></i></button>
              <button className="btn btn--md btn--dark"><i className="ph ph-share-network"></i>Compartilhar</button>
            </div>
            <div style={{display:"flex", gap:12, alignItems:"center"}}>
              <button className="btn btn--icon btn--md btn--primary btn--circle"><i className="ph-bold ph-plus"></i></button>
              <button className="btn btn--icon btn--md btn--secondary btn--circle"><i className="ph ph-heart"></i></button>
              <button className="btn btn--icon btn--md btn--ghost btn--circle"><i className="ph ph-dots-three"></i></button>
              <button className="btn btn--icon btn--lg btn--dark btn--circle"><i className="ph-bold ph-arrow-up"></i></button>
            </div>
            <div style={{display:"flex", gap:12, alignItems:"center"}}>
              <button className="btn btn--md btn--primary" disabled><span className="btn__spinner"></span>Processando…</button>
              <button className="btn btn--md btn--secondary" disabled><span className="btn__spinner"></span>Carregando</button>
            </div>
            <div style={{width:340, padding: 16, background: "var(--sand-100)", borderRadius: "var(--radius-md)"}}>
              <button className="btn btn--lg btn--primary btn--full">Finalizar compra · R$ 248,90</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- INPUTS ---------- */
function InputsSection() {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("padaria@casadopao.com.br");
  const [v3, setV3] = useState("123");
  const [v4, setV4] = useState("Pão integral artesanal");
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [radio, setRadio] = useState("a");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <SectionHead
        eyebrow="Átomos / 02"
        title="Inputs e formulários"
        desc="Inputs com altura confortável de toque (44px). Foco com brasa-glow suave. Mensagens de erro abaixo do campo, nunca à direita — preserva o ritmo vertical em mobile."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Text input — estados</div>
          <div className="demo demo--grid" style={{gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))"}}>
            <div className="field">
              <label className="field__label">Nome da empresa</label>
              <div className="input-wrap">
                <input className="input" placeholder="Ex.: Casa do Pão" value={v1} onChange={e=>setV1(e.target.value)} />
              </div>
              <span className="field__hint">Aparece no perfil público</span>
            </div>

            <div className="field">
              <label className="field__label">E-mail</label>
              <div className="input-wrap">
                <span className="input-wrap__icon"><i className="ph ph-envelope" style={{fontSize:18}}></i></span>
                <input className="input input--icon-left" value={v2} onChange={e=>setV2(e.target.value)} />
              </div>
              <span className="field__hint field__hint--success">E-mail verificado</span>
            </div>

            <div className="field">
              <label className="field__label">CEP</label>
              <div className="input-wrap">
                <input className="input input--error" value={v3} onChange={e=>setV3(e.target.value)} />
              </div>
              <span className="field__hint field__hint--error">CEP inválido — use 8 dígitos</span>
            </div>

            <div className="field">
              <label className="field__label">Razão social</label>
              <div className="input-wrap">
                <input className="input" placeholder="Preencha após o cadastro do CNPJ" disabled />
              </div>
              <span className="field__hint">Bloqueado até validação</span>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Textarea · Select · Search</div>
          <div className="demo demo--grid" style={{gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))"}}>
            <div className="field">
              <label className="field__label">Descrição do produto</label>
              <textarea className="input" defaultValue="Pão de fermentação natural, feito artesanalmente todas as manhãs com farinha orgânica."></textarea>
              <span className="field__hint">120 / 280 caracteres</span>
            </div>
            <div className="field">
              <label className="field__label">Categoria</label>
              <div className="select-wrap">
                <select className="input">
                  <option>Alimentos e bebidas</option>
                  <option>Serviços</option>
                  <option>Tecnologia</option>
                  <option>Educação cristã</option>
                  <option>Causas</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="field__label">Buscar produtos</label>
              <div className="input-wrap">
                <span className="input-wrap__icon"><i className="ph ph-magnifying-glass" style={{fontSize:18}}></i></span>
                <input className="input input--icon-left input--icon-right" placeholder="Pão, doces, devocional…" value={search} onChange={e=>setSearch(e.target.value)} />
                {search && (
                  <span className="input-wrap__icon input-wrap__icon--right" onClick={()=>setSearch("")}>
                    <i className="ph ph-x-circle" style={{fontSize:18}}></i>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Checkbox · Radio · Toggle</div>
          <div className="demo">
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              <div className="mono" style={{color:"var(--neutral-500)", marginBottom:4}}>Checkbox</div>
              <label className="choice">
                <input type="checkbox" checked={check1} onChange={()=>setCheck1(!check1)} />
                <span className="choice__box">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 7 6 10 11 4"/></svg>
                </span>
                Receber novidades por e-mail
              </label>
              <label className="choice">
                <input type="checkbox" checked={check2} onChange={()=>setCheck2(!check2)} />
                <span className="choice__box">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 7 6 10 11 4"/></svg>
                </span>
                Aceito os Termos de Uso
              </label>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:12, marginLeft: 32}}>
              <div className="mono" style={{color:"var(--neutral-500)", marginBottom:4}}>Radio</div>
              {["a","b","c"].map((id, i) => (
                <label className="choice" key={id}>
                  <input type="radio" name="r" checked={radio===id} onChange={()=>setRadio(id)} />
                  <span className="choice__box choice__box--radio"></span>
                  {["Retirar na loja", "Receber em casa", "Doação"][i]}
                </label>
              ))}
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:14, marginLeft: 32}}>
              <div className="mono" style={{color:"var(--neutral-500)", marginBottom:4}}>Toggle</div>
              <label style={{display:"flex", alignItems:"center", gap:12, cursor:"pointer", fontSize:14}}>
                <span className={`toggle ${toggle1 ? "is-on" : ""}`} onClick={()=>setToggle1(!toggle1)}></span>
                Empresa verificada visível no perfil
              </label>
              <label style={{display:"flex", alignItems:"center", gap:12, cursor:"pointer", fontSize:14}}>
                <span className={`toggle ${toggle2 ? "is-on" : ""}`} onClick={()=>setToggle2(!toggle2)}></span>
                Aceitar pagamentos via Pix
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- TAGS / BADGES ---------- */
function TagsSection() {
  return (
    <>
      <SectionHead
        eyebrow="Átomos / 03"
        title="Tags e Badges"
        desc="Tags carregam categoria — cor por classe semântica, nunca decorativa. Badges marcam estado e destaque. O laranja brasa fica para 'Novo', porque é onde a energia da marca importa."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Category tags</div>
          <div className="demo">
            <span className="tag tag--cat-food"><i className="ph ph-bread"></i>Alimentos</span>
            <span className="tag tag--cat-svc"><i className="ph ph-wrench"></i>Serviços</span>
            <span className="tag tag--cat-tech"><i className="ph ph-cpu"></i>Tecnologia</span>
            <span className="tag tag--cat-edu"><i className="ph ph-book-open"></i>Educação</span>
            <span className="tag tag--cat-cause"><i className="ph ph-hand-heart"></i>Causas</span>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Status badges</div>
          <div className="demo">
            <span className="badge badge--new">Novo</span>
            <span className="badge badge--verified"><i className="ph-fill ph-seal-check"></i>Verificado</span>
            <span className="badge badge--featured">Destaque</span>
            <span className="badge badge--active">Ativo</span>
            <span className="badge badge--pending">Pendente</span>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Price tag</div>
          <div className="demo">
            <span className="price-tag">
              <span className="price-tag__currency">R$</span>
              <span className="price-tag__value">48</span>
              <span className="price-tag__cents">,90</span>
            </span>
            <span style={{display:"inline-flex", alignItems:"baseline", gap:8}}>
              <span style={{fontSize:13, color:"var(--neutral-400)", textDecoration:"line-through"}}>R$ 64,90</span>
              <span className="price-tag">
                <span className="price-tag__currency">R$</span>
                <span className="price-tag__value">48</span>
                <span className="price-tag__cents">,90</span>
              </span>
              <span className="badge" style={{background:"var(--ember-500)", color:"white"}}>-25%</span>
            </span>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Notification badge</div>
          <div className="demo">
            <div style={{position:"relative", display:"inline-block"}}>
              <button className="btn btn--icon btn--md btn--secondary btn--circle"><i className="ph ph-bell"></i></button>
              <span className="badge badge--notif" style={{position:"absolute", top:-4, right:-4}}>3</span>
            </div>
            <div style={{position:"relative", display:"inline-block"}}>
              <button className="btn btn--icon btn--md btn--secondary btn--circle"><i className="ph ph-shopping-bag"></i></button>
              <span className="badge badge--notif" style={{position:"absolute", top:-4, right:-4}}>12</span>
            </div>
            <div style={{position:"relative", display:"inline-block"}}>
              <button className="btn btn--icon btn--md btn--secondary btn--circle"><i className="ph ph-chat-circle"></i></button>
              <span className="badge badge--notif" style={{position:"absolute", top:-4, right:-4, background:"var(--success-500)"}}>2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- AVATARS ---------- */
function AvatarsSection() {
  const cores = [
    "linear-gradient(135deg, var(--plum-600), var(--plum-800))",
    "linear-gradient(135deg, var(--ember-400), var(--ember-600))",
    "linear-gradient(135deg, #2D7A4F, #1F5736)",
    "linear-gradient(135deg, #2C5F87, #1B405E)",
  ];

  function avatar({ size, initials, bg, verified, status }) {
    return (
      <div className={`avatar avatar--${size}`} style={{background: bg, color: "white"}}>
        {initials}
        {verified && <span className="avatar__verify"><i className="ph-fill ph-check" style={{fontSize: size === "sm" ? 8 : size === "md" ? 11 : size === "lg" ? 16 : 22}}></i></span>}
        {status && <span className={`avatar__status ${status === "off" ? "avatar__status--off" : ""}`}></span>}
      </div>
    );
  }

  return (
    <>
      <SectionHead
        eyebrow="Átomos / 04"
        title="Avatares"
        desc="Iniciais com gradient warm em ausência de foto. Verificação aparece como selo brasa no canto inferior — sinal claro de empresa autenticada na iGod."
      />

      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Tamanhos · com foto</div>
          <div className="demo" style={{alignItems:"center"}}>
            <div className="avatar avatar--sm"><img className="avatar__img" alt="" src="https://i.pravatar.cc/96?img=14"/></div>
            <div className="avatar avatar--md"><img className="avatar__img" alt="" src="https://i.pravatar.cc/96?img=14"/></div>
            <div className="avatar avatar--lg"><img className="avatar__img" alt="" src="https://i.pravatar.cc/96?img=14"/></div>
            <div className="avatar avatar--xl"><img className="avatar__img" alt="" src="https://i.pravatar.cc/192?img=14"/></div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Iniciais (fallback)</div>
          <div className="demo" style={{alignItems:"center"}}>
            {avatar({size: "sm", initials: "JS", bg: cores[0]})}
            {avatar({size: "md", initials: "MC", bg: cores[1]})}
            {avatar({size: "lg", initials: "PA", bg: cores[2]})}
            {avatar({size: "xl", initials: "RD", bg: cores[3]})}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Com selo de verificação</div>
          <div className="demo" style={{alignItems:"center"}}>
            {avatar({size: "md", initials: "CP", bg: cores[0], verified: true})}
            {avatar({size: "lg", initials: "JM", bg: cores[1], verified: true})}
            {avatar({size: "xl", initials: "AB", bg: cores[2], verified: true})}
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Com status online</div>
          <div className="demo" style={{alignItems:"center"}}>
            {avatar({size: "md", initials: "LF", bg: cores[3], status: "on"})}
            {avatar({size: "lg", initials: "SA", bg: cores[0], status: "on"})}
            {avatar({size: "lg", initials: "TR", bg: cores[1], status: "off"})}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- DIVIDERS ---------- */
function DividersSection() {
  return (
    <>
      <SectionHead
        eyebrow="Átomos / 05"
        title="Dividers"
        desc="Hairlines warm em vez de cinza puro. Divider com label aparece em formulários de autenticação e separação de seções em listas."
      />
      <div className="section">
        <div className="subsection">
          <div className="subsection__title">Horizontal</div>
          <div className="demo demo--column">
            <div style={{padding: 0, width: "100%"}}>
              <p style={{padding: "8px 0", fontSize: 14, color: "var(--neutral-700)"}}>Produtos em destaque</p>
              <hr className="divider" />
              <p style={{padding: "8px 0", fontSize: 14, color: "var(--neutral-700)"}}>Empresas verificadas</p>
              <hr className="divider" />
              <p style={{padding: "8px 0", fontSize: 14, color: "var(--neutral-700)"}}>Mais recentes</p>
            </div>
          </div>
        </div>

        <div className="subsection">
          <div className="subsection__title">Com label</div>
          <div className="demo demo--column">
            <div style={{width:"100%", maxWidth: 400}}>
              <button className="btn btn--lg btn--primary btn--full" style={{marginBottom: 16}}>Entrar com e-mail</button>
              <div className="divider divider--with-label">ou continue com</div>
              <div style={{display:"flex", gap: 10, marginTop: 16}}>
                <button className="btn btn--md btn--secondary btn--full"><i className="ph ph-google-logo"></i>Google</button>
                <button className="btn btn--md btn--secondary btn--full"><i className="ph ph-apple-logo"></i>Apple</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  ButtonsSection, InputsSection, TagsSection, AvatarsSection, DividersSection
});
