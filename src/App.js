import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryBlog from "./pages/CategoryBlog";
import Create from "./pages/Create";
import Pricing from "./pages/Pricing";
import { Route, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Login from "./components/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy"


function App() {
   
  return (
    <div className="">
        <Navbar/>
        <div>
          <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/category" element={<CategoryBlog/>}></Route>
           <Route path="/pricing" element={<Pricing/>}></Route>
           <Route path="/create" element={<Create/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
