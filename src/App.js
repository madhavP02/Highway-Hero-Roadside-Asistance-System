import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home'
import Tow from './components/tow'
import Repair from './components/repair'
import Ambulance from './components/Ambulance'
import Fire from './components/fire'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Highway Hero 🦸‍♂️
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

      
        <div className="auth-wrapper" >
          
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Home" element={<Home />} />
             
              <Route path="/Tow" element={<Tow />} />
              <Route path="/Fire" element={<Fire />} />
              <Route path="/Repair" element={<Repair />} />
              <Route path="/ambulance" element={<Ambulance />} />
            </Routes>
          
        </div>
        {/* <div className="auth-wrapper" >
          <div className="auth-inner2">
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      

        <div>
        <Routes>
            <Route path="/Home" element={<Home />} />
        </Routes>
        </div>
      <div className="auth-wrapper" >
        <div className='.auth-inner'>
          <Routes>
              <Route path="/Tow" element={<Tow />} />
              <Route path="/Fire" element={<Fire />} />
              <Route path="/Repair" element={<Repair />} />
              <Route path="/ambulance" element={<Ambulance />} />
          </Routes>
        </div>
      </div>
     </div> */}
  </div>  
  </Router>
  )
}

export default App
