import React, { useContext } from "react";
import Payments from "./Payments/Payments";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerCart } from "./styled";
import NavBarCart from "../../components/NavBar/NavBarCart";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";

const CarPage = () => {
  const {cart, setCart, removeTheFood, cartRest} = useContext(GlobalStateContext)  
  const profile = useRequestData([], `${BASE_URL}/profile`)
  const [restaurant] = useRequestData([], `${BASE_URL}/restaurants/${cartRest}`)


  const valueAll = (cart[0]?.price * cart[0]?.quantity) + restaurant?.restaurant?.shipping

  console.log(valueAll)
  return (
    <>
    <ContainerCart>
      <h3 className="myCart">Meu carrinho</h3>

      <div>
        <p>Endereço de entrega</p>
        <h4>{profile[0]?.user?.address}</h4>
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
          <p>R$</p>
          {cart.length === 0? <p>0,00</p> : <p>{valueAll}</p>}
        </div>

        <div>
        <Payments/>
        </div>
      
      </div>

      <NavBarCart className="navbar"/>

      </ContainerCart>
    </>
  )
}

export default CarPage