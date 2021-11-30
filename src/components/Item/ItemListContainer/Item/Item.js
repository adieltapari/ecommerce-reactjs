import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({item}) => (
	<>
    <NavLink to={`/item/${item.id}`}> 
        <div className="ui cards">
            <div className="card">
                <div className="image">
                    <img src={item.thumbnail} alt="imagen producto"/>
                </div>
                <div className="content">
                    <div className="header">${item.price}</div>
                    <div className="meta">{item.category_id}</div>
                    <div className="descripcion">{item.title}</div>
                </div>
            </div>
        </div> 
    </NavLink>           
    </>
);

export default Item;