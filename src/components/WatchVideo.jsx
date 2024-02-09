import React from 'react'
import Header from './Header'
import Footer from './Footer'

const WatchVideo = () => {
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
      <Link to="playlist.html" clasName="inline-btn">view playlist</Link>
      <button><i clasName="far fa-heart"></i><span>like</span></button>
   </form>
   <p clasName="description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem mollitia obcaecati culpa dolor placeat provident porro.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
   </p>
</div>

</section>

<section clasName="comments">

<h1 clasName="heading">5 comments</h1>

<form action="" clasName="add-comment">
   <h3>add comments</h3>
   <textarea name="comment_box" placeholder="enter your comment" required  maxLength="1000" cols="30" rows="10"></textarea>
   <input type="submit" value="add comment" clasName="inline-btn" name="add_comment" />
</form>

<h1 clasName="heading">user comments</h1>

<div clasName="box-container">

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-1.jpg" alt="" />
         <div>
            <h3>shaikh anas</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">this is a comment form shaikh anas</div>
      <form action="" clasName="flex-btn">
         <input type="submit" value="edit comment" name="edit_comment" clasName="inline-option-btn" />
         <input type="submit" value="delete comment" name="delete_comment" clasName="inline-delete-btn" />
      </form>
   </div>

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-2.jpg" alt="" />
         <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">awesome tutorial!
         keep going!</div>
   </div>

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-3.jpg" alt="" />
         <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">amazing way of teaching!
         thank you so much!
      </div>
   </div>

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-4.jpg" alt="" />
         <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">loved it, thanks for the tutorial!</div>
   </div>

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-5.jpg" alt="" />
         <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">this is what I have been looking for! thank you so much!</div>
   </div>

   <div clasName="box">
      <div clasName="user">
         <img src="images/pic-2.jpg" alt="" />
         <div>
            <h3>john deo</h3>
            <span>22-10-2022</span>
         </div>
      </div>
      <div clasName="comment-box">thanks for the tutorial!

         how to download source code file?
      </div>
   </div>

</div>

</section>
<Footer />
    </div>
  )
}

export default WatchVideo