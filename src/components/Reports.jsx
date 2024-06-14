import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Reports() {
  const [reports, setReports] = useState([]);
  const [statusOptions] = useState(['Pending', 'Approved', 'Rejected']);

  useEffect(() => {
    fetch('https://example.com/api/reports')
      .then(response => response.json())
      .then(data => {
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
    fetch(`https://example.com/api/reports/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
  };

  return (
    <div className='grid-container2'>
      <Header />
      <Sidebar />
      <div className='grid-reports'>
        <h2>Report Details</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status Report</TableCell>
                <TableCell>Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow
                  key={report.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {report.username}
                  </TableCell>
                  <TableCell>
                    <img src={report.image} alt={report.username} width="50" />
                  </TableCell>
                  <TableCell>{report.location}</TableCell>
                  <TableCell>
                    <TextField
                      select
                      value={report.status}
                      onChange={(e) => handleStatusChange(report.id, e.target.value)}
                    >
                      {statusOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell>{report.comment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Reports;
