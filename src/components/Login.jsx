import React from 'react'
import Footer from './Footer'
import Register from './Register'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const register = () =>{
    navigate("/register")
  }
  const Home = () =>{
    navigate("/home")
  }
  return (
    <div>
        
        <section className="form-container align-center">

<form action="" method="post" enctype="multipart/form-data">
   <h3>login now</h3>
   <p>your email <span>*</span></p>
   <input type="email" name="email" placeholder="enter your email" required maxLength="50" className="box"/>
   <p>your password <span>*</span></p>
   <input type="password" name="pass" placeholder="enter your password" required maxLength="20" className="box"/>
   <input type="submit" value="login new" name="submit" className="btn" onClick={Home}/>
   <input type="submit" value="Register" name="submit" className="btn" onClick={register}/>
</form>

</section>
<Footer />
    </div>
  )
}

export default Login