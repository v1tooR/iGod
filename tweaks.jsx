/* ============================================================
   iGod Tweaks — painel para ajustar marca ao vivo
   ============================================================ */

function IGodTweaksPanel() {
  const defaults = window.__TWEAK_DEFAULTS__ || {
    primary: "#E8712A",
    dark: "#2A1B2E",
    radius: 10,
    displayFont: "Bricolage Grotesque",
  };
  const [t, setTweak] = useTweaks(defaults);

  // Apply tweaks live to CSS variables on :root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--ember-500", t.primary);
    root.style.setProperty("--accent", t.primary);
    // Auto-darken for hover
    root.style.setProperty("--ember-600", shade(t.primary, -0.12));
    root.style.setProperty("--ember-700", shade(t.primary, -0.24));
    root.style.setProperty("--ember-400", shade(t.primary, 0.12));
    root.style.setProperty("--ember-300", shade(t.primary, 0.28));

    root.style.setProperty("--plum-800", t.dark);
    root.style.setProperty("--plum-900", shade(t.dark, -0.25));
    root.style.setProperty("--plum-700", shade(t.dark, 0.15));
    root.style.setProperty("--plum-600", shade(t.dark, 0.30));
    root.style.setProperty("--bg-inverse", t.dark);

    root.style.setProperty("--radius-md", t.radius + "px");
    root.style.setProperty("--radius-lg", (t.radius * 1.6) + "px");

    root.style.setProperty("--font-display", `'${t.displayFont}', system-ui, sans-serif`);
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Marca" />
      <TweakColor
        label="Cor de ação · ember"
        value={t.primary}
        options={["#E8712A", "#D9532B", "#C28E2A", "#2D7A4F", "#2C5F87"]}
        onChange={(v) => setTweak("primary", v)}
      />
      <TweakColor
        label="Cor escura · plum"
        value={t.dark}
        options={["#2A1B2E", "#1A0F1D", "#0F2A2E", "#1F1B2E", "#100F0E"]}
        onChange={(v) => setTweak("dark", v)}
      />

      <TweakSection label="Forma" />
      <TweakSlider
        label="Raio padrão"
        value={t.radius}
        min={0}
        max={20}
        step={1}
        unit="px"
        onChange={(v) => setTweak("radius", v)}
      />

      <TweakSection label="Tipografia" />
      <TweakSelect
        label="Display font"
        value={t.displayFont}
        options={["Bricolage Grotesque", "Fraunces", "Instrument Serif", "DM Serif Display", "Manrope", "Inter Tight"]}
        onChange={(v) => setTweak("displayFont", v)}
      />
    </TweaksPanel>
  );
}

// HEX shade utility (no validation — assumes #RRGGBB)
function shade(hex, pct) {
  if (!hex || hex[0] !== "#") return hex;
  const num = parseInt(hex.slice(1), 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;
  const adj = (c) => Math.max(0, Math.min(255, Math.round(c + (pct > 0 ? (255 - c) : c) * pct)));
  r = adj(r); g = adj(g); b = adj(b);
  return "#" + [r, g, b].map(c => c.toString(16).padStart(2, "0")).join("");
}

window.IGodTweaks = IGodTweaksPanel;
