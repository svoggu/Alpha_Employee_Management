// Create a post request 
document.getElementById('press').addEventListener('submit', addEmployee)

function addEmployee(event){
  event.preventDefault();

  //Send the value to the server
  let firstname = document.getElementById("inputFirst").value
  let lastname = document.getElementById("inputLast").value
  let email = document.getElementById("inputEmail").value
  let job = document.getElementById("inputJob").value
  let department = document.getElementById("inputDep").value
  
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
  .then(function (res){
    res.json()
  }).catch((err)=>{
    console.log(err)
  })
  removeDetails()
 }

 //clear user input
  function removeDetails(){
    document.employee_form.reset();
  }