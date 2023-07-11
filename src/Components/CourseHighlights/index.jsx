import "./coursehighlights.css"
import School from "../../assets/Icons/school.svg"
import Certificate from "../../assets/Icons/certificate.svg"
import Group from "../../assets/Icons/group.svg"
import Phone from "../../assets/Icons/phone.svg"
import Connect from "../../assets/Icons/connect.svg"
import Calendar from "../../assets/Icons/calendar.svg"
import HandShake from "../../assets/Icons/handshake.svg"
import Bulb from "../../assets/Icons/school.svg"
import DownloadData from "../../assets/Icons/download-data.svg"
function CourseHighlights() {

    const highlights = [
        {
            id: 1,
            img: School,
            title: "Learn Online",
            para: "At your own schedule",
        },
        {
            id: 2,
            img: Certificate,
            title: "Certificate of training",
            para: "From Internshala Trainings",
        },
        {
            id: 3,
            img: Group,
            title: "Beginner Friendly",
            para: "No prior knowledge required",
        },
        {
            id: 4,
            img: Phone,
            title: "Mobile friendly",
            para: "No laptop? No problem",
        },
        {
            id: 5,
            img: Connect,
            title: "Projects",
            para: "For hands-on practice",
        },
        {
            id: 6,
            img: Calendar,
            title: "8 weeks duration",
            para: "1 hr/day (flexible schedule)",
        }, 
        {
            id: 7,
            img: HandShake,
            title: "Placement Assistance",
            para: "To build your career",
        },
        {
            id: 8,
            img: Bulb,
            title: "Doubt clearing",
            para: "Through Q&A forum",
        },
        {
            id: 9,
            img: DownloadData,
            title: "Downloadable content",
            para: "With lifetime access",
        }
    ]

  return (
    <div className="course-highlights-container">
        <p className="course-title">Course <span>highlights</span></p>
        <div className="highlights-list">
            {highlights.map((highlight) => (
                <div className="highlight-container" key={highlight.id}>
                    <div className="icon-circle">
                        <img src={highlight.img} className="img"/>
                    </div>
                    <div className="course-content">
                        <p className="highlight-title">{highlight.title}</p>
                        <p className="highlight-para">{highlight.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CourseHighlights