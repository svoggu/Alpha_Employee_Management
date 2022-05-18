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

app.post("/create-employee", (req, res) => {
  const { firstname, lastname, email, job, department } = req.body;
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    firstname,
    lastname,
    email,
    job,
    department,
  });

  employee
    .save()
    .then((data) => {
      res.json({data});
      console.log("Data Saved Successfully", data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/employees", (req, res) => {
  res.json(employees);
});
app.get("/employees/:id", (req, res) => {
  const employee = employees.find(
    (employee) => employee.id === parseInt(req.params.id)
  );
  res.json(employee);
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
