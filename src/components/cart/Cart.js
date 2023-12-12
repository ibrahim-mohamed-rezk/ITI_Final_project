import React, { useEffect, useState } from "react";
import "./cart.css";
import { cardData } from "../../data/cartData";

const Cart = ({ setCartNum }) => {
  const [data, setData] = useState([...cardData]);

  const [total, setTotal] = useState(0);

  const calc = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].price * data[i].quantity;
    }
    setTotal(sum);
  };

  useEffect(() => {
    calc();
  }, [data]);

  const handelChange = (event, index) => {
    const copy = data;
    copy[index].quantity = event.target.value;
    setData(copy);
    calc();
  };

  const handelDelete = (index) => {
    cardData.splice(index, 1);
    setData([...cardData]);
    setCartNum(cardData.length);
  };

  return (
    <div>
      <section id="cart" className="section-p1">
        <table with="100%">
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <tr>
                <td style={{ color: "#48957C", fontSize: "16px" }}>
                  <p>No items to show</p>
                </td>
              </tr>
            ) : (
              data.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>
                      <img src={product.image} />
                    </td>
                    <td>{product.price}</td>
                    <td className="input">
                      <input
                        onChange={(event) => handelChange(event, index)}
                        min={1}
                        max={100}
                        type="number"
                        defaultValue={product.quantity}
                      />
                    </td>
                    <td>
                      <i
                        onClick={() => handelDelete(index)}
                        className="fa fa-trash text-danger"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>

      <div id="cart-add" className="section-p1">
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Total</td>
                <td className="total">${Math.round(total)}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => alert("this site developed for test only")}
            className="normal btn"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
