export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.facebook.com/uriss45" rel="noreferrer" className="social-link" target='_blank'>
            <img src="facebook.webp" alt="Facebook" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+972507431189" rel="noreferrer" className="social-link" target='_blank'>
            <img src="whatsapp.webp" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/uri.massage/" rel="noreferrer" className="social-link" target='_blank'>
            <img src="instagram.webp" alt="Instagram" />
          </a>
        </div>
        <div className="copyright">
          <div className="centered-copyright">
            &copy; {new Date().getFullYear()} Uri Shamai 
          </div>
        </div>
        {/* <div className="site-links">
          <a href="/contact">צרו קשר</a>
          <a href="/about">טיפולים</a>
          <a href="/">הקליניקה</a>
          <a href="/">דף הבית</a>
        </div> */}
      </div>
    </footer>
  );
}
