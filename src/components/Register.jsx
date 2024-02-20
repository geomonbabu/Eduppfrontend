import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const login=()=>{
    navigate("/")
  }

  return (
    <div>
        <section className="form-container align-center">
<form action="" method="post" enctype="multipart/form-data">
   <h3>register now</h3>
   <p>your name <span>*</span></p>
   <input type="text" name="name" placeholder="enter your name" required  maxLength="50" className="box" />
   <p>your email <span>*</span></p>
   <input type="email" name="email" placeholder="enter your email" required  maxLength="50" className="box" />
   <p>your password <span>*</span></p>
   <input type="password" name="pass" placeholder="enter your password" required  maxLength="20" className="box" />
   <p>confirm password <span>*</span></p>
   <input type="password" name="c_pass" placeholder="confirm your password" required  maxLength="20" className="box" />
   <p>select profile <span>*</span></p>
   <input type="file" accept="image/*" required className="box" />
   <input type="submit" value="register new" name="submit" className="btn" onClick={login}/>
   <input type="submit" value="Login" name="submit" className="btn" onClick={login}/>
</form>

</section>
<Footer />
    </div>
  )
}

export default Register