import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <section className="form-container">

<form action="" method="post" enctype="multipart/form-data">
   <h3>login now</h3>
   <p>your email <span>*</span></p>
   <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box"/>
   <p>your password <span>*</span></p>
   <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box"/>
   <input type="submit" value="login new" name="submit" className="btn" />
</form>

</section>
<Footer />
    </div>
  )
}

export default Login