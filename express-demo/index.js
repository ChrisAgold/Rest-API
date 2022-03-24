const express = require('express');
const app = express();

// Define Route/Path => Route Handler
app.get('/', (req, res) => {
    res.send('Hello World!!!!!');
});

// Will run on port or localhost 3000
const port = process.env.PORT || 3000;
// Listen on Port => Call Function to run when listening on port specified
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Endpoint for getting api courses from database => use export PORT=5000 to set port
app.get('/api/courses', (req, res) => {
    // Objects Being Returned from Function
    res.send([1,2,3]);
})
