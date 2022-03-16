import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import GlobalStateContext from '../../global/GlobalStateContext'
import { DivContainer, PriceFood, NameFood, Description, ConainerBottom, DivInfo, ImgStyle, Button, LoadingStyle, TitleCategory } from './styled'

const CardFood = () => {
    const params = useParams()
    const { loading } = useContext(GlobalStateContext)
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

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
                                        <div>
                                            <div>
                                                <PriceFood>R${food.price}</PriceFood>
                                            </div>
                                            <Button>adicionar</Button>
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