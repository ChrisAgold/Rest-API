const Joi = require('joi');
const express = require('express');
const app = express();

// middleware
app.use(express.json());

// GET request example data
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
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

// POST new course to courses array
app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body); // result.error
    if (error)
        return res.status(400).send(result.error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    // push object to array
    courses.push(course);
    res.send(course);
});

// PUT
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send('The course with the given ID was not found!');

    // Validate
    // If invalid, return 400 - Bad request

    const {error} = validateCourse(req.body); // result.error
    if (error) return res.status(400).send(result.error.details[0].message);

    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(course, schema);
}

// DELETE
app.delete('/api/course/:id', function (req, res) {
    // Look up the course
    // Not existing return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found!');
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    // Return the same course
    res.send(course);
});

// Will run on port or localhost 3000
const port = process.env.PORT || 3000;
// Listen on Port => Call Function to run when listening on port specified
app.listen(port, () => console.log(`Listening on port ${port}...`));
