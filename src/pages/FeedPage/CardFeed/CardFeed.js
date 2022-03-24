import React, { useContext, useEffect, useState } from 'react'
import { CardActionArea, CardContent, CardMedia, Typography, Card } from '@mui/material'
import { LoadingStyle, InfoRestaurant, ContainerCard, Container } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../../routes/coordinator'
import GlobalStateContext from '../../../global/GlobalStateContext'
import ActiveOrder from '../../../components/ActiveOrder/ActiveOrder'
import CategoriesFilter from '../Filter/Filter'

const CardFeed = () => {
    const { restaurants, loading, setCartRest } = useContext(GlobalStateContext)
    const Navigate = useNavigate()
    const [categories, setCategories] = useState('')

    useEffect(() => {
    }, [restaurants])

    const onClickInfoRestaurant = (id) => {
        goToRestaurant(Navigate, id)
        setCartRest(id)
    }

    const handleCategory = (value) => {
        setCategories(value)
    }

    const restaurantList = restaurants?.restaurants && restaurants?.restaurants
        .filter((rest) => {
            return rest.category.includes(categories)
        })
        .map((rest) => {

            return (

                <ContainerCard key={rest.id}>

                    <Card sx={{ display: "flex", justifyContent: "center", borderRadius: 3, border: 1, borderColor: '#c4c4c4', width: 378 }}>

                        <CardActionArea onClick={() => onClickInfoRestaurant(rest.id)}>
                            <CardMedia
                                component="img"
                                height="100"
                                image={rest.logoUrl}
                                alt={rest.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" color="primary" component="div">
                                    {rest.name}
                                </Typography>
                                <InfoRestaurant>
                                    <Typography variant="body1" color="text.secondary">
                                    {rest.deliveryTime - 10} - {rest.deliveryTime} min
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Frete: R${rest.shipping},00
                                    </Typography>

                                </InfoRestaurant>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ContainerCard>
            )
        })

    return (
        <Container>
            <CategoriesFilter
                handleCategory={handleCategory}
            />
            {loading ? <LoadingStyle/> : <div>{restaurantList} <ActiveOrder /></div>}
        </Container>
    )
}
export default CardFeed