import Footer from './Footer'
import Header from './Header'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [input,setInput] = new useState(
    {             
      name: "",
      email: "",
       old_pass: "",
      new_pass: "",
      c_pass: "",
      _id: sessionStorage.getItem("userid")
    }
)
 
  const inputHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  }
  const submitHandler = event => {
    event.preventDefault(); // Prevent default form submission
    axios.post("http://localhost:3001/api/eduapp/updateprofile", input)
      .then(response => {
        console.log(response.data.status);
        if (response.data.status === 'success') {
          alert('Profile updated successfully');
        }else if (response.data.status === 'incorrect password') {
          alert('Previous password is not correct');
        }
      })
      .catch(error => {
        console.error("Error updating profile:", error);
        alert('An error occurred while updating profile');
      });
  }

  return (
    <div>
      <Header />
      <section className="form-container align-center">
        <form onSubmit={submitHandler} encType="multipart/form-data">
          <h3>Update Profile</h3>
          <p>Update Name<span>*</span></p>
          <input type="text" name="name" value={input.name} onChange={inputHandler} placeholder="Enter your name"  maxLength="20" className="box" />
          <p>Update Email</p>
          <input type="email" name="email" value={input.email } onChange={inputHandler} placeholder="Enter your Emailid"  maxLength="20" className="box" />
          <p>Previous Password</p>
          <input type="password" name="old_pass" value={input.old_pass} onChange={inputHandler} placeholder="Enter your password"  maxLength="20" className="box" />
          <p>New Password</p>
          <input type="password" name="new_pass" value={input.new_pass} onChange={inputHandler} placeholder="Enter your password"  maxLength="20" className="box" />
          <p>Confirm Password</p>
          <input type="password" name="c_pass" value={input.c_pass} onChange={inputHandler} placeholder="Enter your password"  maxLength="20" className="box" />
          <input type="submit" value="Update Profile" className="btn" />
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Update;