function generatePassword() {
  const length = document.getElementById('length').value;
  const includeChars = document.getElementById('includeChars').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;

  let charset = '';
  if (includeChars) charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?/~`-=';
  if (includeNumbers) charset += '0123456789';

  if (!charset) {
    alert('Please select at least one option');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    password += charset[randIndex];
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

function updateLength() {
  const length = document.getElementById('length').value;
  document.getElementById('length-value').textContent = length;
  generatePassword();
}

generatePassword();
