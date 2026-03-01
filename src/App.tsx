import "./index.css"
import Hero3D from "./components/Hero3d"
import CustomerReview from "./components/CustomerReview"
import Header from "./components/header/header"
import Catalog from "./components/Catalog"
import ContactSection from "./components/ContactPage"
import ReasonPullbox from "./components/resolution/resolution"
import AffordableRates from "./components/affordavleRates/affordableRates"
import Faq from "./components/faqSection/faq"
import VibeVideos from "./components/VibeVideos"
import NewsSection from "./components/NewsSection"
// test commit message
function App() {
  return (
    <div className='text-3xl bg-secondary text-p'>
      <Header />
      <Hero3D />
      <ReasonPullbox />
      <AffordableRates />
      <CustomerReview />
      <VibeVideos />
      <Catalog />
      <NewsSection />
      <Faq />

      <ContactSection />

    </div>
  )
}

export default App
