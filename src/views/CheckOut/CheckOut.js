import React, { useState, useContext } from 'react';
import './CheckOut.css'
import { CartContext } from '../../Context/CartContext/CartContext'
import { Input, Button } from 'semantic-ui-react';
//Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/getFirestore';

import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Spinner from '../../components/Spinner/Spinner';

const CheckOut = () => {
    const initialState = {
        name: '',
        phone: '',
        email: ''
    }
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [purchaseID, setPurchaseID] = useState('');
    const [formData, setFormData] = useState(initialState);

    const { items, clearItems, totalPrice } = useContext(CartContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const createOrder = async (e) => {
        setIsLoading(true);

        e.preventDefault();
        const docRef = await addDoc(collection(db, 'orders'), {
            formData, items
        });

        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false);
            setFormData(initialState);
            clearItems();
        }, 1000);
    }

    return (
        <div >
            {
                items.length !== 0 &&
                <div className='containerProductPage-checkout'>
                    <div className='left-column-checkout'>
                        <form className='form-container-checkout' onSubmit={createOrder}>
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
                    <div className='right-column-checkout'>
                        <table className="table">
                            <thead>
                                <tr className='table-primary'>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="p-2 px-3 text-uppercase"></div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Producto</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Cantidad</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Importe</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {items.map((item) => (
                                    <tr>
                                        <td> <img src={item.img} alt='' style={{ width: 80 }} /></td>
                                        <td>{item.model}</td>
                                        <td>{item.qty}</td>
                                        <td>{formatPeso.format(item.price * item.qty)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='containerPrice'>
                            <h2 className='priceProduct '>Total: {formatPeso.format(totalPrice())}</h2>
                        </div>
                    </div>

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
        </div>
    )
}

export default CheckOut
