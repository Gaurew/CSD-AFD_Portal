import React from "react";
import allProduct from '../../Assets/Car';
import { createContext } from "vm";

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextValue = {allProduct};
    return(
        <ShopContext.Provider value = {contextValue}>
                {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider