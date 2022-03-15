import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [restaurants] = useRequestData([], `${BASE_URL}/restaurants`)

    const [cart, setCart] = useState([])

    const data = {
        cart,
        setCart,
        restaurants
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;