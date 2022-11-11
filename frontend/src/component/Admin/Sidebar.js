import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div>
    {/* <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div> */}
      <div>
      <div class="left-side">
			<div class="side-wrapper">
				{/* <div class="side-title">Dashboard</div> */}
				<div class="side-menu">
				
						<svg viewBox="0 0 512 512">
							<g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
								<path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
							</g>
							<path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
							<path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
						</svg>
						{/* Dashboard */}
            <Link  style={{"fontSize":"1rem"}} to="/admin/dashboard">
          <DashboardIcon /> Dashboard
      </Link>
            <Link  style={{"fontSize":"1rem"}} to="/admin/orders">
        
          <ListAltIcon />
          Orders
        
      </Link>

				    <Link style={{"fontSize":"1rem"}}  to="/admin/users">
          <PeopleIcon /> Users
      </Link>

            <Link  style={{"fontSize":"1rem"}}  to="/admin/reviews">
          <RateReviewIcon />
          Reviews
      </Link>
				
				</div>
			</div>
			<div class="side-wrapper">
				<div style={{"color":"white"}}   class="side-title">Products</div>
				<div sty class="side-menu">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          {/* <TreeItem nodeId="1" label="Products"> */}
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          {/* </TreeItem> */}
        </TreeView>
      
			
				
				</div>
			</div>
		
		</div>
      </div>
    </div>
  );
};

export default Sidebar;
