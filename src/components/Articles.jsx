import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Articles() {
  return (
    <div className='grid-container2'>
    <Header/>
    <Sidebar/>
    <div className='articledata'>
      <div className='articleform'>
      <h2>Create Article</h2>
      <label>
        Input Title: <input name="myInput" />
      </label>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      </div>
      <div className='articlelist'>
        <h2>Article List</h2>
      </div>
    </div>
  </div>
  )
}

export default Articles