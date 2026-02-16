import "./index.css"
import Logo from "./components/site/logo"
import Button from "./components/site/button"
import Input from "./components/site/input"
import Accordion from "./components/site/accordion"
import Header from "./components/header/header"
// test commit message
function App() {
  return (
    <div className='text-3xl bg-secondary text-p'>
      <Header/>
      <Logo />
      <Button btntype="primary" text="Get Started" />
      <Button btntype="secondary" text="Get Started" />
      <Input label="Email" text="Email" placeholder="Enter your email" type="email" id="email" />
      <Accordion title="Section 1" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." />
    </div>
  )
}

export default App