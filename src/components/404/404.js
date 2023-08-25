import React from 'react'
import "./404.css"

const NotFOund = () => {
  return (
    <div>
      <div class="home-return">
        <div class="position">
            <pre><a href="#"><span>Home  /  </span></a><a href="#">404Error</a></pre>
        </div>
        <div class="info">
            <h1 class="main-title">404 Not Found</h1>
            <p>Your visited page not found. You may be go home page</p>
            <button class="home-back">Back to home page</button>
        </div>
      </div>
    </div>
  )
}

export default NotFOund