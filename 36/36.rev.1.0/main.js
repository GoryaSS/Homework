import { autUser } from './components/aut.js'


function createDoc() {  
  const headerCourse = document.querySelector('#header-course');

  const mainCourse = document.querySelector('#main-course')
  const footerCourse = document.querySelector('#footer-course');
  footerCourse.textContent = 'JS Course Beetroot';  

  const loginCourse = document.querySelector('.nav_item');
  // loginCourse.addEventListener('click', (e) =>
  //   handlerPlaceHolder(e, placeHolder, autUser()));

  const placeHolder = document.createElement('h2');
  let userName = localStorage.getItem('nameUser');
  if (userName) {
    placeHolder.append(`Welcome, dear ${userName}`);
  } else {
    placeHolder.append('Welcome, dear stranger');
}
  placeHolder.className = 'place-course';
  placeHolder.addEventListener('click', (sergey) =>
    handlerPlaceHolder(sergey, placeHolder, autUser())
  );

  headerCourse.append(navComp);
  navComp.append(navList);
  mainCourse.append(placeHolder);
}

function handlerPlaceHolder(event, oldNode, newNode) {
  console.log('Evgen', event);
  oldNode.replaceWith(newNode);
}

createDoc();



