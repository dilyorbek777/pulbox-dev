import "./index.css"
import Hero3D from "./components/Hero3d"
import CustomerReview from "./components/CustomerReview"
import Header from "./components/header/header"
import VibeVideos from "./components/VibeVideos"
import Catalog from "./components/Catalog"
import ContactSection from "./components/ContactPage"
import ReasonPullbox from "./components/resolution/resolution"
import NewsSection from "./components/NewsSection"
// test commit messageler
function App() {
  return (
    <div className='text-3xl bg-secondary text-p'>
      <Header />
      <Hero3D />
      <ReasonPullbox />
      <CustomerReview />
      <VibeVideos />
      <Catalog />
      <NewsSection  />
      <ContactSection />
    </div>
  )
}

export default App
