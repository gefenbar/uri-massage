import React from 'react';
import { Link } from 'react-router-dom';

export default function ThaiFootMassage() {
 return (
   <div className="page-single-treatment">
     <h1 className="h1-single-treatment">פוט מסאז' תאילנדי: פינוק וטיפול כפות הרגליים</h1>
     <h2 className="h2-single-treatment">
       התענגו על פוט מסאז' תאילנדי, חוויה ייחודית של עיסוי כפות הרגליים המבוססת על טכניקות עתיקות של הרפואה התאילנדית. הטיפול הזה מרגיע את הגוף והנפש, משחרר מתח ומעניק תחושה מחודשת של חיוניות ואנרגיה.
     </h2>
     <div className="list-single-treatment">
       <ul>
         <li>🔸 מרגיע ומשחרר מתח מהרגליים והגוף כולו</li>
         <li>🔸 משפר את זרימת הדם והלימפה</li>
         <li>🔸 מעניק תחושת חיוניות ואנרגיה מחודשת</li>
         <li>🔸 מאזן את תזרימי האנרגיה בגוף</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>התוויות נגד:</h3>
       <ul>
         <li>🚫 דלקות עור או פצעים פתוחים ברגליים</li>
         <li>🚫 גידולים ממאירים או מחלות ממאירות מתקדמות</li>
         <li>🚫 תסמונת הרגליים הנפוחות בהריון</li>
         <li>🚫 מחלות לב מתקדמות</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>טיפים ללקוחות:</h3>
       <ul>
         <li>💡 רחצו את רגליכם היטב לפני הטיפול.</li>
         <li>💡 הגיעו במצב נינוח ורגוע לטיפול.</li>
         <li>💡 לבשו בגדים נוחים ורפויים.</li>
         <li>💡 שתו הרבה נוזלים לאחר הטיפול.</li>
       </ul>
     </div>
     <h2>פינוק מרגיע ומעצים כוחות</h2>
     <div className="list-single-treatment">
       <p>
         פוט מסאז' תאילנדי הוא חוויה ייחודית ומעצימה, המציעה מגוון יתרונות לגוף ולנפש:
       </p>
       <ul>
         <li>🌟 מסייע בהפחתת כאבים וכאבי רגליים</li>
         <li>🌟 משפר את הנשימה וזרימת האנרגיה בגוף</li>
         <li>🌟 מרגיע את הנפש ומעניק שלווה פנימית</li>
         <li>🌟 מחזק את מערכת החיסון ומעודד הבראה</li>
       </ul>
     </div>
     <h3>מדוע כדאי לבחור בפוט מסאז' תאילנדי?</h3>
     <p>
       פוט מסאז' תאילנדי הוא חוויה ייחודית של עיסוי כפות הרגליים המבוססת על טכניקות עתיקות של הרפואה התאילנדית. המטפלים המנוסים שלנו ישלבו לחיצות ייחודיות, מתיחות ועיסויים הממוקדים בכפות הרגליים, במטרה לשחרר מתח מהגוף כולו, לשפר זרימת דם ולאזן את זרמי האנרגיה.
     </p>
     <div className="list-single-treatment">
       <h3>התמחויות נוספות</h3>
       <div>
         בנוסף לפוט מסאז' תאילנדי, אנו מציעים גם טיפולים כגון:
         <ul>
           <li>עיסוי תאילנדי מלא גוף</li>
           <li>עיסוי שוודי קלאסי</li>
           <li>עיסוי רקמות עמוקות</li>
           <li>יוגה ומדיטציה</li>
         </ul>
       </div>
     </div>
     <img
       className="img-single-treatment"
       src="crystals-massage.webp"
       alt="פוט מסאז' תאילנדי"
       loading='lazy'

     />
               <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

   </div>
 );
}