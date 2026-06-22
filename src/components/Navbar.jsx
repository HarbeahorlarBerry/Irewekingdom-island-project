import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ background: "rgba(20,10,5,0.95)", position: "sticky", top: 0, zIndex: 100, borderBottom: "0.5px solid rgba(250,199,117,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.25rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <div style={{ fontSize: "18px", fontWeight: "500", color: "#FAC775", letterSpacing: "3px" }}>
          IREWE ISLAND
        </div>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {["Home", "About", "Rooms", "Activities", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: "#D3D1C7", fontSize: "13px", textDecoration: "none", letterSpacing: "1px" }}
              onMouseOver={(e) => (e.target.style.color = "#FAC775")}
              onMouseOut={(e) => (e.target.style.color = "#D3D1C7")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Book button */}
        <a
          href="#booking"
          style={{ background: "#BA7517", color: "#FAEEDA", border: "none", padding: "10px 24px", borderRadius: "4px", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", cursor: "pointer" }}
        >
          Book now
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav style={{ background: "#2C1A08", padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["Home", "About", "Rooms", "Activities", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "#D3D1C7", textDecoration: "none", fontSize: "14px" }} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
