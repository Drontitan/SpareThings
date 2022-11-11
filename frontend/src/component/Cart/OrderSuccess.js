import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
<>

      <div className="setkarodashbg">
      <div class="appdash">
	<div class="header">
		<div class="menu-circle"></div>

	</div>
	<div class="wrapper">
		<div class="main-containerdash">
			<div class="main-headerdash">
			</div>
			<div class="content-wrapper">
        <div className="dashboardContainer">
        <div className="orderSuccess">
        <CheckCircleIcon />

    <Typography>Your Order has been Placed successfully </Typography>
         <Link to="/orders">View Orders</Link>
      </div>
      </div>
			</div>
		</div>
	</div>
	<div class="overlay-app"></div>
</div> 
</div> 
		</>
   
  );
};

export default OrderSuccess;
