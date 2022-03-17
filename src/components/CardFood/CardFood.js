import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import GlobalStateContext from '../../global/GlobalStateContext'
import { DivContainer, StyleSelect, ButtonPopup, PriceFood, NameFood,
 Description, ConainerBottom, TitlePopup, ContainerPopup,  DivButtonPopup, DivInfo, ImgStyle, Button, LoadingStyle, TitleCategory } from './styled'

const CardFood = () => {
    const [amount, setAmount] = useState(0)
    const [food, setFood] = useState([])
    const { cart, setCart } = useContext(GlobalStateContext)
    const params = useParams()
    const { loading } = useContext(GlobalStateContext)
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

    const openQuantity = (food) => {
        document.getElementById(`popup`).style.display = `block`
        setFood(food)
    }

    const exitQuantify = () => {
        document.getElementById(`popup`).style.display = `none`
    }
    const addToCart = () => {
        const quantity = Number(amount)
        const newCart = [...cart]
        const findIndex = newCart.findIndex((productCart) => {
            return productCart.id === food.id;
        })
        if (findIndex === -1) {
            newCart.push({ ...food, quantity })
        } else {
            alert("item ja exite no carrinho")
        }
        setCart(newCart)
        exitQuantify()
    }
    console.log(cart)

    const onChange = (e) => {
        setAmount(e.target.value)
    }

    const listOfCategories = foods.restaurant && foods.restaurant.products.map((food) => {
        return food.category
    })

    const onlyCategories = [...new Set(listOfCategories)]

    const divisionCategories = onlyCategories && onlyCategories.map((type) => {
        return (
            <div key={type}>
                <TitleCategory>{type}</TitleCategory>
                {foods.restaurant && foods.restaurant.products.filter((cat) => {
                    return cat.category === type
                })
                    .map((food) => {

                        return (
                            <DivContainer>

                                <DivInfo>

                                    <div>
                                        <ImgStyle src={food.photoUrl} alt={food.name} />
                                    </div>

                                    <ConainerBottom>

                                        <div>
                                            <NameFood>{food.name}</NameFood>
                                            <Description>{food.description}</Description>
                                        </div>

                                        
                                        <div id="popup" className="popup">
                                        <ContainerPopup>
                                            <TitlePopup>Selecione a quantidade desejada</TitlePopup>
                                            <StyleSelect onChange={onChange}>
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
                                            </StyleSelect>
                                            <DivButtonPopup>
                                            <ButtonPopup onClick={() => addToCart()}>adicionar ao carrinho</ButtonPopup>
                                            </DivButtonPopup>
                                            </ContainerPopup>
                                        </div>

                                        <div>
                                            <div>
                                                <PriceFood>R${food.price}</PriceFood>
                                            </div>
                                            <Button onClick={()=> openQuantity(food)} >adicionar</Button>
                                        </div>

                                    </ConainerBottom>

                                </DivInfo>

                            </DivContainer>
                        )
                    })}
            </div>
        )
    })

    return (
        <div>
            {loading ? <LoadingStyle></LoadingStyle> : divisionCategories}
        </div >
    )
}


export default CardFood