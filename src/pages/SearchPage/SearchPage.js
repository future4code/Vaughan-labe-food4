import React, { useContext, useEffect, useState } from "react"
import { ContainerCard, PageTittleContainer, TittleNavContainer, BackImg, InfoRestaurant } from "./styled"
import {Box, OutlinedInput, InputAdornment, FormControl, 
Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
import Back from '../../assets/back.png'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from "react-router-dom"
import { goToFeed, goToRestaurant } from "../../routes/coordinator"
import GlobalStateContext from "../../global/GlobalStateContext"

const SearchPage = () => {
  const { restaurants, setCartRest } = useContext(GlobalStateContext)
  const [input, setInput] = useState("");
  const Navigate = useNavigate()

  useEffect(() => {
  }, [restaurants])

  const onClickInfoRestaurant = (id) => {
    goToRestaurant(Navigate, id)
    setCartRest(id)
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);
  }

  const restaurantFilter = restaurants.restaurants?.filter((restaurant) => {
    return !input
      ? false
      : restaurant?.name.toLowerCase().includes(input.toLowerCase())
  })

    .map((restaurant) => {
      return (
        <ContainerCard key={restaurant.id}>

          <Card sx={{ display: "flex", justifyContent: "center", borderRadius: 3, border: 1, borderColor: '#c4c4c4', width: 378 }}>

            <CardActionArea onClick={() => onClickInfoRestaurant(restaurant.id)}>
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
                    {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Frete: R${restaurant.shipping},00
                  </Typography>

                </InfoRestaurant>
              </CardContent>
            </CardActionArea>
          </Card>
        </ContainerCard>
      )
    })

  return (
    <div>

      <PageTittleContainer>
        <TittleNavContainer>
          <BackImg src={Back} onClick={() => goToFeed(Navigate)} />
          <p>Busca</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <Box sx={{ marginTop: 7, textAlign: 'center' }}>
        <div>
          <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined" >
            <OutlinedInput

              type={'text'}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>}
              placeholder="Restaurante"
              value={input}
              onChange={onChangeInput}
            />
          </FormControl>
          {!input ? <p>Busca por nome de restaurante</p> : restaurantFilter.length === 0 ? <p>Não encontrado 😕</p> : restaurantFilter}
        </div>
      </Box>
    </div>
  )
}

export default SearchPage