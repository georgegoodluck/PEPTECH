import { Link } from "react-router-dom";
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-links-inner">
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>Academics</li>
              <li>Campus administration</li>
              <li>Campus safety</li>
              <li>Office of chancellor</li>
              <li>Facility services</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Education</h4>
            <ul>
              <li>Academic departments</li>
              <li>Undergraduate programs</li>
              <li>Graduate programs</li>
              <li>Institutes and Centers</li>
              <li>Academic policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Admission</h4>
            <ul>
              <li>Undergraduate admission</li>
              <li>Graduate admission</li>
              <li>International affairs</li>
              <li>Special students</li>
              <li>Financial aid</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          {/* LOGO */}
          <div className="footer-brand">
            <img src="/images/peplogo.png" alt="University Logo" />
            <h3>Physics & Engineering Physics</h3>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 640 640"
              >
                <path
                  fill="#ffffff"
                  d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
                />
              </svg>
              <span>Obafemi Awolowo University</span>{" "}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 640 640"
              >
                <path
                  fill="#ffffff"
                  d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                />
              </svg>
              <span>oaupepsa@gmail.com</span>
            </p>
          </div>

          <div className="footer-social">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="#">
                <RiLinkedinLine />
              </a>
              <a href="#">
                <RiTwitterXLine />
              </a>
              <a href="#">
                <RiFacebookLine />
              </a>
              <a href="#">
                <RiInstagramLine />
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Physics Department. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
