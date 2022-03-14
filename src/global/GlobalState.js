import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = () => {
    const [cart, setCart] = useState([])

    const data = {
        cart,
        setCart,
    }
    
    return(
        <GlobalStateContext.Provider value={ data }>

        </GlobalStateContext.Provider>
    )
}

export default GlobalState;