function autUser() {
  const autComp = document.createElement('form');
  autComp.className = 'aut-course';

  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const passLabel = document.createElement('label');
  const passInput = document.createElement('input');
  nameLabel.textContent = 'Name';
  passLabel.textContent = 'Pass'; 
  
  const butSend = document.createElement('button');
  butSend.textContent = 'Send';
  autComp.append(nameLabel);
  autComp.append(nameInput);
  autComp.append(passLabel);
  autComp.append(passInput);
  autComp.append(butSend);

  return autComp;
}