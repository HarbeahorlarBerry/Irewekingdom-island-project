function Footer() {
  return (
    <footer style={{ background: "#2C1A08", padding: "3rem 2rem", borderTop: "0.5px solid rgba(250,199,117,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "500", color: "#FAC775", letterSpacing: "3px", marginBottom: "1rem" }}>IREWE ISLAND</div>
            <p style={{ fontSize: "13px", color: "#888780", lineHeight: "1.7" }}>
              A luxury island resort experience on the shores of Nigeria. Where elegance meets nature.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#BA7517", marginBottom: "1rem" }}>QUICK LINKS</p>
            {["Home", "About", "Rooms", "Activities", "Gallery", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ display: "block", color: "#888780", fontSize: "13px", textDecoration: "none", marginBottom: "8px" }}
                onMouseOver={(e) => (e.target.style.color = "#FAC775")}
                onMouseOut={(e) => (e.target.style.color = "#888780")}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <p style={{ fontSize: "11px", letterSpacing: "2px", color: "#BA7517", marginBottom: "1rem" }}>CONTACT</p>
            <p style={{ fontSize: "13px", color: "#888780", lineHeight: "2" }}>
              irewekingdom.com<br />
              Lagos, Nigeria<br />
              +234 000 000 0000<br />
              hello@irewekingdom.com
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: "0.5px solid rgba(250,199,117,0.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "12px", color: "#444441" }}>© 2025 Irewe Island Resort. All rights reserved.</p>
          <p style={{ fontSize: "12px", color: "#444441" }}>irewekingdom.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
