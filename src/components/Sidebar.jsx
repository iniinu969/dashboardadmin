import React from 'react'
import 
{BsGrid1X2Fill, BsPeopleFill, 
   BsMenuButtonWideFill}
 from 'react-icons/bs'
import { FaUserShield, FaFileAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-brand'>
                <img src='src\assets\TrotoTrack Logo.png'  className='logo'/> Admin TrotoTrack
            </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/" className='sidebar-link-wrapper'>
                    <div className='sidebar-link'>
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </div>  
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/reports" className='sidebar-link-wrapper'>
                    <div className='sidebar-link'>
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/users" className='sidebar-link-wrapper'>
                    <div className='sidebar-link'>
                        <BsPeopleFill className='icon'/> Users
                    </div>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/articles" className='sidebar-link-wrapper'>
                    <div className='sidebar-link'>
                        <FaFileAlt className='icon'/> Article
                    </div>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar