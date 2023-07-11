import "./whysection.css"
import SectionImage from "../../assets/Images/image2.png"

function WhySection() {
  return (
    <div className="why-main-container">
        <div className="image-section">
            <img src={SectionImage} className="section-img" />
        </div>
        <div className="section-details">
            <p className="section-title">
                why <span>learn</span> product management?
            </p>
            <div className="section-part-one">
                <p className="ques-one ques">Aliquam tristique libero</p>
                <p className="ans-one ans">Morbi lectus libero, finibus quis mauris eu, porttitor scelerisque nunc Praesent nibh tellus.</p>
            </div>
            <div className="section-part-two">
                <p className="ques-two ques">Ut a volutpat enim</p>
                <p className="ans-two ans">Praesent nibh tellus, maximus eget magna eu, consectetur faucibus dui. Aliquam eu luctus nisl. Cras vel congue tellus. </p>
            </div>
            <div className="section-part-three">
                <p className="ques-three ques"> Vestibulum ante ipsum</p>
                <p className="ans-two ans">Sed finibus nibh libero, in consequat tellus commodo at.</p>
            </div>
        </div>
    </div>
  )
}

export default WhySection