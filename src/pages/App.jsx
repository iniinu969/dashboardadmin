import { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import Reports from '../components/Reports';
import Articles from '../components/Articles';
import Users from '../components/Users';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App
