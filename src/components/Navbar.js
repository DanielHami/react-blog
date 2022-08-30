import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ResponsiveNavbar } from "./style/Styled.bloglist";
import { useState } from "react";


const Navbar = () => {

   const [active, setActive] = useState(false)
   const handleButton = () => {
      setActive(!active)
   }
   return (
      <nav className="max-w-7xl m-auto py-2 px-2">
         {<ResponsiveNavbar prop={active}>
            <div className="nav-items">
               <div>
                  <img src="/images/logo2.jpg" width={50} height={50} alt="logo" />
               </div>
               <div className="nav-menu">
                  <ul className="">
                     <CustomLink to="/">Home</CustomLink>
                     <CustomLink to="/category">Category</CustomLink>
                     <CustomLink to="/pricing">Pricing</CustomLink>
                     <CustomLink to="/create">New Blog</CustomLink>
                  </ul>
               </div>
               <div className="flex content-center">
                  <button onClick={() => handleButton()}>{active ? <FaTimes size={25} /> : <FaBars size={25}/>}</button>
               </div>
            </div>
         </ResponsiveNavbar>}
      </nav>
   );
}

function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   return (
      <li className={isActive ? "active:text-blue-500" : ""}>
         <Link to={to} {...props}>
            {children}
         </Link>
      </li>
   )
}
export default Navbar