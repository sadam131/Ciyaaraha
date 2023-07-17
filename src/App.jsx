import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import HomeBanner from './components/home/HomeBanner';
import Posts from './components/posts/Posts';
import ForYou from './components/foryou/ForYou';
function App() {
  return (
    <div className=''>
      <Navbar/>
      <HomeBanner/>
      <Posts/>
      <ForYou/>
    </div>
  );
}

export default App
