import { createContext, useState } from "react";
import React from "react";





const Shoppingcontext=React.createContext();

const Shoppingprovider=(prop)=>
{
    const [items,setitems]=useState([]);
    const additems=(data)=>{
        setitems([...items,data])
    }
    function deleteitems(){

    }
    return (
        <Shoppingcontext.Provider value={{items,additems}}>
            {prop.children}
        </Shoppingcontext.Provider>
    )
}

export {Shoppingcontext,Shoppingprovider}