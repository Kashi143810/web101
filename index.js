document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

    // Create user object
    const user = {
        name,
        email,
        password,
        dob,
        acceptedTerms
    };

    // Save user data to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Add user to the table
    addUserToTable(user);

    // Notify user of successful registration
    alert('Registration successful!');

    // Reset the form
    this.reset();
});

// Function to add user to the table
function addUserToTable(user) {
    const tableBody = document.querySelector('#usersTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.dob}</td>
        <td>${user.acceptedTerms}</td>
    `;

    tableBody.appendChild(row);
}

// Load existing users on page load
window.onload = function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => addUserToTable(user));
};
