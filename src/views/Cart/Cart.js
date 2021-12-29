import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import './Cart.css';
import { Link } from "react-router-dom";

//Firebase
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '../../Services/getFirestore';
// import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
// import Spinner from '../../components/Spinner/Spinner';

const Cart = () => {
    // const initialState = {
    //     name: '',
    //     phone: '',
    //     email: ''
    // }
    // const [formData, setFormData] = useState(initialState);
    // const [purchaseID, setPurchaseID] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    });

    const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);
    // console.log(items);      

    console.log(totalPrice);


    // const createOrder = async (e) => {
    //     setIsLoading(true);

    //     e.preventDefault();
    // const order = {};

    // order.date = db.firestore.Timestamp.fromDate(new Date());
    // order.buyer = formData;
    // order.item = items.map((items) => {
    //     const id = items.id
    //     const name = items.name
    //     const price = items.price
    //     return { id, name, price }
    // })

    //     const docRef = await addDoc(collection(db, 'orders'), {
    //         formData, items
    //     });

    //     setPurchaseID(docRef);
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         setFormData(initialState);
    //         clearItems();
    //     }, 1000);
    // }
    return (
        <>
            <div >
                {items.length === 0 &&
                    <div>
                        <h4 style={{ margin: 40 }}> carrito vacio</h4>
                        <Link to="/category/all">
                            <div className='container-cart-btn'>
                                <p className='cart-btn'>Seguir Comprando</p>
                            </div>
                        </Link>
                    </div>
                }



            </div >
            {items.length !== 0 &&
                <>
                    <div className="ContainerCart">
                        <table className="table table-borderless table-dark">
                            <thead>
                                <tr >
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
                                        <div class="py-2 text-uppercase">Precio Unitario</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Importe</div>
                                    </th>
                                    <th scope="col" className="border-0 bg-light">
                                        <div class="py-2 text-uppercase"></div>
                                    </th>
                                    <th scope="col" className="border-0 bg-ligh ">
                                        <div class="py-2 text-uppercase">
                                            {items.length !== 0 &&
                                                <div className='EmptyCart'>
                                                    <div className="ui button " style={{ margin: "10" }} onClick={() => clearItems()}>
                                                        <i className="cart icon"></i>
                                                        vaciar carrito
                                                    </div>

                                                </div>
                                            }
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr>
                                        <td> <img src={item.img} alt='' style={{ width: 200 }} /></td>
                                        <td>{item.model}</td>
                                        <td>{item.qty}</td>
                                        <td>{formatPeso.format(item.price)}</td>
                                        <td>{formatPeso.format(item.price * item.qty)}</td>
                                        <td><p className='delet-btn' onClick={() => removeItem(item.id)}>eliminar</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h2 className='priceProduct '>Total: {formatPeso.format(totalPrice())}</h2>
                    </div>
                </>
            }




        </>
    )
}

export default Cart
