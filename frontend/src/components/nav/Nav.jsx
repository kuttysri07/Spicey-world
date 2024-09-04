import "./Nav.css";
import bag from "../Assets/bag.png";
import { useState, useEffect } from "react";
import menu from "../Assets/menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom"; // For detecting the current path

import { auth} from "../firebase";



const Nav = () => {
  const [bgcolor, setBgcolor] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setBgcolor(window.scrollY > 50 || location.pathname.startsWith('/dishes/')); // Adjust based on route and scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Re-run effect on route change

  const menutoggle = () => {
    setMobilemenu(!mobilemenu);
  };

  const hideNavOnRoutes = ["/"];
  // Determine which Link component to use
  const shouldHideNav = location.pathname.startsWith('/dishes/') || hideNavOnRoutes.includes(location.pathname) ;

    const handleLogout = async () =>{
      try {
        await auth.signOut();
        window.location.href="/"
      } catch (error) {
        console.log(error.message)
      }
       

    }
  

  return (
    <nav className="nav" style={{ backgroundColor: bgcolor ? "black" : "transparent" , display:shouldHideNav ?"none":""}} >
      <img src={menu} className="menu" alt="Menu" onClick={menutoggle} />
      <h1 className="logo">
        <span>Spicy</span>World
      </h1>
      <ul className={mobilemenu ? "" : "hidemenu"}>
        <li>
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="txtcolor"
            >
              Home
            </ScrollLink>
          
        </li>
        <li>
          
            <ScrollLink
              to="special"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="txtcolor"
            >
              Special
            </ScrollLink>
          
        </li>
        <li>
          
            <ScrollLink
              to="chef"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="txtcolor"
            >
              Chef
            </ScrollLink>
          
        </li>
        <li>
         
            <ScrollLink
              to="clients"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="txtcolor"
            >
              Clients
            </ScrollLink>
          
        </li>
        <li>
         
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="txtcolor"
            >
              Contact Us
            </ScrollLink>
          
        </li>


        <li style={{color:"red"}} onClick={handleLogout}>
          Logout
        </li>
      </ul>
      <img className="bagimg" src={bag} alt="Bag" />
    </nav>
  );
};

export default Nav;
