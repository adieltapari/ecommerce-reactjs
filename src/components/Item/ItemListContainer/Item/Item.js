import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => (
    <>
        <NavLink to={`/item/${item.id}`}>
            <div className="ui cards" style={{ margin: 20 }}>
                <div className="card">
                    <div className="image">
                        <img src={item.img} alt="imagen producto" />
                    </div>
                    <div className="content">
                        <div className="header">${item.price}</div>
                        <div className="meta">{item.description}</div>
                        <div className="descripcion">Stock: {item.stock}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    </>
);

export default Item;