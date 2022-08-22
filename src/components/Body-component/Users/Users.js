import React, {useEffect, useState} from 'react';
import styles from "./styles.modules.css"
import axios from "axios";



function Users(props) {
    const [users,setUsers]= useState([])
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
            .then(res=>setUsers(res.data))
            .catch(e=>console.log(e))
            .finally(()=>setLoading(false))

    },[])



    return (
        <>

            <h4>Users</h4>
            <div className="row">
                {loading  ? <h3>Loading...</h3>:users.map((data)=>{
                    return(
                        <div className="col-sm-3" key={data.id}>
                            <div className="card card-users">
                                <div className="card-body">
                                    <img className="card-img-top" src={data.avatar} alt="Card image cap"/>
                                    <h5 className="card-title mt-2">{data.first_name}</h5>
                                    <p className="card-text">{data.last_name}</p>
                                    <p className="card-text">{data.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );
}

export default Users;