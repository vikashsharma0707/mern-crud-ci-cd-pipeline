


// const Footer=()=>{
//     return(
//         <>
//         <h1>This is footer page</h1>
        
//         </>
//     )
// }

// export default Footer;


import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"; // Optional: create this for custom styles

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <div className="footer-content">
          {/* Left - Brand & Copyright */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-highlight">Emp</span>Manager
            </Link>
            <p className="copyright">
              &copy; {currentYear} Employee Management System. All rights reserved.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="footer-links">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/display">Display</Link>
              </li>
              <li>
                <Link to="/insert">Add Employee</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/update">Manage Employees</Link>
              </li>
            </ul>
          </div>

          {/* Right - Contact / Info */}
          <div className="footer-info">
            <h6>Contact</h6>
            <p>
              Have questions? Reach out at<br />
              <a href="mailto:support@empmanager.com">support@empmanager.com</a>
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <small>Made with ❤️ for efficient employee management</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;