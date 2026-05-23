/* ============================================================
   Desktop Mockups — 3 telas web (Home, Empresa, Dashboard)
   ============================================================ */

/* ---------- iGod Browser chrome (light, on-brand) ---------- */
function IGBrowser({ url = "igod.com.br", children, width = 1200, height = 760 }) {
  return (
    <div style={{
      width, height,
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 30px 80px -20px rgba(26,15,29,.35), 0 0 0 1px var(--hairline-strong)",
      display: "flex",
      flexDirection: "column",
      background: "#E9E5DD",
    }}>
      <div style={{height: 44, background: "#E9E5DD", display: "flex", alignItems: "center", padding: "0 16px", gap: 14, borderBottom: "1px solid rgba(33,31,29,.08)"}}>
        <div style={{display: "flex", gap: 8}}>
          <div style={{width: 12, height: 12, borderRadius: "50%", background: "#FF5F57"}}></div>
          <div style={{width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E"}}></div>
          <div style={{width: 12, height: 12, borderRadius: "50%", background: "#28C840"}}></div>
        </div>
        <div style={{display: "flex", gap: 8, color: "var(--neutral-500)", fontSize: 14}}>
          <i className="ph ph-caret-left"></i>
          <i className="ph ph-caret-right"></i>
          <i className="ph ph-arrow-clockwise"></i>
        </div>
        <div style={{flex: 1, height: 28, background: "var(--bg-elevated)", borderRadius: 8, display: "flex", alignItems: "center", padding: "0 12px", gap: 8, border: "1px solid var(--hairline)", fontSize: 12, color: "var(--neutral-700)"}}>
          <i className="ph ph-lock-key" style={{color: "var(--success-500)"}}></i>
          <span style={{color: "var(--neutral-500)"}}>https://</span>
          <span style={{fontWeight: 500}}>{url}</span>
        </div>
        <div style={{display: "flex", gap: 10, color: "var(--neutral-500)", fontSize: 14}}>
          <i className="ph ph-share"></i>
          <i className="ph ph-plus"></i>
          <i className="ph ph-copy"></i>
        </div>
      </div>
      <div style={{flex: 1, background: "var(--sand-50)", overflow: "auto"}}>
        {children}
      </div>
    </div>
  );
}

/* ---------- Top nav (igod.com.br) ---------- */
function SiteNav({ light = true }) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", gap: 32,
      padding: "16px 40px",
      background: light ? "var(--sand-50)" : "var(--plum-800)",
      color: light ? "var(--neutral-900)" : "var(--sand-50)",
      borderBottom: light ? "1px solid var(--hairline)" : "none"
    }}>
      <img src="assets/igod-logo.png" alt="iGod" style={{height: 32, filter: light ? "none" : "brightness(0) invert(1)"}} />
      <div style={{display: "flex", gap: 24, fontSize: 14, fontWeight: 500, flex: 1}}>
        {["Categorias", "Empresas", "Causas", "Mentorias", "Para empresários"].map(l => (
          <a key={l} style={{cursor: "pointer", opacity: l === "Categorias" ? 1 : .7}}>{l}</a>
        ))}
      </div>
      <div style={{flex: "0 1 320px", height: 38, background: light ? "var(--bg-elevated)" : "rgba(255,252,246,.08)", border: light ? "1px solid var(--hairline)" : "1px solid rgba(255,252,246,.16)", borderRadius: 10, display: "flex", alignItems: "center", padding: "0 12px", gap: 8, fontSize: 13, color: light ? "var(--neutral-500)" : "rgba(255,252,246,.6)"}}>
        <i className="ph ph-magnifying-glass"></i>
        Buscar produtos, serviços, empresas…
      </div>
      <div style={{display: "flex", gap: 12, alignItems: "center"}}>
        <button style={{background: "none", border: "none", color: "inherit", fontSize: 14, fontWeight: 500, cursor: "pointer"}}>Entrar</button>
        <button className="btn btn--md btn--primary">Anuncie sua empresa</button>
      </div>
    </nav>
  );
}

function PurposeTickerBar() {
  return (
    <div style={{height: 36, background: "var(--success-500)", color: "white", display: "flex", alignItems: "center", overflow: "hidden", fontSize: 13, fontWeight: 700}}>
      <div style={{whiteSpace: "nowrap", animation: "ticker-slide 22s linear infinite"}}>
        Comprar com quem compartilha seu proposito · fortalecer familias · impulsionar negocios de fe · conectar igrejas, empresas e causas · Comprar com quem compartilha seu proposito
      </div>
    </div>
  );
}

/* ============================================================
   1. MARKETPLACE HOME (igod.com.br)
   ============================================================ */
function DesktopHome() {
  return (
    <IGBrowser url="igod.com.br">
      <SiteNav light />
      <PurposeTickerBar />

      {/* Hero */}
      <div style={{padding: "56px 40px 48px", background: "var(--plum-800)", color: "var(--sand-50)", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,113,42,.22), transparent 65%)"}}></div>
        <div style={{display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center", maxWidth: 1120, margin: "0 auto", position: "relative"}}>
          <div>
            <div className="eyebrow" style={{color: "var(--ember-300)"}}>O ecossistema cristão</div>
            <h1 style={{fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.05, marginTop: 14, maxWidth: 600, color: "var(--sand-50)"}}>
              Comprar com quem compartilha o seu propósito.
            </h1>
            <p style={{fontSize: 17, opacity: .8, marginTop: 20, lineHeight: 1.55, maxWidth: 460}}>
              Produtos, serviços e empresas cristãs verificadas — perto de você, com o mesmo cuidado que você tem com sua família.
            </p>
            <div style={{display: "flex", gap: 12, marginTop: 28}}>
              <button className="btn btn--lg btn--primary">Explorar marketplace <i className="ph-bold ph-arrow-right"></i></button>
              <button className="btn btn--lg" style={{background: "rgba(255,252,246,.08)", color: "var(--sand-50)", border: "1px solid rgba(255,252,246,.18)"}}>Sou empresário</button>
            </div>
            <div style={{display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap"}}>
              {["Todas as igrejas", "Minha igreja", "Batista", "Presbiteriana"].map((church, i) => (
                <span key={church} style={{height: 32, padding: "0 12px", borderRadius: 999, background: i === 1 ? "var(--success-500)" : "rgba(255,252,246,.08)", border: "1px solid rgba(255,252,246,.16)", color: "var(--sand-50)", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700}}>
                  {i === 1 && <i className="ph-fill ph-check-circle"></i>}
                  {church}
                </span>
              ))}
            </div>
            <div style={{display: "flex", gap: 32, marginTop: 36, fontSize: 13}}>
              {[["2,4 mil", "empresas"],["18 mil", "produtos"],["27", "estados"]].map(([v,l]) => (
                <div key={l}>
                  <div style={{fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em"}}>{v}</div>
                  <div style={{opacity: .65}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, transform: "rotate(-2deg)"}}>
            {SAMPLE_PRODUCTS.map((p, i) => (
              <div key={p.id} style={{
                background: "var(--bg-elevated)",
                borderRadius: 14,
                padding: 12,
                transform: i === 0 ? "translateY(20px)" : i === 3 ? "translateY(-20px)" : "none",
                boxShadow: "var(--shadow-md)"
              }}>
                <div style={{aspectRatio: 1, background: p.bg, borderRadius: 10, marginBottom: 10, display: "grid", placeItems: "center", color: "var(--plum-800)", fontFamily: "var(--font-display)", fontSize: 36, opacity: .85}}>{p.letter}</div>
                <div style={{color: "var(--neutral-900)", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 600, lineHeight: 1.3}}>{p.name.slice(0, 32)}…</div>
                <div style={{color: "var(--ember-600)", fontSize: 12, fontWeight: 600, marginTop: 4}}>R$ {p.price[1]},{p.price[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Louvor + versiculo */}
      <div style={{padding: "28px 40px 8px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16}}>
        <div style={{background: "#121212", color: "white", borderRadius: 16, padding: 18, display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-md)"}}>
          <div style={{width: 58, height: 58, borderRadius: 12, background: "linear-gradient(135deg, #1877F2, #1DB954 52%, #2A1B2E)", display: "grid", placeItems: "center", flexShrink: 0}}>
            <i className="ph-fill ph-spotify-logo" style={{fontSize: 30}}></i>
          </div>
          <div style={{flex: 1, minWidth: 0}}>
            <div style={{fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.56)", fontWeight: 700}}>Louvor no Spotify</div>
            <div style={{fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, marginTop: 2}}>Manha de fe · playlist iGod</div>
            <div style={{fontSize: 12, color: "rgba(255,255,255,.62)", marginTop: 2}}>32 louvores para comecar o dia</div>
          </div>
          <button style={{width: 40, height: 40, borderRadius: "50%", border: "none", background: "#1DB954", color: "#0B0B0B", display: "grid", placeItems: "center"}}><i className="ph-fill ph-play"></i></button>
        </div>

        <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 18}}>
          <div style={{display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 8}}>
            <div style={{display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "var(--plum-800)"}}><i className="ph ph-book-open-text"></i>Versiculo do dia</div>
            <span className="badge badge--active">Em estudo</span>
          </div>
          <p style={{fontSize: 14, color: "var(--neutral-700)", lineHeight: 1.55}}>"Consagre ao Senhor tudo o que voce faz, e os seus planos serao bem-sucedidos." <strong>Proverbios 16:3</strong></p>
        </div>
      </div>

      {/* Categories strip */}
      <div style={{padding: "40px 40px 24px", maxWidth: 1200, margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20}}>
          <h2 style={{fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em"}}>O que você procura hoje?</h2>
          <a style={{fontSize: 13, color: "var(--ember-600)", fontWeight: 600, cursor: "pointer"}}>Ver todas as categorias →</a>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12}}>
          {CATEGORIES.map(c => (
            <div key={c.name} className="cat-card" style={{alignItems: "center", textAlign: "center", padding: 16}}>
              <div className="cat-card__icon" style={{background: c.color, color: c.iconColor, width: 48, height: 48}}>
                <i className={`ph-fill ph-${c.icon}`} style={{fontSize: 24}}></i>
              </div>
              <div className="cat-card__name" style={{fontSize: 13}}>{c.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div style={{padding: "32px 40px 40px", maxWidth: 1200, margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20}}>
          <h2 style={{fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em"}}>Produtos em destaque</h2>
          <a style={{fontSize: 13, color: "var(--ember-600)", fontWeight: 600, cursor: "pointer"}}>Ver todos →</a>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16}}>
          {SAMPLE_PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>

      {/* Empresas verificadas */}
      <div style={{padding: "32px 40px 40px", background: "var(--sand-100)"}}>
        <div style={{maxWidth: 1200, margin: "0 auto"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20}}>
            <div>
              <div className="eyebrow">SELO IGOD</div>
              <h2 style={{fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 6}}>Empresas verificadas perto de você</h2>
            </div>
            <a style={{fontSize: 13, color: "var(--ember-600)", fontWeight: 600, cursor: "pointer"}}>Explorar empresas →</a>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16}}>
            {COMPANIES.map((c, i) => (
              <div key={i} style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 12}}>
                <div style={{display: "flex", alignItems: "center", gap: 12}}>
                  <div className="company__logo" style={{background: c.color, width: 52, height: 52, fontSize: 16, borderRadius: 14}}>{c.initial}</div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: 4}}>
                      {c.name}
                      {c.verified && <i className="ph-fill ph-seal-check" style={{color: "var(--success-500)", fontSize: 14}}></i>}
                    </div>
                    <div style={{fontSize: 12, color: "var(--neutral-500)", marginTop: 2}}>{c.cat}</div>
                  </div>
                </div>
                <div style={{fontSize: 12, color: "var(--neutral-500)", display: "flex", alignItems: "center", gap: 4}}><i className="ph ph-map-pin"></i>{c.city}</div>
                <button className="btn btn--sm btn--secondary btn--full">Visitar loja</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA — for empresários */}
      <div style={{padding: "56px 40px", background: "var(--plum-800)", color: "var(--sand-50)"}}>
        <div style={{maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "center"}}>
          <div>
            <div className="eyebrow" style={{color: "var(--ember-300)"}}>É EMPRESÁRIO?</div>
            <h2 style={{fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.1, marginTop: 12}}>
              Seu negócio conectado a uma comunidade de propósito.
            </h2>
            <p style={{opacity: .75, fontSize: 15, marginTop: 12, maxWidth: 480, lineHeight: 1.6}}>
              Cadastre sua empresa, receba o selo iGod e seja descoberto por consumidores que valorizam o que você acredita.
            </p>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end"}}>
            <button className="btn btn--lg btn--primary" style={{padding: "0 28px"}}>Cadastrar minha empresa<i className="ph-bold ph-arrow-right"></i></button>
            <span style={{fontSize: 12, opacity: .6}}>Cadastro gratuito · verificação em até 48h</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{background: "var(--plum-900)", color: "rgba(255,252,246,.6)", padding: "32px 40px", fontSize: 12}}>
        <div style={{maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <img src="assets/igod-logo.png" alt="iGod" style={{height: 28, filter: "brightness(0) invert(1)"}} />
          <div>© 2026 iGod · Marketplace cristão</div>
          <div style={{display: "flex", gap: 16}}>
            <a>Privacidade</a><a>Termos</a><a>Ajuda</a>
          </div>
        </div>
      </div>
    </IGBrowser>
  );
}

/* ============================================================
   2. PÁGINA DE EMPRESA pública (igod.com.br/casa-do-pao)
   ============================================================ */
function DesktopCompany() {
  return (
    <IGBrowser url="igod.com.br/casa-do-pao">
      <SiteNav light />

      {/* Cover */}
      <div style={{height: 200, background: "linear-gradient(135deg, var(--plum-700), var(--plum-900))", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 30%, rgba(232,113,42,.4), transparent 50%)"}}></div>
      </div>

      {/* Header info */}
      <div style={{padding: "0 40px", marginTop: -56, position: "relative", maxWidth: 1120, marginLeft: "auto", marginRight: "auto"}}>
        <div style={{display: "flex", gap: 24, alignItems: "flex-end"}}>
          <div className="company__logo" style={{background: "linear-gradient(135deg,#C95A1B,#7B3613)", width: 112, height: 112, fontSize: 36, borderRadius: 24, border: "4px solid var(--sand-50)", boxShadow: "var(--shadow-md)"}}>CP</div>
          <div style={{flex: 1, paddingBottom: 8}}>
            <div style={{display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, letterSpacing: "-0.025em"}}>
              Casa do Pão
              <i className="ph-fill ph-seal-check" style={{color: "var(--success-500)", fontSize: 24}}></i>
            </div>
            <div style={{display: "flex", gap: 16, marginTop: 4, fontSize: 13, color: "var(--neutral-600)"}}>
              <span style={{display: "flex", alignItems: "center", gap: 4}}><i className="ph ph-bread" style={{color: "var(--ember-600)"}}></i>Padaria artesanal</span>
              <span style={{display: "flex", alignItems: "center", gap: 4}}><i className="ph ph-map-pin"></i>São Paulo, SP</span>
              <span style={{display: "flex", alignItems: "center", gap: 4}}><i className="ph-fill ph-star" style={{color: "#C88A1F"}}></i>4.9 · 412 avaliações</span>
              <span style={{display: "flex", alignItems: "center", gap: 4}}><i className="ph ph-clock"></i>Aberta agora · até 19h</span>
            </div>
          </div>
          <div style={{display: "flex", gap: 8, paddingBottom: 8}}>
            <button className="btn btn--md btn--secondary"><i className="ph ph-heart"></i>Seguir</button>
            <button className="btn btn--md btn--secondary"><i className="ph ph-share-network"></i></button>
            <button className="btn btn--md btn--primary"><i className="ph-bold ph-whatsapp-logo"></i>Falar no WhatsApp</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{display: "flex", gap: 32, marginTop: 32, borderBottom: "1px solid var(--hairline)"}}>
          {[["Produtos", 24], ["Sobre", null], ["Avaliações", 412], ["Contato", null]].map(([label, n], i) => (
            <div key={label} style={{padding: "14px 4px", fontSize: 14, fontWeight: 600, color: i === 0 ? "var(--plum-800)" : "var(--neutral-500)", cursor: "pointer", borderBottom: i === 0 ? "2px solid var(--plum-800)" : "2px solid transparent", marginBottom: -1, display: "flex", alignItems: "center", gap: 6}}>
              {label}
              {n && <span style={{background: "var(--neutral-100)", padding: "2px 8px", borderRadius: 999, fontSize: 11, color: "var(--neutral-600)"}}>{n}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div style={{padding: "32px 40px 56px", maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 40}}>
        <div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16}}>
            <h2 style={{fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em"}}>Todos os produtos · 24</h2>
            <div style={{display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "var(--neutral-600)"}}>
              Ordenar:
              <button style={{background: "none", border: "1px solid var(--hairline-strong)", padding: "6px 12px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "var(--neutral-900)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4}}>
                Mais vendidos <i className="ph ph-caret-down"></i>
              </button>
            </div>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16}}>
            {[...SAMPLE_PRODUCTS, ...SAMPLE_PRODUCTS.slice(0, 2)].map((p, i) => <ProductCard key={i} p={p} />)}
          </div>
        </div>

        <aside style={{display: "flex", flexDirection: "column", gap: 20}}>
          <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 20}}>
            <h3 style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 12}}>Sobre a empresa</h3>
            <p style={{fontSize: 13, color: "var(--neutral-600)", lineHeight: 1.6}}>
              Padaria familiar fundada em 2018 por João e Marina. Pão artesanal de fermentação natural, sem aditivos, com farinha orgânica brasileira.
            </p>
            <div style={{marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--hairline)", display: "flex", flexDirection: "column", gap: 10}}>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: 12}}>
                <span style={{color: "var(--neutral-500)"}}>Desde</span>
                <span style={{fontWeight: 600}}>2018 · 8 anos</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: 12}}>
                <span style={{color: "var(--neutral-500)"}}>Vendas no iGod</span>
                <span style={{fontWeight: 600}}>2,3 mil</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", fontSize: 12}}>
                <span style={{color: "var(--neutral-500)"}}>Tempo de resposta</span>
                <span style={{fontWeight: 600, color: "var(--success-500)"}}>~20 min</span>
              </div>
            </div>
          </div>

          <div style={{background: "var(--plum-800)", color: "var(--sand-50)", borderRadius: 16, padding: 20}}>
            <div className="eyebrow" style={{color: "var(--ember-300)"}}>CAUSA APOIADA</div>
            <div style={{fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, marginTop: 8, letterSpacing: "-0.02em"}}>Lar Esperança</div>
            <div style={{fontSize: 12, opacity: .7, marginTop: 6, lineHeight: 1.5}}>
              10% do lucro doado mensalmente para o lar de crianças em São Paulo.
            </div>
            <button className="btn btn--sm btn--primary" style={{marginTop: 14}}>Conhecer a causa →</button>
          </div>

          <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 20}}>
            <h3 style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 12}}>Avaliações recentes</h3>
            {[
              { name: "Roberto A.", txt: "Pão fresquinho todo dia. Atendimento maravilhoso, sempre prontos." },
              { name: "Camila P.", txt: "Compro toda semana. Qualidade impecável e dá pra sentir o carinho." },
            ].map((r, i) => (
              <div key={i} style={{paddingTop: i === 0 ? 0 : 12, marginTop: i === 0 ? 0 : 12, borderTop: i === 0 ? "none" : "1px solid var(--hairline)"}}>
                <div style={{display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4}}>
                  <span style={{fontWeight: 600}}>{r.name}</span>
                  <span style={{color: "#C88A1F"}}>★★★★★</span>
                </div>
                <p style={{fontSize: 12, color: "var(--neutral-600)", lineHeight: 1.5}}>"{r.txt}"</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </IGBrowser>
  );
}

/* ============================================================
   3. DASHBOARD DO EMPRESÁRIO (painel.igod.com.br)
   ============================================================ */
function DesktopDashboard() {
  // Sparkline data
  const sales = [12, 18, 16, 22, 19, 26, 31, 28, 34, 30, 36, 42, 38, 45, 41];
  const max = Math.max(...sales);

  return (
    <IGBrowser url="painel.igod.com.br" width={1200} height={760}>
      <div style={{display: "grid", gridTemplateColumns: "232px 1fr", height: "100%"}}>
        {/* Sidebar */}
        <aside style={{background: "var(--plum-900)", color: "var(--sand-50)", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 4, overflow: "auto"}}>
          <div style={{display: "flex", alignItems: "center", gap: 8, padding: "0 8px 16px"}}>
            <img src="assets/igod-logo.png" alt="iGod" style={{height: 26, filter: "brightness(0) invert(1)"}} />
            <span style={{fontSize: 10, padding: "2px 6px", background: "var(--ember-500)", color: "white", borderRadius: 4, fontWeight: 700, letterSpacing: "0.04em"}}>PAINEL</span>
          </div>

          <div style={{padding: "12px 8px 16px", borderTop: "1px solid rgba(255,252,246,.08)", marginTop: 4}}>
            <div style={{display: "flex", gap: 10, alignItems: "center"}}>
              <div className="company__logo" style={{background: "linear-gradient(135deg,#C95A1B,#7B3613)", width: 36, height: 36, fontSize: 12, borderRadius: 10}}>CP</div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 4}}>Casa do Pão <i className="ph-fill ph-seal-check" style={{color: "var(--success-500)", fontSize: 12}}></i></div>
                <div style={{fontSize: 11, opacity: .55}}>Plano Crescer</div>
              </div>
              <i className="ph ph-caret-up-down" style={{opacity: .5}}></i>
            </div>
          </div>

          {[
            { id: "dash", icon: "squares-four", label: "Visão geral", active: true },
            { id: "ord", icon: "package", label: "Pedidos", badge: 4 },
            { id: "prod", icon: "storefront", label: "Produtos" },
            { id: "msg", icon: "chat-circle", label: "Mensagens", badge: 12 },
            { id: "fin", icon: "wallet", label: "Financeiro" },
            { id: "rev", icon: "star", label: "Avaliações" },
            { id: "ins", icon: "chart-line-up", label: "Insights" },
          ].map(it => (
            <button key={it.id} className={`sidebar__item ${it.active ? "is-active" : ""}`} style={{color: "rgba(255,252,246,.7)", background: it.active ? "rgba(255,252,246,.06)" : "transparent"}}>
              <i className={`ph ${it.active ? "ph-fill" : ""} ph-${it.icon}`} style={{fontSize: 18, color: it.active ? "var(--ember-300)" : "inherit"}}></i>
              <span style={{flex: 1, textAlign: "left"}}>{it.label}</span>
              {it.badge && <span className="badge badge--notif">{it.badge}</span>}
            </button>
          ))}

          <div style={{marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,252,246,.08)"}}>
            <div style={{padding: 12, background: "rgba(232,113,42,.12)", borderRadius: 10, fontSize: 12}}>
              <div style={{fontWeight: 600, color: "var(--ember-300)", marginBottom: 4}}>↑ Plano Acelerar</div>
              <div style={{opacity: .7, lineHeight: 1.5, fontSize: 11}}>Análise avançada, mais 50 produtos e prioridade no marketplace.</div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div style={{padding: "24px 32px", overflow: "auto", background: "var(--sand-50)"}}>
          {/* Header bar */}
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24}}>
            <div>
              <div className="eyebrow">QUINTA-FEIRA, 16 MAI 2026</div>
              <h1 style={{fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.025em", marginTop: 4}}>
                Bom dia, Marina ✨
              </h1>
            </div>
            <div style={{display: "flex", gap: 10, alignItems: "center"}}>
              <button className="btn btn--md btn--secondary"><i className="ph ph-plus"></i>Novo produto</button>
              <button className="app-header__icon" style={{width: 40, height: 40, position: "relative"}}>
                <i className="ph ph-bell" style={{fontSize: 18}}></i>
                <span className="badge badge--notif" style={{position: "absolute", top: -2, right: -2}}>4</span>
              </button>
              <div className="avatar avatar--md" style={{background: "linear-gradient(135deg,#4A2F52,#1A0F1D)", color: "white"}}>MS</div>
            </div>
          </div>

          {/* KPI cards */}
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24}}>
            {[
              { label: "Vendas no mês", value: "R$ 4.280,50", delta: "+18%", positive: true, icon: "currency-circle-dollar", color: "var(--success-500)", bg: "var(--success-50)" },
              { label: "Pedidos", value: "42", delta: "+12%", positive: true, icon: "package", color: "var(--ember-600)", bg: "var(--ember-50)" },
              { label: "Visualizações", value: "1.842", delta: "+34%", positive: true, icon: "eye", color: "var(--info-500)", bg: "var(--info-50)" },
              { label: "Taxa conversão", value: "2.3%", delta: "−0.2pp", positive: false, icon: "trend-up", color: "var(--plum-700)", bg: "var(--plum-100)" },
            ].map(k => (
              <div key={k.label} style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 14, padding: 18}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
                  <div style={{width: 36, height: 36, borderRadius: 10, background: k.bg, color: k.color, display: "grid", placeItems: "center"}}>
                    <i className={`ph-fill ph-${k.icon}`} style={{fontSize: 18}}></i>
                  </div>
                  <span style={{fontSize: 11, color: k.positive ? "var(--success-500)" : "var(--error-500)", fontWeight: 600, background: k.positive ? "var(--success-50)" : "var(--error-50)", padding: "2px 8px", borderRadius: 999}}>{k.delta}</span>
                </div>
                <div style={{fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 16}}>{k.value}</div>
                <div style={{fontSize: 12, color: "var(--neutral-500)", marginTop: 2}}>{k.label}</div>
              </div>
            ))}
          </div>

          {/* Chart + tasks */}
          <div style={{display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, marginBottom: 24}}>
            <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 14, padding: 20}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20}}>
                <div>
                  <h3 style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em"}}>Vendas · últimos 15 dias</h3>
                  <div style={{fontSize: 12, color: "var(--neutral-500)", marginTop: 2}}>+18% em relação à semana anterior</div>
                </div>
                <button style={{background: "none", border: "1px solid var(--hairline-strong)", padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 4}}>
                  Últimos 15 dias <i className="ph ph-caret-down"></i>
                </button>
              </div>
              {/* Bars */}
              <div style={{display: "flex", alignItems: "flex-end", gap: 6, height: 180, paddingBottom: 24}}>
                {sales.map((v, i) => (
                  <div key={i} style={{flex: 1, position: "relative"}}>
                    <div style={{height: `${(v / max) * 100}%`, background: i === sales.length - 1 ? "var(--ember-500)" : i >= sales.length - 3 ? "var(--ember-400)" : "var(--plum-700)", borderRadius: "6px 6px 0 0", minHeight: 4, transition: "height 0.3s var(--ease-out)"}}></div>
                    <div style={{position: "absolute", bottom: -22, left: 0, right: 0, textAlign: "center", fontSize: 10, color: "var(--neutral-400)", fontFamily: "var(--font-mono)"}}>{i + 2}/5</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarefas */}
            <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 14, padding: 20}}>
              <h3 style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 14}}>Para hoje</h3>
              {[
                { icon: "package", color: "var(--ember-600)", bg: "var(--ember-50)", title: "4 pedidos para preparar", sub: "Mais antigo há 22 min" },
                { icon: "chat-circle", color: "var(--info-500)", bg: "var(--info-50)", title: "12 mensagens não lidas", sub: "Tempo médio: 18 min" },
                { icon: "warning", color: "var(--warning-700)", bg: "var(--warning-50)", title: "Estoque crítico em 2 produtos", sub: "Pão integral · Brioche" },
                { icon: "star", color: "var(--success-500)", bg: "var(--success-50)", title: "3 novas avaliações 5★", sub: "Nada para responder" },
              ].map((t, i) => (
                <div key={i} style={{display: "flex", gap: 12, padding: "10px 0", borderBottom: i === 3 ? "none" : "1px solid var(--hairline)"}}>
                  <div style={{width: 32, height: 32, borderRadius: 10, background: t.bg, color: t.color, display: "grid", placeItems: "center", flexShrink: 0}}>
                    <i className={`ph-fill ph-${t.icon}`} style={{fontSize: 16}}></i>
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: 13, fontWeight: 600, color: "var(--neutral-900)"}}>{t.title}</div>
                    <div style={{fontSize: 11, color: "var(--neutral-500)", marginTop: 1}}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pedidos recentes */}
          <div style={{background: "var(--bg-elevated)", border: "1px solid var(--hairline)", borderRadius: 14, overflow: "hidden"}}>
            <div style={{padding: "16px 20px", borderBottom: "1px solid var(--hairline)", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h3 style={{fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em"}}>Pedidos recentes</h3>
              <a style={{fontSize: 12, color: "var(--ember-600)", fontWeight: 600, cursor: "pointer"}}>Ver todos →</a>
            </div>
            <table style={{width: "100%", borderCollapse: "collapse", fontSize: 13}}>
              <thead>
                <tr style={{background: "var(--sand-100)"}}>
                  {["Pedido", "Cliente", "Produto", "Valor", "Status", ""].map(h => (
                    <th key={h} style={{padding: "10px 20px", textAlign: "left", fontSize: 11, color: "var(--neutral-500)", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "#2418", client: "Roberto Almeida", prod: "Pão fermentação natural · 2", value: "R$ 37,80", status: "preparing" },
                  { id: "#2417", client: "Camila Pinto", prod: "Brioche francês · 1", value: "R$ 24,50", status: "new" },
                  { id: "#2416", client: "João Mendes", prod: "Cesta de Páscoa · 1", value: "R$ 128,00", status: "delivered" },
                  { id: "#2415", client: "Lúcia Ferreira", prod: "Pão integral · 3", value: "R$ 56,70", status: "delivered" },
                ].map((r, i) => (
                  <tr key={r.id} style={{borderBottom: i === 3 ? "none" : "1px solid var(--hairline)"}}>
                    <td style={{padding: "12px 20px", fontFamily: "var(--font-mono)", fontWeight: 600}}>{r.id}</td>
                    <td style={{padding: "12px 20px"}}>{r.client}</td>
                    <td style={{padding: "12px 20px", color: "var(--neutral-600)"}}>{r.prod}</td>
                    <td style={{padding: "12px 20px", fontWeight: 600}}>{r.value}</td>
                    <td style={{padding: "12px 20px"}}>
                      {r.status === "new" && <span className="badge badge--new">Novo</span>}
                      {r.status === "preparing" && <span className="badge" style={{background: "var(--info-50)", color: "var(--info-700)"}}>Preparando</span>}
                      {r.status === "delivered" && <span className="badge badge--active">Entregue</span>}
                    </td>
                    <td style={{padding: "12px 20px", textAlign: "right"}}>
                      <button style={{background: "none", border: "none", color: "var(--neutral-500)", cursor: "pointer"}}><i className="ph ph-dots-three"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </IGBrowser>
  );
}

/* ---------- DESKTOP MOCKUPS SECTION ---------- */
function DesktopMockupsSection() {
  const screens = [
    { num: "01", name: "Marketplace · Home pública", desc: "igod.com.br · landing principal com hero, categorias, produtos em destaque e CTA para empresários.", comp: DesktopHome },
    { num: "02", name: "Página de empresa", desc: "igod.com.br/casa-do-pao · perfil público da empresa com produtos, sobre, avaliações e causa apoiada.", comp: DesktopCompany },
    { num: "03", name: "Painel do empresário", desc: "painel.igod.com.br · dashboard interno B2B — KPIs, vendas, pedidos, mensagens.", comp: DesktopDashboard },
  ];
  const [focus, setFocus] = useState(null);
  const Focus = focus !== null ? screens[focus].comp : null;

  return (
    <>
      <SectionHead
        eyebrow="Mockups · Web"
        title="Telas desktop"
        desc="Três superfícies do ecossistema iGod no desktop. O marketplace público (lado do consumidor), a página de empresa (vitrine) e o painel do empresário (B2B). Clique para abrir em destaque."
      />

      <div className="section">
        <div style={{display: "flex", flexDirection: "column", gap: 64, alignItems: "center", padding: "var(--space-6) 0"}}>
          {screens.map((s, i) => {
            const Comp = s.comp;
            return (
              <div key={s.num} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: "100%"}}>
                <div style={{display: "flex", alignItems: "baseline", gap: 16, alignSelf: "flex-start", maxWidth: 880, marginLeft: 0}}>
                  <span style={{fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--neutral-400)"}}>{s.num}</span>
                  <div>
                    <div style={{fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em"}}>{s.name}</div>
                    <div style={{fontSize: 13, color: "var(--neutral-500)", marginTop: 4, maxWidth: 700}}>{s.desc}</div>
                  </div>
                </div>
                <div onClick={() => setFocus(i)} style={{cursor: "zoom-in", transform: "scale(.62)", transformOrigin: "top center", marginBottom: -300, marginTop: -10}}>
                  <Comp />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {focus !== null && (
        <div style={{position: "fixed", inset: 0, background: "rgba(26,15,29,.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 32, backdropFilter: "blur(8px)", overflow: "auto"}}
             onClick={() => setFocus(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 16, margin: "auto"}}>
            <div style={{color: "var(--sand-50)", display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600}}>
              <span style={{fontFamily: "var(--font-mono)", fontSize: 12, opacity: .6}}>{screens[focus].num}</span>
              {screens[focus].name}
            </div>
            <div style={{transform: "scale(.85)", transformOrigin: "top center"}}>
              <Focus />
            </div>
            <button onClick={() => setFocus(null)} style={{background: "rgba(255,252,246,.1)", border: "1px solid rgba(255,252,246,.2)", color: "var(--sand-50)", padding: "8px 16px", borderRadius: 999, cursor: "pointer", fontSize: 13, fontWeight: 500, marginTop: -100, position: "relative", zIndex: 1}}>Fechar (Esc)</button>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, {
  IGBrowser, SiteNav,
  DesktopHome, DesktopCompany, DesktopDashboard,
  DesktopMockupsSection
});
