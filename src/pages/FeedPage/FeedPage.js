import React from "react";
import CardFeed from "./CardFeed/CardFeed";
import {Title, ContainerSearch} from "./styled"
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider';
import NavBarHome from "../../components/NavBar/NarBarHome";
import { goToSearch } from "../../routes/coordinator";
import  {useNavigate} from "react-router-dom";
import ActiveOrder from "../../components/ActiveOrder/ActiveOrder";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";

const FeedPage = () => {
   const navigate = useNavigate()

  
  return (
    <div>
      <Title>
      <h2>FutureEats</h2>
      </Title>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Divider />
        <ContainerSearch>
          <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined" >
            <OutlinedInput
               onClick={()=> goToSearch(navigate)}
              type={'text'}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>}
              placeholder="Restaurante"
            />
          </FormControl>
        </ContainerSearch>
      </Box>
      <CardFeed/>
      <ActiveOrder />
      <NavBarHome/>
    </div>
  )
}

export default FeedPage