import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <Header />
        <section className="contact">

       <div className="row">

   <div className="image">
      <img src="images/contact-img.svg" alt="" />
   </div>

   <form action="" method="post">
      <h3>get in touch</h3>
      <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
      <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
      <input type="number" placeholder="enter your number" name="number" required maxLength="50" className="box" />
      <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" className="inline-btn" name="submit" />
   </form>

</div>

<div className="box-container">

   <div className="box">
      <i className="fas fa-phone"></i>
      <h3>phone number</h3>
      <Link href="tel:1234567890">123-456-7890</Link>
      <Link href="tel:1112223333">111-222-3333</Link>
   </div>
   
   <div className="box">
      <i className="fas fa-envelope"></i>
      <h3>email address</h3>
      <Link href="mailto:shaikhanas@gmail.com">shaikhanas@gmail.come</Link>
      <Link href="mailto:anasbhai@gmail.com">anasbhai@gmail.come</Link>
   </div>

   <div className="box">
      <i className="fas fa-map-marker-alt"></i>
      <h3>office address</h3>
      <Link href="#">flat no. 1, a-1 building, jogeshwari, mumbai, india - 400104</Link>
   </div>

</div>

</section>
<Footer />
    </div>
  )
}

export default Contact