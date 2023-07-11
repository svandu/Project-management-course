import "./placement.css"
import PlacementImage from "../../assets/Images/image3.png"

function Placement() {
  return (
    <div className="placement-main-container">
        <div className="placement-details">
            <p className="placement-title">What <span>placement assistance</span> will you recieve?</p>
            <div className="place-part-one">
                <p className="ques-one ques">Aliquam tristique libero</p>
                <p className="ans-one ans">Morbi lectus libero, finibus quis mauris eu, porttitor scelerisque nunc.</p>
            </div>
            <div className="place-part-two">
                <p className="ques-two ques">Ut a volutpat enim</p>
                <p className="ans-two ans">Praesent nibh tellus, maximus eget magna eu, consectetur faucibus dui. Aliquam eu luctus nisl. Cras vel congue tellus.</p>
            </div>
            <div className="place-part-three">
                <p className="ques-three ques">Vestibulum ante ipsum</p>
                <p className="ans-three ans">Sed finibus nibh libero, in consequat tellus commodo at.</p>
            </div>
        </div>
        <div className="placement-img">
            <img src={PlacementImage} className="place-img-section"/>
        </div>
    </div>
  )
}

export default Placement