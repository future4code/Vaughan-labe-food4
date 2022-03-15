import React from "react";
import CardFeed from "./CardFeed/CardFeed";
import {Title} from "./styled"
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import Divider from '@mui/material/Divider';
import NavBarHome from "../../components/NavBar/NarBarHome";

const FeedPage = () => {


  return (
    <div>
      <Title>
      <h2>FutureEats</h2>
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
            />
          </FormControl>
        </div>
      </Box>
      <CardFeed/>
      <NavBarHome/>
    </div>
  )
}

export default FeedPage