import React from 'react';
import { NavLink } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => (
    <NavLink to={`/item/${item.id}`}>
        {
            <div className="cardProduct">
                <img src={item.img} alt="Avatar" style={{ height: 175, padding: 10 }} />
                <div className="containerProduct">
                    <h3><b>{item.model}</b></h3>
                    <h4 className='price'>${item.price}</h4>
                    {item.stock === 0 ? (
                        <p style={{ color: "red" }}>Sin stock</p>
                    ) : (
                        <p >Unidades Disponibles: {item.stock}</p>
                    )}
                </div>
            </div>
        }
    </NavLink>
);

export default Item;