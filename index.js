import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

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