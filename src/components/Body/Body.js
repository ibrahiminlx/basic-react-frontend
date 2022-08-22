import React from 'react';
import {Link, Route,Routes} from "react-router-dom";
import styles from "./styles.modules.css"
import DashBoard from "../Body-component/DashBoard/DashBoard";
import Users from "../Body-component/Users/Users";
import Posts from "../Body-component/Posts/Posts";

function Body(props) {
    return (
        <>
           <div className={"container"}>
               <div className={"row"}>
                   <div className={"col-md-2"}>
                       <ul>
                           <Link to={"/"}><i className="fa-solid fa-house" ></i> DashBoard</Link><br/>
                           <Link to={"/users"}><i className="fa-solid fa-users"></i> Users</Link><br/>
                           <Link to={"/posts"}><i className="fa-solid fa-list"></i> Posts</Link>
                       </ul>
                   </div>
                   <div className={"col-md-10"}>
                       <Routes>
                           <Route path={"/"} element={<DashBoard/>}/>
                           <Route path={"/users"} element={<Users/>}/>
                           <Route path={"/posts"} element={<Posts/>}/>
                       </Routes>
                   </div>
               </div>
           </div>

        </>
    );
}

export default Body;