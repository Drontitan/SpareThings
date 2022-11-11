import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import backblue from "../../images/abstract-bokeh-light-on-dark-blue-background-free-vector.webp"
const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          {/* <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div> */}
          <div class="aboutmepage">
    <div class="cardaboutme">
        <div class="cardaboutme-img">
          <img src={user.avatar.url} alt={user.name}/>
        </div>
        <div class="descaboutme">
            <div class="aboutright">
                <h6 class="primary-text">Full Name</h6>
                <h6 class="primary-text">Email</h6>
                <h6 class="primary-text">Joined On</h6>
            </div>
            <div class="aboutleft">
                <h6 class="secondary-text">{user.name}</h6>
          <h6 class="secondary-text">{user.email}</h6>
          <h6 class="secondary-text">{String(user.createdAt).substr(0, 10)}</h6>
            </div>
        
        </div>
      
        <Link to="/me/update"  style={{"textDecoration":"none"}}>  <button class="primary-text editprofilebtn">Edit Profile</button></Link>
        <div class="detailsaboutme">
          <div class="ratingboutme">
   
            <Link to="/orders" style={{"textDecoration":"none"}}><h6 class="secondary-text"> MY Orders </h6></Link>
          </div>
          <div class="activityaboutme">
  
            <Link to="/password/update" style={{"textDecoration":"none"}}><h6 class="secondary-text"> Change Password </h6></Link>
          </div>
        </div>
      </div>
    </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
