import React, { useContext } from "react";
import Payments from "./Payments/Payments";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerCart } from "./styled";
import NavBarCart from "../../components/NavBar/NavBarCart";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import Card from "../../components/Card/Card";
import { useEffect } from "react";

const CarPage = () => {
  const {cart, setCart, removeTheFood, cartRest} = useContext(GlobalStateContext)  
  const profile = useRequestData([], `${BASE_URL}/profile`)
  const [restaurant] = useRequestData([], `${BASE_URL}/restaurants/${cartRest}`)

 

 const valueAll = () =>{
    let valueAllCart = 0
    for (let valueCart of cart){
      valueAllCart += valueCart.price * valueCart.quantity;
    }
    return valueAllCart + restaurant?.restaurant?.shipping

}

return (
    <>
    <ContainerCart>
      <h3 className="myCart">Meu carrinho</h3>

      <div className="address">
        <p className="p1">Endereço de entrega</p>
        <p className="p2">{profile[0]?.user?.address}</p>
      </div>
      
      <div className="addressRes">
        {cart.length === 0? "": 
          <div >
          <p className="p1">{restaurant?.restaurant?.name}</p>
          <p className="p2">{restaurant?.restaurant?.address}</p>
          <p className="p3">{restaurant?.restaurant?.deliveryTime} min</p>
          </div>
        }
      </div>

      <div>
        {cart.length === 0? <p>carrinho vazio</p>: cart.map((food)=>{
          return(
            <Card 
              key={food.id}
              photo={food.photoUrl}
              name={food.name}
              description={food.description}
              price={food.price}
              quantity={food.quantity}
              remove={()=>removeTheFood(food)}
              />
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
          {cart.length === 0? <p>R$0,00</p> : <p>R${valueAll()}</p>}
        </div>

        <div>
        <Payments cart={cart} resId={cartRest} />
        </div>
      
      </div>

      <NavBarCart className="navbar"/>
      </ContainerCart>
    </>
  )
}

export default CarPage