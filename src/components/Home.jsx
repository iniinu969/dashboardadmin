import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsMenuButtonFill}
 from 'react-icons/bs'
 import { FaUserShield, FaFileAlt } from 'react-icons/fa';
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REPORTS</h3>
                    <BsMenuButtonFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ARTICLE</h3>
                    <FaFileAlt className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
        </div>
    </main>
  )
}

export default Home