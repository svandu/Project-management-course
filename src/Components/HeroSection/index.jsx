import Image from "../../assets/Images/image1.png"

import "./herosection.css"

function HeroSection() {
  return (
    <div className="hero-main-container">
        <div className="img-container">
            <img src={Image} className="hero-image"/>
        </div>
        <div className="para-container">
            <div className="btn-container">
                <button className="certified-btn">certified online training</button>
            </div>
            <div className="course-details">
                <p className="skill-title">Product <span>Management</span> Course</p>
                <p className="skills-para">Learn Product Management: Reasearch, UserExperience, Marketing, Leadership, Business, Strategy and learn to manage the project from scratch!</p>
                <p className="lang">Languages: <span>Hindi, English</span></p>
                <div className="about-offer">
                    <p className="offer-para">1+1 Offer: Get Intership & Job Preparation training FREE on purchase of Product Managemnet training!</p>
                </div>
                <button className="enroll-btn">Enroll Now</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection