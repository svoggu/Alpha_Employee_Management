import { apiService as api} from '../api/api.js';

document.getElementById('loginform').addEventListener('submit', loginform)

function loginform(event){
  event.preventDefault();

  let username = document.getElementById("user").value
  let password = document.getElementById("password").value
  
 
  
  api.post('login', {
     username:username, 
     password:password, 
  })
  
    removeDetails()
}

  function removeDetails(){
    document.loginForm.reset();
}