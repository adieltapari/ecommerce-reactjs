import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';

import React from 'react'

const CartWidget = () => {
    return (
        <div className='containerCartWidget'>
            <ul>
                <li>
                    <Icon name='cart arrow down' size='large' />
                </li>
                <li>
                    <p> 0 - $0,00</p>
                </li>
            </ul>
        </div>
    )
}

export default CartWidget
