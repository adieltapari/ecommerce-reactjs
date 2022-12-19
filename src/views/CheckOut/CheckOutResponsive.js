import React, { useState, useContext } from "react";
import "./CheckOutResponsive.css";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Input, Button } from "semantic-ui-react";
//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Services/getFirestore";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import Spinner from "../../components/Spinner/Spinner";

const CheckOutResponsive = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
  };
  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseID, setPurchaseID] = useState("");
  const [formData, setFormData] = useState(initialState);

  const { items, clearItems, totalPrice } = useContext(CartContext);
  const tPrice = totalPrice();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const createOrder = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const docRef = await addDoc(collection(db, "orders"), {
      formData,
      items,
      tPrice,
    });

    setPurchaseID(docRef);
    setTimeout(() => {
      setIsLoading(false);
      setFormData(initialState);
      clearItems();
    }, 1000);
  };

  return (
    <div>
      {items.length !== 0 && (
        <div className="containerHeaderCheckout">
          <p>Gracias por confiar en nosotros </p>
          <h3>COMPLETA LA COMPRA</h3>
        </div>
      )}

      {items.length !== 0 && (
        <div className="containerProductPage-checkout">
          <div className="left-column-checkout">
            <h2 style={{ textAlign: "start" }}> Tu pedido</h2>
            <div className="gridTable">
              <div></div>
              <div className="prodContent">Producto</div>
              <div class="py-2 text-uppercase">Cantidad</div>
              <div class="py-2 text-uppercase">Importe</div>
            </div>
            <div className="containertbody">
              {items.map((item) => (
                <div className="gridTableItem">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="prodContent">{item.model}</div>
                  <div>{item.qty}</div>
                  <div>{formatPeso.format(item.price * item.qty)}</div>
                </div>
              ))}
            </div>
            <div>
              <table className="list2">
                <thead>
                  <tr className="table-primary ">
                    <th scope="col" className="border-0 bg-light">
                      <div class="p-2 px-3 text-uppercase"></div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div class="py-2 text-uppercase"></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <div className="prueba">
                      <td>
                        <h4>Subtotal </h4>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        <h4>{formatPeso.format(totalPrice())}</h4>
                      </td>
                    </div>
                  </tr>
                  <tr>
                    <div className="prueba">
                      <td>
                        <h4>Envio </h4>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        <h4>$550</h4>
                      </td>
                    </div>
                  </tr>
                  <tr>
                    <div className="">
                      <td>
                        <h4>Total </h4>
                      </td>
                      <td style={{ textAlign: "end" }}>
                        <h4>{formatPeso.format(totalPrice() + 550)}</h4>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="right-column-checkout">
            <h2>Datos de envío</h2>
            <form className="form-container-checkout" onSubmit={createOrder}>
              <div>
                <Input
                  className="form-input"
                  placeholder="Nombre"
                  name="name"
                  required="true"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  className="form-input"
                  placeholder="Telefono"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required="true"
                />
                <Input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  required="true"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Button className="form-btn" primary>
                  REALIZAR PEDIDO
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        purchaseID.id && (
          <div className="ContainerSection">
            <h1>!Muchas Gracias por su Compra¡</h1>
            <h4>Numero de pedido:</h4>
            <MessageSuccess msg={purchaseID} />
          </div>
        )
      )}
    </div>
  );
};

export default CheckOutResponsive;
