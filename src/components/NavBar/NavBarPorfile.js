import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import avatar from "../../assets/avatarGreen.png"
import homepage from "../../assets/homepage.png"
import Cart from "../../assets/shopping-cart.png"
import { ContainerNavBar } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToCar, goToFeed } from '../../routes/coordinator';


 const NavBarProfile = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()  
  return (
    <ContainerNavBar>
    <Box sx={{ width: 400 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  icon={<img src={homepage} className="avatar"/>} onClick={()=> goToFeed(navigate)}/>
        <BottomNavigationAction  icon={<img src={Cart} className="avatar"/>} onClick={()=> goToCar(navigate)}/>
        <BottomNavigationAction  icon={<img src={avatar} className="avatar"/>} />
      </BottomNavigation>
    </Box>
    </ContainerNavBar>
  );
}
export default NavBarProfile;