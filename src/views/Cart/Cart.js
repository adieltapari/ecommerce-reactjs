import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Input, Button } from 'semantic-ui-react';
import './Cart.css';
import { Link } from "react-router-dom";

//Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/getFirestore';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Spinner from '../../components/Spinner/Spinner';

const Cart = () => {
    const initialState = {
        name: '',
        phone: '',
        email: ''
    }
    const [formData, setFormData] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    });

    const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);
    // console.log(items);      

    console.log(totalPrice);
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createOrder = async (e) => {
        setIsLoading(true);

        e.preventDefault();
        // const order = {};

        // order.date = db.firestore.Timestamp.fromDate(new Date());
        // order.buyer = formData;
        // order.item = items.map((items) => {
        //     const id = items.id
        //     const name = items.name
        //     const price = items.price
        //     return { id, name, price }
        // })

        const docRef = await addDoc(collection(db, 'orders'), {
            formData, items, totalPrice
        });

        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false);
            setFormData(initialState);
            clearItems();
        }, 1000);
    }
    return (
        <>
            <div >
                {items.length === 0 &&
                    <div>
                        <h4 style={{ margin: 40 }}> carrito vacio</h4>
                        <Link to="/category/all">
                            <Button className="ui bottom blue">
                                Seguir Comprando
                            </Button>
                        </Link>
                    </div>
                }
                {
                    items.map((item) => (
                        <div className="ContainerCart" key={item.id}>
                            <div className='ContainerCartItem'>
                                <div className='ContainerName'>
                                    <h3 >Cantidad: {item.qty}  </h3>
                                    <h3>Producto:{item.model}</h3>
                                    <h3>Precio Unitario: {formatPeso.format(item.price)}</h3>
                                    <h3>Importe:{formatPeso.format(item.price * item.qty)}</h3>
                                </div>
                                <div className='ContainerDelete'>
                                    <div className="ui button red" style={{ margin: "10" }} onClick={() => removeItem(item.id)}>
                                        <i className="delete icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div >
            {items.length !== 0 &&
                <div className='EmptyCart'>
                    <div className="ui button " style={{ margin: "10" }} onClick={() => clearItems()}>
                        <i className="cart icon"></i>
                        vaciar carrito
                    </div>
                    <h2>Total: {formatPeso.format(totalPrice())}</h2>

                </div>
            }
            {items.length !== 0 &&
                <div>
                    <form className='form-container' onSubmit={createOrder}>
                        <Input
                            className='form-input'
                            placeholder='Nombre'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            className='form-input'
                            placeholder='Telefono'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <Input
                            className='form-input'
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Button className='form-btn' primary>
                            ENVIAR
                        </Button>
                    </form>
                </div>
            }
            {isLoading ? (
                <Spinner />
            ) : (
                purchaseID.id && (
                    <div>
                        <MessageSuccess msg={purchaseID} />
                    </div>
                )
            )}

        </>
    )
}

export default Cart
