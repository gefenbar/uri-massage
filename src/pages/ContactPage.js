import React from "react";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <h1>יצירת קשר</h1>

      <p className="some-text">לתיאום טיפול או בכל שאלה, אנא פנו אליי באמצעות:</p>
      <p>
        <a className="phone-color" href="tel:0507431189">
          <img src="phone.webp"  alt="Phone Number" width="32px" height="32px" />
          050-7431-198
        </a>
        <br />
        <br />

        <a className="email-color" href="mailto:uriss100@gmail.com">
          <img src="email.webp" alt="Email Icon"  width="32px" height="32px" />
          uriss100@gmail.com
        </a>
        <br />
        <br />

        <a className="facebook-color" href="https://www.facebook.com/uriss45">
          {" "}
          <img
            src="facebook.webp"
            alt="Facebook Icon"
            width="32px"
            height="32px"
          />
          אורי שמאי - מטפל במגע
        </a>
      </p>
      <br />
      <h2>שעות פעילות</h2>
      <p>
        א'-ה': 9:00-17:00
        <br />
        ו': בתאום מראש
      </p>
      <br />

      <h2>מקום</h2>

      <p>הקליניקה ממוקמת בקיבוץ ארז</p>

      <Map />
    </main>
  );
}

// Map component to display location
const Map = () => (
  <iframe
    title="map"
    loading="async"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6799.425351671897!2d34.57104885576685!3d31.559499038820224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150283b830a6d791%3A0x13e590586fc8d911!2z15DXqNeW!5e0!3m2!1siw!2sil!4v1693928830156!5m2!1siw!2sil"
  />
);
