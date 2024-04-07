import React, { useState } from 'react'
import Courses from './Courses'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
   const [input,setInput] = new useState(
      {             
      "userId":sessionStorage.getItem("userid")
      }
)
console.log(sessionStorage.getItem("userid"))
const Navigate=()=> useNavigate() 
if(!sessionStorage.getItem("userid")){
   Navigate('/')
   console.log("first")
}
else{
  return (
    <div>
        <Header />
        <section className="home-grid">

<h1 className="heading">quick options</h1>

<div className="box-container">

   <div className="box">
      <h3 className="title">likes and comments</h3>
      <p className="likes">total likes : <span>25</span></p>
      <Link to="#" className="inline-btn">view likes</Link>
      <p className="likes">total comments : <span>12</span></p>
      <Link to="#" className="inline-btn">view comments</Link>
      <p className="likes">saved playlists : <span>4</span></p>
      <Link to="#" className="inline-btn">view playlists</Link>
   </div>

   <div className="box">
      <h3 className="title">top categories</h3>
      <div className="flex">
         <Link to="#"><i className="fas fa-code"></i><span>development</span></Link>
         <Link to="#"><i className="fas fa-chart-simple"></i><span>business</span></Link>
         <Link to="#"><i className="fas fa-pen"></i><span>design</span></Link>
         <Link to="#"><i className="fas fa-chart-line"></i><span>marketing</span></Link>
         <Link to="#"><i className="fas fa-music"></i><span>music</span></Link>
         <Link to="#"><i className="fas fa-camera"></i><span>photography</span></Link>
         <Link to="#"><i className="fas fa-cog"></i><span>software</span></Link>
         <Link to="#"><i className="fas fa-vial"></i><span>science</span></Link>
      </div>
   </div>

   <div className="box">
      <h3 className="title">popular topics</h3>
      <div className="flex">
         <Link to="#"><i className="fab fa-html5"></i><span>HTML</span></Link>
         <Link to="#"><i className="fab fa-css3"></i><span>CSS</span></Link>
         <Link to="#"><i className="fab fa-js"></i><span>javascript</span></Link>
         <Link to="#"><i className="fab fa-react"></i><span>react</span></Link>
         <Link to="#"><i className="fab fa-php"></i><span>PHP</span></Link>
         <Link to="#"><i className="fab fa-bootstrap"></i><span>bootstrap</span></Link>
      </div>
   </div>

   <div className="box">
      <h3 className="title">become a tutor</h3>
      <p className="tutor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
      <Link to="teachers.html" className="inline-btn">get started</Link>
   </div>

</div>

</section>
<Courses />
<Footer />
    </div>
  )
}
}
export default Home