import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const CarPage = () => {
  const {cart, setCart} = useContext(GlobalStateContext)

  

  return (
    <div>
      <h2>Meu carrinho</h2>
      <div>endereço</div>

      <div>
        {cart.length === 0? "carrinho vazio": cart.map((i)=>{
          return<div>{i}</div>
        })}
      </div>
      <div>
        <h3>frete R$0,00</h3>
        <div>
          <h3>sub total:</h3>
          <h3>R$:0,00</h3>
        </div>
       
       <div>
         <h3>Formas de pagamento</h3>
         <p>Dinheiro</p>
         <p>Cartão de crédito</p>
       </div>
       
       

      </div>
      <div>nav bar</div>
    </div>
  )
}

export default CarPage