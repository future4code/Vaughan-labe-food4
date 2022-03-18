import React, { useContext, useEffect, useState } from "react";
import {HeaderContainer, ContainerCard, InfoRestaurant, Title, H2} from "./styled"
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToRestaurant } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import back from "../../assets/back.png"

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
  };
  const restaurantFilter = restaurants.restaurants?.filter((restaurant) => {
    return !input
      ? false
      : restaurant?.name.toLowerCase().includes(input.toLowerCase())
  })

  .map((restaurant) => {
    return <ContainerCard key={restaurant.id}>

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
                {restaurant.deliveryTime} min
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Frete: R${restaurant.shipping},00
              </Typography>
            </InfoRestaurant>
          </CardContent>
        </CardActionArea>

      </Card>

    </ContainerCard>
  })

  const navigate = useNavigate()
  return (
    <div>
      <Title>
        <Button
          onClick={() => goToFeed(navigate)}
          variant="text" margin={"normal"} color={"inherit"}
        >
          <img src={back} alt={"Back"}/>
        </Button>
        <H2>Busca</H2>
      </Title>

    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Divider />
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
        
        {restaurantFilter}
      </div>
    </Box>
  </div>
)
}

export default SearchPage