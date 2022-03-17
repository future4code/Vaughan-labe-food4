import React, { useContext } from "react";
import Payments from "./Payments/Payments";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerCart, ButtonStyle } from "./styled";
import NavBarCart from "../../components/NavBar/NavBarCart";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { Button } from "@mui/material";

const CarPage = () => {
  const {cart, setCart, removeTheFood, cartRest} = useContext(GlobalStateContext)  
  const profile = useRequestData([], `${BASE_URL}/profile`)
  const [restaurant] = useRequestData([], `${BASE_URL}/restaurants/${cartRest}`)


  const valueAll = (cart[0]?.price * cart[0]?.quantity) + restaurant?.restaurant?.shipping

  return (
    <>
    <ContainerCart>
      <h3 className="myCart">Meu carrinho</h3>

      <div className="address">
        <p className="p1">Endereço de entrega</p>
        <p className="p2">{profile[0]?.user?.address}</p>
      </div>
      
      <div>
        {cart.length === 0? "": <a>{restaurant?.restaurant?.address}</a>

        }
      </div>
      <div>
        {cart.length === 0? <p>carrinho vazio</p>: cart.map((food)=>{
          return(
            <div key={food.id}>
                {food.name}
                <button onClick={()=>removeTheFood(food)}>remover</button>
              </div>
          )
        })}
      </div>

     

      <div className="payments">

        <div className="frete">
        <p>Frete R$</p>
        {cart.length === 0? <p>0,00</p> : <p>{restaurant?.restaurant?.shipping}</p>}
        </div>
   
        <div className="priceAll">
          <h4>SUBTOTAL: </h4>
          {cart.length === 0? <p>R$0,00</p> : <p>R${valueAll}</p>}
        </div>

        <div>
        <Payments/>
        </div>
      
      </div>

      <div className="button">
      {cart.length === 0? 
        <ButtonStyle variant="contained" disabled>Confirmar</ButtonStyle>
        :
        <ButtonStyle variant="contained" color={"primary"}>Confirmar</ButtonStyle>
      }
      </div>

      <NavBarCart className="navbar"/>
      </ContainerCart>
    </>
  )
}

export default CarPage