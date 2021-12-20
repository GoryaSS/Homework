export async function createContacts() {
  const containerContacts = document.createElement('div');
  containerContacts.className = 'contacts-course';
  const dataServer = await getData();
  dataServer.forEach(item => {
    containerContacts.append(showElement(item.name, item.address));
  });
  return containerContacts;
}

function showElement(name, address) {
  const itemElement = document.createElement('div');
  itemElement.className = 'item-data'

  const nameData = document.createElement('h3');
  nameData.textContent = name;

  // const userEmail = document.createElement('h3'); // не робить
  // userEmail.textContent = email;

  const textData = document.createElement('p');
  const userAdsress = (JSON.stringify(address));
  textData.textContent = userAdsress;

  itemElement.append(nameData);
  // itemElement.append(userEmail);
  itemElement.append(textData);
  return itemElement;
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = [];
  if (response.ok) {
    data = await response.json();
  }
  return data;
}