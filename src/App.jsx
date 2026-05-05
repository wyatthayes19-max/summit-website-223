import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", textAlign: "center" }}>
      
      <h1>SUMMIT Training & Nutrition</h1>
      <p>Perform at your best.</p>

      <h2>Get Started</h2>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
      >
        <label>Full Name</label>
        <input type="text" name="name" style={{ width: "100%", marginBottom: "10px" }} />

        <label>Email</label>
        <input type="email" name="email" style={{ width: "100%", marginBottom: "10px" }} />

        <label>Goal</label>
        <select name="goal" style={{ width: "100%", marginBottom: "10px" }}>
          <option>Build Muscle</option>
          <option>Lose Fat</option>
          <option>Performance</option>
        </select>

        <label>Message</label>
        <textarea name="message" style={{ width: "100%", marginBottom: "10px" }} />

        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
