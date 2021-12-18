export function autUser() {
  const autComp = document.createElement('form');
  autComp.setAttribute('name', 'user-data');
  autComp.className = 'aut-course';

  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const passLabel = document.createElement('label');
  const passInput = document.createElement('input');
  nameLabel.textContent = 'Name';
  passLabel.textContent = 'Pass'; 

  nameInput.setAttribute('name', 'nameuser');
  passInput.setAttribute('name', 'passworduser');
  passInput.setAttribute('type', 'password');

  const butSend = document.createElement('input');
  butSend.setAttribute('type', 'submit');
  butSend.textContent = 'Send';
  butSend.addEventListener('click', sendForm)

  autComp.append(nameLabel);
  autComp.append(nameInput);
  autComp.append(passLabel);
  autComp.append(passInput);
  autComp.append(butSend);

  return autComp;
}

function sendForm(igor) {
  // igor.preventDefault();
  let userName = document.forms['user-data'].nameuser;
  let pasName =  document.forms['user-data'].passworduser;
  localStorage.setItem('nameUser', userName.value);
  
  
  // console.log("", userName.value, pasName.value);
}