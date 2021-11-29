import React from 'react';
import Item from '../Item/Item';
import data from './data'

const ItemList = () => {

  return (
    <>
      {
        data.product.map((items, index) =>{
            return(
              <Item 
                price ={items.price}
                stock={items.stock}
                img={items.img} 
                key={index}
              />
            )
        })}
    </>
  );
}

export default ItemList;