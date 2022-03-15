import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../constants/url';
import useRequestData from '../../../hooks/useRequestData';
import { goToRestaurant } from '../../../routes/coordinator';
import GlobalStateContext from '../../../global/GlobalStateContext';

const InfoRestaurant = styled(Box)`
    display: flex;
    justify-content: space-between
`
const CardFeed = () => {
    const{restaurants}=useContext (GlobalStateContext)
    const Navigate= useNavigate()

    const onClickInfoRestaurant = (id) => {
        goToRestaurant (Navigate, id)
    }

    const restaurantList = restaurants?.restaurants && restaurants?.restaurants.map((rest) => {
        return (
            <div key={rest.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={() => onClickInfoRestaurant(rest.id)}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={rest.logoUrl}
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h6" color="primary" component="div">
                                {rest.name}
                            </Typography>
                            <InfoRestaurant>
                                <Typography variant="body2" color="text.secondary">
                                    {rest.deliveryTime} min
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                      (`Frete: R$${rest.shipping},00`)
                                </Typography>
                            </InfoRestaurant>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    })
    return (
       <div>
        {restaurantList}
       </div>
    );
}
export default CardFeed;