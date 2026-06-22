function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "92vh",
        background: "linear-gradient(160deg, #2C1A08 0%, #633806 45%, #BA7517 80%, #EF9F27 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle texture overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(250,199,117,0.04) 0px, rgba(250,199,117,0.04) 1px, transparent 1px, transparent 24px)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "640px" }}>
        <div style={{
          display: "inline-block",
          border: "1px solid rgba(250,199,117,0.5)",
          color: "#FAC775",
          fontSize: "11px",
          letterSpacing: "4px",
          padding: "8px 20px",
          borderRadius: "2px",
          marginBottom: "2rem",
          background: "rgba(186,117,23,0.15)",
        }}>
          LUXURY ISLAND RESORT · NIGERIA
        </div>

        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "500", color: "#FAEEDA", lineHeight: "1.15", marginBottom: "1.25rem", letterSpacing: "1px" }}>
          Welcome to<br />
          <span style={{ color: "#FAC775" }}>Irewe Island</span>
        </h1>

        <p style={{ color: "#D3D1C7", fontSize: "16px", lineHeight: "1.8", marginBottom: "2.5rem" }}>
          An exclusive island retreat where timeless elegance meets the serene beauty of nature. Escape the ordinary.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#booking"
            style={{ background: "#BA7517", color: "#FAEEDA", padding: "15px 36px", borderRadius: "4px", fontSize: "14px", letterSpacing: "1px", textDecoration: "none", display: "inline-block" }}
          >
            Reserve your stay
          </a>
          <a
            href="#about"
            style={{ background: "transparent", color: "#FAC775", border: "1px solid #FAC775", padding: "15px 36px", borderRadius: "4px", fontSize: "14px", letterSpacing: "1px", textDecoration: "none", display: "inline-block" }}
          >
            Explore the island
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        background: "rgba(20,10,5,0.7)",
        borderTop: "0.5px solid rgba(250,199,117,0.2)",
        backdropFilter: "blur(4px)",
      }}>
        {[
          { num: "24", label: "LUXURY SUITES" },
          { num: "5★", label: "RESORT RATING" },
          { num: "12", label: "ISLAND ACTIVITIES" },
        ].map((stat, i) => (
          <div key={i} style={{ padding: "1.5rem", textAlign: "center", borderRight: i < 2 ? "0.5px solid rgba(250,199,117,0.2)" : "none" }}>
            <div style={{ fontSize: "28px", fontWeight: "500", color: "#FAC775" }}>{stat.num}</div>
            <div style={{ fontSize: "11px", color: "#888780", letterSpacing: "2px", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
