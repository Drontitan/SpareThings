import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

import Tilt from 'react-vanilla-tilt'
import test from "../../images/top1-transformed.png";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (

  <>
    <Link style={{"textDecoration":"none"}}  to={`/product/${product._id}`}>

     <Tilt options={{ scale: 10  }}
     className="card"
    style={{
      width: 300,
    }}
    iltMaxAngleX={80} 
        tiltMaxAngleY={80} perspective={1000}
    >

        <img  className='hello' src={product.images[0].url} alt={product.name} />
            <h3 >{product.name}</h3>
             <div>
        <Rating {...options} />{" "}
        <span  className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Tilt>
  
    </Link>

   </>
  );
};

export default ProductCard;
