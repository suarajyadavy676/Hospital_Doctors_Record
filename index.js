// fill in javascript code here
const doctorForm = document.getElementById('doctorForm');
const doctorList = document.getElementById('doctorList');

doctorForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const docID = document.getElementById('docID').value;
  const dept = document.getElementById('dept').value;
  const exp = document.getElementById('exp').value;
  const email = document.getElementById('email').value;
  const mbl = document.getElementById('mbl').value;
  let role = 'Fresher';

  if (exp > 5) {
    role = 'Senior';
  } else if (exp >= 2) {
    role = 'Junior';
  }

  if (name && docID && dept && exp && email && mbl) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${docID}</td>
      <td>${dept}</td>
      <td>${exp}</td>
      <td>${email}</td>
      <td>${mbl}</td>
      <td>${role}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    doctorList.appendChild(newRow);

    // Clear form inputs
    doctorForm.reset();
  } else {
    alert('Please fill in all the fields.');
  }
});

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}



