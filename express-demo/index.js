const express = require('express');
const app = express();

// Define Route/Path => Route Handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listen on Port => Call Function to run when listening on port specified
app.listen(3000, () => console.log('Listening on port 3000....'));

// Endpoint for getting api courses from database
app.get('/api/courses', (req, res) => {
    // Objects Being Returned from Function
    res.send([1,2,3]);
})
