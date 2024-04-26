import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  if(!sessionStorage.getItem("userid")){
    navigate('/')
  }
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
   let toggleBtn = document.getElementById('toggle-btn');
   const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');
  const [profileActive, setProfileActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('dark-mode', 'enabled');
  };

  const disableDarkMode = () => {
    setDarkMode(false);
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('dark-mode', 'disabled');
  };

  const handleToggleClick = () => {
    const currentDarkMode = localStorage.getItem('dark-mode');
    if (currentDarkMode === 'disabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  const handleUserBtnClick = () => {
    setProfileActive((prev) => !prev);
    setSearchActive(false);
    let profile = document.querySelector('.header .flex .profile');
    let search = document.querySelector('.header .flex .search-form');
   document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}
  };

  const handleSearchBtnClick = () => {
    setSearchActive((prev) => !prev);
    setProfileActive(false);
  };

  const handleMenuBtnClick = () => {
    setSideBarActive((prev) => !prev);
    document.body.classList.toggle('active');
  };

  const handleCloseBtnClick = () => {
    setSideBarActive(false);
    document.body.classList.remove('active');
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
     
    } else {
      
      document.body.classList.remove('dark');
      
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setProfileActive(false);
      setSearchActive(false);

      if (window.innerWidth < 1200) {
        setSideBarActive(false);
        document.body.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const navigate = useNavigate()
  const logout=()=>{
    sessionStorage.removeItem("userid");
    navigate('/')
  }
  return (
    <div>
        <header className="header">
   
   <section className="flex">

      <Link to="/" className="logo">Educa.</Link>

      <form action="search.html" method="post" className="search-form">
         <input type="text" name="search_box" required placeholder="search courses..."  maxLength="100" />
         <button type="submit" className="fas fa-search"></button>
      </form>

      <div className="icons">
         <div id="menu-btn" className="fas fa-bars" onClick={handleMenuBtnClick}></div>
         <div id="search-btn" className="fas fa-search" onClick={handleSearchBtnClick}></div>
         <div id="user-btn" className="fas fa-user" onClick={handleUserBtnClick}></div>
         <div id="toggle-btn" className="fas fa-sun" onClick={handleToggleClick}></div>
      </div>
{
      data.map(
        (values,index) => {
            return <div className="profile">
         <img src={`http://localhost:3001/${values.profileimage}`} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }} />
         <h3 className="name">{values.name}</h3>
         <p className="role">studen</p>
         <div className="flex-btn">
            <input type='submit' onClick={logout} className="btn" value="Logout" />
            <Link to="/profile" className="btn">view profile</Link>
         </div>
      </div>
       }
       )
       }
   </section>

</header>   

<div className="side-bar">

   <div id="close-btn">
      <i className="fas fa-times"></i>
   </div>
   {
      data.map(
        (values,index) => {
   return <div className="profile">
      <img src={`http://localhost:3001/${values.profileimage}`} alt="" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
      <h3 className="name">{values.name}</h3>
      <p className="role">studen</p>
   </div>
        })
      }
   <nav className="navbar">
      <Link to="/home"><i className="fas fa-home"></i><span>home</span></Link>
      <Link to="/about"><i className="fas fa-question"></i><span>about</span></Link>
      <Link to="/courses"><i className="fas fa-graduation-cap"></i><span>courses</span></Link>
      <Link to="/teachers"><i className="fas fa-chalkboard-user"></i><span>teachers</span></Link>
      <Link to="/contact"><i className="fas fa-headset"></i><span>contact us</span></Link>
   </nav>

</div>
    </div>
  )
}

export default Header