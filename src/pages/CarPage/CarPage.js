import React, { useContext } from "react"
import Payments from "./Payments/Payments"
import GlobalStateContext from "../../global/GlobalStateContext"
import { ContainerCart, PageTittleContainer, TittleNavContainer, PriceStyle } from "./styled"
import NavBarCart from "../../components/NavBar/NavBarCart"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import Card from "../../components/Card/Card"

const CarPage = () => {
  const {cart, cartRest} = useContext(GlobalStateContext)  
  const [restaurant] = useRequestData([], `${BASE_URL}/restaurants/${cartRest}`)



  const valueAll = () => {
    let valueAllCart = 0
    for (let valueCart of cart) {
      valueAllCart += valueCart.price * valueCart.quantity;
    }
    return valueAllCart + restaurant?.restaurant?.shipping

  }

  return (
    <>
      <PageTittleContainer>
        <TittleNavContainer>
          <p>Meu carrinho</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <ContainerCart>


        <div className="addressRes">
          {cart.length === 0 ? "" :
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
              foodAll={food}
              quantityA={food.quantity}
            />
          )
        })}
      </div>


        <div className="payments">
          <div className="frete">
            <p>Frete R$</p>
            {cart.length === 0 ? <p>0,00</p> : <p>{restaurant?.restaurant?.shipping}</p>}
          </div>

          <div className="priceAll">
            <h4>SUBTOTAL </h4>
            {cart.length === 0 ? <PriceStyle>R$0,00</PriceStyle> : <PriceStyle>R${valueAll()}</PriceStyle>}
          </div>

          <div className="paymentsButton">
            <Payments cart={cart} resId={cartRest} />
          </div>

        </div>

        <NavBarCart className="navbar" />
      </ContainerCart>
    </>
  )
}

export default CarPage;