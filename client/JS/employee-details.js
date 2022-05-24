fetch('http://localhost:3002/employees').then((res)=> res.json())
.then((employees) => {
  employees.data.forEach(employee=> {
       const tr=document.createElement('tr')
       tr.innerHTML=
       `<td>${employee.firstname}</td>
       <td>${employee.lastname}</td>
       <td>${employee.email}</td>
       <td>${employee.job}</td>
       <td>${employee.department}</td>
       <td><button>Edit</button></td>
       <td><button>Delete</button></td>`;

       document.querySelector('tbody').appendChild(tr)
       console.log(tr)
    })
})
