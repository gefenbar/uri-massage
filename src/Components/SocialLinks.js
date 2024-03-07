import React from "react";
export default function SocialLinks() {
  return (
    <div className="side-social-links">
      <a
        href="mailto:uriss100@gmail.com"
        className={`side-social-link`}
      >
        <img src={"email.webp"} alt="Email" />
      </a>
      <a
        href="tel:050-7431-198"
        className={`side-social-link`}
      >
        <img src={"phone.webp"} alt="Phone" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+972507431189"
        target="_blank"
        rel="noreferrer"
        className={`side-social-link`}
      >
        <img src={"whatsapp2.webp"} alt="WhatsApp" />
      </a>
    </div>
  );
}
