import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Update = () => {
  return (
    <div>
        <Header />
        <section clasName="form-container">

<form action="" method="post" enctype="multipart/form-data">
   <h3>update profile</h3>
   <p>update name</p>
   <input type="text" name="name" placeholder="shaikh anas"  maxLength="50" clasName="box" />
   <p>update email</p>
   <input type="email" name="email" placeholder="shaikh@gmail.come"  maxLength="50" clasName="box" />
   <p>previous password</p>
   <input type="password" name="old_pass" placeholder="enter your old password"  maxLength="20" clasName="box" />
   <p>new password</p>
   <input type="password" name="new_pass" placeholder="enter your old password"  maxLength="20" clasName="box" />
   <p>confirm password</p>
   <input type="password" name="c_pass" placeholder="confirm your new password"  maxLength="20" clasName="box" />
   <p>update pic</p>
   <input type="file" accept="image/*" clasName="box" />
   <input type="submit" value="update profile" name="submit" clasName="btn" />
</form>

</section>
<Footer />
    </div>
  )
}

export default Update