import { autUser } from './components/aut.js'

function createDoc() {  
  const rootEl = document.querySelector('.playground');
  const headerCourse = document.createElement('header');
  const asideCourse = document.createElement('aside');
  const mainCourse = document.createElement('main');
  const footerCourse = document.createElement('footer');
 
  rootEl.append(headerCourse);
  rootEl.append(asideCourse);
  rootEl.append(mainCourse);
  rootEl.append(footerCourse);


  headerCourse.setAttribute('id', 'header-course');
  asideCourse.setAttribute('id', 'aside-course');
  mainCourse.setAttribute('id', 'main-course');
  footerCourse.setAttribute('id', 'footer-course');
  footerCourse.textContent = 'JS Course Beetroot';
  
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



