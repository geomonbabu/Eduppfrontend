import Footer from './Footer'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [input,setInput] = new useState(
    {             
    "userId":sessionStorage.getItem("userid")
    }
)
const [data, setData] = new useState([])
  const getData = () => {
      axios.post("http://localhost:3001/api/eduapp/updateprofile",input).then(
          (response) => {
              setData(response.data)
              console.log(response.data)
          }
      )
  }
  useEffect(() => { getData() }, [])
  return (
    <div>
        <Header />
        <section className="form-container align-center">
        
       <form action="" method="" enctype="multipart/form-data">
                    <h3>update profile</h3>
                    <p>update name<span>*</span></p>
                    <input type="text" name="name" placeholder="Enter your password" required maxLength="20" className="box" />
                    <p>update email</p>
                    <input type="email" name="email" value=""required maxLength="20" className="box" />
                    <p>previous password</p>
                    <input type="password" name="old_pass"value="" placeholder="Enter your password" required maxLength="20" className="box" />
                    <p>new password</p>
                    <input type="password" name="new_pass" placeholder="Enter your password" required maxLength="20" className="box" />
                    <p>confirm password</p>
                    <input type="password" name="c_pass" placeholder="Enter your password" required maxLength="20" className="box" />
                    <p>Select Profile Image <span>*</span></p>
                    <input type="file" name="profileimage" required className="box"  />
                    <input type="button" value="Register New" className="btn"  />
           </form>
           
        </section>
        <Footer />
   </div>
  )
}

export default Update