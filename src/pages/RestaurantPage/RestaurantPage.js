import React from "react"
import CardFood from "../../components/CardFood/CardFood"
import CardRestaurant from "./CardRestaurant/CardRestaurant"
import { Container, ContainerFoods } from './styled'


const RestaurantePage = () => {

  return (
    <Container>
      <CardRestaurant />
      <ContainerFoods>
        <CardFood />
      </ContainerFoods>
    </Container>
  )
}

export default RestaurantePage