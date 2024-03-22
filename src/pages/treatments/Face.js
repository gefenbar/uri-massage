import React from 'react';
import { Link } from 'react-router-dom';

export default function FacialMassage() {
 return (
   <div className="page-single-treatment">
     <h1 className="h1-single-treatment">עיסוי פנים: חוויית פינוק ומרגוע עמוקה</h1>
     <h2 className="h2-single-treatment">
       חשפו את הכוח המרגיע והמחדש של עיסוי פנים, חוויה מפנקת המשלבת טכניקות עיסוי ייחודיות עם שמנים ארומטיים משובחים. הטיפול הזה מבטיח לרגיע את הגוף והנפש, להפחית מתח שרירי ולהעניק לעור זוהר ומראה צעיר ומחודש.
     </h2>
     <div className="list-single-treatment">
       <ul>
         <li>🔸 מרגיע ומאזן את הגוף והנפש</li>
         <li>🔸 מפחית קמטים וסימני מתח בפנים</li>
         <li>🔸 מעניק לעור זוהר ומראה צעיר ומחודש</li>
         <li>🔸 משחרר מתח שרירי באזור הפנים והצוואר</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>התוויות נגד:</h3>
       <ul>
         <li>🚫 דלקות עור או פצעים פתוחים בפנים</li>
         <li>🚫 רגישות או אלרגיה לשמנים ארומטיים</li>
         <li>🚫 מצבים דלקתיים או זיהומיים חריפים</li>
         <li>🚫 מחלות עור מסוימות או גידולים באזור הפנים</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>טיפים ללקוחות:</h3>
       <ul>
         <li>💡 הגיעו עם פנים נקיות מאיפור לפני הטיפול.</li>
         <li>💡 שתו הרבה נוזלים לפני ואחרי הטיפול.</li>
         <li>💡 לבשו בגדים נוחים ורפויים.</li>
         <li>💡 הימנעו ממגע עם שמש חזקה לאחר הטיפול.</li>
       </ul>
     </div>
     <h2>חוויית פינוק מרגיעה ומזינה לפנים</h2>
     <div className="list-single-treatment">
       <p>
         עיסוי פנים הוא חוויה מפנקת המציעה מגוון יתרונות לגוף, נפש ומראה:
       </p>
       <ul>
         <li>🌟 מרגיע את הנפש ומפחית מתח ולחץ</li>
         <li>🌟 משחרר מתח שרירי באזור הפנים והצוואר</li>
         <li>🌟 מזין ומחדש את העור למראה צעיר וזוהר</li>
         <li>🌟 מסייע בשיפור מחזור הדם ופינוי רעלים</li>
       </ul>
     </div>
     <h3>מדוע כדאי לבחור בעיסוי פנים?</h3>
     <p>
       עיסוי פנים הוא חוויית פינוק מרגיעה ומזינה בו-זמנית. המטפלים המנוסים שלנו ישלבו טכניקות עיסוי ייחודיות לפנים עם שמנים ארומטיים איכותיים, במטרה לרגיע את הגוף והנפש, להפחית מתח שרירי ולהעניק לעור זוהר ומראה צעיר ומחודש. חוויה זו תשחרר אתכם ממתחים ומלחצים ותעניק לכם תחושה מרגיעה של רוגע ושלווה.
     </p>
     <div className="list-single-treatment">
       <h3>התמחויות נוספות</h3>
       <div>
         בנוסף לעיסוי פנים, אנו מציעים גם טיפולים כגון:
         <ul>
           <li>עיסוי שוודי קלאסי</li>
           <li>עיסוי ראש וצוואר</li>
           <li>רפלקסולוגיה</li>
           <li>עיסוי רקמות עמוקות</li>
         </ul>
       </div>
     </div>
     <img
       className="img-single-treatment"
       src="crystals-massage.webp"
       alt="עיסוי פנים"
       loading='lazy'
     />
  <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

   </div>
 );
}