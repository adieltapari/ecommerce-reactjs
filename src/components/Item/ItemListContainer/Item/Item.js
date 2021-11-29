import React from 'react';

const Item = ({item}) => (
	<>
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
        </>
);

export default Item;