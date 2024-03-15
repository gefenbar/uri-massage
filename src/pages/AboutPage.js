import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>שלום, שמי אורי שמאי</h1>
          <h2>מטפל מוסמך ומנוסה בתחום המגע הטיפולי</h2>
        </div>
        <div className="about-content">
          <div className="about-image-container">
            <img src="uri.webp" alt="אורי שמאי" width="400px" height="500px" />
          </div>
          <div className="about-text-container">
            <p>
              אני מתמחה במגוון עיסויים שמטרתם להרגיע, לאזן ולשפר את התחושה
              הכללית. אני בוגר המכללה לרפואה אלטרנטיבית תאילנד קוסמוי וכן בוגר
              הכשרה מקצועית במכללת ברק.
            </p>
            <h3> הטיפולים שלי:</h3>
            <ul className="treatments-list">
              <li>
                <Link to="/sweedish">עיסוי שוודי קלאסי</Link>
              </li>
              <li>
                <Link to="/deep-tissue">עיסוי עמוק בעזרת מקלות במבוק</Link>
              </li>
              <li>
                <Link to="/pregnancy">עיסוי נשים בהריון</Link>
              </li>
              <li>
                <Link to="/infant-massage">
                  עיסוי תינוקות, כולל סדנאות להורים
                </Link>
              </li>
              <li>
                <Link to="/cups">כוסות רוח</Link>
              </li>
              <li>
                <Link to="/facial-massage">עיסוי פנים רפואי</Link>
              </li>
              <li>
                <Link to="/hopi-candles">נרות הופי</Link>
              </li>
              <li>
                <Link to="/thai-foot-massage">פוט מסאז' תאילנדי מקורי</Link>
              </li>
              <li>
                <Link to="/reflexology">רפלקסולוגיה</Link>
              </li>
              <li>
                <Link to="/sound-healing">
                  טיפול בצלילים מרפאים (Sound Healing)
                </Link>
              </li>
            </ul>
            <p>
              אני מטפל בקליניקה שלי בקיבוץ ארז וניתן לתאם טיפול במקום בימים
              א'-ו'. מוזמנים ליצור קשר וליהנות מטיפול מקצועי ומפנק!
            </p>
            <Link className="contact-link" to="/contact">
              דברו איתי <span className="emoji">&#128588;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
