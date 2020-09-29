require('dotenv').config();
const express = require('express');
const axios = require('axios')
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/favicon.ico', (req,res)=>{
  return 'your faveicon'
 })

app.get('/:forecast', (req, res) => {
  let location = req.params.forecast;
  axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${process.env.APIKEY}`)
  .then((resp) => res.json(resp.data))
  .catch((error) => res.json(error))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})