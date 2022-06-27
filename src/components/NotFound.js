import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section>
    <div class="main-div">
         <div class="photo">
              <img src="image/404.png"/>
         </div>
         <div class="opps">
              <h1>Opps!</h1>
         </div>
         <div class="line">
              <p>The page dosen't exist</p>
         </div>
         <div class="line2">
              <p>Many desktop publishing packages and web page editors now use Lorem <br/> Ipsum as their default
                   model text,</p>
         </div>
         <div class="btn222">
              <Link to={'/'}><button type="submit" class="btn-style222 btn-primary">Go back to Homepage</button></Link>
         </div>
    </div>
</section>
  )
}

export default NotFound