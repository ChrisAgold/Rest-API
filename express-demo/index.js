const express = require('express');
const app = express();

// GET request example data
const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

// Define Route/Path => Route Handler
app.get('/', (req, res) => {
    res.send('Hello World!!!!!');
});

// Endpoint for getting api courses from database => use export PORT=5000 to set port
app.get('/api/courses', (req, res) => {
    // Objects Being Returned from Function
    res.send(courses);
})

// GET courses by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found!');
    res.send(course);
});

// Will run on port or localhost 3000
const port = process.env.PORT || 3000;
// Listen on Port => Call Function to run when listening on port specified
app.listen(port, () => console.log(`Listening on port ${port}...`));
