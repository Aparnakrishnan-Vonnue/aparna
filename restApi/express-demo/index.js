const Joi = require("joi"); // this returns a class.
const express = require("express");
const app = express();

app.use(express.json()); // adding a piece of middleware so that when we call express.json method, it returns a piece of middleware and then we call app.use to use that middleware in the request processing pipeline
//environment variable PORT
const port = process.env.PORT || 3000; // a variable that is set in the environment in which the process runs

const courses = [
  {
    id: 1,
    name: "course 1",
  },
  {
    id: 2,
    name: "course 2",
  },
  {
    id: 3,
    name: "course 3",
  },
];

app.listen(port, () => console.log(`Listening on port ${port}...`));

//methods

//GET method - reading resources

app.get("/", (req, res) => {
  res.send("Hello world!!!");
}); // the get method contains two arguments, root of the website and a call back function.

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//to get a single course with id 1, endpoint should be like /api/courses/1
app.get("/api/posts/:id", (req, res) => {
  res.send(req.params.id);
});

//route parameters, used for essential or required values
// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params);
// });

// in express we can also get query string params which are expressed after question marks. we use query string parameters to provide additional data to backend services, query string parameters are optional
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send({ message: "The course with given ID is not found" });
  }
  res.status(200).send(course);
});

//POST method - createing resources
app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

//PUT method - updating resources
app.put("/api/courses/:id", (req, res) => {
  //Look up the course
  //If course not exist , return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course with given ID was not found");
    return;
  }

  //Validate the course
  //If invalid, return 400 - Bad request
  const { error } = validateCourse(req.body); //result.error

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  //Update course
  course.name = req.body.name;
  //Return updated course to the client
  res.send(course);
});

//DELETE method
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("The given ID is not found");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

//function to validate an input

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
