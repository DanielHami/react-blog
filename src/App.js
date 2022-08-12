import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import { Route, Routes} from "react-router-dom";
import Footer from './Footer';

function App() {
  return (
    <div className="">
        <Navbar/>
        <div>
          <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/pricing" element={<Pricing/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
