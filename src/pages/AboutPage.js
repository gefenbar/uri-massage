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
              אני מתמחה במגוון עיסויים שמטרתם להרגיע, לאזן ולשפר את התחושה הכללית.
              אני בוגר המכללה לרפואה אלטרנטיבית תאילנד קוסמוי וכן בוגר הכשרה מקצועית במכללת ברק.
            </p>
            <ul className="treatments-list">
              <li>עיסוי שוודי קלאסי</li>
              <li>עיסוי עמוק בעזרת מקלות במבוק</li>
              <li>עיסוי נשים בהריון</li>
              <li>עיסוי תינוקות, כולל סדנאות להורים</li>
              <li>כוסות רוח</li>
              <li>עיסוי פנים רפואי</li>
              <li>נרות הופי</li>
              <li>פוט מסאז' תאילנדי מקורי</li>
              <li>רפלקסולוגיה</li>
              <li>טיפול בצלילים מרפאים (Healing sounds)</li>
            </ul>
            <p>
              אני מטפל בקליניקה שלי בקיבוץ ארז וניתן לתאם טיפול במקום בימים א'-ו'.
              מוזמנים ליצור קשר וליהנות מטיפול מקצועי ומפנק!
            </p>
            <a href="#">לפרטים נוספים וקביעת תור</a>
          </div>
        </div>
      </div>
    </section>
  );
}
