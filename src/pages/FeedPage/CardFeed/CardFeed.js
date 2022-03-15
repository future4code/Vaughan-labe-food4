import React, { useContext, useEffect } from 'react'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import { CardActionArea, Box } from '@mui/material'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../../routes/coordinator'
import GlobalStateContext from '../../../global/GlobalStateContext'

const InfoRestaurant = styled(Box)`
    display: flex;
    justify-content: space-between
`
const CardStyle = styled(Card)`
    width: 345px;
`
const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;

`

const CardFeed = () => {
    const{restaurants}=useContext (GlobalStateContext)

    useEffect(()=>{
        
    },[restaurants])
    const Navigate= useNavigate()

    const onClickInfoRestaurant = (id) => {
        goToRestaurant (Navigate, id)
    }

    const restaurantList = restaurants?.restaurants && restaurants?.restaurants.map((rest) => {
        return (
            <ContainerCard key={rest.id}>
                <CardStyle sx={{borderRadius: 3, border: 1, borderColor: '#c4c4c4'}}>

                    <CardActionArea onClick={() => onClickInfoRestaurant(rest.id)}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={rest.logoUrl}
                            alt= {rest.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" color="primary" component="div">
                                {rest.name}
                            </Typography>
                            <InfoRestaurant>
                                <Typography variant="body1" color="text.secondary">
                                    {rest.deliveryTime} min
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                      Frete: R${rest.shipping},00
                                </Typography>
                            </InfoRestaurant>
                        </CardContent>
                    </CardActionArea>

                </CardStyle>
            </ContainerCard>
        )
    })
    return (
       <div>
        {restaurantList}
       </div>
    );
}
export default CardFeed;