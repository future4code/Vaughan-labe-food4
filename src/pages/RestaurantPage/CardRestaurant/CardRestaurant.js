import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GlobalStateContext from '../../../global/GlobalStateContext'
import { Card, CardContent, CardMedia, Typography} from "@mui/material"
import { InfoRestaurant, LoadingStyle } from './styled'
import CardFood from "../../../components/CardFood/CardFood"

const CardRestaurant = () => {
    
    const params = useParams()
    const { restaurants, loading } = useContext(GlobalStateContext)

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


    return (
        <div>
            {loading ? <LoadingStyle></LoadingStyle> : infoRestaurant}
            <CardFood/>
        </div >
    )
}

export default CardRestaurant
