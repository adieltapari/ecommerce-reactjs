import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <>
      <div className="ui grid">
        {
          items.map((item) =>(
            <div className="four wide column">
              <Item item={item}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ItemList;