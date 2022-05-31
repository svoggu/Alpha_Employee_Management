//This is to get Employee Details from the database and post in the table
fetch("http://localhost:3002/employees")
  .then((res) => res.json())
  .then((employees) => {
    employees.data.forEach((employee) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${employee.firstname}</td>
       <td>${employee.lastname}</td>
       <td>${employee.email}</td>
       <td>${employee.job}</td>
       <td>${employee.department}</td>
       <td><button id="edit">Edit</button></td>
       <td ><button class="del">Delete</button></td>`;

      document.querySelector("tbody").appendChild(tr);
      console.log(tr);
      tr.querySelector("#edit").addEventListener("click", function () {
        showModal(employee);
      });
      tr.querySelector(".del").addEventListener("click", function () {
        remove(employee._id);
      });
    });
  });

function showModal(employee) {
  let cancelButton = document.getElementById("cancel");
  let dialog = document.getElementById("favDialog");

  function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }

  dialog.showModal();
  openCheck(dialog);

  // Form cancel button closes the dialog box
  cancelButton.addEventListener("click", function () {
    dialog.close("Closed");
    openCheck(dialog);
  });

  document.getElementById("inputFirst").value = employee.firstname;
  document.getElementById("inputLast").value = employee.lastname;
  document.getElementById("inputEmail").value = employee.email;
  document.getElementById("inputJob").value = employee.job;
  document.getElementById("inputDep").value = employee.department;

  document.getElementById("press").addEventListener("submit", function (event) {
    updateEmployee(event, employee._id);
  });
}

function updateEmployee(event, id) {
  event.preventDefault();

  //Send the value to the server
  let firstname = document.getElementById("inputFirst").value;
  let lastname = document.getElementById("inputLast").value;
  let email = document.getElementById("inputEmail").value;
  let job = document.getElementById("inputJob").value;
  let department = document.getElementById("inputDep").value;

  fetch(`http://localhost:3002/update-employee/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      job: job,
      department: department,
    }),
  })
    .then(function (res) {
      res.json();
      location.reload()
    })
    .catch((err) => {
      console.log(err);
    });
}

function remove(id) {
  fetch(`http://localhost:3002/delete-employee/${id}` , {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => location.reload());
}
