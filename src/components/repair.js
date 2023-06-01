import React, { Component } from "react";
import {useState} from "react";
import Data from "./repair.json";

function Repair()
{

    const [query, setQuery] = useState("")
        return(
            
            <div className="auth-inner3">
                <h3>Repair Service</h3>
                <input placeholder="Enter Your Location" onChange={event => setQuery(event.target.value)}/>
                {
                    Data.filter(post => {
                     if (query === '') {
                            return post;
                     } else if (post.address.toLowerCase().includes(query?.toLowerCase())) {
                        return post;
                    }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <h6>Name:</h6>
                            <p>{post.service_name}</p>
                            <h6>Address:</h6>
                            <p>{post.address}</p>
                            <h6>Phone No:</h6>
                            <p>{post.phone}</p>
                    </div>
                    ))
                }
            </div>
        )
    
}
export default Repair;