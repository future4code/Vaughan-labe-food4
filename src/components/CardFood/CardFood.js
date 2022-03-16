import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import GlobalStateContext from '../../global/GlobalStateContext'
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BoxBotton, StyleButton, CardMediaStyle, LoadingStyle } from './styled'

const CardFood = () => {
    
    const params = useParams()
    const { loading } = useContext(GlobalStateContext)
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

    const foodsRestaurant = foods.restaurant?.products && foods?.restaurant?.products
        .map((food) => {
            return (
                <div key={food.id}>
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
            {loading ? <LoadingStyle></LoadingStyle> : foodsRestaurant}
        </div >
    )
}

export default CardFood