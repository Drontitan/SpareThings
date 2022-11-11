import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import "./Header.css"
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Search from "@material-ui/icons/Search";
import Lock from "@material-ui/icons/Lock";
import Home from "@material-ui/icons/Home";
import Category from "@material-ui/icons/Category";


const Header = () => {
  // return <ReactNavbar {...options} />;
  return(

  <div class="menuhamb">
        <input type="checkbox" href="#" class="menuhamb-open" name="menuhamb-open" id="menuhamb-open" />
        <label class="menuhamb-open-button" for="menuhamb-open">
         <span class="lineshum line-1"></span>
         <span class="lineshum line-2"></span>
         <span class="lineshum line-3"></span>
       </label>
     
        <a style={{"cursor":"pointer"}} class="menuhamb-item blue">
        <Link className="hamuadjust" to="/"><Home/></Link></a>
        <a   class="menuhamb-item green"> <Link className="hamuadjust" to="/search"><Search/></Link></a>
        <a class="menuhamb-item red"><Link className="hamuadjust" to="/products"><Category/></Link></a>
        <a  class="menuhamb-item purple"><Link className="hamuadjust" to="/about"><PersonIcon/></Link> </a>
        <a   class="menuhamb-item purple"><Link className="hamuadjust" to="/login"><Lock/> </Link> </a>

     </div>
  
  )
};

export default Header;
