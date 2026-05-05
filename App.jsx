const intakeQuestions = [
  { label: "Full name", type: "text", placeholder: "Your name" },
  { label: "Email", type: "email", placeholder: "you@example.com" },
  { label: "Age", type: "number", placeholder: "18" },
  { label: "Height", type: "text", placeholder: "6'0\"" },
  { label: "Current weight", type: "text", placeholder: "185 lbs" },
  {
    label: "Main goal",
    type: "select",
    options: ["Build muscle", "Lose fat", "Maintain and lean out", "Athletic performance"],
  },
  {
    label: "Training style",
    type: "select",
    options: ["Weights", "Bands", "Both"],
  },
  {
    label: "Days per week",
    type: "select",
    options: ["2", "3", "4", "5", "6"],
  },
  { label: "Workout background", type: "textarea", placeholder: "What are you currently doing?" },
];

const mealQuestions = [
  { label: "Daily eating habits", type: "textarea", placeholder: "What do you usually eat in a day?" },
  { label: "Food preferences", type: "textarea", placeholder: "Foods you like" },
  { label: "Foods to avoid", type: "textarea", placeholder: "Allergies or dislikes" },
  { label: "Meals per day", type: "select", options: ["2", "3", "4", "5+"] },
  { label: "Water intake", type: "text", placeholder: "How much water daily?" },
  { label: "Supplements", type: "text", placeholder: "Do you take any?" },
];

const athleteTracks = [
  {
    title: "Strength & Weight Room",
    text: "Built around power, strength, muscle gain, and athletic development.",
    emoji: "🏋️",
  },
  {
    title: "Band & Mobility Work",
    text: "Great for activation, recovery, movement quality, and injury prevention.",
    emoji: "🦵",
  },
  {
    title: "Sport-Specific Training",
    text: "Programs can be shaped around your sport, schedule, and performance goals.",
    emoji: "🏆",
  },
];

const pricingTiers = [
  {
    title: "Founders Tier",
    price: "$15/month",
    note: "First 20 clients only",
  },
  {
    title: "Early Access Tier",
    price: "$25/month",
    note: "Next 20 clients (21–40)",
  },
  {
    title: "Standard Coaching",
    price: "$45/month",
    note: "All clients after 40",
  },
];

const extraPricing = [
  {
    title: "Student Discount",
    text: "Lower monthly rate for high school and college students so you can stay consistent without it being expensive.",
  },
  {
    title: "Family Plan",
    text: "Multiple family members = lower price per person. Built so everyone can follow a plan without separate grocery stress.",
  },
  {
    title: "Team Training",
    text: "Custom plans for teams, friend groups, or teammates. Everyone follows the same structure with slight adjustments per player.",
  },
];

const audienceCards = [
  {
    title: "Athletes",
    text: "Programs shaped around your sport, your position, and your training style.",
  },
  {
    title: "Beginners",
    text: "Simple workouts that help you build confidence and consistency.",
  },
  {
    title: "Busy Adults",
    text: "Practical training and nutrition support for getting back on track.",
  },
  {
    title: "Customized",
    text: "Every plan is adjusted based on your answers — no copy-and-paste programs.",
  },
];

const nutritionCards = [
  { emoji: "🍎", title: "Meal Structure", text: "Simple meal ideas that fit your goal and routine." },
  { emoji: "🎯", title: "Calorie Direction", text: "Basic guidance for eating more, less, or staying steady." },
  { emoji: "💪", title: "Protein Focus", text: "A clear protein target to support recovery and muscle." },
  { emoji: "💬", title: "Easy to Follow", text: "No extreme dieting. Just practical guidance you can stick with." },
];

const aboutHighlights = [
  "No copy-paste programs",
  "Built for your sport or lifestyle",
  "Simple and easy to follow",
  "Focused on real results",
];

const processSteps = [
  {
    title: "Step 1: You Send Info",
    text: "You answer the questionnaires with details like your goal, training style, and nutrition habits.",
  },
  {
    title: "Step 2: I Build Your Plan",
    text: "I use your answers to build a custom training and nutrition setup made for you.",
  },
  {
    title: "Step 3: You Execute",
    text: "You follow the plan, check in, and we adjust based on your progress.",
  },
];

const resultsCards = [
  {
    title: "Client 1",
    stats: ["+12 lbs muscle in 4 months", "Strength increased across all lifts"],
    quote: "I finally had a plan that actually worked.",
  },
  {
    title: "Client 2",
    stats: ["Lost 18 lbs", "Body fat down from 22% to 13%"],
    quote: "Simple and easy to follow — that’s what changed everything.",
  },
  {
    title: "Client 3",
    stats: ["Improved speed and explosiveness", "More consistent in-season performance"],
    quote: "Built for my sport, not just lifting.",
  },
];

const testimonials = [
  "Best program I’ve followed. Everything was laid out and easy to stick to.",
  "Helped me get back into shape without overthinking everything.",
  "The fact it’s built around you makes a huge difference.",
  "Actually feels like a coach, not just a workout plan.",
];

const whyChooseSummit = [
  "No copy-paste workouts",
  "Built specifically for your goals",
  "Athlete-focused options",
  "Simple, realistic nutrition guidance",
  "Direct support and adjustments",
  "Built from real experience, not trends",
];

const includedItems = [
  "Custom workout plan",
  "Nutrition structure and guidance",
  "Weekly check-ins",
  "Adjustments based on progress",
  "Support whenever you need help",
];

const faqItems = [
  {
    question: "How do I get my plan?",
    answer: "After you submit your questionnaires, your plan is built and sent directly to you.",
  },
  {
    question: "Is this for beginners?",
    answer: "Yes. Plans are adjusted to your experience level and current starting point.",
  },
  {
    question: "Do you work with athletes?",
    answer: "Yes. Programs can be built around your sport, position, and performance needs.",
  },
  {
    question: "Do I need a gym?",
    answer: "No. Plans can be built for home workouts, bands, or a full gym setup.",
  },
  {
    question: "How fast will I see results?",
    answer: "That depends on your consistency, but most people start feeling progress within weeks.",
  },
];

function SectionTitle({ eyebrow, title, text, dark = false }) {
  return (
    <div style={{ maxWidth: 720 }}>
      <p
        style={{
          margin: "0 0 12px 0",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: dark ? "#60A5FA" : "#0A84FF",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          margin: "0 0 16px 0",
          fontSize: "clamp(30px, 4vw, 44px)",
          lineHeight: 1.05,
          fontWeight: 900,
          color: "#f8fafc",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: 18,
          lineHeight: 1.7,
          color: dark ? "#cbd5e1" : "#94a3b8",
        }}
      >
        {text}
      </p>
    </div>
  );
}

function LogoMark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: "linear-gradient(180deg, #0b1220, #060b14)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
        }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
          <path d="M17 3L30 22L17 14L4 22L17 3Z" fill="#0A84FF" />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: "-0.03em", color: "#f8fafc" }}>SUMMIT</div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Training & Nutrition
        </div>
      </div>
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        borderRadius: 28,
        border: "1px solid rgba(10,132,255,0.12)",
        background: "linear-gradient(180deg, rgba(12,18,32,0.92), rgba(7,11,20,0.96))",
        color: "#f8fafc",
        boxShadow: "0 18px 40px rgba(2,8,23,0.25)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CheckRow({ children }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ color: "#0A84FF", fontWeight: 700 }}>✓</span>
      <span style={{ color: "#cbd5e1", lineHeight: 1.7 }}>{children}</span>
    </div>
  );
}

function ButtonLink({ href, children, primary = true }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        padding: "14px 22px",
        borderRadius: 18,
        textDecoration: "none",
        fontWeight: 700,
        border: primary ? "1px solid #0A84FF" : "1px solid rgba(148,163,184,0.35)",
        background: primary ? "linear-gradient(135deg, #0A84FF, #0066E6)" : "rgba(255,255,255,0.02)",
        color: "#ffffff",
        boxShadow: primary ? "0 10px 24px rgba(10,132,255,0.28)" : "none",
      }}
    >
      {children}
    </a>
  );
}

function QuestionnaireField({ field }) {
  const baseStyle = {
    width: "100%",
    borderRadius: 16,
    border: "1px solid rgba(148,163,184,0.18)",
    background: "#081120",
    padding: "14px 16px",
    fontSize: 15,
    color: "#f8fafc",
    outline: "none",
  };

  const fieldName = field.label.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.03em" }}>{field.label}</span>
      {field.type === "textarea" ? (
        <textarea name={fieldName} rows={4} placeholder={field.placeholder} style={baseStyle} />
      ) : field.type === "select" ? (
        <select name={fieldName} defaultValue="" style={baseStyle}>
          <option value="" disabled>
            Select an option
          </option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input name={fieldName} type={field.type} placeholder={field.placeholder} style={baseStyle} />
      )}
    </label>
  );
}

function ResponsiveStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; font-family: Inter, Arial, sans-serif; background: #050914; color: #f8fafc; }
      .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
      .two-col, .pricing-grid, .contact-grid, .hero-grid { display: grid; gap: 32px; }
      .two-col { grid-template-columns: 1fr 1fr; align-items: start; }
      .card-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      .card-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
      .pricing-grid { grid-template-columns: 1.1fr 0.9fr; }
      .contact-grid { grid-template-columns: 0.95fr 1.05fr; align-items: start; }
      .hero-grid { grid-template-columns: 1fr 1.35fr 1fr; grid-template-rows: 240px 410px 280px; gap: 3px; background: rgba(255,255,255,0.06); }
      .hero-center { position: relative; background: radial-gradient(circle at 50% 20%, rgba(10,132,255,0.24), transparent 30%), linear-gradient(180deg, rgba(2,6,14,0.98), rgba(4,8,18,0.98)); display: flex; align-items: center; justify-content: center; text-align: center; padding: 38px 28px; overflow: hidden; }
      .hero-center-card { position: relative; z-index: 2; padding: 24px 26px; border-radius: 28px; background: rgba(2,6,14,0.72); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 24px 70px rgba(0,0,0,0.55); backdrop-filter: blur(8px); }
      .hero-title { margin: 0; font-size: clamp(48px, 6.5vw, 88px); line-height: 0.9; font-weight: 950; letter-spacing: -0.06em; color: #ffffff; text-transform: uppercase; }
      .hero-subtitle { margin-top: 16px; margin-bottom: 0; font-size: 20px; color: #dbeafe; }
      .hero-cta-wrap { margin-top: 24px; position: relative; z-index: 5; }
      .hero-note { margin-top: 14px; color: #cbd5e1; font-size: 14px; font-weight: 600; }
      .nav-links { display: flex; gap: 18px; align-items: center; }
      .nav-links a { text-decoration: none; color: #94a3b8; font-size: 14px; font-weight: 600; }
      .nav-links a:hover { color: #ffffff; }
      .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      .form-grid .full-width { grid-column: 1 / -1; }
      input, select, textarea { font-family: inherit; }
      @media (max-width: 900px) {
        .two-col, .pricing-grid, .contact-grid, .card-grid-2, .card-grid-3, .form-grid { grid-template-columns: 1fr; }
        .hero-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
        .nav-links { display: none; }
      }
    `}</style>
  );
}

function HeroTile({ kicker, accent, align = "left", minHeight = "100%", image, position = "center" }) {
  return (
    <div
      style={{
        minHeight,
        position: "relative",
        backgroundImage: image
          ? `linear-gradient(180deg, rgba(2,6,14,0.08), rgba(2,6,14,0.58)), url(${image})`
          : "linear-gradient(135deg, rgba(10,15,28,0.92), rgba(4,8,18,0.96))",
        backgroundSize: "cover",
        backgroundPosition: position,
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.56))", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 65% 65%, rgba(10,132,255,0.14), transparent 30%)", zIndex: 2 }} />
      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: align === "left" ? 18 : "auto",
          right: align === "right" ? 18 : "auto",
          textAlign: align,
          maxWidth: 260,
          zIndex: 3,
          padding: "10px 12px",
          borderRadius: 14,
          background: "rgba(2,6,14,0.62)",
          border: "1px solid rgba(255,255,255,0.08)",
          textShadow: "0 6px 18px rgba(0,0,0,0.85)",
        }}
      >
        <div style={{ fontWeight: 950, fontSize: 18, lineHeight: 1.05, textTransform: "uppercase" }}>{kicker}</div>
        <div style={{ fontWeight: 950, fontSize: 18, lineHeight: 1.05, textTransform: "uppercase", color: "#0A84FF", fontStyle: "italic", marginTop: 4 }}>{accent}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(10,132,255,0.16), transparent 26%), radial-gradient(circle at top left, rgba(96,165,250,0.10), transparent 28%), linear-gradient(to bottom, #050914, #081120 42%, #050914 100%)",
      }}
    >
      <ResponsiveStyles />

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid rgba(148,163,184,0.12)",
          backdropFilter: "blur(12px)",
          background: "rgba(5,9,20,0.72)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, paddingTop: 16, paddingBottom: 16 }}>
          <LogoMark />
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#nutrition">Nutrition</a>
            <a href="#intake">Q&A</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
            <ButtonLink href="#contact">Get Started</ButtonLink>
          </nav>
        </div>
      </header>

      <section>
        <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 34,
              border: "1px solid rgba(10,132,255,0.16)",
              background: "linear-gradient(180deg, #020617, #050914)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="hero-grid">
              <HeroTile kicker="Built for" accent="Results." image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80" position="center" />
              <HeroTile kicker="Speed. Endurance." accent="No shortcuts." align="right" image="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80" position="center" />
              <HeroTile kicker="Strength built" accent="In the dark." image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80" position="center" />
              <HeroTile kicker="Work hard." accent="Outwork them." minHeight="100%" image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80" position="center" />
              <div className="hero-center">
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.58), transparent 30%, transparent 70%, rgba(0,0,0,0.58))" }} />
                <div className="hero-center-card">
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                    <LogoMark />
                  </div>
                  <h1 className="hero-title">
                    Perform
                    <br />
                    At Your
                    <br />
                    Best
                  </h1>
                  <p className="hero-subtitle">
                    Strength. Performance. Discipline.
                  </p>
                  <div className="hero-cta-wrap">
                    <ButtonLink href="#intake">Get Started Now →</ButtonLink>
                  </div>
                  <p className="hero-note">
                    Most people stay the same. You don’t have to.
                  </p>
                </div>
              </div>
              <HeroTile kicker="Discipline over" accent="Motivation." align="right" minHeight="100%" image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80" position="center" />
              <HeroTile kicker="Fuel better." accent="Recover faster." minHeight="100%" image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80" position="center" />
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "24px 20px",
                  position: "relative",
                  backgroundImage: "linear-gradient(180deg, rgba(2,6,14,0.12), rgba(2,6,14,0.72)), url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=900&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 75%, rgba(10,132,255,0.18), transparent 30%)" }} />
                <div style={{ position: "relative", zIndex: 2, fontWeight: 900, fontSize: 18, lineHeight: 1.3, textTransform: "uppercase", padding: "10px 12px", borderRadius: 14, background: "rgba(2,6,14,0.62)", border: "1px solid rgba(255,255,255,0.08)", textShadow: "0 6px 18px rgba(0,0,0,0.85)" }}>
                  Success on the course <span style={{ color: "#0A84FF" }}>is built in the gym.</span>
                </div>
              </div>
              <HeroTile kicker="Built around" accent="Your life." align="right" minHeight="100%" image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80" position="center" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container" style={{ paddingTop: 52, paddingBottom: 52 }}>
          <div className="two-col">
            <SectionTitle
              eyebrow="About"
              title="Built to feel premium, simple, and effective"
              text="This coaching is for people who want more than random workouts and generic meal ideas. Summit is built for athletes, busy adults, and beginners who want structure, style, and a system they can actually follow."
            />
            <div className="card-grid-2">
              <Card style={{ padding: 24, gridColumn: "1 / -1", background: "linear-gradient(135deg, rgba(10,132,255,0.14), rgba(10,16,28,0.95))" }}>
                <p style={{ margin: "0 0 8px 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.2em", color: "#BFDBFE", fontWeight: 700 }}>
                  Before payment
                </p>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#e2e8f0" }}>
                  Fill out both questionnaires and I’ll show you exactly how the coaching is set up before you continue monthly.
                </p>
              </Card>
              {audienceCards.map((item) => (
                <Card key={item.title} style={{ padding: 24 }}>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: 20, fontWeight: 800, color: "#f8fafc" }}>{item.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "linear-gradient(180deg, #07101e, #050914)", color: "#ffffff" }}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <SectionTitle
            eyebrow="Services"
            title="Training and nutrition built for real life"
            text="Summit is not only for athletes. Plans can be built for high school students, college students, parents, beginners, busy adults, and anyone who wants structure without guessing."
            dark={true}
          />
          <div className="card-grid-3" style={{ marginTop: 28 }}>
            {[
              { emoji: "🏋️", title: "Workout Plans", text: "Gym, home, bands, dumbbells, or full weight room plans built around what you actually have." },
              { emoji: "🥗", title: "Nutrition Guidance", text: "Simple food structure, protein targets, meal ideas, and realistic eating habits that fit your day." },
              { emoji: "📈", title: "Weekly Adjustments", text: "Check-ins and changes based on your progress, schedule, energy, and what is or is not working." },
            ].map((item) => (
              <Card key={item.title} style={{ padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(10,132,255,0.18)", marginBottom: 20, fontSize: 24 }}>
                  {item.emoji}
                </div>
                <h3 style={{ margin: "0 0 10px 0", fontSize: 22, fontWeight: 800 }}>{item.title}</h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: "#cbd5e1" }}>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="intake">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <Card style={{ padding: 24, marginBottom: 32, background: "linear-gradient(135deg, rgba(10,132,255,0.12), rgba(7,11,20,0.96))" }}>
            <h3 style={{ margin: "0 0 10px 0", fontSize: 22, fontWeight: 800 }}>How this works</h3>
            <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>
              You do not have to fill out both sections. If you only want workout coaching, fill out the workout section and type “skip” in the first box of the nutrition section. If you only want nutrition coaching, fill out the nutrition section and type “skip” in the first box of the workout section. If you want both, fill out both questionnaires.
            </p>
          </Card>

          <div className="two-col">
            <div>
              <SectionTitle
                eyebrow="Q&A Intake"
                title="What I need to know before building your program"
                text="These questions help build a plan that actually fits you. That includes your body, your experience level, your equipment, and your goal."
              />
              <Card style={{ marginTop: 28, padding: 28, background: "linear-gradient(135deg, rgba(10,132,255,0.12), rgba(7,11,20,0.96))" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 18, background: "#0A84FF", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🛡️</div>
                  <div>
                    <h3 style={{ margin: "0 0 8px 0", fontSize: 20, fontWeight: 800 }}>Why the questions matter</h3>
                    <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>
                      The better the info, the better the plan. Whether you want to gain muscle, stay the same weight and lean out, or improve performance in your sport, the details help shape the program.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#07101e", color: "#fff", padding: "20px 24px" }}>
                <div>
                  <p style={{ margin: "0 0 4px 0", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0A84FF", fontWeight: 700 }}>Start Your Plan</p>
                  <h3 style={{ margin: 0, fontSize: 28, fontWeight: 900 }}>Client Questionnaire</h3>
                </div>
                <div style={{ fontSize: 24 }}>📝</div>
              </div>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 16 }}>Workout Questionnaire</h3>
                <div className="form-grid">
                  {intakeQuestions.map((field) => (
                    <div key={field.label} className={field.type === "textarea" ? "full-width" : ""}>
                      <QuestionnaireField field={field} />
                    </div>
                  ))}
                </div>

                <h3 style={{ marginTop: 30, marginBottom: 16 }}>Nutrition Questionnaire</h3>
                <div className="form-grid">
                  {mealQuestions.map((field) => (
                    <div key={field.label} className={field.type === "textarea" ? "full-width" : ""}>
                      <QuestionnaireField field={field} />
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <button
                    type="submit"
                    style={{
                      display: "inline-block",
                      padding: "14px 22px",
                      borderRadius: 18,
                      fontWeight: 700,
                      border: "1px solid #0A84FF",
                      background: "linear-gradient(135deg, #0A84FF, #0066E6)",
                      color: "#ffffff",
                      cursor: "pointer",
                      boxShadow: "0 10px 24px rgba(10,132,255,0.28)",
                    }}
                  >
                    Submit Form
                  </button>
                  <ButtonLink href="#pricing" primary={false}>View Pricing</ButtonLink>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="nutrition" style={{ borderTop: "1px solid rgba(10,132,255,0.12)", borderBottom: "1px solid rgba(10,132,255,0.12)", background: "rgba(7,16,30,0.7)" }}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="two-col">
            <SectionTitle
              eyebrow="Nutrition"
              title="Simple guidance that supports the training"
              text="Nutrition help stays realistic. The goal is to make it easy to follow, whether you want to gain size, cut body fat, maintain weight, or clean up your eating."
            />
            <div className="card-grid-2">
              {nutritionCards.map((item) => (
                <Card key={item.title} style={{ padding: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 16, border: "1px solid rgba(10,132,255,0.16)", background: "#081120", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 22 }}>
                    {item.emoji}
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: 20, fontWeight: 800 }}>{item.title}</h3>
                  <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 760, margin: "0 auto 40px auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>Results</p>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#f8fafc" }}>Real Results From Real Clients</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#94a3b8" }}>Performance, physique, and structure — built around real goals and real progress.</p>
          </div>
          <div className="card-grid-3">
            {resultsCards.map((card) => (
              <Card key={card.title} style={{ padding: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 18, background: "linear-gradient(135deg, #0A84FF, #0066E6)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, marginBottom: 18 }}>
                  {card.title.replace("Client ", "C")}
                </div>
                <h3 style={{ margin: "0 0 14px 0", fontSize: 22, fontWeight: 800 }}>{card.title}</h3>
                <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>{card.stats.map((stat) => <CheckRow key={stat}>{stat}</CheckRow>)}</div>
                <p style={{ margin: 0, fontStyle: "italic", lineHeight: 1.7, color: "#94a3b8" }}>“{card.quote}”</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#07101e", color: "#ffffff" }}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 760, margin: "0 auto 40px auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>Testimonials</p>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#ffffff" }}>What People Are Saying</h2>
          </div>
          <div className="card-grid-2">
            {testimonials.map((quote, index) => (
              <Card key={quote} style={{ padding: 28 }}>
                <p style={{ margin: "0 0 12px 0", fontSize: 28, color: "#0A84FF", fontWeight: 900 }}>“</p>
                <p style={{ margin: 0, lineHeight: 1.8, color: "#e2e8f0", fontSize: 17 }}>{quote}</p>
                <p style={{ margin: "16px 0 0 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.16em", color: "#94a3b8" }}>Client {index + 1}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="two-col">
            <SectionTitle
              eyebrow="Why Summit"
              title="Why people choose Summit Coaching"
              text="Built for people who want real structure, direct coaching, and a plan that actually matches their body, goals, and lifestyle."
            />
            <Card style={{ padding: 28 }}>
              <div style={{ display: "grid", gap: 14 }}>{whyChooseSummit.map((item) => <CheckRow key={item}>{item}</CheckRow>)}</div>
            </Card>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid rgba(10,132,255,0.12)", borderBottom: "1px solid rgba(10,132,255,0.12)", background: "rgba(7,16,30,0.7)" }}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="two-col">
            <SectionTitle
              eyebrow="Included"
              title="Everything you get"
              text="The starter plan is built to keep things simple, affordable, and effective without losing the custom side of coaching."
            />
            <Card style={{ padding: 28 }}>
              <div style={{ display: "grid", gap: 14 }}>{includedItems.map((item) => <CheckRow key={item}>{item}</CheckRow>)}</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about-you">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="two-col">
            <div>
              <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>About the Coach</p>
              <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#f8fafc" }}>Built from real experience, not guesswork</h2>
              <p style={{ margin: "0 0 24px 0", fontSize: 18, lineHeight: 1.7, color: "#94a3b8" }}>I’m Wyatt Hayes, a college athlete with years of experience in training, discipline, and performance. I’ve spent years in competitive sports, lifting, and learning what actually works — not just what looks good online.</p>
              <p style={{ margin: "0 0 24px 0", fontSize: 18, lineHeight: 1.7, color: "#94a3b8" }}>This coaching is built for people who want a clear plan without confusion. Whether you’re a high school athlete, a beginner, or someone getting back into shape, the goal is simple: give you structure, keep you consistent, and help you improve.</p>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#94a3b8" }}>Everything is based on real habits, real training, and what I personally follow and believe in.</p>
            </div>
            <Card style={{ padding: 28 }}>
              <h3 style={{ margin: "0 0 16px 0", fontSize: 22, fontWeight: 800 }}>What makes this different</h3>
              <div style={{ display: "grid", gap: 12 }}>{aboutHighlights.map((item) => <CheckRow key={item}>{item}</CheckRow>)}</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ background: "#07101e", color: "#ffffff" }}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 760, margin: "0 auto 40px auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>How it Works</p>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#ffffff" }}>A plan built 100% around you</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#cbd5e1" }}>You send your information, I build your plan. Everything is based on your body, your goals, and how you want to train.</p>
          </div>
          <div className="card-grid-3">
            {processSteps.map((step) => (
              <Card key={step.title} style={{ padding: 28 }}>
                <h3 style={{ margin: "0 0 12px 0", fontSize: 22, fontWeight: 800 }}>{step.title}</h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: "#cbd5e1" }}>{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 760, margin: "0 auto 40px auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>Pricing</p>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 900 }}>Limited Founders Pricing</h2>
            <p style={{ color: "#94a3b8" }}>Early clients get locked-in lower pricing as Summit grows.</p>
          </div>

          <div className="card-grid-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.title} style={{ padding: 28 }}>
                <h3 style={{ margin: "0 0 8px 0", fontSize: 22, fontWeight: 800 }}>{tier.title}</h3>
                <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 10 }}>{tier.price}</div>
                <p style={{ color: "#94a3b8" }}>{tier.note}</p>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: 40 }} className="card-grid-3">
            <Card style={{ padding: 24, background: "linear-gradient(135deg, rgba(10,132,255,0.18), rgba(7,11,20,0.96))" }}>
              <h3 style={{ marginBottom: 8 }}>Family & Team Pricing</h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.7 }}>
                Discounts available when signing up with family members, friends, or teammates. The more people involved, the more structure and accountability — at a lower cost per person.
              </p>
            </Card>
            {extraPricing.map((item) => (
              <Card key={item.title} style={{ padding: 24 }}>
                <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#94a3b8" }}>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 760, margin: "0 auto 40px auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>FAQ</p>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#f8fafc" }}>Questions people usually ask</h2>
          </div>
          <div style={{ display: "grid", gap: 16, maxWidth: 920, margin: "0 auto" }}>
            {faqItems.map((item) => (
              <Card key={item.question} style={{ padding: 24 }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: 20, fontWeight: 800 }}>{item.question}</h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: "#94a3b8" }}>{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container" style={{ paddingTop: 24, paddingBottom: 80 }}>
          <div style={{ overflow: "hidden", borderRadius: 34, background: "linear-gradient(to right, #020617, #0f172a, #1e293b)", color: "#ffffff", boxShadow: "0 18px 40px rgba(15,23,42,0.18)" }}>
            <div className="contact-grid" style={{ padding: 32 }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", right: 20, top: 0, width: 120, height: 120, background: "rgba(10,132,255,0.16)", borderRadius: 999, filter: "blur(18px)" }} />
                <div>
                  <p style={{ margin: "0 0 12px 0", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0A84FF" }}>Contact</p>
                  <h2 style={{ margin: "0 0 16px 0", fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.05, fontWeight: 900, color: "#ffffff" }}>Ready to start?</h2>
                  <p style={{ maxWidth: 560, margin: 0, fontSize: 18, lineHeight: 1.7, color: "#cbd5e1" }}>Start your custom plan today and stop guessing. Send over your goal, your experience level, and how many days per week you want to train, and your plan will be built around you.</p>
                </div>
              </div>
              <div className="card-grid-2">
                <Card style={{ padding: 24, gridColumn: "1 / -1", background: "linear-gradient(135deg, rgba(10,132,255,0.14), rgba(10,16,28,0.95))" }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.2em", color: "#BFDBFE", fontWeight: 700 }}>Before payment</p>
                  <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#e2e8f0" }}>Fill out the questionnaires and I’ll show you how the coaching is set up before you continue monthly.</p>
                </Card>
                <Card style={{ padding: 24 }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0A84FF", fontWeight: 700 }}>Instagram</p>
                  <p style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>@yourhandle</p>
                </Card>
                <Card style={{ padding: 24 }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0A84FF", fontWeight: 700 }}>Email</p>
                  <p style={{ margin: 0, fontSize: 24, fontWeight: 800, wordBreak: "break-word" }}>summittrainingnutrition@gmail.com</p>
                </Card>
                <Card style={{ padding: 24, gridColumn: "1 / -1" }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.2em", color: "#0A84FF", fontWeight: 700 }}>Sample message</p>
                  <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#f8fafc" }}>“I want to start a plan. My goal is to improve my fitness and I can train 4 days a week.”</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const __smokeTests = {
  intakeQuestionCount: intakeQuestions.length === 9,
  mealQuestionCount: mealQuestions.length === 6,
  athleteTrackCount: athleteTracks.length === 3,
  pricingTierCount: pricingTiers.length === 3,
  extraPricingCount: extraPricing.length === 3,
  faqCount: faqItems.length === 5,
  hasFoundersPrice: pricingTiers[0].price === "$15/month",
};
