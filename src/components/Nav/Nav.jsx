import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {

    const [open, SetOpen] = useState(false)

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Not Found", path: "*" },
  ];

  return (
    <nav>
      <div className="text-xl md:hidden" onClick={()=> SetOpen(!open)}>
        {
            open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
        }
        
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
