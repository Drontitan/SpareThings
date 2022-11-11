import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import cartim from "../../images/robotichand.png"

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

         
  
          <div style={{"color":"black"}} class="home">
           
           <div class="ball-1"></div>
           <div class="ball-2"></div>
           <div class="ball-3"></div>
           <div class="box"> 
               <nav>
                   <h3  style={{"color":"white"}} class="logo">
                       <span>!</span>LOGO
                   </h3>

               </nav>
           <div class="contains">
               <div class="section-1">

               </div>
               <div class="section-1">
                   <h1>Welcome </h1>
                   <h3>To Next <span>'</span>Generation<span>'</span>Ecommerce</h3>
                   <div class="button">
                       Our Team Has built the most realiable site for your daily exchange of small
                        to bgi products that you need.
                       
                   </div>
    
            
            <div className="setter">
            <a  href="#container">
            <div className="glass-btn">
              <button>Scroll</button>
              <span></span>
            </div>
            </a>
            </div>

       
               </div>
               <div class="section-2">
                   <img src={cartim} alt="ayega"/>
               </div>
          
           </div>
           </div>
   </div>
 

          <h2 className="homeHeading">
          <div class="contenttest">
      <div class="content__container">
        <p   class="content__container__text">
          Featured
        </p>
    
        <ul style={{"marginLeft":"10vh"}} class="content__container__list">
          <li class="content__container__list__item">😎</li>
          <li class="content__container__list__item">utilities !</li>
          <li class="content__container__list__item">users !</li>
          <li class="content__container__list__item">everybody !</li>
        </ul>
      </div>
    </div>
          </h2>
           
          <div  className=" containercardnew glasscard" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
