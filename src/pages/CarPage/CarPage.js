import React, { useContext } from "react";
import Payments from "./Payments/Payments";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerCart } from "./styled";
import NavBarCart from "../../components/NavBar/NavBarCart";

const CarPage = () => {
  const {cart, setCart, removeTheFood } = useContext(GlobalStateContext)

  

  return (
    <>
    <ContainerCart>
      <h3 className="myCart">Meu carrinho</h3>

      <div>
        endereço
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
        <h4>Frete R$0,00</h4>
        </div>
   
        <div className="priceAll">
          <h4>SUBTOTAL: </h4>
          <h4>R$0,00</h4>
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