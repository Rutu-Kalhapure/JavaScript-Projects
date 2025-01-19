let userProfile = {
  name: '',
  email: '',
  role: ''
};

function updateProfile() {
  userProfile.name = document.getElementById('name').value;
  userProfile.email = document.getElementById('email').value;
  userProfile.role = document.getElementById('role').value;

  renderProfile();
}

function renderProfile() {
  const profileDisplay = document.getElementById('profileDisplay');
  profileDisplay.innerHTML = `
    <p><strong>Name:</strong> ${userProfile.name}</p>
    <p><strong>Email:</strong> ${userProfile.email}</p>
    <p><strong>Role:</strong> ${userProfile.role}</p>
  `;
}
