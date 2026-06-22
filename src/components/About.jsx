function About() {
  return (
    <section id="about" style={{ padding: "5rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>

        {/* Text */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#BA7517", marginBottom: "0.75rem" }}>OUR STORY</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: "500", color: "#2C1A08", marginBottom: "1.25rem", lineHeight: "1.3" }}>
            A sanctuary of elegance on the water
          </h2>
          <p style={{ color: "#5F5E5A", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: "1.8", marginBottom: "1.25rem" }}>
            Nestled on the tranquil shores of Irewe Island, our resort offers an unparalleled escape into luxury. Every detail has been curated to deliver warmth, comfort, and an unforgettable experience.
          </p>
          <p style={{ color: "#5F5E5A", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: "1.8" }}>
            From the moment you arrive, the gentle rhythm of the water and the warmth of our staff set the tone for a stay that will stay with you long after you leave.
          </p>
        </div>

        {/* Image placeholder */}
        <div style={{
          background: "linear-gradient(135deg, #412402, #854F0B, #EF9F27)",
          borderRadius: "16px",
          height: "clamp(260px, 40vw, 380px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <svg width="56" height="56" fill="none" stroke="rgba(250,234,218,0.5)" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 17c3-3 6-3 9 0s6 3 9 0M3 12c3-3 6-3 9 0s6 3 9 0" strokeLinecap="round"/>
            <path d="M12 3v6M9 5l3-2 3 2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{ color: "rgba(250,234,218,0.4)", fontSize: "12px", letterSpacing: "2px" }}>IREWE ISLAND</p>
        </div>

      </div>
    </section>
  );
}

export default About;
