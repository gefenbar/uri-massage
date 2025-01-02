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
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00','16:00','17:00','18:00'];

// משתנה לשמירת נקודת ההתחלה (היום הראשון) של העמוד הנוכחי
let currentOffset = 0; // נספר בימים (0 זה היום)

// פונקציה לקבלת שם היום בשבוע בעברית
function getDayName(dayIndex) {
  const dayNamesHe = ['ראשון','שני','שלישי','רביעי','חמישי'];
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

    // בואו נניח שיום ראשון הוא index=0, שני=1, וכו'.
    for (let d = 0; d < 5; d++) {
      const dayIndex = d; 
      // מחשבים את התאריך עבור המשבצת הזאת
      const dayDate = addDaysToDate(today, currentOffset + w*7 + d);

      const dayColumn = document.createElement('div');
      dayColumn.classList.add('day-column');

      // כותרת היום בשבוע + תאריך
      const dayTitle = document.createElement('h4');
      dayTitle.textContent = `${getDayName(dayIndex)} ${formatDate(dayDate)}`;
      dayColumn.appendChild(dayTitle);

      // יצירת משבצות שעות
      timeSlots.forEach(time => {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('time-slot');
        slotDiv.textContent = time;
        slotDiv.onclick = () => {
        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach(slot => {
            if(!(slot.classList.contains('booked'))) {
            slot.style.backgroundColor = '#f5f5f5';
            slot.style.color = '#212529';
            }
        }); 
        
          appointmentDateInput.value = formatDate(dayDate);
          appointmentTimeInput.value = time;
          slotDiv.style.backgroundColor = '#d56b00';
          slotDiv.style.color = 'white';
        };
        dayColumn.appendChild(slotDiv);
      });

      weekDiv.appendChild(dayColumn);
    }

    calendarDiv.appendChild(weekDiv);
  }
}

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
    alert('יש למלא את כל השדות הדרושים ולהבחר תאריך ושעה');
    return;
  }


const formData = {
    requestDate: requestDateInput.value,
    fullName: fullNameInput.value,
    phone: phoneInput.value,
    appointmentDate: appointmentDateInput.value,
    appointmentTime: appointmentTimeInput.value
  };
  
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwkwQF62CakrS9fl8GxigCm3Do72rv5nuqExKfomFpsa5hYD-cp42DTgcbeRdaKGv3i/exec', // החלף ב-URL של ה-Web App
      {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );
  
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
  
    const data = await response.json();
    if (data.status === 'success') {
        fetchAndMarkBookedSlots();

      // הצלחה
      successMessage.textContent = 'התור נקבע בהצלחה!';
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      
      // איפוס שדות
      requestDateInput.value = '';
      fullNameInput.value = '';
      phoneInput.value = '';
      appointmentDateInput.value = '';
      appointmentTimeInput.value = '';
    } else {
      // שגיאה בצד השרת
      throw new Error(data.message || 'Unknown error from server');
    }
  } catch (error) {
    successMessage.style.display = 'none';
    errorMessage.textContent = 'אירעה שגיאה בשליחת הנתונים: ' + error.message;
    errorMessage.style.display = 'block';
    console.error('Error:', error);
  }
  
  
  
});

/********************************************************
 * הפעלת הרינדור ההתחלתי
 ********************************************************/
renderCalendar();
// פונקציה לקבלת תורים קיימים ולסימון משבצות תפוסות
async function fetchAndMarkBookedSlots() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwkwQF62CakrS9fl8GxigCm3Do72rv5nuqExKfomFpsa5hYD-cp42DTgcbeRdaKGv3i/exec',
        { method: 'GET' }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
  
      const appointments = await response.json();
      console.log('Fetched appointments:', appointments);
  
      // פונקציה להמרת מחרוזת תאריך בפורמט ISO ל־DD/MM/YYYY
      function formatISOToDDMMYYYY(isoString) {
        const dateObj = new Date(isoString);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
      }
      
      // פונקציה להמרת מחרוזת זמן בפורמט ISO ל־HH:MM
      function formatISOToHHMM(isoString) {
        const dateObj = new Date(isoString);
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
      }
      
      // פונקציה לחילוץ חלק התאריך מהכותרת (למשל "ראשון - 02/01/2025" => "02/01/2025")
      function getDatePartFromTitle(dayTitle) {
        // נניח שהפורמט תמיד "יום כלשהו - DD/MM/YYYY"
        const parts = dayTitle.split(" ");
        return parts[1] ? parts[1].trim() : null;
      }
  
      // מעבר על כל התורים
      appointments.forEach(appointment => {
        // המרת "תאריך" מה־Sheet מ־ISO ל־DD/MM/YYYY
        const appointmentDateStr = formatISOToDDMMYYYY(appointment["תאריך"] || '');
        // המרת "שעה" מה־Sheet מ־ISO ל־HH:MM
        const appointmentTimeStr = formatISOToHHMM(appointment["שעה"] || '');
  
        const dayColumns = document.querySelectorAll('.day-column');
        
        dayColumns.forEach(dayColumn => {
          // לדוגמה: "ראשון - 02/01/2025"
          const dayTitle = dayColumn.querySelector('h4').textContent.trim();
          
          // חילוץ חלק התאריך בלבד
          const dayTitleDatePart = getDatePartFromTitle(dayTitle);
  
          // משווים את התאריך בפורמט DD/MM/YYYY
          if (dayTitleDatePart === appointmentDateStr) {
            const timeSlots = dayColumn.querySelectorAll('.time-slot');
            timeSlots.forEach(slot => {
              // משווים גם את השעה בפורמט HH:MM
              if (slot.textContent.trim() === appointmentTimeStr) {
                slot.style.backgroundColor = 'red';
                slot.style.color = 'white';
                slot.classList.add('booked');
                slot.onclick = null; // מנטרלים לחיצה על משבצת תפוסה
              }
            });
          }
        });
      });
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }
  
  // קריאה לפונקציה כאשר ה-DOM נטען
  document.addEventListener('DOMContentLoaded', () => {
    // renderCalendar();  // במידת הצורך: דואגים שה־DOM של היומן ייטען לפני
    fetchAndMarkBookedSlots();
  });
  