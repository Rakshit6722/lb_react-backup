import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Shop from './Components/Shop'
import Home from './Components/Home'
import Support from './Components/Support'
import About from './Components/About'
import MainHeader from './Components/MainHeader'
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>

      </ul>
      <nav>
      </nav>

      <Routes>
        {/* simple routing
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/support" element={<Support/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="*" element={<div>Not found page</div>}></Route> */}

        {/*Nested Routing*/}
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home/>}></Route>{/*Default page*/}
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<div>Not found page</div>}></Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
