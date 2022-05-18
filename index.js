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

app.get("/employees", (req, res) => {
    Employee.find()
        .then((data) => {
        res.json({data});
        })
        .catch((err) => {
        res.json({err});
        });
})

app.get("/employees/:id", (req, res) => {
Employee.findById(req.params.id).then((data) => {
    res.json({data});
    console.log(data);
})
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});