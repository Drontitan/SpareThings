import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import killua from "../../../images/killuadar.jpg"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <>
    <div class="aboutabtuscontainerabt">
  <header>
    <div class="userabt">
      <img src={killua} alt="selfie"/>
      <h3 style={{"fontSize":"1.5rem"}} class="nameabt">Dron Rahangdale</h3>
      <p style={{"fontSize":"1.5rem"}}  class="post"> front-end web coder</p>
    </div>
    <nav class="navbarabt">
      <ul >
        <li  ><a style={{"fontSize":"1.2rem"}}  href="#homeabt">homeabt</a></li>
        <li ><a style={{"fontSize":"1.2rem"}}  href="#aboutabt">aboutabt</a></li>
     
        <li  ><a style={{"fontSize":"1.2rem"}} href="#contactabt">contactabt</a></li>
      </ul>
    </nav>
  </header>

  <div class="containerabt">
    <section  class="homeabt" id="homeabt">
      <h3 style={{"fontSize":"2rem"}}  >hello!</h3>
      <h3 style={{"fontSize":"1.7rem"}} class="nameabt">My nameabt is <span style={{"fontSize":"1.7rem"}}>Dron Rahangdale</span> </h3>
      <h3 style={{"fontSize":"1.6rem"}} class="post">i like to do <span style={{"fontSize":"1.7rem"}} class="typing-text"> coding 👩‍💻😎💻</span> </h3>
      <a ><button style={{"fontSize":"1.5rem" ,"outline":"none", "border":"none"}} class="btnabt"> Let's code! </button></a>
      <div class="shareabt">
        <a href="#" class="fab fa-facebook-square"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fas fa-at"></a>
        </div>
    </section>

    <section class="aboutabt" id="aboutabt">
      <h1 style={{"fontSize":"2rem"}} class="headingabt"> aboutabt me </h1>
      <div class="contentabt">
        <h3 style={{"fontSize":"1.6rem"}} class="nameabt">My nameabt is <span>Dron Rahangdale</span> </h3>
        <p style={{"fontSize":"1.5rem"}}>This is another big project  web design . I learned coding from  i am still practicing, especially with Javascript. </p>
        <p style={{"fontSize":"1.5rem"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quo odit magni cumque nostrum, vel nihil minus, voluptatibus sapiente sint eveniet unde? Praesentium dignissimos numquam sapiente, labore accusamus dolor consectetur!</p>
      </div>

    </section>

    <section class="contactabt" id="contactabt">
      <h1 class="headingabt"> contactabt </h1>

      <div class="row">
        <form action="">
          <input style={{"fontSize":"1.2rem"}} type="text" class="boxabt" placeholder="first nameabt"/>
          <input style={{"fontSize":"1.2rem"}} type="text" class="boxabt" placeholder="last nameabt"/>
          <input style={{"fontSize":"1.2rem"}} type="email" class="boxabt" placeholder="enter your email"/>
          <input style={{"fontSize":"1.2rem"}} type="text" class="boxabt" placeholder="type in your project"/>
          <textarea style={{"fontSize":"1.2rem"}} nameabt="" id="" cols="30" rows="10" class="boxabt message" placeholder="comment"></textarea>
          <input style={{"fontSize":"1.2rem"}} type="submit" value="message" class="btnabt"/>
        </form>

        <div class="contentabt">
          <div class="iconsabt">
            <h3 style={{"fontSize":"1.5rem"}}> <i class="fas fa-map-marker-alt"></i> address </h3>
            <p style={{"fontSize":"1.2rem"}} >Pune, Pimpri Chinchwad College of Engineering</p>
          </div>
          <div class="iconsabt">
            <h3 style={{"fontSize":"1.5rem"}}>  <i class="fas fa-envelope"></i> email </h3>
            <p style={{"fontSize":"1.2rem"}}> dronr19@gmail.com</p>
          </div>

        </div>
      </div>
      <div class="footerabt">
        <div style={{"fontSize":"1.2rem"}} class="credit">Coded by <span>Dron </span>  </div>
      </div>
    </section>


  </div>

  </div>
  
  </>
  );
};

export default About;
