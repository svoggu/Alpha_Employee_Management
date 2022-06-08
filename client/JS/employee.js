import { apiService as api} from '../api/api.js';
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
  
  api.post('create-employee', {
      firstname:firstname, 
        lastname:lastname, 
        email:email, 
        job:job,
        department:department
  })
  
    removeDetails();
    window.location.href = "./employee-details.html";
}

 //clear user input
  function removeDetails(){
    document.employee_form.reset();
  }