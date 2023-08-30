import React from "react";
import "./products.css";
import { furnitureProducts } from "../../data/productsData";
import { cardData } from "../../data/cartData";
import { Link, useNavigate } from "react-router-dom";
import { UseCheckLogin } from "../../hooks/UseCheckLogin";
const Products = ({ setCartNum }) => {
  const navigate = useNavigate()
  const addToCart = (product) => {
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
    <div>
      <div className="card-content ">
        {furnitureProducts.map((product, index) => {
          return (
            <div key={index} className="row card">
              <Link to={`/products/${product._id}`}>
                <img className="card-img-top" src={product.image} />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text"> {product.description}</p>
                  <h5>Price {product.price} LE</h5>
                </div>
              </Link>
              <button
                style={{ zIndex: 1478 }}
                onClick={() => addToCart(product)}
                className="btn cartBtn"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
