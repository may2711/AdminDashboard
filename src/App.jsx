import React,{useState}from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import Order from './components/Order';
import Report from './components/Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  const [toggle,setToggle] = useState(false)

  const Toggle = () =>{
    setToggle(!toggle);
  }

  return (
    <BrowserRouter>
      <div>
        <div className="d-flex">
          <div className={[toggle ? "d-none" : "w-auto"]}>
            <Sidebar />
          </div>
          <div className="col">
            <Navbar Toggle = {Toggle}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<User />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/" element={<Report />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;