import "./faq.css"
import Plus from "../../assets/Icons/plus.svg"

function Faq() {

    const faqBanks = [
        {
            id: 1,
            ques: "Q1. I am not a student of BAOIAM. Can I still refer a friend?",
            ans: "Yes, If you are aware of BAOIAM and believe in what we are doing, then feel free to refer your friend.",
            img: Plus,
        },
        {   
            id: 2,
            ques: "Q2. How can I track the status of my referrals?",
            ans: "You will be informed by email once BAOIAM receives your referral details.",
            img: Plus,
        },
        {
            id: 3,
            ques: "Q3. How will my friends be informed that I referred them?",
            ans: "Your friends will receive an email confirmation from BAOIAM informing them that they have been referred by you. They will be asked to confirm.",
            img: Plus,
        },
        {
            id: 4,
            ques: "Q4. Will I get a referral reward if a friend/connection already exists in the BAOIAM database?",
            ans: "No, there is no reward if your friend is connected with BAOIAM or its infromation exists in BAOIAM database",
            img: Plus,
        },
        {
            id: 5,
            ques: "Q5. Who all can I refer to?",
            ans: "Anyone who meets the eligibility criteria for our courses can be referred. They should be between 18 - 28 years of age. They should know the basics of the English language, have a laptop, and a good internet connection.",
            img: Plus,
        }
    ]
  return (
    <div className="faq-main-conatiner">
        <p className="faq-topic">Frequent <span>Asked</span> Question</p>
        <div className="question-container">
            {faqBanks.map((faqBank) => (
                <div className="ques-ans-container" key={faqBank.id}>
                    <div className="ques-container">
                        <div className="ques">{faqBank.ques}</div>
                        <img src={faqBank.img} className="down-arrow"/>
                    </div>
                    <div className="faq-ans">{faqBank.ans}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq