import { autUser } from './script/aut.js'
import { createContent } from './script/content.js'
import { createContacts } from './script/contacts.js'


function createDoc() {  
  const headerCourse = document.querySelector('#header-course');
  const mainCourse = document.querySelector('#main-course')
  
  const footerCourse = document.querySelector('#footer-course');
  footerCourse.textContent = 'JS Course Beetroot';  
  
  const loginCourse = document.querySelector('.login-course');
  loginCourse.addEventListener('click', (e) =>
    handlerPlaceHolder(e, placeHolder, autUser())
  );

  const contentCourse = document.querySelector('.content-course');
  contentCourse.addEventListener('click', async (e) => {
    const dataContent = await createContent();
    const mainCourse = document.querySelector('#main-course');
    handlerData(e, mainCourse.firstChild, dataContent);
  });

  const courseContacts = document.querySelector('.contacts-course');
  courseContacts.addEventListener('click', async (e) => {
    const dataContent = await createContacts();
    const mainCourse = document.querySelector('#main-course');
    handlerData(e, mainCourse.firstChild, dataContent);
  });
  
  // кнопка абаут - скидає локал сторедж і переносить на домашню сторінку
  const aboutCourse = document.querySelector('#about-course');
  aboutCourse.onclick = () => localStorage.clear(window.location.reload());
  // кнопка хоум - переносить на домашню сторінку
  const homeCourse = document.querySelector('.course-home');
  homeCourse.onclick = () => window.location.reload();
  // клік по лого - переносить на домашню сторінку
  const logoCourse = document.querySelector('.logo-course');
  logoCourse.onclick = () => window.location.reload();

  const placeHolder = document.querySelector('.place-course');
  let userName = localStorage.getItem('nameUser');
  loginCourse.innerHTML = userName  ?? loginCourse.innerHTML;
  if (userName) {
    placeHolder.append(`Welcome, dear ${userName}`);
  } else {
    placeHolder.append('Welcome, dear stranger');
  }
  placeHolder.addEventListener('click', (welkome) =>
    handlerPlaceHolder(welkome, placeHolder, autUser())
  );
}

function handlerPlaceHolder(event, oldNode, newNode) {
  const loginCourse = document.querySelector('.login-course');
  let userName = localStorage.getItem('nameUser');
  oldNode.replaceWith(newNode);
}

function handlerData(event, oldNode, newNode) {
  oldNode.replaceWith(newNode);
}

createDoc();



