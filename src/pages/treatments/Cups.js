import React from "react";
import { Link } from "react-router-dom";

export default function CuppingTherapy() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">
        כוסות רוח: טכניקת ריפוי עתיקה ומרגיעה
      </h1>
      <h2 className="h2-single-treatment">
        חשפו את הכוח המרגיע והמרפא של כוסות רוח, טכניקה עתיקה המשתמשת בוואקום
        כדי לשפר את זרימת הדם ולסלק רעלים מהגוף. הטיפול הזה מבטיח להפחית כאבים
        ומתח שרירי, לאזן את האנרגיה ולהעניק תחושה עמוקה של רגיעה ושלווה.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 מפחית כאבים ומתח שרירי</li>
          <li>🔸 משפר את זרימת הדם ופינוי רעלים</li>
          <li>🔸 מאזן את זרימת האנרגיה בגוף</li>
          <li>🔸 מרגיע את הגוף והנפש ומעניק שלווה פנימית</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 פצעים פתוחים או דלקות עור</li>
          <li>🚫 בעיות קרישה או סטטוס אנטיקואגולנטי</li>
          <li>🚫 מחלות ממאירות או ספיקה נמוכה</li>
          <li>🚫 הריון בסיכון גבוה</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים ללקוחות:</h3>
        <ul>
          <li>💡 שתו הרבה נוזלים לפני ואחרי הטיפול.</li>
          <li>💡 לבשו בגדים נוחים ורפויים.</li>
          <li>💡 ידעו את המטפל על כל מצב רפואי או תרופות.</li>
          <li>💡 הקשיבו לגופכם והתאימו את עוצמת היניקה לפי הצורך.</li>
        </ul>
      </div>
      <h2>חוויה מרגיעה ומפחיתת כאבים</h2>
      <div className="list-single-treatment">
        <p>
          טיפול בכוסות רוח הוא חוויה מרגיעה ומרפאה המציעה מגוון יתרונות לגוף
          ולנפש:
        </p>
        <ul>
          <li>🌟 מרגיע ומשחרר מתח וכאבים גופניים</li>
          <li>🌟 משפר את זרימת הדם והלימפה לפינוי רעלים</li>
          <li>🌟 מאזן את זרימת האנרגיה בגוף למצב הרמוני</li>
          <li>🌟 מעניק שלווה פנימית ורגיעה עמוקה</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור בכוסות רוח?</h3>
      <p>
        כוסות רוח הוא טיפול מרגיע ומרפא המבוסס על טכניקה עתיקה המשתמשת בוואקום
        לשיפור זרימת הדם, פינוי רעלים והפחתת כאבים. המטפלים המנוסים שלנו ישלבו
        תנועות ייחודיות עם כוסות וואקום על הגוף, תוך התאמה אישית לצרכים
        הייחודיים שלכם, במטרה לאזן את האנרגיה, לשחרר מתחים ולהעניק לכם תחושה
        עמוקה של רגיעה ושלווה.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לטיפול בכוסות רוח, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי שוודי קלאסי</li>
            <li>עיסוי רקמות עמוקות</li>
            <li>עיסוי ספורטיבי</li>
            <li>עיסוי תאילנדי</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        alt="כוסות רוח"
        loading="lazy"
      />
      <Link to="/contact" className="btn-book-treatment">
        הזמינו טיפול עכשיו!
      </Link>
    </div>
  );
}
