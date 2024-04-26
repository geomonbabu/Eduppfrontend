import React, { useState,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'


const WatchVideo = () => {
   const [input, setInput] = useState({
      'userId':sessionStorage.getItem("userid"),
      'comment':'',
   })
   const inputHandler = (event) => {
      setInput({ ...input, [event.target.name]: event.target.value });
  }
  const readvalues=()=>{
   console.log(input)
   axios.post("http://localhost:3001/api/eduapp/addcomment",input).then(
       (Response)=>{
         console.log(Response.data.status)
         if(Response.data.status=='success'){
            alert('comment added successfully')
         }
       }
      )}
      const [data, setData] = new useState([])
const getData = () => {
    axios.get("http://localhost:3001/api/eduapp/viewcomment").then(
        (response) => {
            setData(response.data.comment)
            console.log(response.data)
        }
    )
}
useEffect(() => { getData() }, [])
  return (
    <div>
        <Header />
        <section clasName="watch-video">

<div clasName="video-container">
   <div clasName="video">
      <video src="images/vid-1.mp4" controls poster="images/post-1-1.png" id="video"></video>
   </div>
   <h3 clasName="title">complete HTML tutorial (part 01)</h3>
   <div clasName="info">
      <p clasName="date"><i clasName="fas fa-calendar"></i><span>22-10-2022</span></p>
      <p clasName="date"><i clasName="fas fa-heart"></i><span>44 likes</span></p>
   </div>
   <div clasName="tutor">
      <img src="images/pic-2.jpg" alt="" />
      <div>
         <h3>john deo</h3>
         <span>developer</span>
      </div>
   </div>
   <form action="" method="post" clasName="flex">
      <Link to="/playlist" clasName="inline-btn">view playlist</Link>
      <button><i clasName="far fa-heart"></i><span>like</span></button>
   </form>
   <p clasName="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
   </p>
</div>

</section>

<section clasName="comments">

<h1 clasName="heading">Total Comments: {data.length}</h1>
<div class="facebook-comment">
  <form action="" className="add-comment">
    <h3>Add a comment</h3>
    <textarea
      name="comment"
      value={input.comment}
      onChange={inputHandler}
      placeholder="Write a comment..."
      required
      maxLength="500"
      className="comment-box"
    ></textarea>
    <button type="submit" className="btn" name="add_comment" onClick={readvalues} style={{ width: '10%',height:'50px' }}>
      Post
    </button>
  </form>
</div>

<h1 clasName="heading">user comments</h1>

<div clasName="box-container">
{
      data.map(
        (values,index) => {
  return<div clasName="box">
      <div clasName="user">
      <img src={`http://localhost:3001/${values.userId.profileimage}`} alt="" style={{ maxWidth: '50px', maxHeight: '40px' }}/>
         <div>
            <h2>{values.userId.name}</h2>
            <span>{values.timestamp}</span>
         </div>
      </div>
      <div clasName="comment-box"><h2>{values.comment}</h2></div>
   </div>
        })}
</div>

</section>
<Footer />
    </div>
  )
}

export default WatchVideo