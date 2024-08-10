import React from "react";
import { HomeContext } from "../../context/HomeContext";
function Product(props){
    const{id,name,health,damage,armor,bot_class,catchphrase,avatar_url,created_at,updated_at}=props.data;
    return(
        <>
        <div className="product">
            <img src={avatar_url} alt="pic"/>
            <div className="description">
                <p>ID:{id}</p>
                <p>Name:<b>{name}</b></p>
                <p>Health:{health}</p>
                <p>Damage:{damage}</p>
                <p>Armor:{armor}</p>
                <p>Bot_class:{bot_class}</p>
                <p>Catchphrase:{catchphrase}</p>
                <p>Created At:{created_at}</p>
                <p>Updated At:{updated_at}</p>
            </div>
            <button className="addBtn">Add to My Army</button>
        </div>
        </>
    )
}
export default Product;