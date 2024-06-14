import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Box } from '@mui/material';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [fileError, setFileError] = useState('');

  // Fetch articles from backend on component mount
  useEffect(() => {
    fetchArticles();
  }, []);

  // Function to fetch articles from backend API
  const fetchArticles = () => {
    fetch('https://example.com/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  };

  // Function to handle form submission of new article
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && thumbnail) {
      // Simulating adding article to backend (replace with actual API call)
      const newArticle = { title, description, thumbnail };
      setArticles(prevArticles => [...prevArticles, newArticle]);
      // Clear form fields
      setTitle('');
      setDescription('');
      setThumbnail(null);
      document.getElementById('thumbnailInput').value = '';
    }
  };

  // Function to handle file input change for thumbnail
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    // Check if the selected file type is image (img, png, jpeg)
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
      setThumbnail(URL.createObjectURL(file));
      setFileError('');
    } else {
      setThumbnail(null);
      setFileError('Please choose an image file (jpg, jpeg, png)');
      document.getElementById('thumbnailInput').value = '';
    }
  };

  return (
    <div className='grid-container2'>
      <Header/>
      <Sidebar/>
      <div className='grid-articles'>
        <Box p={3}>
          <h2>Submit New Article</h2>
          <form onSubmit={handleSubmit} className="article-form">
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
              required
              InputProps={{
                className: 'article-input',
                style: { color: 'white' } // Text color white
              }}
              InputLabelProps={{
                style: { color: 'white' } // Label color white
              }}            
              />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
              InputProps={{
                className: 'article-input',
                style: { color: 'white' } // Text color white
              }}
              InputLabelProps={{
                style: { color: 'white' } // Label color white
              }}
            />
            <input
              accept="image/*"
              id="thumbnailInput"
              type="file"
              onChange={handleThumbnailChange}
              style={{ display: 'none' }} // Hide the default file input
              required
            />
            <label htmlFor="thumbnailInput">
              <Button variant="contained" component="span">
                Choose Image (jpg, jpeg, png)
              </Button>
            </label>
            {fileError && (
              <div className="file-error">
                {fileError}
              </div>
            )}
            {thumbnail && (
              <img src={thumbnail} alt="Thumbnail Preview" className="thumbnail-preview" />
            )}
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              Submit
            </Button>
          </form>
        </Box>
        <Box p={3}>
        <h2>Article List</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="article table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Thumbnail</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article, index) => (
                <TableRow key={index}>
                  <TableCell align="center">
                    <img src={article.thumbnail} alt={article.title} width="100" height="100" className="article-thumbnail" />
                  </TableCell>
                  <TableCell align="center">{article.title}</TableCell>
                  <TableCell align="center">{article.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </div>
    </div>
  );
}

export default Articles;
