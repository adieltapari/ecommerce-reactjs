import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <div className="ContainerItemDetail">
            <div className="ui cards ">
                <div className="card">
                    <div className="image">
                        <img src={item.thumbnail} alt={item.title} width="300" />
                    </div>
                    <h2>${item.price}</h2>
                    <h3>{item.title}</h3>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
