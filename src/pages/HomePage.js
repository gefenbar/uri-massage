import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <ContactSection />
    </main>
  );
}

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>אורי שמאי מטפל במגע וצליל</h1>
      <p>מגוון טיפולים מרגיעים ומאזנים</p>
      <br />
      <button>
        <Link to="/contact">לתיאום טיפול</Link>
      </button>
    </div>
  </section>
);
const AboutSection = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container">
          <img src="uri.webp" alt="אורי שמאי" width="400px" height="500px" />
        </div>
        <div className="about-text-container">
          <h2>קצת עליי</h2>
          <p>
            אורי שמאי - מטפל מוסמך, בוגר המכללה לרפואה אלטרנטיבית תאילנד קוסמוי
            ומכללת ברק.  אני מבצע מגוון טיפולים, ביניהם: טיפול בצלילים מרפאים
            (Sound Healing), עיסוי שוודי, עיסוי לנשים בהריון, עיסוי תינוקות,
            טיפול בקריסטלים ועוד.
          </p>
          <Link className="contact-link" to="/contact">לפרטים נוספים וקביעת תור</Link>
        </div>
      </div>
    </div>
  </section>
);

export const TreatmentsSection = ({
  additionalTreatments,
  showLink = true,
  showTitle = true,
}) => {
  let treatments = [
    {
      title: "עיסוי תינוקות",
      image: "baby-massage.webp",
      url: "/babies",
    },
    {
      title: "Sound Healing",
      image: "soundHealing.webp",
      url: "/sound",
    },
    {
      title: "עיסוי לנשים הרות",
      image: "pregnancy-massage.webp",
      url: "/pregnant",
    },
    {
      title: "כוסות רוח",
      image: "cups.webp",
      url: "/cups",
    },
    {
      title: "טיפול בקריסטלים",
      image: "crystals-massage.webp",
      url: "/crystals",
    },
  ];

  if (Array.isArray(additionalTreatments)) {
    treatments = [...treatments, ...additionalTreatments];
  }

  return (
    <section className="treatments-section">
      {showTitle && <h2>טיפולים</h2>}
      <div className="treatment-cards">
        {treatments.map((treatment, index) => (
          <button className="treatment-card" key={index}>
             <Link to={treatment.url}>
            <img
              src={treatment.image}
              alt={treatment.title}
              className="treatment-image"
            />
            <p className="treatment-title">
            </p>
            {treatment.title}</Link>
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />
      {showLink && (
        <Link className="more" to="/treatments">
          לטיפולים נוספים
        </Link>
      )}
      <br />
      <br />
    </section>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <h2>יצירת קשר</h2>
    <p>כתובת: קיבוץ ארז</p>
    <p>טלפון: 0507431189</p>
    <p>אימייל: uriss100@gmail.com</p>
    <p>שעות פתיחה: א'-ה' 9:00-17:00, ו' בתאום מראש</p>
  </section>
);
