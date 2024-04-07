// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Footer from './Footer'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//  const [input,setInput] = new useState(
//   {   
//     "name":"",
//     "emailid":"",
//     "password":"",
//     "profileimage":null
// }   
//  )
//  const inputHandler=(event)=>{
//   setInput({...input,[event.target.name]:event.target.value})
//  }
//  const fileHandler = (event) => {
//   setInput({ ...input, profileimage: event.target.files[0] });
// }
//  const navigate = useNavigate()
//  const readvalues=()=>{
//   console.log(input)
//   axios.post("http://localhost:3001/api/eduapp/register",input,{
//     headers: {
//     'Content-Type': 'multipart/form-data'
// }}).then(
    
//       (Response)=>{
        
//           console.log(Response.data)
//           if (Response.data.status=="empty") {
//               alert("please fill up")
//            }
//           else if(Response.data.status=="emailexist"){
//             alert("email already exist.Please use another mail")

//           }
//                 else if (Response.data.status=="success") {
//               alert ("Submitted successfully")
//               setInput(
//                 {   
//                   "name":"",
//                   "emailid":"",
//                   "password":"",
//                   "profileimage":null
//               }  
//               )
//               navigate("/")
                  
//           } 
//           else {
//               alert("Soemthing went wrong");
//           }
//           })
//           headers: {
//             'Content-Type': 'multipart/form-data'
//         }
// }
// const login=()=>{
//   navigate("/")
// }
//   return (
//     <div>
//    <section className="form-container align-center">
//    <form action="" method="" enctype="multipart/form-data">
//    <h3>register now</h3>
//    <p>your name <span>*</span></p>
//    <input type="text" name='name' value={input.name} onChange={inputHandler} placeholder="enter your name" required  maxLength="50" className="box" />
//    <p>your email <span>*</span></p>
//    <input type="email" name="emailid" value={input.emailid} onChange={inputHandler} placeholder="enter your email" required  maxLength="50" className="box" />
//    <p>your password <span>*</span></p>
//    <input type="password" name="password"  value={input.password} onChange={inputHandler} placeholder="enter your password" required  maxLength="20" className="box" />
//    <p>select profile <span>*</span></p>
//    <input type="file"  name="profileimage" required className="box" onChange={fileHandler}/>
  
//    <input type="button" value="register new" className="btn" onClick={readvalues}/>
//    <input type="button" value="Login" name="submit" className="btn" onClick={login}/>
// </form>
// </section>
// <Footer />
//     </div>
//   )
// }

// export default Register

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        emailid: '',
        password: '',
        profileimage: null  // Change to null as we'll store file object
    });

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const fileHandler = (event) => {
        setInput({ ...input, profileimage: event.target.files[0] });
    }

    const navigate = useNavigate();

    const readvalues = () => {
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('emailid', input.emailid);
        formData.append('password', input.password);
        formData.append('profileimage', input.profileimage);

        axios.post("http://localhost:3001/api/eduapp/register", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((Response) => {
            console.log(Response.data);
            if (Response.data.status === "empty") {
                alert("please fill up");
            } else if (Response.data.status === "emailexist") {
                alert("email already exist. Please use another email.");
            } else if (Response.data.status === "success") {
                alert("Submitted successfully");
                setInput({
                    name: '',
                    emailid: '',
                    password: '',
                    profileimage: null
                });
                navigate("/");
            } else {
                alert("Something went wrong");
            }
        }).catch((error) => {
            console.error("Error occurred while registering:", error);
            alert("Error occurred while registering. Please try again.");
        });
    }

    const login = () => {
        navigate("/");
    }

    return (
        <div>
            <section className="form-container align-center">
                <form action="" method="" enctype="multipart/form-data">
                    <h3>Register Now</h3>
                    <p>Your Name <span>*</span></p>
                    <input type="text" name='name' value={input.name} onChange={inputHandler} placeholder="Enter your name" required maxLength="50" className="box" />
                    <p>Your Email <span>*</span></p>
                    <input type="email" name="emailid" value={input.emailid} onChange={inputHandler} placeholder="Enter your email" required maxLength="50" className="box" />
                    <p>Your Password <span>*</span></p>
                    <input type="password" name="password" value={input.password} onChange={inputHandler} placeholder="Enter your password" required maxLength="20" className="box" />
                    <p>Select Profile Image <span>*</span></p>
                    <input type="file" name="profileimage" required className="box" onChange={fileHandler} />
                    <input type="button" value="Register New" className="btn" onClick={readvalues} />
                    <input type="button" value="Login" name="submit" className="btn" onClick={login} />
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default Register;
