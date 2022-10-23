import "./sidebar.css"
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cat, setCat] = useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("/categories");
      setCat(res.data)
    };
    getCats()
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        
        <img 
          src="https://picsum.photos/200/?grayscale"
          alt="hmmmm?"
        />

        <p>Minim reprehenderit ut aliquip qui eu cillum labore 
        sit anim veniam. Aute commodo mollit </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
