import React, { useState } from 'react'
import Footer from './Footer'
import Register from './Register'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [input,setInput] = new useState(
    {   
        "emailid":"",
        "password":""
    }   
)
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readvalues=()=>{
  console.log(input)
  axios.post("http://localhost:3001/api/eduapp/signin",input).then(
      (Response)=>{
          console.log(Response.data.status)
          if (Response.data.status=="success") {
              alert("Login success")
              sessionStorage.setItem("userid",Response.data.userdata._id)
              console.log(Response.data.userdata._id)
             navigate("/home")
          } else if (Response.data.status=="invalid email")
          {
              alert("Invalid Email")
          }
          else{
              alert("incorect password")
          }
  
})
  }
  const register=()=>{
    navigate("/register")
  }
  return (
    <div>
        
        <section className="form-container align-center">

<form action="" method="" enctype="multipart/form-data">
   <h3>login now</h3>
   <p>your email <span>*</span></p>
   <input type="email" name='emailid' value={input.emailid} onChange={inputHandler} placeholder="enter your email" required maxLength="50" className="box" />
   <p>your password <span>*</span></p>
   <input type="password" name='password' value={input.password} onChange={inputHandler} placeholder="enter your password" required maxLength="20" className="box"/>
   <input type="button" value="login new" name="submit" className="btn" onClick={readvalues}/>
   <input type="submit" value="Register" name="submit" className="btn" onClick={register}/>
</form>

</section>
<Footer />
    </div>
  )
}

export default Login