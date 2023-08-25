import React from 'react'
import "./cart.css"

const Cart = () => {
  return (
    <div>
      <section id="cart" class="section-p1">

      <div class="position">
          <pre><a href="#"><span>Home  /  </span></a><a href="#">Cart</a></pre>
      </div>

      <table with="100%">
          <thead>
              <tr>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><img src="images/p8.png" alt=""/></td>
                  <td>78$</td>
                  <td class="input"><input type="number" value="1"/></td>
                  <td class="subtot">78$</td>
              </tr>
              <tr>
                  <td><img src="images/p9.png" alt=""/></td>
                  <td>78$</td>
                  <td class="input"><input type="number" value="1"/></td>
                  <td class="subtot">78$</td>
              </tr>
              <tr>
                  <td><img src="images/p10.png" alt=""/></td>
                  <td>78$</td>
                  <td class="input"><input type="number" value="1"/></td>
                  <td class="subtot">78$</td>
              </tr>
          </tbody>
      </table>

      <div class="buttons">
          <button class="return-shop">Return To Shop</button>
          <button class="return-shop">Update Cart</button>
      </div>
      </section>

      <div id="cart-add" class="section-p1">
      <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
              <input type="text" placeholder="Enter Your Coupon"/>
              <button class="normal">Apply Coupon</button>
          </div>
      </div>
      <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
              <tr>
                  <td>Cart Subtotal</td>
                  <td class="total coupon">$445</td>
              </tr>
              <tr>
                  <td>Shipping</td>
                  <td>Free</td>
              </tr>
              <tr>
                  <td>Total</td>
                  <td class="total">$445</td>
              </tr>
          </table>
          <button class="normal">Proceed to checkout</button>
      </div>
      </div>
    </div>
  )
}

export default Cart