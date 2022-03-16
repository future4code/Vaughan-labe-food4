import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import GlobalStateContext from '../../global/GlobalStateContext'
import { Card, CardContent, Typography, Box } from "@mui/material"
import { BoxBotton, StyleButton, CardMediaStyle, LoadingStyle } from './styled'

const CardFood = () => {
    const [amount, setAmount] = useState(0)
    const [food, setFood] = useState([])
    const {cart, setCart} = useContext(GlobalStateContext)
    const params = useParams()
    const { loading } = useContext(GlobalStateContext)
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

    const openQuantity = (food) =>{
        document.getElementById(`popup`).style.display = `block`
        setFood(food)
    }
    
    const exitQuantify = () => {
        document.getElementById(`popup`).style.display = `none`
    }
    const addToCart = () => {
        const quantity = Number(amount)
        const newCart = [...cart]
        const findIndex = newCart.findIndex((productCart)=>{
            return productCart.id === food.id;
        })
        if(findIndex === -1){
            newCart.push({...food, quantity})
        }else{
            alert("item ja exite no carrinho")
        }
        setCart(newCart)
        exitQuantify()
    }
    console.log(cart)

    const onChange = (e) => {
        setAmount(e.target.value)
    }
 

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

                                    <div id="popup" className="popup">
                                        <p>Selecione a quantidade desejada</p>
                                        <select onChange={onChange}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    <a onClick={()=> addToCart()}>adicionar</a>
                                    </div>
                                    <StyleButton onClick={()=> openQuantity(food)}>adicionar</StyleButton>
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