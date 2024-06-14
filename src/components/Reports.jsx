import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // INI GATAU BENER ATAU NGGAK
    fetch('https://example.com/api/reports')
      .then(response => response.json())
      .then(data => setReports(data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>


      <div className="reports-table">
        <h2>Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Users</th>
              <th>Images</th>
              <th>Location</th>
              <th>Status Report</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id}>
                <td>{report.user}</td>
                <td><img src={report.imageUrl} alt="Report Image" /></td>
                <td>{report.location}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    

    
  )
}

export default Reports