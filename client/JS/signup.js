import { apiService as api } from "../api/api.js";

document.getElementById('signupform').addEventListener('submit', addUser)

function addUser(event){
  event.preventDefault();

  let username = document.getElementById("inputUserName").value
  let email = document.getElementById("inputEmail").value
  let password = document.getElementById("inputPassword").value
  
api.post('create-user', {
        username:username, 
        email:email, 
        password:password
    })
  
 removeDetails()
 window.location.href = "./loginpage.html";
 }

 function removeDetails(){
   document.signupform.reset();
        }
