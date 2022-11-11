import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        color:"white",
        backgroundColor: ["white"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        borderColor: "rgba(75,192,192,1)",
        data: [0, totalAmount],
        fontColor: "rgb(255, 99, 132)",
    } 
    ],

  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
   <div className="setkarodashbg">
    {/* <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
      </div> */}
      <div class="appdash">
	<div class="header">
		<div class="menu-circle"></div>
		<div class="header-menu">
			<a class="menu-link is-active" href="#">Dashboard</a>
		</div>

	</div>
	<div class="wrapper">
    {/* leftsiderbar */}
    <Sidebar />
		<div class="main-containerdash">
			<div class="main-headerdash">
			</div>
			<div class="content-wrapper">
				<div class="content-wrapper-header">
					<div class="content-wrapper-context">

						<h3>Here you Go  <a href="#">Spare Things</a></h3>
						<div class="content-text">Lorem ipsum dolorreprehenderit officiis error dolores ipsa molestias, maxime voluptate tempore?</div>
						<button class="content-button">Start Creating</button>
					</div>
					<img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""/>
				</div>
        <div className="dashboardContainer">
        <Typography style={{"borderRadius":"1rem" ,"width":"9vw" ,"height":"3vh"}} component="h3">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
       <div className="chartsld">
        <div className="lineChart">
          <Line options= {{
                        maintainAspectRatio: false,
                          labels: {
                              color: "#fff",
                              font:{
                                  size:12
                              } 
                          },
                          scales: {

                            yAxes:{
                                // grid: {
                                //     drawBorder: true,
                                //     color: '#FFFFFF',
                                // },
                                ticks:{
                                    beginAtZero: true,
                                    color: '#ffff',
                                    fontSize: 12,
                                }
                            },
                            xAxes: {
                                grid: {
                                    drawBorder: true,
                                    color: '#FFFFFF',
                                },
                                ticks:{
                                    beginAtZero: true,
                                    color: 'white',
                                    fontSize: 12,
                                }
                            },
                        }
                      
                    }} data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut  data={doughnutState} />
        </div>
        </div>
      </div>
			</div>
		</div>
	</div>
	<div class="overlay-app"></div>
</div> 
    </div>

  );
};

export default Dashboard;
