import React from "react"
import { useNavigate } from "react-router-dom"
import Back from '../../assets/back.png'
import CardFood from "../../components/CardFood/CardFood"
import { goToFeed } from "../../routes/coordinator"
import CardRestaurant from "./CardRestaurant/CardRestaurant"
import { Container, BackImg, ContainerFoods, PageTittleContainer, TittleNavContainer } from './styled'


const RestaurantePage = () => {
  const navigate = useNavigate();
  

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
        <CardFood />
      </ContainerFoods>
    </Container>
  )
}

export default RestaurantePage