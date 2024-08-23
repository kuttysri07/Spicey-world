import "./Nav.css"
import bag from "../Assets/bag.png"
import { useState ,useEffect} from "react"
import menu from "../Assets/menu.png"

const Nav = () => {

    const[active, setActive] = useState("Home");
    const [bgcolor,setBgcolor]=useState(false);
   

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setBgcolor(true) : setBgcolor(false)
  
      })
    },[])

    
  const [mobilemenu,setmobilemenu]=useState(false)

  function menutoggle(){
    mobilemenu? setmobilemenu(false):setmobilemenu(true);
    
  }

    

  return (
    < nav className="nav"   style={bgcolor ? {backgroundColor:"black"}:{backgroundColor:"black"}}>
      <img src={menu} className="menu" alt="" onClick={menutoggle} />
    <h1 className="logo"> <span>Spicy</span>World</h1>
    <ul className={mobilemenu ? "":'hidemenu'}>
       <li onClick={()=>setActive("Home") }   className={active==="Home"?"txtcolor": null} >Home</li>
       <li onClick={()=>setActive("Special") }   className={active === "Special"?"txtcolor": null}>Special</li>
       <li onClick={()=>setActive("Chef") }   className={active ==="Chef"?"txtcolor": null}>Chef</li>
       <li onClick={()=>setActive("Clients") }   className={active ==="Clients"?"txtcolor": null}>Clients</li>
       <li onClick={()=>setActive("Contact Us") }   className={active ==="Contact Us" ?"txtcolor": null}>Contact Us</li>
    </ul>

    <img className="bagimg" src={bag} alt="" />
    </nav>
  )
}

export default Nav