import { apiService as api } from "../api/api.js";

document.getElementById('logbtn').addEventListener('submit', addUser)

function addUser(event){
  event.preventDefault();

  let UserName = document.getElementById("inputUserName").value
  let email = document.getElementById("inputEmail").value
  let password = document.getElementById("inputPassword").value
  
api.post("create-user", {
        username:UserName, 
        email:email, 
        password:password})
  
  removeDetails()
 }

  function removeDetails(){
    document.signupform.reset();
  }