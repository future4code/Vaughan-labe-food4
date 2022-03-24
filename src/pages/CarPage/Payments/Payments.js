import { FormControlLabel} from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { confirmPurchase } from "../../../services/Requests"
import { ContainerForm, ButtonStyle, FormPayment, PaymentTitle, ButtonS} from "./styled"
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

const Payments = ({ cart, resId, }) => {
    const navigate = useNavigate()
    const [money, setMoney] = useState(false)
    const [creditCard, setCreditCard] = useState(false)
    const [payments, setPayments] = useState([])

    const onClickMoney = () => {
        setCreditCard(false)
        if(!money){
          setMoney(true)
          setPayments("money")
        }
    }
    const onClickCredit = () => {
        setMoney(false)
        if(!creditCard ){
            setCreditCard(true)
            setPayments("creditcard")
          }
    }
 
    const body = {
        products: [{
            id: cart[0]?.id,
            quantity: cart[0]?.quantity
        }],
        paymentMethod: payments
    }

    const confirmBuy = () => {
        confirmPurchase(resId, body, navigate)
    }

    return (
        <ContainerForm>
            <PaymentTitle >Forma de pagamento</PaymentTitle>

            <FormPayment color="color2" className="payments">
               
                 <FormControlLabel 
                    control={money? <RadioButtonCheckedIcon />:<PanoramaFishEyeIcon />}
                    onClick={onClickMoney}
                    value={money}
                    label="Dinheiro"
                /> 
                <FormControlLabel
                    control={creditCard? <RadioButtonCheckedIcon/> : <PanoramaFishEyeIcon />}
                    onClick={onClickCredit}
                    value={creditCard}
                    label="Cartão de Crédito"
                />
            </FormPayment>

            <div className="button">
                {cart.length === 0 ?
                    <ButtonS marginLeft='90' variant="contained" disabled >Confirmar</ButtonS>
                    :
                    <ButtonStyle variant="contained" color="primary" onClick={()=> confirmBuy()}>Confirmar</ButtonStyle>
                }
            </div>

        </ContainerForm>
    )
}

export default Payments;