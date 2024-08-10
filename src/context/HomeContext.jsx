import React, { createContext, useState } from "react";
export const HomeContext=createContext(null);
const defaultArmy=()=>{
    let army={}
    for(let i=1;i<PRODUCTS.length + 1;i++){
        army[i]=0
    }
    return army;
}
function HomeContextProvider(props){
    const[myArmy,setMyArmy]=useState(defaultArmy());

    const addToArmy=(itemId)=>{
        setMyArmy((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const rmvFromArmy=(itemId)=>{
        setMyArmy((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={myArmy,addToArmy,rmvFromArmy};
    return(
        <HomeContext.Provider value={contextValue}>{props.children}</HomeContext.Provider>
    )
}
export default HomeContextProvider;