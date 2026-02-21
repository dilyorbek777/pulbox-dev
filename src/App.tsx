import "./index.css"
import Hero3D from "./components/Hero3d"
import CustomerReview from "./components/CustomerReview"
import VibeVideos from "./components/VibeVideos"
import Catalog from "./components/Catalog"
import ContactSection from "./components/ContactPage"
function App() {
  return (
    <div className='text-3xl bg-secondary text-p'>
      <Hero3D />
      <CustomerReview />
      <VibeVideos />
      <Catalog />
      <ContactSection />
    </div>
  )
}

export default App