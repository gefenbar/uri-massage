import React from "react";
import { Link } from "react-router-dom";

export default function PregnancyMassage() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">
        עיסוי לנשים הרות: חוויה מרגיעה ומפנקת
      </h1>
      <h2 className="h2-single-treatment">
        התמסרו לחוויה המפנקת של עיסוי לנשים הרות, טכניקה ייחודית המותאמת לצרכים
        המשתנים של הגוף ההרה. הטיפול הזה מבטיח להקל על תסמינים כמו עייפות, בעיות
        שינה וכאבים, בזמן שמעניק לכן רגעים של רגיעה, שחרור מתח והרפיה עמוקה.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 מרגיע ומשחרר מתח מהגוף ההרה</li>
          <li>🔸 מקל על כאבים, עייפות ובעיות שינה</li>
          <li>🔸 משפר את זרימת הדם ומקל על נפיחות</li>
          <li>🔸 מעניק תחושה מפנקת של רוגע ושלווה</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 הריון מסוכן או סיכון גבוה לפגים</li>
          <li>🚫 דימומים או אבחנה של צוואר רחם קצר</li>
          <li>🚫 לחץ דם גבוה בלתי מאוזן או טרשת נאמה</li>
          <li>🚫 פגיעה במקום המונעת שכיבה על הצד</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים לנשים הרות:</h3>
        <ul>
          <li>💡 שתו הרבה נוזלים לפני ואחרי העיסוי.</li>
          <li>💡 לבשו בגדים נוחים ורפויים לטיפול.</li>
          <li>💡 ידעו את המטפל/ת על כל מגבלה או בעיה בהריון.</li>
          <li>💡 הקשיבו לגופכן והתאימו את עוצמת הלחיצה לפי הצורך.</li>
        </ul>
      </div>
      <h2>חוויה מרגיעה ומפנקת במיוחד לנשים הרות</h2>
      <div className="list-single-treatment">
        <p>
          עיסוי לנשים הרות הוא חוויה מפנקת ומרגיעה המציעה מגוון יתרונות לגוף
          ולנפש:
        </p>
        <ul>
          <li>🌟 מרגיע את הגוף והנפש ומפחית מתחים וחרדות</li>
          <li>🌟 משפר את השינה ומקל על עייפות ותשישות</li>
          <li>🌟 מקל על כאבים, נפיחות וגזים</li>
          <li>🌟 מעניק תחושה עמוקה של רוגע והרפיה</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור בעיסוי לנשים הרות?</h3>
      <p>
        עיסוי לנשים הרות הוא חוויה מפנקת ומרגיעה המותאמת במיוחד לגוף המשתנה של
        האישה ההרה. המטפלות המנוסות שלנו ישלבו טכניקות עיסוי ייחודיות וכריות
        ייעודיות לנוחות מרבית, במטרה לשחרר מתח וכאבים, לשפר את זרימת הדם ולהעניק
        לכן חוויה מפנקת ומרגיעה במיוחד בתקופה המיוחדת הזו.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לעיסוי לנשים הרות, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי שוודי קלאסי</li>
            <li>עיסוי רקמות עמוקות</li>
            <li>רפלקסולוגיה</li>
            <li>עיסוי ראש וצוואר</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        alt="עיסוי לנשים הרות"
        loading="lazy"
      />
      <Link to="/contact" className="btn-book-treatment">
        הזמינו טיפול עכשיו!
      </Link>
    </div>
  );
}
