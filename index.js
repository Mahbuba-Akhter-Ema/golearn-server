const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

const courseCategories = require('./Data/courseCategories.json');

app.get('/', (req, res) => {
    res.send('goLearn Website is Running');
});

app.get('/course-categories', (req, res) => {
    res.send(courseCategories);
});

app.get('/single-categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(courseCategories);
    const getSingleCourse = courseCategories.find(p => p.id === id);
    console.log(getSingleCourse);
    res.send(getSingleCourse); 

});

app.listen(port, () => {
    console.log('goLearn Website is Running', port);
});
