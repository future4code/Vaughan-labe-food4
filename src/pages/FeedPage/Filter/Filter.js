import { CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { ContainerCard, InfoRestaurant } from "../../SearchPage/styled";
import { ContainerFilter } from "./style";



const Filter = () => {
  const { restaurants, setCartRest } = useContext(GlobalStateContext)
  const [click, setClick] = useState("");

  const onChange = (event) => {
    setClick(event.target.value);
  };

  const restaurantFilter = restaurants?.restaurants.filter((restaurant) => {
    return !click
      ? false
      : restaurant?.category.toLowerCase().includes(click.toLowerCase())
  }).map((restaurant) => {
    return <ContainerCard key={restaurant.id}>

      <div sx={{ display: "flex", justifyContent: "center", borderRadius: 3, border: 1, borderColor: '#c4c4c4', width: 378 }}>

        <CardActionArea >
          <CardMedia
            component="img"
            height="100"
            image={restaurant.logoUrl}
            alt={restaurant.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" color="primary" component="div">
              {restaurant.name}
            </Typography>
            <InfoRestaurant>
              <Typography variant="body1" color="text.secondary">
                {restaurant.deliveryTime} min
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Frete: R${restaurant.shipping},00
              </Typography>
            </InfoRestaurant>
          </CardContent>
        </CardActionArea>

      </div>
      
    </ContainerCard>
  })

  return (
    <ContainerFilter>
      <Swiper className="mySwiper">

        <SwiperSlide className="Slide 2" class="swiper-button-next" onClick={() => onChange(restaurants.id)}>hamburguer</SwiperSlide>
        <SwiperSlide className="Slide 4" class="swiper-button-next" onClick={() => restaurantFilter(restaurants.id)}>bebidas</SwiperSlide>
        <SwiperSlide className="Slide 5" class="swiper-button-next" onClick={() => restaurantFilter(restaurants.id)}>pastel</SwiperSlide>
        <SwiperSlide className="Slide 6" class="swiper-button-next" onClick={() => restaurantFilter(restaurants.id)}>Comidas</SwiperSlide>
        <SwiperSlide className="Slide 7" class="swiper-button-next" onClick={() => restaurantFilter(restaurants.id)}>Salgados</SwiperSlide>
        <SwiperSlide className="Slide 8" class="swiper-button-next" onClick={() => restaurantFilter(restaurants.id)}>Mexicana</SwiperSlide>
      </Swiper>
      {restaurantFilter}
    </ContainerFilter>
  )

}

export default Filter;