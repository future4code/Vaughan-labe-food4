import React, { useContext, useState } from "react";
import {Title} from "./styled"
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";

const SearchPage = () => {
  const {restaurants} = useContext(GlobalStateContext)
  const [input, setInput] = useState("");

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };
  const restaurantFilter = restaurants.restaurants?.filter((restaurant) => {
    return !input
      ?false
      : restaurant?.name.toLowerCase().includes(input.toLowerCase())  
  })
  
  .map((restaurant) => {
    return <p>{restaurant.name}</p>
  })

  const navigate = useNavigate()
  return (
    <div>
      <Title>
        <Button
          onClick={() => goToFeed(navigate)}
          variant="text" margin={"normal"} color={"inherit"}
        >
          Voltar
        </Button>
        <h2>Busca</h2>
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