import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Users() {
  return (
    <div className='grid-container2'>
      <Header/>
      <Sidebar/>
      <div className='grid-reports'>
        <h2>Users Details</h2>
        <table className='user-table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Username</th>
              <th scope='col'>Email</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users