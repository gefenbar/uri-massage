import React from 'react';
import { Link } from 'react-router-dom';

export default function BabyMassage() {
  return (
    <div className="page-single-treatment">
      <h1 className="h1-single-treatment">עיסוי תינוקות: חוויה מרגיעה וחוזקת קשר</h1>
      <h2 className="h2-single-treatment">
        התנסו בחוויה הייחודית והרגשית של עיסוי תינוקות, טכניקה מרגיעה שמסייעת בפיתוח הקשר בין הורה לילד. המגע העדין והמרגיע של עיסוי תינוקות יעניק לתינוק שלכם תחושת ביטחון והרגעה, בזמן שיחזק את הקשר הרגשי ביניכם.
      </h2>
      <div className="list-single-treatment">
        <ul>
          <li>🔸 מרגיע ומפחית מתח אצל התינוק</li>
          <li>🔸 משפר את השינה ומקל עלגזים וכאבי בטן</li>
          <li>🔸 מחזק את הקשר בין ההורה לתינוק</li>
          <li>🔸 מעודד התפתחות תקינה של המערכות בגוף התינוק</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>התוויות נגד:</h3>
        <ul>
          <li>🚫 תינוקות פגים מאוד</li>
          <li>🚫 מחלות עור או פצעים פתוחים</li>
          <li>🚫 בעיות נשימה או מצבים רפואיים מסוימים</li>
        </ul>
      </div>
      <div className="list-single-treatment">
        <h3>טיפים להורים:</h3>
        <ul>
          <li>💡 הרגיעו את התינוק לפני העיסוי על ידי הנקה או שתייה.</li>
          <li>💡 בחרו זמן ומקום שקטים ונעימים לטיפול.</li>
          <li>💡 הקשיבו לתגובות התינוק ולסימנים של אי נוחות.</li>
          <li>💡 דברו בקול רגוע וממשיכו ליצור קשר עין עם התינוק.</li>
        </ul>
      </div>
      <h2>חוויה ייחודית ומרגשת</h2>
      <div className="list-single-treatment">
        <p>
          עיסוי תינוקות הינו הזדמנות מרגשת ליצור קשר עמוק ואינטימי עם התינוק שלכם תוך כדי העצמת תחושת הביטחון וההרגעה שלו:
        </p>
        <ul>
          <li>🌟 מקדם התפתחות תקינה של התינוק</li>
          <li>🌟 מחזק את הקשר ההורי ואת תחושת הביטחון של התינוק</li>
          <li>🌟 מרגיע ומפחית מתח וחרדה אצל התינוק</li>
          <li>🌟 מעודד התקשרות ויצירת זיכרונות משמעותיים</li>
        </ul>
      </div>
      <h3>מדוע כדאי לבחור בעיסוי תינוקות?</h3>
      <p>
        עיסוי תינוקות הוא חוויה מרגשת ומיוחדת המחזקת את הקשר בין הורים לתינוק. מטפלות מנוסות יובילו אתכם בטכניקות המיוחדות של עיסוי התינוקות, תוך התאמה לגיל ולצרכים הייחודיים של התינוק שלכם. חוויה זו תעניק לכם ולתינוק שלכם רגעים של חום ואינטימיות, ותסייע בהרגעה, שיפור השינה ועידוד ההתפתחות התקינה.
      </p>
      <div className="list-single-treatment">
        <h3>התמחויות נוספות</h3>
        <div>
          בנוסף לעיסוי תינוקות, אנו מציעים גם טיפולים כגון:
          <ul>
            <li>עיסוי לנשים הרות</li>
            <li>רפלקסולוגיה</li>
            <li>עיסוי שוודי קלאסי</li>
            <li>עיסוי תאילנדי</li>
          </ul>
        </div>
      </div>
      <img
        className="img-single-treatment"
        src="crystals-massage.webp"
        alt="עיסוי תינוקות"
        loading='lazy'
      />
       <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

    </div>
  );
}