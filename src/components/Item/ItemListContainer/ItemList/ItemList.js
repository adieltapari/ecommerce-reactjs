import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ items }) => {
  return (
    <div className="row" style={{ margin: 40 }}>
      {
        items.map((item) => (
          <div className="column" key={item.id}>
            <Item item={item} />
          </div>
        ))
      }
    </div>
  )
}

export default ItemList;