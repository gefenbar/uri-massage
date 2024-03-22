import React from 'react';
import { Link } from 'react-router-dom';

export default function EarCandling() {
 return (
   <div className="page-single-treatment">
     <h1 className="h1-single-treatment">נרות הופי: טקס מרגיע ומטהר</h1>
     <h2 className="h2-single-treatment">
       חוויה נרות הופי, טקס ייחודי ומרגיע המבוסס על טכניקה עתיקה של ניקוי ופינוי רעלים מאזור האוזן והראש באמצעות נרות ייעודיים. התהליך מבטיח לפנות את הגוף מרעלים ולחזק את מערכת החיסון, תוך חוויה מרגיעה וממריצה לנפש.
     </h2>
     <div className="list-single-treatment">
       <ul>
         <li>🔸 מנקה וסולק רעלים מאזור הראש והאוזניים</li>
         <li>🔸 מרגיע ומאזן את הגוף והנפש</li>
         <li>🔸 משפר זרימת אנרגיה בגוף</li>
         <li>🔸 מחזק את מערכת החיסון ומעודד הבראה</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>התוויות נגד:</h3>
       <ul>
         <li>🚫 דלקות אוזניים פעילות</li>
         <li>🚫 חורים בעור התוף</li>
         <li>🚫 צינורית אוזנית מושתלת</li>
         <li>🚫 סרטן, מחלות לב או יתר לחץ דם גבוה מאוד</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>טיפים ללקוחות:</h3>
       <ul>
         <li>💡 הגיעו במצב רגוע ונינוח לפני הטיפול.</li>
         <li>💡 קחו נשימות עמוקות במהלך הטיפול.</li>
         <li>💡 הימנעו מאכילה כבדה לפני הטיפול.</li>
         <li>💡 שתו הרבה נוזלים לאחר הטיפול.</li>
       </ul>
     </div>
     <h2>טקס ייחודי לניקוי והרמוניה</h2>
     <div className="list-single-treatment">
       <p>
         טקס נרות הופי הוא חוויה מרגיעה וממריצה המציעה מגוון יתרונות לגוף ולנפש:
       </p>
       <ul>
         <li>🌟 משפר את הנשימה ומקל על כאבי ראש</li>
         <li>🌟 מרגיע ומאזן את הגוף והנפש</li>
         <li>🌟 מנקה ופינוי רעלים מאזור הראש והגוף</li>
         <li>🌟 מחזק את מערכת החיסון ומעודד הבראה</li>
       </ul>
     </div>
     <h3>מדוע כדאי לבחור בטקס נרות הופי?</h3>
     <p>
       טקס נרות הופי הוא חוויה ייחודית ומרגיעה המבוססת על טכניקה עתיקה של ניקוי והרמוניה. המטפלים המנוסים שלנו ינחו אתכם לאורך הטקס המיוחד הזה, תוך שימוש בנרות ייעודיים לניקוי ופינוי רעלים מאזור הראש. חוויה זו תעניק לכם רגעים של רגיעה עמוקה ושלווה, ותסייע בהרמוניזציה וחיזוק מערכת החיסון.
     </p>
     <div className="list-single-treatment">
       <h3>התמחויות נוספות</h3>
       <div>
         בנוסף לטיפול נרות הופי, אנו מציעים גם טיפולים כגון:
         <ul>
           <li>עיסוי שוודי קלאסי</li>
           <li>עיסוי רקמות עמוקות</li>
           <li>עיסוי ראש וצוואר</li>
           <li>רפלקסולוגיה</li>
         </ul>
       </div>
     </div>
     <img
       className="img-single-treatment"
       src="crystals-massage.webp"
       alt="נרות הופי"
       loading='lazy'
     />
       <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

   </div>
 );
}