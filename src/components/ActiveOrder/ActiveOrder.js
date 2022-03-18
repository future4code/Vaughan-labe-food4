import * as React from 'react';
import { BASE_URL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ContainerOrder } from './styled';

const ActiveOrder = () => {
    const [order] = useRequestData([], `${BASE_URL}/active-order`)
    console.log(order)
    return (
        <>
            {order?.order === undefined || order?.order === null? "" :
                <ContainerOrder id="ar" className='ar'>
                    <div className='icon'>
                        <AccessTimeIcon fontSize='large' />
                    </div>

                    <div>
                        <h3>Pedido em andamento</h3>
                        <h4>{order?.order && order?.order.restaurantName}</h4>
                        <h4>SUBTOTAL R$ {order?.order && order?.order.totalPrice}</h4>
                    </div>
                </ContainerOrder>}

        </>
    );
}

export default ActiveOrder