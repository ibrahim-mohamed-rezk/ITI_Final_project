import React from "react";
import "./home.css";
import { furnitureProducts } from "../../data/productsData";
import { cardData } from "../../data/cartData";
import { Link, useNavigate } from "react-router-dom";
import p9 from "../../images/p9.png";
import p10 from "../../images/p10.png";
import p11 from "../../images/p11.png";
import p12 from "../../images/p12.png";
import g1 from "../../images/g1.png";
import g2 from "../../images/g2.png";
import g3 from "../../images/g3.png";
import { UseCheckLogin } from "../../hooks/UseCheckLogin";

const Home = ({ setCartNum }) => {
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
      <div className="home">
        <div className="main-text">
          <h1>
            Discover The Best <br />
            Furniture For You
          </h1>
          <p>
            We provide online solutions for all your interior décor
            requirements. Every piece of furniture is designed in-house through
            our manufacturing unit in Egypt. You can save up to 30% on all
            furniture deals as there are no intermediary entities involved..
          </p>
          <button id="btn">View More</button>
        </div>
      </div>

      <section className="offers">
        <div className="offer-content">
          <div className="row">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Free Delivery</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-headset"></i>
            <h3>Support 24/7</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-rotate-left"></i>
            <h3>30 Day Return</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Secure Shopping</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      <section className="product" id="product">
        <div className="main-txt">
          <h3>Best Products</h3>
        </div>
        <div className="card-content">
          {furnitureProducts.map((product, index) => {
            if (index >= 8) {
              return;
            }
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
                  style={{ zIndex: 1478, position: "relative" }}
                  onClick={() => addToCart(product)}
                  className="btn cartBtn"
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div className="banner">
        <div className="banner-content">
          <h5>Get Discount Up To 50%</h5>
          <h3>Best Deal For Weak</h3>
          <p>
            Get up to 50% off this weak and get offer <br />
            Don't miss
          </p>
          <button>
            <a href="#products">Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
