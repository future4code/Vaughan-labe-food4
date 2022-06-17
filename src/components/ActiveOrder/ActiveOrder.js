import React from 'react'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../hooks/useRequestData'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { ContainerOrder, TitleOrder, PriceOrder } from './styled'

const ActiveOrder = () => {
    const [order] = useRequestData([], `${BASE_URL}/active-order`)
    
    return (
        <>
            {order?.order === undefined || order?.order === null? "" :
                <ContainerOrder id="ar" className='ar'>
                    <div className='icon'>
                        <AccessTimeIcon color='white' fontSize='large' />
                    </div>

                    <div>
                        <TitleOrder>Pedido em andamento</TitleOrder>
                        <h4>{order?.order && order?.order.restaurantName}</h4>
                        <PriceOrder>SUBTOTAL R$ {order?.order && order?.order.totalPrice}</PriceOrder>
                    </div>
                </ContainerOrder>}

        </>
    );
}

export default ActiveOrder