import CourseHighlights from "../CourseHighlights"
import HeroSection from "../HeroSection"
import Placement from "../Placement"
import Training from "../Training"
import WhySection from "../WhySection"
import Syllabus from "../Syllabus"
import Faq from "../Faq"
import Footer from "../Footer"
import "./productpage.css"

function ProductPage() {
  return (
    <div className="product-page-container">
        <HeroSection />
        <CourseHighlights />
        <WhySection />
        <Placement />
        <Training />
        <Syllabus />
        <Faq />
        <Footer />
    </div>
  )
}

export default ProductPage