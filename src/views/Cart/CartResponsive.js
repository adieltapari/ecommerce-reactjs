import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartResponsive.css";
import { Link } from "react-router-dom";

const CartResponsive = () => {
  const formatPeso = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  const { items, removeItem, clearItems, totalPrice } = useContext(CartContext);

  return (
    <>
      {items.length === 0 && (
        <div>
          <h4 style={{ margin: 40 }}> carrito vacio</h4>
          <Link to="/category/all">
            <div className="container-cart-btn">
              <p className="cart-btn">Seguir Comprando</p>
            </div>
          </Link>
        </div>
      )}
      {items.length !== 0 && (
        <>
          <div className="CartContent">
            <div className="rowsText">
              <div className="imgContent"> </div>
              <div className="prodContent">
                <h2>Producto</h2>
              </div>
              <div className="cantContent">
                <h2>Cantidad</h2>
              </div>
              <div className="preContent">
                <h2>Precio Unitario</h2>
              </div>
              <div className="impContent">
                <h2>Importe</h2>
              </div>
              <div className="clearContent">
                {items.length !== 0 && (
                  <div className="EmptyCart">
                    <div
                      className="ui button "
                      style={{ margin: "10" }}
                      onClick={() => clearItems()}
                    >
                      <i className="cart icon"></i>
                      vaciar carrito
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="rowsItem">
              {items.map((item) => (
                <>
                  <img className="imgContent" src={item.img} alt="" />
                  <div className="prodContent">{item.model}</div>
                  <div>{item.qty}</div>
                  <div>{formatPeso.format(item.price)}</div>
                  <div>{formatPeso.format(item.price * item.qty)}</div>
                  <div>
                    <p
                      className="delet-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      eliminar
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="containerTablePrice">
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
            <div className="containerPurchase">
              <Link to="/checkout">
                <div className="container-cart-btn">
                  <p className="cartpage-btn">COMPRAR</p>
                </div>
              </Link>
            </div>
          </div>
          <Link to="/category/all">
            <div className="container-cart-btn">
              <p className="cart-btn">Seguir Comprando</p>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default CartResponsive;
