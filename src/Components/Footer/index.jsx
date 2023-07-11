import "./footer.css"
import Arrow from "../../assets/Icons/arrow.svg"
import Home from "../../assets/Icons/home.svg"
import Email from "../../assets/Icons/email.svg"
import Phone from "../../assets/Icons/phone.svg"

function Footer() {
  return (
    <div className="footer-main-container">
        <div className="footer-container">
            <div className="all-links">
                <div className="quick-links">
                    <p className="quick-link-title">Quick Links</p>
                    <p><img src={Arrow}/>Home</p>
                    <p><img src={Arrow}/>Career</p>
                    <p><img src={Arrow}/>Hire from Us</p>
                    <p><img src={Arrow}/>BTH - Talent Hunt Exam</p>
                    <p><img src={Arrow}/>Refer and Earn</p>
                </div>
                <div className="other-links">
                    <p className="other-link-title">Other Links</p>
                    <p><img src={Arrow}/>Blog</p>
                    <p><img src={Arrow}/>Events and Contest</p>
                    <p><img src={Arrow}/>Contact Us</p>
                </div>
                <div className="courses-links">
                    <p className="courses-title">Courses</p>
                    <p><img src={Arrow}/>Enterpreneirship</p>
                    <p><img src={Arrow}/>Product Management</p>
                    <p><img src={Arrow}/>SAP FICO</p>
                </div>
                <div className="courses-links">
                    <p className="contact-us">Contact Us</p>
                    <p><img src={Home}/>B Block Noida Sector 15 Uttar Pradesh</p>
                    <p><img src={Email}/>tutors@baoiam.com</p>
                    <p><img src={Phone}/>+91-9992754599</p>
                </div>
            </div>

            <div className="copyright-container">
                <p className="copyright-content">Copyright © 2023 BAOIAM. All Rights Reserved</p>
            </div>
        </div>
        <div className="newsletter-container">
            <div className="newsletter-details">
                <p className="newsletter-title">Subscribe us for latest newsletter</p>
                <p className="newsletter-para">Expand your kowledge and skills by choosing the right mentor!</p>
            </div>
            <div className="email-section">
                <input type="email" placeholder="Email" className="email"/>
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer