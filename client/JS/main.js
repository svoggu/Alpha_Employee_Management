fetch('http://127.0.0.1:3002/employees').then(res => res.json()).then(data => {
    data.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');
        employeeCard.innerHTML = `Employee: ${employee.position}`;
        employeeCard.innerHTML += `<br>Name: ${employee.name}`;
        employeeCard.innerHTML += `<br>Age: ${employee.age}`;
        
        document.body.appendChild(employeeCard);
        employeeCard.innerHTML += `<br>id: ${employee.id}`;
        employeeCard.innerHTML += `<br>${employee.name} is ${employee.age} years old and works as a ${employee.position}`;
    })
})