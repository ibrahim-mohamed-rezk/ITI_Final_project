import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div>
            <div className="home">
        <div className="main-text">
            <h1>Discover The Best <br/>Furniture For You</h1>
            <p>We provide online solutions for all your interior décor requirements. Every piece of furniture is
                designed in-house through our manufacturing unit in Egypt. You can save up to 30% on all furniture deals
                as there are no intermediary entities involved..</p>
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

    <section className="about" id="about">
        <div className="about-img">
            <img src="./images/about-img.png" alt=""/>
        </div>
        <div className="about-text">
            <h3>Furniture service About us</h3>
            <p>We provide online solutions for all your interior décor requirements. Every piece of furniture is
                designed in-house through our manufacturing unit in Egypt. You can save up to 30% on all furniture deals
                as there are no intermediary entities involved.</p>
            <h4>
                If you are looking for exclusive furniture pieces which reflect your personality and lend elegance to
                your home, then you are at the right place</h4>

            <button id="about-btn">Read More...</button>
        </div>

    </section>


    <section className="product" id="product">
        <div className="main-txt">
            <h3>Products</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <img src="./images/p1.png" alt=""/>
                <div className="card-body">
                    <h3>SOFA</h3>
                    <p> perfect example of Simple Design</p>
                    <h5>Price 10000 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p2.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>premium quality furniture</p>
                    <h5>Price 5000 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p3.png" alt=""/>
                <div className="card-body">
                    <h3>SOFA</h3>
                    <p>Brown Sofa Modern style.</p>
                    <h5>Price 7000 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p4.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Comfortable and modern design.</p>
                    <h5>Price 8800 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>

        <div className="card-content">
            <div className="row">
                <img src="./images/p5.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p> Emma Dining Chair</p>
                    <h5>Price 5000 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p6.png" alt=""/>
                <div className="card-body">
                    <h3>SOFA</h3>
                    <p>Comfortable and modern style</p>
                    <h5>Price 9900 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p7.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>Emily Dining Chair.</p>
                    <h5>Price 4500 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p8.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p> Arm Chair Collection.</p>
                    <h5>Price 5900 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>

    </section>

    <div className="banner">
        <div className="banner-content">
            <h5>Get Discount Up To 50%</h5>
            <h3>Best Deal For Weak</h3>
            <p>Get up to 50% off this weak and get offer <br/>Don't miss</p>
            <button><a href="#products">Order</a></button>
        </div>
    </div>

    <section className="product" id="products" style="margin-top: 50px;">
        <div className="main-txt">
            <h3>50% off products</h3>
        </div>
        <div className="card-content">
            <div className="row">
                <img src="./images/p9.png" alt=""/>
                <div className="card-body">
                    <h3>Sofa</h3>
                    <p>Comfortable and modern style</p>
                    <h5>Price 9900 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p10.png" alt=""/>
                <div className="card-body">
                    <h3>buffet</h3>
                    <p>classNameic and elegant</p>
                    <h5>Price 7900 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p11.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>new era of chairs.</p>
                    <h5>Price 5500 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
            <div className="row">
                <img src="./images/p12.png" alt=""/>
                <div className="card-body">
                    <h3>Chair</h3>
                    <p>premium quality furniture.</p>
                    <h5>Price 4500 LE</h5>
                    <button>Order Now</button>
                </div>
            </div>
        </div>

    </section>

    <div className="gallary">
        <h3>Our Gallary</h3>
        <div className="gallary-img">
            <div className="img1">
                <div className="image"><img src="./images/g1.png" alt=""/></div>
            </div>
            <div className="img1 double">
                <div className="image"><img src="./images/g2.png" alt=""/></div>
                <div className="image"><img src="./images/g3.png" alt=""/></div>
            </div>
        </div>
    </div>

    <section className="review" id="review">
        <div className="main-txt">
            <h3>Customers <span>Review</span></h3>
        </div>

        <div className="review-content">
            <div className="box">
                <div className="img">
                    <img src="./images/pic-1.png" alt=""/>
                </div>
                <h3>Ramy Ali</h3>
                <div className="star">
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i style="color: rgb(199, 199, 199);" className="fa-solid fa-star checked"></i>
                    <i style="color: rgb(199, 199, 199);" className="fa-solid fa-star checked"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

            </div>
            <div className="box">
                <div className="img">
                    <img src="./images/pic-2.png" alt=""/>
                </div>
                <h3>Menna Sharara</h3>
                <div className="star">
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i style="color: rgb(199, 199, 199);" className="fa-solid fa-star checked"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

            </div>
            <div className="box">
                <div className="img">
                    <img src="./images/pic-3.png" alt=""/>
                </div>
                <h3>mohamed Awny</h3>
                <div className="star">
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, adipisci.</p>

            </div>

        </div>

    </section>
    </div>
)
}

export default Home