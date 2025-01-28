/********************************************************
   * הגדרות בסיסיות
   ********************************************************/
const calendarDiv = document.getElementById('calendar');
const requestDateInput = document.getElementById('requestDate');
const appointmentDateInput = document.getElementById('appointmentDate');
const appointmentTimeInput = document.getElementById('appointmentTime');
const fullNameInput = document.getElementById('fullName');
const phoneInput = document.getElementById('phone');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// מספר השבועות להצגה בכל עמוד (1 שבוע).
const WEEKS_PER_PAGE = 1;
// שעות לדוגמה בכל יום. ניתן להתאים כרצונכם.
const timeSlots = ['בוקר', 'צהרים', 'ערב'];

// משתנה לשמירת נקודת ההתחלה (היום הראשון) של העמוד הנוכחי
let currentOffset = 0; // נספר בימים (0 זה היום)

/********************************************************
 * פונקציית השבתה/הפעלה של המשבצות
 ********************************************************/
function disableSlots() {
  const slots = document.querySelectorAll('.time-slot');
  slots.forEach(slot => {
    slot.classList.add('disabled');
  });
}

function enableSlots() {
  const slots = document.querySelectorAll('.time-slot');
  slots.forEach(slot => {
    slot.classList.remove('disabled');
  });
}
// פונקציה לקבלת שם היום בשבוע בעברית
function getDayName(dayIndex) {
  const dayNamesHe = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
  return dayNamesHe[dayIndex];
}

// פונקציה עזר ליצירת תאריך חדש מבלי לפגוע בתאריך המקורי
function addDaysToDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

// פונקציה פורמט תאריך 'dd/mm/yyyy'
function formatDate(dateObj) {
  const dd = String(dateObj.getDate()).padStart(2, '0');
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
  const yyyy = dateObj.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}


function animateLoadingDots(element) {
    let dots = 0;
    const interval = setInterval(() => {
        dots = (dots + 1) % 4;
        element.textContent = 'אנא המתן' + '.'.repeat(dots);
    }, 500);
    return interval;
}

// פונקציה לציור היומן
function renderCalendar() {
  calendarDiv.innerHTML = '';

  // כותרת וניווט (קדימה ואחורה)
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('calendar-header');

  const prevBtn = document.createElement('button');
  prevBtn.classList.add('btn')

  prevBtn.textContent = '<< שבוע קודם';
  prevBtn.onclick = () => {
    currentOffset -= (7 * WEEKS_PER_PAGE); 
    renderCalendar();
    fetchAndMarkBookedSlots();

  };
  // מנטרלים את הכפתור אם זה היום הנוכחי (לא ניתן לחזור אחורה מעבר להיום)
  if (currentOffset <= 0) {
    prevBtn.disabled = true;
  }

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('btn')
  nextBtn.textContent = 'שבוע הבא >>';

  nextBtn.onclick = () => {
    currentOffset += (7 * WEEKS_PER_PAGE);
    renderCalendar();
    fetchAndMarkBookedSlots();

  };

  headerDiv.appendChild(prevBtn);
  headerDiv.appendChild(nextBtn);
  calendarDiv.appendChild(headerDiv);
    
  // נקודת התחלה – היום 
  const today = new Date();
  // עבור "תאריך בקשה" נמלא תמיד את התאריך הנוכחי
  requestDateInput.value = formatDate(today);
  
  // יוצרים תצוגה של 1 שבוע
  for (let w = 0; w < WEEKS_PER_PAGE; w++) {
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week-container');
  
    let displayedDays = 0; // מונה הימים שהוצגו בפועל
    const startOffset = currentOffset + w * 7; // לחשב את נקודת ההתחלה לשבוע
  
    for (let offsetDays = 0; displayedDays < 5; offsetDays++) {
      const dayDate = addDaysToDate(today, startOffset + offsetDays);
      const jsDayOfWeek = dayDate.getDay(); // קבלת היום בשבוע (0=ראשון, 6=שבת)
  
      // דילוג על שישי ושבת
      if (jsDayOfWeek === 5 || jsDayOfWeek === 6) continue;
  
      // יצירת עמודה ליום (dayColumn)
      const dayColumn = document.createElement('div');
      dayColumn.classList.add('day-column');
  
      // כותרת היום
      const shortDate = formatDate(dayDate).split('/'); // [DD, MM, YYYY]
      const dayNameHe = getDayName(jsDayOfWeek); // שם היום בעברית
      const dayTitle = document.createElement('h4');
      dayTitle.innerHTML = `${dayNameHe}<br>${shortDate[0]}/${shortDate[1]}`;
      dayTitle.dataset.date = formatDate(dayDate);
      dayColumn.appendChild(dayTitle);
  
      // יצירת משבצות השעות
      const fragment = document.createDocumentFragment(); // אופטימיזציה עם fragment
      timeSlots.forEach(time => {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('time-slot');
        slotDiv.textContent = time;
  
        slotDiv.onclick = () => {
          // ניקוי בחירות קודמות
          document.querySelectorAll('.time-slot').forEach(slot => {
            if (!slot.classList.contains('booked')) {
              slot.style.backgroundColor = '#f5f5f5';
              slot.style.color = '#212529';
            }
          });
          // עדכון הטופס
          appointmentDateInput.value = formatDate(dayDate);
          appointmentTimeInput.value = time;
          // סימון המשבצת הנבחרת
          slotDiv.style.backgroundColor = '#d56b00';
          slotDiv.style.color = 'white';
        };
  
        fragment.appendChild(slotDiv);
      });
      dayColumn.appendChild(fragment); // הוספת כל המשבצות בבת אחת
  
      weekDiv.appendChild(dayColumn);
      displayedDays++;
    }
  
    calendarDiv.appendChild(weekDiv);
 } }
  
/********************************************************
 * שליחת טופס ל-Google Sheet
 ********************************************************/
const form = document.getElementById('appointment-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // איסוף הנתונים
  const requestDate = requestDateInput.value;
  const fullName = fullNameInput.value;
  const phone = phoneInput.value;
  const appointmentDate = appointmentDateInput.value;
  const appointmentTime = appointmentTimeInput.value;

  // בדיקת מילוי שדות הכרחיים
  if (!fullName || !phone || !appointmentDate || !appointmentTime) {
    alert('יש למלא את כל השדות הדרושים ולבחור תור');
    return;
  }


const formData = {
    requestDate: requestDateInput.value,
    fullName: fullNameInput.value,
    phone: phoneInput.value,
    appointmentDate: appointmentDateInput.value,
    appointmentTime: appointmentTimeInput.value
  };

  // Start animation
  const loadingInterval = animateLoadingDots(successMessage);

  successMessage.textContent = 'אנא המתן...';
  successMessage.style.color = '#d56b00';
  successMessage.style.display = 'block';

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzumZG1FsBBeMOSZgIqSVSVwvbaq7Y82dI8htg0doZgWSy1gddLlgH5lFGFGjYolriZgw/exec', // החלף ב-URL של ה-Web App
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );
    
      fetchAndMarkBookedSlots();

        setTimeout(() => {
            clearInterval(loadingInterval);

            // הצלחה
            successMessage.textContent = 'התור נשלח בהצלחה! שלח הודעת WhatsApp לאורי לאישור התור';
            successMessage.style.color = 'green';
            // SuccessMessage.style.display = 'block';
           // After successful form submission
              const sendMessage = document.getElementById('sendMessage');
              const phoneNumber = '972507431198'; 
              const message = `שלום אורי, שמי ${fullName} ומספר הטלפון שלי הוא ${phone}. ברצוני לקבוע תור ליום ${appointmentDate} בשעות ה${appointmentTime}. לשעה: {הכנס שעה}`;

              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

              // צור קישור לשליחת WhatsApp
              const whatsappLink = document.createElement('a');
              whatsappLink.href = whatsappUrl;
              whatsappLink.target = '_blank';
              whatsappLink.textContent = 'אישור תור בWhatsApp';
              whatsappLink.classList.add('whatsapp-link', 'btn');

              // נקה את ההודעה הקודמת
              sendMessage.innerHTML = '';
              // הוסף את הקישור
              sendMessage.appendChild(whatsappLink);
              // הצג את ההודעה
              sendMessage.style.display = 'block';
            // איפוס שדות
            requestDateInput.value = '';
            fullNameInput.value = '';
            phoneInput.value = '';
            appointmentDateInput.value = '';
            appointmentTimeInput.value = '';


        }, 3500);
      

  
});

/********************************************************
 * הפעלת הרינדור ההתחלתי
 ********************************************************/
// renderCalendar();
// פונקציה לקבלת תורים קיימים ולסימון משבצות תפוסות
async function fetchAndMarkBookedSlots() {
  disableSlots();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzumZG1FsBBeMOSZgIqSVSVwvbaq7Y82dI8htg0doZgWSy1gddLlgH5lFGFGjYolriZgw/exec', { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
  
      const appointments = await response.json();
    //   console.log('Fetched appointments:', appointments);
  
      // עיבוד התורים
      appointments.forEach(appointment => {
        // עיבוד תאריך לפורמט DD/MM/YYYY
        const appointmentDateObj = new Date(appointment.appointmentDate);
        const appointmentDateStr = `${String(appointmentDateObj.getDate()).padStart(2, '0')}/${String(appointmentDateObj.getMonth() + 1).padStart(2, '0')}/${appointmentDateObj.getFullYear()}`;
  
        // עיבוד שעה לפורמט HH:MM
        // const appointmentTimeObj = new Date(appointment.appointmentTime);
        const appointmentTimeStr = appointment.appointmentTime;
  
        // מעבר על כל ימי השבוע ביומן
        const dayColumns = document.querySelectorAll('.day-column');
        dayColumns.forEach(dayColumn => {
          const dayTitleDatePart =dayColumn.querySelector('h4').dataset.date; 
  
          // השוואת תאריכים
          if (dayTitleDatePart === appointmentDateStr) {
            const timeSlots = dayColumn.querySelectorAll('.time-slot');
            timeSlots.forEach(slot => {
              // השוואת שעות
              if (slot.textContent.trim() === appointmentTimeStr) {
                slot.style.backgroundColor = 'red';
                slot.style.color = 'white';
                slot.classList.add('booked');
                slot.textContent = 'תפוס';
                slot.onclick = null; // מנטרלים לחיצה על משבצת תפוסה
              }
            });
          }
        });
      });
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
    enableSlots();
  }
  
  // קריאה לפונקציה כאשר ה-DOM נטען
  document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(); 
    fetchAndMarkBookedSlots();
  });
  