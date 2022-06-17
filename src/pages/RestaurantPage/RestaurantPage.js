import React, {useContext} from "react"
import { useNavigate, useParams } from "react-router-dom"
import Back from '../../assets/back.png'
import Card from "../../components/Card/Card"
import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"
import { goToFeed } from "../../routes/coordinator"
import CardRestaurant from "./CardRestaurant/CardRestaurant"
import { Container, BackImg, ContainerFoods, PageTittleContainer, TittleNavContainer, TitleCategory } from './styled'
import GlobalStateContext from "../../global/GlobalStateContext";


const RestaurantePage = () => {
  const params = useParams();
  const {food, setFood} = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

  const openQuantity = (food) => {
    document.querySelector(`.popup-wrapper`).style.display = `block`
    setFood(food)
  }

  const listOfCategories = foods.restaurant && foods.restaurant.products.map((food) => {
    return food.category
})
  const onlyCategories = [...new Set(listOfCategories)]

  return (
    <Container>

      <PageTittleContainer>
        <TittleNavContainer>
        <BackImg src={Back} onClick={() => goToFeed(navigate)}/>
        <p>Restaurante</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <CardRestaurant />
      <ContainerFoods>
   {onlyCategories && onlyCategories.map((type) => {
      return (
         <div key={type}>
          <TitleCategory>{type}</TitleCategory>
          {foods.restaurant && foods.restaurant.products.filter((cat) => {
              return cat.category === type
          })
              .map((food) => {
                  return (
                       <Card
                        key={food.id}
                        photo={food.photoUrl}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                        quantityA={food.quantity}
                        foodAll={food}
                        id={food.id}
                        openQuantity={()=>openQuantity(food)}
                        />
                  )
              })}
      </div>
  )
})
}
      </ContainerFoods>      
    </Container>
  )
}

export default RestaurantePage;



              