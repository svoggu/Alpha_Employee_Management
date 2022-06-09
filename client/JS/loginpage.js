import { apiService as api} from '../api/api.js';

document.getElementById('loginform').addEventListener('submit', loginform)

function loginform(event){
  event.preventDefault();
  
  let username = document.getElementById("user").value
  let password = document.getElementById("password").value
  const loginPromise =  api.post('login', {
    username:username, 
    password:password, 
 });

  loginPromise.then((condition) => {
   
    console.log(condition)
    if(condition.message === "Login Successful")
    {
      alert("Login Successful");
      removeDetails();
      window.location.href = "./employee-details.html";
    } else {
      alert ("No user Found")
    }
  })

 

}

function removeDetails(){
    document.loginForm.reset();
}