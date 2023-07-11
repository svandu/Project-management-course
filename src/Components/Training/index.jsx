import "./training.css"
import Laptop from "../../assets/Icons/laptop.svg"
import Tick from "../../assets/Icons/tick.svg"
import Brain from "../../assets/Icons/brainstorming.svg"
import Pencil from "../../assets/Icons/pencil.svg"
import Hands from "../../assets/Icons/hands.svg"
import Certified from "../../assets/Icons/award.svg"
function Training() {

    const trainings = [
        {
            id: 1,
            img: Laptop,
            title: "Learn Concepts",
            para: "Go through training videos to learn concepts",
        },
        {
            id: 2,
            img: Tick,
            title: "1.1 doubt solving",
            para: "Get your doubts solved by experts through Q&A forum within 24 hours",
        },
        {
            id: 3,
            img: Brain,
            title: "Test Yourself",
            para: "Test your knowledge through quizzes & ,odule tests at regular intervals",
        },
        {
            id: 4,
            img: Pencil,
            title: "Take final exam",
            para: "Complete your training by taking the final exam",
        },
        {
            id: 5,
            img: Hands,
            title: "Hands-on practise",
            para: "Work on assignments and projects. Use our in-browser IDE for coding practise",
        },
        {
            id: 6,
            img: Certified,
            title: "Get Certified",
            para: "Get full certified in Web Development upon successful completion of training",
        }
    ]
  return (
    <div className="training-main-container">
        <p className="training-title">How will your <span>training</span> work?</p>
        <div className="training-list">
            {trainings.map((training) => (
                <div className="training-container" key={training.id}>
                    <div className="icon-circle">
                        <img src={training.img} className="img"/>
                    </div>
                    <div className="training-content">
                        <p className="title">{training.title}</p>
                        <p className="para">{training.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Training