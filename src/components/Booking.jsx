import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({ checkin: "", checkout: "", guests: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ checkin: "", checkout: "", guests: "" });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(250,199,117,0.3)",
    color: "#FAEEDA",
    padding: "13px 16px",
    borderRadius: "4px",
    fontSize: "13px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section id="booking" style={{ background: "linear-gradient(135deg, #2C1A08 0%, #633806 60%, #854F0B 100%)", padding: "5rem 1.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#FAC775", marginBottom: "1rem" }}>RESERVATIONS</p>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: "500", color: "#FAEEDA", marginBottom: "1rem" }}>
          Ready to escape to Irewe?
        </h2>
        <p style={{ color: "#D3D1C7", fontSize: "clamp(13px, 2vw, 15px)", marginBottom: "2.5rem", lineHeight: "1.7" }}>
          Reserve your stay today and experience island luxury like never before.
        </p>

        {submitted && (
          <div style={{ background: "rgba(250,199,117,0.15)", border: "1px solid rgba(250,199,117,0.4)", color: "#FAC775", padding: "12px 20px", borderRadius: "8px", marginBottom: "1.5rem", fontSize: "14px" }}>
            Your request has been received. We'll be in touch shortly!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Responsive grid: 1 col on mobile, 3 on desktop */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginBottom: "1rem" }}>
            <input
              type="date"
              value={form.checkin}
              onChange={(e) => setForm({ ...form, checkin: e.target.value })}
              style={inputStyle}
            />
            <input
              type="date"
              value={form.checkout}
              onChange={(e) => setForm({ ...form, checkout: e.target.value })}
              style={inputStyle}
            />
            <input
              type="number"
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              placeholder="Guests"
              min="1"
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={{ background: "#BA7517", color: "#FAEEDA", border: "none", padding: "14px 32px", borderRadius: "4px", fontSize: "14px", cursor: "pointer", letterSpacing: "1px", width: "100%" }}
          >
            Check availability
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
