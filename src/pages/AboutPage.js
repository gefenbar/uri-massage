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
            <img
              src="uri.webp"
              alt="אורי שמאי"
              loading="lazy"
              width="400px"
              height="500px"
            />
          </div>
          <div className="about-text-container">
            <p>
              אני מתמחה במגוון עיסויים שמטרתם להרגיע, לאזן ולשפר את התחושה
              הכללית. אני בוגר המכללה לרפואה אלטרנטיבית תאילנד קוסמוי וכן בוגר
              הכשרה מקצועית במכללת ברק.
            </p>
            <h3> הטיפולים שלי:</h3>
            <ul className="treatments-list">
              <Link to="/sweedish">
                <li>עיסוי שוודי קלאסי</li>
              </Link>
              <Link to="/bamboo">
                <li>עיסוי עמוק בעזרת מקלות במבוק</li>
              </Link>
              <Link to="/pregnant">
                <li>עיסוי נשים בהריון</li>
              </Link>
              <Link to="/babies">
                <li>עיסוי תינוקות, כולל סדנאות להורים</li>
              </Link>
              <Link to="/cups">
                <li>כוסות רוח</li>
              </Link>
              <Link to="/face">
                <li>עיסוי פנים רפואי</li>
              </Link>
              <Link to="/candles">
                <li>נרות הופי</li>
              </Link>
              <Link to="/thai">
                <li>פוט מסאז' תאילנדי מקורי</li>
              </Link>
              <Link to="/reflexology">
                <li>רפלקסולוגיה</li>
              </Link>
              <Link to="/sound">
                <li>טיפול בצלילים מרפאים (Sound Healing)</li>
              </Link>
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
