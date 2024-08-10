import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./home.css"
function Home(){
    const[PRODUCTS,setPRODUCTS]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((res)=>res.json())
        .then((data)=>setPRODUCTS(data))
        .catch((error)=>console.log("error fetching bots",error));
    },[]);
    return(
        <>
        <div className="home">
            <div className="homeTitle">
            <h1 style={{ textAlign: "center" }}>Available Bots</h1>
            </div>
            <div className="bots">
                {PRODUCTS.map((product)=>
                <Product data={product}/>                
                )}
            </div>
        </div>
        </>
    )
}
export default Home;