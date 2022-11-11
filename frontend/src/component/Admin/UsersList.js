import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(message);
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 100,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
            
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />
{/* 
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div> */}
      <div className="setkarodashbg">
      <div class="appdash">
	<div class="header">
		<div class="menu-circle"></div>
		<div class="header-menu">
			<a class="menu-link is-active" href="#">Dashboard</a>
		</div>

	</div>
	<div class="wrapper">
    {/* leftsiderbar */}
    <SideBar />
		<div class="main-containerdash">
			<div class="main-headerdash">
			</div>
			<div class="content-wrapper">
				<div class="content-wrapper-header">
					<div class="content-wrapper-context">

						<h3>Here you Go  <a href="#">Spare Things</a></h3>
						<div class="content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis nostrum ea magnam, sed adipisci quasi! Sit consequatur rerum asperiores qui reprehenderit officiis error dolores ipsa molestias, maxime voluptate tempore?</div>
						<button class="content-button">Start Creating</button>
					</div>
					<img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""/>
				</div>
        <div className="dashboardContainer">
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
          
            rows={rows}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
            
         
          />
        </div>
      </div>
			</div>
		</div>
	</div>
	<div class="overlay-app"></div>
</div> 
</div> 
    </Fragment>
  );
};

export default UsersList;
