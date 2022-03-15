import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../../hooks/useRequestData"
import { BASE_URL } from "../../../constants/url"
import GlobalStateContext from '../../../global/GlobalStateContext'
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material"
import { InfoRestaurant, BoxBotton, StyleButton, CardMediaStyle } from './styled'

const CardRestaurant = () => {
    const params = useParams()
    const { restaurants } = useContext(GlobalStateContext)
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

    useEffect(() => {

    }, [restaurants])

    const infoRestaurant = restaurants?.restaurants && restaurants?.restaurants
        .filter((rest) => {
            return rest.id === params.id
        })
        .map((rest) => {
            return (
                <div key={rest.id}>
                    <Card sx={{ maxWidth: 345 }}>

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

                            <Typography gutterBottom variant="body2" color="text.secondary">
                                {rest.category}
                            </Typography>

                            <InfoRestaurant>
                                <Typography variant="body2" color="text.secondary">
                                    {rest.deliveryTime} min
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Frete: R${rest.shipping},00
                                </Typography>
                            </InfoRestaurant>
                            <br />
                            <Typography gutterBottom variant="body2" color="text.secondary">
                                {rest.address}
                            </Typography>

                        </CardContent>

                    </Card>
                </div>
            )
        })

    const foodsRestaurant = foods.restaurant?.products && foods?.restaurant?.products
        .map((food) => {
            return (
                <div>
                    <Card sx={{ display: "flex", flexDirection: "row-reverse", border: 1, borderColor: "#c4c4c4", maxWidth: 400, borderRadius: 3 }}>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ marginRight: 7.1 }}>
                                <Typography component="div" variant="h5" color="primary">
                                    {food.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {food.description}
                                </Typography>
                                <br />
                                <BoxBotton>
                                    <Typography component="div" variant="h5">
                                        R${food.price}
                                    </Typography>
                                    <StyleButton>adicionar</StyleButton>
                                </BoxBotton>
                            </CardContent>
                        </Box>

                        <CardMediaStyle
                            component="img"
                            sx={{ width: 140, display: "flex" }}
                            image={food.photoUrl}
                            alt={food.name}
                        />
                    </Card>
                </div>
            )
        })

    return (
        <div>
            {infoRestaurant}
            {foodsRestaurant}
        </div >
    )
}

export default CardRestaurant
