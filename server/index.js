import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Employee } from "./schema/employee.schema.js";
import { User } from "./schema/user.schema.js";

const app = express();
app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/alpha_employeedb")
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => console.log("Failed to Connect to DB", err));

app.post("/create-employee", function (req, res) {
  const { firstname, lastname, email, job, department } = req.body;
  const emp = new Employee({
    firstname,
    lastname,
    email,
    job,
    department,
  });

  emp
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

app.get("/employees", (req, res) => {
  Employee.find()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

app.get("/employees/:id", (req, res) => {
  Employee.findById(req.params.id).then((data) => {
    res.json({ data });
    console.log(data);
  });
});

// edit employee from the database using the id
app.put("/update-employee/:id", function (req, res) {
  Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        job: req.body.job,
        department: req.body.department,
      },
    },
    {
      new: true,
    },
    function (err, updateEmployee) {
      if (err) {
        res.send("Error Updating Employee");
      } else {
        res.json(updateEmployee);
      }
    }
  );
});

// delete employee from the database using id
app.delete("/delete-employee/:id", function (req, res) {
  const _id = req.params.id;
  Employee.findByIdAndDelete(_id).then((data) => {
    console.log(data);
    res.json({ data });
  });
});

//create user profile
app.post("/create-user", function (req, res) {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });

  user
    .save()
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.status(501);
      res.json({ errors: err });
    });
});

//login user
app.get("/login", function (req, res) {
  const { username, password } = req.body;

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "User Not Found" });
      } else if (user.password !== password) {
        res.status(401).json({ message: "Incorrect Password" });
      } else {
        res.status(200).json({ message: "Login Successful" });
      }
    })
    .catch((err) => {
      res.json({ err });
    });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

