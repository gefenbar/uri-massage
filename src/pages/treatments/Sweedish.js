import React from "react";
import { Link } from "react-router-dom";

export default function Sweedish() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">
        עיסוי שוודי קלאסי: חוויה מחדשת כוחות
      </h1>
      <h2 className="h2-single-treatment">
        התמכרו לאומנות הנפלאה של עיסוי שוודי, טכניקה טיפולית קלאסית המשלבת מגע
        עדין ולחיצה עמוקה כדי לשחרר מתח שרירים ולשפר את זרימת הדם. חוויה מחדשת
        כוחות זו מבטיחה לשגר אתכם למצב של רגיעה עמוקה ושלווה, ומציעה פתרון טבעי
        למתח ולחרדה.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 ממיס קשרים עיקשים ומתח שרירים</li>
          <li>🔸 משפר את זרימת הדם לתזונה אופטימלית של הגוף</li>
          <li>🔸 מעניק תחושה עמוקה של רוגע ושלווה</li>
          <li>🔸 עוזר להפחית מתח, חרדה ומתחים יומיומיים</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 פצעים פתוחים</li>
          <li>🚫 מצבים דלקתיים</li>
          <li>🚫 מחלות עור</li>
          <li>🚫 הריון בסיכון גבוה</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים ללקוחות:</h3>
        <ul>
          <li>💡 שתו הרבה נוזלים לפני ואחרי העיסוי.</li>
          <li>💡 לבשו בגדים רפויים ונוחים לטיפול.</li>
          <li>💡 ידעו את המטפל/ת על כל מצב רפואי או אזורי כאב.</li>
          <li>💡 הקשיבו לגוף שלכם והתאימו את עוצמת הלחיצה לפי הצורך.</li>
        </ul>
      </div>
      <h2>חשפו את הכוח של עיסוי שוודי</h2>
      <div className="list-single-treatment">
        <p>
          מעבר להקלה על כאבי שרירים ושיפור זרימת הדם, עיסוי שוודי מציע מגוון
          יתרונות נוספים:
        </p>
        <ul>
          <li>🌟 משפר מצב רוח ותורם לרווחה נפשית</li>
          <li>🌟 עשוי לסייע בהורדת לחץ דם גבוה</li>
          <li>🌟 מגביר את הריכוז והפריון</li>
          <li>🌟 משפר את איכות השינה למנוחה מחדשת כוחות</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור בעיסוי שוודי?</h3>
      <p>
        עיסוי שוודי הוא אחת מטכניקות העיסוי הפופולריות והוותיקות ביותר בעולם.
        הוא מתאים לכל גיל ומצב גופני, ומעניק מגוון יתרונות לגוף ולנפש כאחד.
        המטפלים המנוסים שלנו יתאימו תנועות ולחיצות ייחודיות לפי הצרכים האישיים
        שלכם, ויעניקו לכם חוויית עיסוי מרגיעה ומחדשת כוחות.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לעיסוי שוודי קלאסי, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי רקמות עמוקות</li>
            <li>עיסוי לנשים הרות</li>
            <li>עיסוי ספורטיבי</li>
            <li>רפלקסולוגיה</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        loading="lazy"
        alt="עיסוי שוודי"
      />
      <Link to="/contact" className="btn-book-treatment">
        הזמינו טיפול עכשיו!
      </Link>
    </div>
  );
}
