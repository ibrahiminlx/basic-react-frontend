import React, {useEffect, useState} from 'react';
import styles from "./styles.modules.css"

import axios from "axios";

function Posts(props) {
    const [posts,setPosts]=useState([])
    const [loading,setLoading]= useState(true)


    useEffect(()=>{
        axios.get("http://localhost:3001/post")
            .then(res=>setPosts(res.data))
            .catch(e=>console.log(e))
            .finally(()=>setLoading(false))

    },[])
    return (
        <>
            {
                loading  ? <h3>Loading...</h3>:posts.map((data,index)=>{
                    return(
                        <div className="card card-post" key={index}>
                            <div className="card-body">
                                <h5 className="card-title" ><b>Post Title</b>  : {data.title}</h5>
                                <p className="card-text" ><b>Post Details</b> : {data.body}</p>

                            </div>
                        </div>
                    )
                })
            }

        </>
    );
}

export default Posts;