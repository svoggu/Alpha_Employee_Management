import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Employee } from "./employee.schema.js";

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
app.put('/update-employee/:id', function(req, res) {
  Employee.findByIdAndUpdate(
      req.params.id,
      {
          $set: {
                 firstname:req.body.firstname,
                 lastname:req.body.lastname,
                 email:req.body.email,
                 job:req.body.job,
                 department:req.body.department
              },
      },
      {
          new: true,
      },
      function(err, updateEmployee) {
          if(err) {
              res.send("Error Updating Employee");
          }
          else{
              res.json(updateEmployee);
          }
      }
  )
})

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
