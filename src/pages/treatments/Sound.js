import React from 'react';
import { Link } from 'react-router-dom';

export default function SoundHealing() {
 return (
   <div className="page-single-treatment">
     <h1 className="h1-single-treatment">טיפול בצלילים מרפאים: חוויה מרגיעה ומאזנת</h1>
     <h2 className="h2-single-treatment">
       חשפו את הכוח המרגיע והמאזן של טיפול בצלילים מרפאים, חוויה רוחנית ייחודית המשתמשת בצלילים מהדהדים מכלי נגינה עתיקים כדי לאזן את זרימת האנרגיה בגוף ולהעניק תחושה עמוקה של רגיעה ושלווה.
     </h2>
     <div className="list-single-treatment">
       <ul>
         <li>🔸 מאזן ומרמוניז את זרימת האנרגיה בגוף</li>
         <li>🔸 מרגיע את הגוף והנפש ומפחית מתח ולחץ</li>
         <li>🔸 מעודד התרפאות פיזית, רגשית ורוחנית</li>
         <li>🔸 מעניק תחושה עמוקה של רגיעה ושלווה</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>התוויות נגד:</h3>
       <ul>
         <li>🚫 צלצול אוזניים או לחץ באוזניים</li>
         <li>🚫 רגישות יתר לצלילים חריפים</li>
         <li>🚫 טראומות או חוויות קשות קשורות לצלילים</li>
         <li>🚫 חוסר יכולת לשכב בשקט לפרקי זמן ארוכים</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>טיפים ללקוחות:</h3>
       <ul>
         <li>💡 הגיעו במצב נינוח ופתוח לפני הטיפול.</li>
         <li>💡 לבשו בגדים נוחים ורפויים.</li>
         <li>💡 השארו רגועים ושמרו על נשימה עמוקה במהלך הטיפול.</li>
         <li>💡 ידעו את המטפל על כל רגישות או חוויה קשורת לצלילים.</li>
       </ul>
     </div>
     <h2>חוויה רוחנית מרגיעה ומאזנת</h2>
     <div className="list-single-treatment">
       <p>
         טיפול בצלילים מרפאים הוא חוויה רוחנית ייחודית המציעה מגוון יתרונות לגוף, נפש ורוח:
       </p>
       <ul>
         <li>🌟 מאזן ומרמוניז את זרימת האנרגיה בגוף</li>
         <li>🌟 מרגיע את הגוף והנפש וחוסם רעשים מהסביבה</li>
         <li>🌟 מעודד התרפאות פיזית, רגשית ורוחנית</li>
         <li>🌟 מעניק תחושה עמוקה של שלווה והרמוניה</li>
       </ul>
     </div>
     <h3>מדוע כדאי לבחור בטיפול בצלילים מרפאים?</h3>
     <p>
       טיפול בצלילים מרפאים הוא חוויה רוחנית מרגיעה ומאזנת המשתמשת בצלילים מהדהדים מכלי נגינה עתיקים. המטפלים המנוסים שלנו ינחו אתכם לאורך החוויה המיוחדת הזו, תוך שימוש בצלילים נקיים וייחודיים שיאזנו את זרימת האנרגיה בגוף ויעניקו לכם תחושה עמוקה של רגיעה ושלווה.
     </p>
     <div className="list-single-treatment">
       <h3>התמחויות נוספות</h3>
       <div>
         בנוסף לטיפול בצלילים מרפאים, אנו מציעים גם טיפולים כגון:
         <ul>
           <li>ריפוי בקריסטלים</li>
           <li>עיסוי ראש וצוואר</li>
           <li>רפלקסולוגיה</li>
           <li>יוגה ומדיטציה</li>
         </ul>
       </div>
     </div>
     <img
       className="img-single-treatment"
       src="crystals-massage.webp"
       alt="טיפול בצלילים מרפאים"
       loading='lazy'
     />
                 <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

   </div>
 );
}