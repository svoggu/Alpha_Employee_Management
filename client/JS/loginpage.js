import { apiService as api} from '../api/api.js';

document.getElementById('loginbuttton').addEventListener('submit', loginform)

function loginform(event){
  event.preventDefault();

  let username = document.getElementById("user").value
  let password = document.getElementById("password").value
  
 
  
  api.post('login-user', {
     username:username, 
     password:password, 
  })
  
    removeDetails()
}

  function removeDetails(){
    document.login_page.reset();
}