import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import data from './data'

const ItemList = () => {

  return (
    <>
      {
        data.product.map((item, index) =>{
            return(
              <ItemDetail 
                price ={item.price}
                stock={item.stock}
                img={item.img} 
                key={index}
              />
            )
        })}
    </>
  );
}

export default ItemList;