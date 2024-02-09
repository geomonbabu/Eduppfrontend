import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import TeacherProfile from './components/TeacherProfile';
import Teachers from './components/Teachers';
import Update from './components/Update';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Courses from './components/Courses';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teachersprofile' element={<TeacherProfile/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
