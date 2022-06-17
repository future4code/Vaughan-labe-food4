import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [restaurants, setRestaurants, loading] = useRequestData([], `${BASE_URL}/restaurants`)
    const [cart, setCart] = useState([])
    const [cartRest, setCartRest] = useState([])
    const [buttonCard, setButtonCard] = useState()
    const [food, setFood] = useState([])

    const data = {
        cart,
        setCart,
        restaurants,
        setRestaurants,
        loading,
        cartRest,
        setCartRest,
        buttonCard,
        setButtonCard,
        food,
        setFood,
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;