import { apiService as api} from '../api/api.js';
 //This is to get Employee Details from the database and post in the table
api.get('employees')
.then((employees) => {
  employees.data.forEach(employee=> {
       const tr=document.createElement('tr')
       tr.innerHTML=
       `<td>${employee.firstname}</td>
       <td>${employee.lastname}</td>
       <td>${employee.email}</td>
       <td>${employee.job}</td>
       <td>${employee.department}</td>
       <td><button id="edit">Edit</button></td>
       <td ><button class="del">Delete</button></td>`;

       document.querySelector('tbody').appendChild(tr)
       console.log(tr)
       tr.querySelector('.del').addEventListener('click', function (){
         remove(employee._id)
       })
    })
  })


//employee_id is the Id from Mongo DB. It is the automated ID given for each entry into the database
//location.reload is to reload the page.
//the way event listener works with HTML is different from how it operates in Javascript review code for better explanation 

function remove(id) {
  fetch('http://localhost:3002/delete-employee/'+id, {
    method:'DELETE',
  })
  .then((res)=>res.json())
  .then(()=>location.reload())
}
