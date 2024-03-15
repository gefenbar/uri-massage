import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
      <main className="home">
  <HeroSection/>
  <AboutSection/>
  <TreatmentsSection/>
  <ContactSection/>
      </main>
    );
  }
  
  const HeroSection = ()=>(
  <section className="hero-section">
  <div className="hero-content">
  <h1>אורי שמאי מטפל במגע וצליל</h1>
  <p>מגוון טיפולי מסאז' מרגיעים ומאזנים</p>
<br/>
  <button><Link to="/treatments">לתיאום טיפול</Link>
  </button>  </div>
  </section>
  )
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
          אורי שמאי - מטפל מוסמך, בוגר המכללה לרפואה אלטרנטיבית תאילנד קוסמוי ומכללת ברק. 
          אני מבצע מגוון טיפולים, ביניהם: עיסוי שוודי, עיסוי לנשים בהריון, עיסוי תינוקות, טיפול בקריסטלים ועוד.
        </p>
        <Link to="/contact" >לפרטים נוספים וקביעת תור</Link>
      </div>
    </div>
  </div>
</section>

);

  
  const treatments = [
    {
      title: 'עיסוי שוודי',
      image: 'swedish-massage.webp', 
    },
    {
      title: 'עיסוי לנשים הרות',
      image: 'pregnancy-massage.webp', 
    },
    {
      title: 'עיסוי תינוקות',
      image: 'baby-massage.webp', 
    },
    {
      title: 'כוסות רוח',
      image: 'cupping-glass-massage.webp', 
    },
    {
      title: 'טיפול בקריסטלים',
      image: 'crystals-massage.webp', 
    }
  ];
  export const TreatmentsSection = () => (
    <section className="treatments-section">
      <h2>טיפולים</h2>
      <div className="treatment-cards">
        {treatments.map((treatment, index) => (
          <div className="treatment-card" key={index}>
            <img
              src={treatment.image}
              alt={treatment.title}
              className="treatment-image"
            />
            <p className="treatment-title">{treatment.title}</p>
          </div>
        ))}
        
      </div>
      <br/>
      <br/>
      <br/>
      <Link className="more" to="/treatments">לטיפולים נוספים</Link>
      <br/>
      <br/>
    </section>
  )
  const ContactSection = () => ( 
  <section className="contact-section">
  <h2>יצירת קשר</h2>
  <p>כתובת: קיבוץ ארז</p> 
  <p>טלפון: 0507431189</p>
  <p>אימייל: uriss100@gmail.com</p>
  <p>שעות פתיחה: א'-ה' 9:00-17:00, ו' בתאום מראש</p>
  </section>
  )


