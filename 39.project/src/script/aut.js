export function autUser() {
  const autComp = document.createElement('form');
  autComp.setAttribute('name', 'user-data');
  autComp.setAttribute('autocomplete', 'off');
  autComp.className = 'aut-course';

  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const passLabel = document.createElement('label');
  const passInput = document.createElement('input');
  nameLabel.textContent = 'name';
  passLabel.textContent = 'pass'; 

  nameInput.setAttribute('name', 'nameuser');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'aut-course__input');
  nameInput.addEventListener('focus', (event) => {
    event.target.style.background = 'var(--btn-hover-color)';
  });
  nameInput.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });


  passInput.setAttribute('name', 'passworduser');
  passInput.setAttribute('type', 'password');
  passInput.addEventListener('focus', (event) => {
    event.target.style.background = 'var(--btn-hover-color)';
  });
  passInput.addEventListener('blur', (event) => {
    event.target.style.background = '';
  });

  const butSend = document.createElement('input');
  butSend.setAttribute('type', 'submit');
  butSend.setAttribute('class', 'aut-course_send-button');
  butSend.setAttribute('value', 'send');
  butSend.addEventListener('click', sendForm)

  autComp.append(nameLabel);
  autComp.append(nameInput);
  autComp.append(passLabel);
  autComp.append(passInput);
  autComp.append(butSend);

  return autComp;
}

function sendForm() {
  let userName = document.forms['user-data'].nameuser;
  let pasName =  document.forms['user-data'].passworduser;
  localStorage.setItem('nameUser', userName.value);
  localStorage.setItem('passwordUser', pasName.value);
}

