import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = {
    color: "#D3D1C7",
    fontSize: "13px",
    textDecoration: "none",
    letterSpacing: "1px",
  };

  return (
    <header style={{ background: "rgba(20,10,5,0.97)", position: "sticky", top: 0, zIndex: 100, borderBottom: "0.5px solid rgba(250,199,117,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <div style={{ fontSize: "16px", fontWeight: "500", color: "#FAC775", letterSpacing: "3px" }}>
          IREWE ISLAND
        </div>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {["Home", "About", "Rooms", "Activities", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#FAC775")}
              onMouseOut={(e) => (e.target.style.color = "#D3D1C7")}
            >{item}</a>
          ))}
        </nav>

        {/* Desktop book button */}
        <a href="#booking" style={{ background: "#BA7517", color: "#FAEEDA", padding: "10px 24px", borderRadius: "4px", fontSize: "13px", letterSpacing: "1px", textDecoration: "none" }} className="desktop-nav">
          Book now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "24px", height: "2px", background: "#FAC775" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#FAC775" }} />
          <span style={{ display: "block", width: "24px", height: "2px", background: "#FAC775" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav style={{ background: "#2C1A08", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderTop: "0.5px solid rgba(250,199,117,0.15)" }}>
          {["Home", "About", "Rooms", "Activities", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ ...linkStyle, fontSize: "15px" }} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)} style={{ background: "#BA7517", color: "#FAEEDA", padding: "12px 20px", borderRadius: "4px", fontSize: "14px", textDecoration: "none", textAlign: "center", marginTop: "0.5rem" }}>
            Book now
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
