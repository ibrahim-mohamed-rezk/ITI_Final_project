import React from "react";
import "./product.css";
import { useLocation, useNavigate } from "react-router-dom";
import { furnitureProducts } from "../../../data/productsData";
import { cardData } from "../../../data/cartData";
import { UseCheckLogin } from "../../../hooks/UseCheckLogin";

const Product = ({ setCartNum }) => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];
  const product = furnitureProducts.find((pro) => {
    return pro._id == itemId;
  });
  const navigate = useNavigate();
  const handelclick = () => {
    const isLogin = UseCheckLogin();
    if (!isLogin) {
      navigate("/login");
      return;
    }
    const isexsist = cardData.find((pro) => {
      return pro._id === product._id;
    });

    if (isexsist) {
      const index = cardData.indexOf(isexsist);
      cardData[index].quantity += 1;
    } else {
      cardData.push({
        ...product,
        quantity: 1,
      });
    }
    setCartNum(cardData.length);
  };
  return (
    <div className="container">
      <br />
      <div className="Details">
        <div className="second-column">
          <img src={product.image} />
        </div>
        <div className="third-column">
          <h1>{product.name}</h1>
          <div className="stars">
            <div>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i
                className="fa-solid fa-star"
                style={{ color: "rgb(253, 172, 66)" }}
              ></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>(150 Reviews)</p>
            <p>In Stock</p>
          </div>
          <h2 id="prise">${product.price}</h2>
          <p id="info">{product.description}</p>
          <div className="buy-buttons">
            <button onClick={handelclick} id="buy">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
