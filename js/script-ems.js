// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    ["12345678", "Tim Vo", "1234", "tim.vo@tv.com", "Executive"],
    ["2623423", "Bob Smith", "2345", "bob.smith@tv.com", "Engineering"],
    ["3984565", "John Doe", "3654", "john.doe@tv.com", "Sales"],
    ["4835667", "Jane Doe", "7896", "jane.doe@tv.com", "Marketing"],
    ["5090567", "Rory Woods", "2845", "rory.woods@tv.com", "Engineering"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
let form = $('addForm')
let empCount = $('empCount')
let empTable = $('empTable')


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid);


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let name = $('name').value
    let extension = $('extension').value
    let email = $('email').value
    let department = $('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, name, extension, email, department]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1) // -1 because the first row is the header row
            // BUILD THE GRID
            buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    let oldEmpTbody = empTable.querySelector('tbody')
    // CHECK IF THE TBODY EXISTS AND REMOVE IT
    if (oldEmpTbody) {
        empTable.removeChild(oldEmpTbody)
    }
   
    // REBUILD THE TBODY FROM SCRATCH
    let empTbody = document.createElement('tbody')
    

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        let empRow = document.createElement('tr');

        // LOOP THROUGH EMPLOYEE ARRAY VALUES AND ADD THEM TO THE ROW
        for (let value of employee) {
            let empCol = document.createElement('td');
            empCol.textContent = value;
            empRow.appendChild(empCol);
        }

        // CREATE DELETE BUTTON COLUMN
        let deleteCol = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteCol.appendChild(deleteBtn);
        empRow.appendChild(deleteCol);

        empTbody.appendChild(empRow);
    }
    

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(empTbody)
    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees.length
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};