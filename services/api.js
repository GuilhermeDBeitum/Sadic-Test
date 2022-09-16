const axios = require('axios');

const api = axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(response => {
        return response.data.joke
    })
    .catch(error => {
        console.log(error);
    });


module.exports = api;

