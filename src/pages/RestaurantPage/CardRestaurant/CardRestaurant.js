import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styled from "styled-components";

const InfoRestaurant = styled(Box)`
  display: flex;
  justify-content: space-between;
`

const CardRestaurant = () => {
    // const [restaurant] = useRequestData([], `${BASE_URL}/restaurants`)
    // const [food] = useRequestData([], `${BASE_URL}/restaurants/:restaurantId`)

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="130"
                    image="https://gastronomiaeviagens.com.br/wp-content/uploads/2021/02/04-Hamburguerias-mais-diferentes-em-SP.jpg"
                    alt="nome"
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" color="primary" component="div">
                        Nome do restaurante
                    </Typography>

                    <Typography gutterBottom variant="body1" color="text.secondary">
                        Tipo de comida
                    </Typography>

                    <InfoRestaurant>
                        <Typography variant="body1" color="text.secondary">
                            Tempo entrega
                        </Typography>

                        <Typography variant="body1" color="text.secondary">
                            Frete: R$
                        </Typography>
                    </InfoRestaurant>

                    <Typography gutterBottom variant="body1" color="text.secondary">
                        Endereço do Restaurante
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default CardRestaurant
