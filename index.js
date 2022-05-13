import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/alpha_employeedb")
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => console.log("Failed to Connect to DB", err));


const employees = [
    {
        id: 1,
        name: "John",
        age: 30,
        position: "Manager"
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        position: "Developer"
    },
];

app.get("/employees", (req, res) => {
    res.json(employees);
});
app.get("/employees/:id", (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id));
    res.json(employee);
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});