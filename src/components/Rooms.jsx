const rooms = [
  {
    name: "Royal suite",
    desc: "Expansive ocean-view suite with private terrace, jacuzzi, and butler service.",
    price: "₦185,000",
    gradient: "linear-gradient(135deg, #412402, #854F0B)",
  },
  {
    name: "Island villa",
    desc: "Secluded 2-bedroom villa with private pool, garden, and direct beach access.",
    price: "₦120,000",
    gradient: "linear-gradient(135deg, #2C1A08, #633806)",
  },
  {
    name: "Beach bungalow",
    desc: "Cosy beachfront bungalow with all amenities, steps from the waterline.",
    price: "₦65,000",
    gradient: "linear-gradient(135deg, #633806, #BA7517)",
  },
];

function Rooms() {
  return (
    <section id="rooms" style={{ padding: "6rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#BA7517", marginBottom: "0.75rem" }}>ACCOMMODATIONS</p>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: "500", color: "#2C1A08", marginBottom: "3rem" }}>
          Choose your retreat
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {rooms.map((room, i) => (
            <div key={i} style={{ background: "#fff", border: "0.5px solid rgba(186,117,23,0.2)", borderRadius: "16px", overflow: "hidden" }}>
              {/* Image placeholder */}
              <div style={{ height: "200px", background: room.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ color: "rgba(250,234,218,0.4)", fontSize: "11px", letterSpacing: "3px" }}>{room.name.toUpperCase()}</p>
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "500", color: "#2C1A08", marginBottom: "0.5rem" }}>{room.name}</h3>
                <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: "1.6" }}>{room.desc}</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.25rem", paddingTop: "1rem", borderTop: "0.5px solid rgba(186,117,23,0.15)" }}>
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "500", color: "#BA7517" }}>{room.price}</span>
                    <span style={{ fontSize: "12px", color: "#888780", marginLeft: "4px" }}>/ night</span>
                  </div>
                  <a
                    href="#booking"
                    style={{ background: "#BA7517", color: "#FAEEDA", padding: "8px 18px", borderRadius: "4px", fontSize: "13px", textDecoration: "none", letterSpacing: "0.5px" }}
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
