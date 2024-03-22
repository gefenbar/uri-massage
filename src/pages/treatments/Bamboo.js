import React from 'react';
import { Link } from 'react-router-dom';

export default function BambooMassage() {
 return (
   <div className="page-single-treatment">
     <h1 className="h1-single-treatment">עיסוי מקלות במבוק: חוויה מרגיעה ומחדשת כוחות</h1>
     <h2 className="h2-single-treatment">
       חשפו את הכוח המחדש של עיסוי מקלות במבוק, חוויה ייחודית המשלבת מגע רך ולחיצה עמוקה באמצעות מקלות במבוק ייחודיים. הטכניקה הזו משחררת מתח, מרגיעה את הגוף והנפש ומעניקה תחושת חידוש כוחות.
     </h2>
     <div className="list-single-treatment">
       <ul>
         <li>🔸 משחרר מתח עמוק מהשרירים</li>
         <li>🔸 מרגיע ומאזן את הגוף והנפש</li>
         <li>🔸 מעניק תחושת חידוש כוחות ואנרגיה</li>
         <li>🔸 משפר זרימת הדם ומקל על כאבי שרירים</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>התוויות נגד:</h3>
       <ul>
         <li>🚫 מצבים דלקתיים או זיהומיים</li>
         <li>🚫 פצעים פתוחים או כוויות</li>
         <li>🚫 בעיות קרישה או בעיות עור מסוימות</li>
         <li>🚫 הריון מתקדם</li>
       </ul>
     </div>
     <div className="list-single-treatment">
       <h3>טיפים ללקוחות:</h3>
       <ul>
         <li>💡 הגיעו במצב רגוע ומוכן לטיפול.</li>
         <li>💡 לבשו בגדים נוחים ורפויים.</li>
         <li>💡 ידעו את המטפל על כל מגבלה או בעיה רפואית.</li>
         <li>💡 הקשיבו לגופכם והתאימו את עוצמת הלחיצה לפי הצורך.</li>
       </ul>
     </div>
     <h2>מסע אל עולם של רגיעה ושלווה</h2>
     <div className="list-single-treatment">
       <p>
         עיסוי מקלות במבוק הוא חוויה ייחודית המציעה מגוון יתרונות לגוף ולנפש:
       </p>
       <ul>
         <li>🌟 מרגיע ומפחית מתח, חרדה ולחץ</li>
         <li>🌟 משפר את זרימת הדם ומקל על כאבי שרירים</li>
         <li>🌟 מעודד שינה טובה ומחדשת כוחות</li>
         <li>🌟 מאזן את מערכות הגוף ומעניק תחושת שלווה עמוקה</li>
       </ul>
     </div>
     <h3>מדוע כדאי לבחור בעיסוי מקלות במבוק?</h3>
     <p>
       עיסוי מקלות במבוק הוא חוויה ייחודית ומרגיעה שמשלבת לחיצה עמוקה ומגע רך באמצעות מקלות במבוק ייחודיים. המטפלים המנוסים שלנו ישלבו טכניקות עיסוי ייחודיות עם מגע חם ונעים של המקלות על הגוף, ויעניקו לכם חוויה מרגיעה ומחדשת כוחות.
     </p>
     <div className="list-single-treatment">
       <h3>התמחויות נוספות</h3>
       <div>
         בנוסף לעיסוי מקלות במבוק, אנו מציעים גם טיפולים כגון:
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
       alt="עיסוי מקלות במבוק"
       loading='lazy'
     />
       <Link to="/contact"  className="btn-book-treatment">הזמינו טיפול עכשיו!</Link>

   </div>
 );
}