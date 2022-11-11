import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { IoLogoFacebook ,IoLogoInstagram ,IoLogoLinkedin,IoLogoTwitter} from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div> */}
          <div class="footermaincontainer">
     <div class="footerbar">
        {/* <div class="footerstaeter">sdgfnbafd</div> */}
      <div class="footerbackground">
        <div class="bg_text"> S P A R E T H I N G </div>
        <div class="foreground">
          <h1>Q U A L I T Y</h1>
        </div>
    </div>
    <div class="iconsfooter">
        <ul>
            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i><IoLogoFacebook/></a></li>
            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i><IoLogoInstagram/></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i><IoLogoLinkedin/></a></li>
            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i><IoLogoTwitter/></a></li>
        </ul>
    </div>
    
</div>
<div class="copyright">COPYRIGHTS 2022 © SAPRE THINGS</div>
</div>
    </footer>
  );
};

export default Footer;
