import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>}/>
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
