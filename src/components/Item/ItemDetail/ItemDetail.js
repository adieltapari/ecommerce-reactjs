import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'
import { CartsContext } from '../../../Context/CartContext/CartsContext'

const ItemDetail = ({ item }) => {


    const { addItem } = useContext(CartsContext)


    return (
        <div className="ContainerItemDetail" key={item.id}>
            <div className="flexbox-container">
                <div className="image ">
                    <img src={item.thumbnail} alt="imagen" width={150} />
                </div>
                <div className="card">
                    <h2>${item.price}</h2>
                    <h3>{item.title}</h3>
                    <div>
                        <ItemCount item={item} stock={20} initial={0} addItem={addItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
