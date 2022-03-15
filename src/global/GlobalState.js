import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [restaurants, setRestaurants, loading] = useRequestData([], `${BASE_URL}/restaurants`)

    const [cart, setCart] = useState([])

    const data = {
        cart,
        setCart,
        restaurants,
        loading
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;