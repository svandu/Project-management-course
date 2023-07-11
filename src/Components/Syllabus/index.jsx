import "./syllabus.css"
import DownArrow from "../../assets/Icons/downarrow.svg"

function Syllabus() {

    const quesBanks = [
        {
            id: 1,
            ques: "Marketing",
            ans: "Aliquam sollicitudin, justo sit amet posuere tincidunt, sapien est scelerisque dolor, in faucibus libero diam eu metus. Vestibulum efficitur dui id nisi semper rhoncus. Cras et elementum libero. Aliquam porta, neque ut egestas auctor, dui libero rutrum diam, ac iaculis dolor elit et dolor.",
            img: DownArrow,
        },
        {   
            id: 2,
            ques: "Business",
            ans: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Sed ut euismod lorem, sit amet dapibus massa. Sed volutpat, ex laoreet hendrerit maximus, odio sem pellentesque libero, id maximus dui nunc vitae magna.",
            img: DownArrow,
        },
        {
            id: 3,
            ques: "Strategy",
            ans: "Donec dictum, lectus sed condimentum dignissim, dolor lectus ullamcorper justo, vel aliquam enim sem sit amet magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget efficitur arcu. Etiam imperdiet tortor sit amet quam interdum, sit amet dignissim risus vestibulum.",
            img: DownArrow,
        }
    ]
  return (
    <div className="syllabus-main-conatiner">
        <p className="syllabus-topic">Product <span>Management</span> Syllabus</p>
        <div className="question-container">
            {quesBanks.map((quesBank) => (
                <div className="ques-ans-container" key={quesBank.id}>
                    <div className="ques-container">
                        <div className="ques">{quesBank.ques}</div>
                        <img src={quesBank.img} className="down-arrow"/>
                    </div>
                    <div className="syllabus-ans">{quesBank.ans}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Syllabus