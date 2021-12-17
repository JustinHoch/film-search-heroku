const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios').default;
const path = require('path');
require('dotenv').config();

// API key from .env
const apiKey = process.env.API_KEY;

// ********API**********
// Trending Media
app.get('/api/trending-media', (req, res) => {
  async function getMedia() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
      // console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getMedia();
});

// Movie
app.get('/api/movie/:id', (req, res) => {
  const id = req.params.id;
  async function getMovie() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=release_dates,watch/providers,credits`);
      // console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getMovie();
});

// TV
app.get('/api/tv/:id', (req, res) => {
  const id = req.params.id;
  async function getTv() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=content_ratings,watch/providers,credits`);
      // console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getTv();
});

// Person
app.get('/api/person/:id', (req, res) => {
  const id = req.params.id;
  async function getPerson() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&append_to_response=combined_credits`);
      // console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getPerson();
});

// Search
app.get('/api/search/:query', (req, res) => {
  const query = req.params.query;
  async function getSearch() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
      // console.log(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getSearch();
});

// **********End API**********

// Use production build of film search app
app.use(express.static('film-search-frontend/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'film-search-frontend', 'public', 'index.html'));
});

// Listen on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
