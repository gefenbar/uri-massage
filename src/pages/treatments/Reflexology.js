import React from "react";
import { Link } from "react-router-dom";

export default function Reflexology() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">
        רפלקסולוגיה: טכניקת ריפוי עתיקה ומרגיעה
      </h1>
      <h2 className="h2-single-treatment">
        חשפו את הכוח המרגיע והמאזן של רפלקסולוגיה, טכניקת ריפוי עתיקה המבוססת על
        עיסוי וכיווץ של אזורים ספציפיים בכפות הרגליים והידיים. הטיפול הזה מבטיח
        לאזן את זרימת האנרגיה בגוף, לשחרר מתח ולהעניק תחושה מחודשת של רוגע
        ושלווה.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 מאזן ומרמוניז את זרימת האנרגיה בגוף</li>
          <li>🔸 מרגיע את הגוף והנפש ומפחית מתח</li>
          <li>🔸 משפר את זרימת הדם והלימפה</li>
          <li>🔸 מעודד הבראה מכאבים וחרדות</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 דלקות עור או פצעים פתוחים ביד/כף רגל</li>
          <li>🚫 פגמים מולדים או היפרמוביליות בגפיים</li>
          <li>🚫 תרומבוזיס פעילה או סכנת קרישה גבוהה</li>
          <li>🚫 צנתור לב/התערבות כלילית לאחרונה</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים ללקוחות:</h3>
        <ul>
          <li>💡 רחצו את רגליכם/ידיכם היטב לפני הטיפול.</li>
          <li>💡 הגיעו במצב נינוח ורגוע לטיפול.</li>
          <li>💡 לבשו בגדים נוחים ורפויים.</li>
          <li>💡 שתו הרבה נוזלים לאחר הטיפול.</li>
        </ul>
      </div>
      <h2>טכניקת ריפוי מרגיעה ומאזנת</h2>
      <div className="list-single-treatment">
        <p>
          רפלקסולוגיה היא טכניקת ריפוי עתיקה המציעה מגוון יתרונות לגוף ולנפש:
        </p>
        <ul>
          <li>🌟 מאזנת ומרמוניזה את זרימת האנרגיה בגוף</li>
          <li>🌟 מרגיעה ומפחיתה מתח, חרדה ולחץ</li>
          <li>🌟 מסייעת בהפחתת כאבים ומתחים גופניים</li>
          <li>🌟 משפרת את זרימת הדם והלימפה</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור ברפלקסולוגיה?</h3>
      <p>
        רפלקסולוגיה היא טכניקת ריפוי עתיקה ומרגיעה המבוססת על עיסוי כפות הרגליים
        והידיים. המטפלים המנוסים שלנו ישלבו טכניקות ייחודיות של לחיצה ועיסוי
        באזורים ספציפיים, במטרה לאזן את זרימת האנרגיה בגוף, לשחרר מתח ולהעניק
        תחושה עמוקה של רוגע ושלווה.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לרפלקסולוגיה, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי שוודי קלאסי</li>
            <li>עיסוי רקמות עמוקות</li>
            <li>עיסוי תאילנדי</li>
            <li>עיסוי ראש וצוואר</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        loading="lazy"
        alt="רפלקסולוגיה"
      />
      <Link to="/contact" className="btn-book-treatment">
        הזמינו טיפול עכשיו!
      </Link>
    </div>
  );
}