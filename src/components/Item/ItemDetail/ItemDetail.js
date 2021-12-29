import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Card, Button, Image } from "semantic-ui-react";
import { CartContext } from '../../../Context/CartContext/CartContext'
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext)
    const [changeButton, setChangeButton] = useState(false);

    const onAdd = (quantity) => {
        addToCart(item, quantity)
        setChangeButton(true)
    };

    return (
        // <Card style={{ margin: 20, display: "inline-block" }}>
        //     <Image src={item.img} wrapped ui={false} />
        //     <Card.Content extra>
        //         <Card.Header>{item.model}</Card.Header>
        //         <Card.Meta>
        //             <span className='date'>Stock: {item.stock}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             <span >Precio: ${item.price}</span>
        //         </Card.Description>
        //         <Card.Description>
        //             {item.description}
        //         </Card.Description>
        //         {!changeButton && (
        //             <ItemCount item={item} stock={20} initial={0} onAdd={onAdd} />
        //         )
        //         }
        //         <Card.Content>
        //             {changeButton && (
        //                 <Link to="/cart">
        //                     <Button className="ui bottom blue">
        //                         Finalizar Compra
        //                     </Button>
        //                 </Link>
        //             )}
        //             {changeButton && (
        //                 <Link to="/category/all">
        //                     <Button className="ui bottom blue">
        //                         Seguir Comprando
        //                     </Button>
        //                 </Link>
        //             )}
        //         </Card.Content>
        //     </Card.Content>
        // </Card>
        <div className='containerProductPage'>

            <div className='left-column'>
                <img src={item.img} alt='imagen producto' />
            </div>

            <div className='right-column'>
                <div className='product-description'>
                    <span>{item.category}</span>
                    <h1>{item.model}</h1>
                    <p>{item.description}</p>

                </div>
                <div class="product-price">

                    <span>${item.price}</span>

                    {!changeButton && (
                        <ItemCount item={item} stock={item.stock} initial={0} onAdd={onAdd} />
                    )}
                    {changeButton && (
                        <Link to="/cart">
                            <Button className="ui bottom blue">
                                Finalizar Compra
                            </Button>
                        </Link>
                    )}
                    {changeButton && (
                        <Link to="/category/all">
                            <Button className="ui bottom blue">
                                Seguir Comprando
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

        </div>



    )
}

export default ItemDetail
