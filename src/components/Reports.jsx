import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/reports')
      .then(response => response.json())
      .then(data => {
        // Set default status to "Pending" if not provided
        const updatedData = data.map(report => ({
          ...report,
          status: report.status || 'Pending',
        }));
        setReports(updatedData);
      })
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setReports(prevReports =>
      prevReports.map(report =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
    // Optionally, send the updated status to the server here
    // fetch(`https://example.com/api/reports/${id}`, {
    //   method: 'PATCH',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ status: newStatus })
    // });
  };

  return (
    <div className='grid-container2'>
      <Header/>
      <Sidebar/>
      <div className='grid-reports'>
        <h2>Report Details</h2>
        <table className='report-table'>
          <thead>
            <tr>
              <th scope='col'>Username</th>
              <th scope='col'>Images</th>
              <th scope='col'>Location</th>
              <th scope='col'>Status Report</th>
              <th scope='col'>Comment</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.user}</td>
                  <td><img src={report.imageUrl} alt={`Report by ${report.user}`} /></td>
                  <td>{report.location}</td>
                  <td>
                    <select
                      value={report.status}
                      onChange={e => handleStatusChange(report.id, e.target.value)}
                    >
                      <option value='Pending'>Pending</option>
                      <option value='Accepted'>Accepted</option>
                      <option value='Rejected'>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>

    

    
  )
}

export default Reports