import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
   
      <div class="seachboxbar">
    <form  onSubmit={searchSubmitHandler}>
    <div class="searchbox">
        <div class="shadow"></div>
        <input  type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}/>
          <input style={{"width":"10vw","height":"5vh","borderRadius":"1rem","cursor":"pointer","marginLeft":"5vw"}} type="submit" value="Search" />
        <ion-icon name="search-outline"></ion-icon>
    </div>
        </form>
</div>
    </Fragment>
  );
};

export default Search;
