import React from "react";
import { Link } from "react-router-dom";

export default function Crystals() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">
        ריפוי בקריסטלים: מסע רוחני וריפוי עמוק
      </h1>
      <h2 className="h2-single-treatment">
        התנסו בחוויה המיוחדת של ריפוי בקריסטלים, שיטה עתיקה המשתמשת בכוחות
        הטבעיים של אבני חן וקריסטלים כדי לאזן את זרימת האנרגיה בגוף ולהעניק
        רגיעה עמוקה ושלווה. מסע רוחני ייחודי זה מבטיח להרמוניז את הגוף, הנפש
        והרוח.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 מאזן ומרמוניז את זרימת האנרגיה בגוף</li>
          <li>🔸 מרגיע את הנפש ומעניק שלווה פנימית</li>
          <li>🔸 מעודד ריפוי עמוק של הגוף והנפש</li>
          <li>🔸 משחרר חסימות רגשיות וטראומות עבר</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 מצבי פסיכוזה או אי יציבות נפשית</li>
          <li>🚫 חוסר יכולת לשכב בשקט לפרקי זמן ארוכים</li>
          <li>🚫 חוסר אמונה בכוחות הריפוי הרוחניים</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים ללקוחות:</h3>
        <ul>
          <li>💡 הגיעו במצב נפשי פתוח ונינוח לפני הטיפול.</li>
          <li>💡 שתו הרבה נוזלים לפני ואחרי הטיפול.</li>
          <li>💡 התרכזו בנשימות עמוקות ורגיעות במהלך הטיפול.</li>
          <li>💡 שמרו על גישה פתוחה וציפיות ריאליות מהטיפול.</li>
        </ul>
      </div>
      <h2>מסע רוחני אל האיזון הפנימי</h2>
      <div className="list-single-treatment">
        <p>
          ריפוי בקריסטלים הוא חוויה רוחנית ייחודית המציעה מגוון יתרונות לגוף,
          נפש ורוח:
        </p>
        <ul>
          <li>🌟 מרמוניז ומאזן את זרימת האנרגיה בגוף</li>
          <li>🌟 משחרר חסימות רגשיות וטראומות עבר</li>
          <li>🌟 מעניק רגיעה עמוקה, שלווה ואיזון נפשי</li>
          <li>🌟 מעודד ריפוי עמוק של הגוף, הנפש והרוח</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור בריפוי בקריסטלים?</h3>
      <p>
        ריפוי בקריסטלים הוא חוויה רוחנית ייחודית המשלבת את הכוחות הטבעיים של
        אבני חן וקריסטלים כדי לאזן את זרימת האנרגיה בגוף ולעודד ריפוי עמוק.
        המטפלים המנוסים שלנו ינחו אתכם לאורך המסע הרוחני הייחודי הזה, תוך שימוש
        בקריסטלים ייחודיים ובטכניקות ריפוי מיוחדות המותאמות אישית לצרכים שלכם.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לריפוי בקריסטלים, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי רקמות עמוקות</li>
            <li>רפלקסולוגיה</li>
            <li>יוגה ומדיטציה</li>
            <li>עיסוי תאילנדי</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        alt="ריפוי בקריסטלים"
        loading="lazy"
      ></img>
      <Link to="/contact" className="btn-book-treatment">
        הזמינו טיפול עכשיו!
      </Link>
    </div>
  );
}
