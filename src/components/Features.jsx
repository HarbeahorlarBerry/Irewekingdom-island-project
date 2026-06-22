const features = [
  { icon: "🌊", title: "Private beachfront", desc: "Wake up to pristine waters right outside your door. Every suite enjoys exclusive beach access." },
  { icon: "🍽️", title: "Fine island dining", desc: "Savour fresh seafood and local delicacies crafted by our resident chefs using the finest ingredients." },
  { icon: "💆", title: "Wellness & spa", desc: "Rejuvenate your body and mind at our full-service spa with traditional and modern treatments." },
  { icon: "⛵", title: "Water adventures", desc: "From kayaking to sunset cruises, explore the waters around Irewe Island in style." },
  { icon: "🌅", title: "Sunset events", desc: "Private dinners, cocktail evenings, and cultural events hosted under the island sky." },
  { icon: "✅", title: "All-inclusive packages", desc: "Relax without worry. Our packages cover everything from meals to excursions." },
];

function Features() {
  return (
    <section id="activities" style={{ padding: "6rem 2rem", background: "#F9F4EE" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#BA7517", marginBottom: "0.75rem" }}>WHY CHOOSE US</p>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: "500", color: "#2C1A08", marginBottom: "3rem" }}>
          The Irewe experience
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "0.5px solid rgba(186,117,23,0.2)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <div style={{
                width: "48px", height: "48px",
                background: "#FAEEDA",
                borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
                marginBottom: "1rem",
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#2C1A08", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#5F5E5A", lineHeight: "1.7" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
