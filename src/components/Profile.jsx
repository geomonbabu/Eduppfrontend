import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

const Profile = () => {
   const [input,setInput] = new useState(
      {             
      "_id":sessionStorage.getItem("userid")
      }
  )
  const [data, setData] = new useState([])
  const getData = () => {
      axios.post("http://localhost:3001/api/eduapp/viewprofile",input).then(
          (response) => {
              setData(response.data)
              console.log(response.data)
          }
      )
  }
  useEffect(() => { getData() }, [])
  return (
    <div>
<Header/>
<section className="user-profile">

   <h1 className="heading">your profile</h1>

   <div className="info">

   {
      data.map(
        (values,index) => {
            return <div className="user">
         <img src={values.profileimage} alt="" />
         <h3>{values.name}</h3>
         <p>student</p>
         <Link to="/update" className="inline-btn">update profile</Link>
      </div>
        }
      )
   }
      <div className="box-container">
   
         <div className="box">
            <div className="flex">
               <i className="fas fa-bookmark"></i>
               <div>
                  <span>4</span>
                  <p>saved playlist</p>
               </div>
            </div>
            <Link href="#" className="inline-btn">view playlists</Link>
         </div>
   
         <div className="box">
            <div className="flex">
               <i className="fas fa-heart"></i>
               <div>
                  <span>33</span>
                  <p>videos liked</p>
               </div>
            </div>
            <Link href="#" className="inline-btn">view liked</Link>
         </div>
   
         <div className="box">
            <div className="flex">
               <i className="fas fa-comment"></i>
               <div>
                  <span>12</span>
                  <p>videos comments</p>
               </div>
            </div>
            <Link href="#" className="inline-btn">view comments</Link>
         </div>
   
      </div>
   </div>

</section>
<Footer />
    </div>
  )
}

export default Profile