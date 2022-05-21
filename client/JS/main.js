// fetch('http://127.0.0.1:3002/employees').then(res => res.json()).then(data => {
//     data.forEach(employee => {
//         const employeeCard = document.createElement('div');
//         employeeCard.classList.add('employee-card');
//         employeeCard.innerHTML = `Employee: ${employee.position}`;
//         employeeCard.innerHTML += `<br>Name: ${employee.name}`;
//         employeeCard.innerHTML += `<br>Age: ${employee.age}`;
        
//         document.body.appendChild(employeeCard);
//         employeeCard.innerHTML += `<br>id: ${employee.id}`;
//         employeeCard.innerHTML += `<br>${employee.name} is ${employee.age} years old and works as a ${employee.position}`;
//     })
// })

// Create a post request 
document.getElementById('press').addEventListener('submit', addEmployee)

function addEmployee(e){
  e.preventDefault();
  let firstname = document.getElementById("inputFirst").value
  let lastname = document.getElementById("inputLast").value
  let email = document.getElementById("inputEmail").value
  let job = document.getElementById("inputJob").value
  let department = document.getElementById("inputDep").value
  console.log("TAofeek")
  
  fetch('http://localhost:3002/create-employee', {
      method: "POST",
      headers:{
        "Accept":"application/json, text/plain, */*",
      "Content-type":"application/json"},
      body:JSON.stringify({firstname:firstname, 
        lastname:lastname, 
        email:email, 
        job:job,
        department:department})
  })
  .then((res) => res.json()).catch((err)=>{
    console.log(err)
  })
}