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
  footerCourse.textContent = 'AAAAAAAAAAAA';
  
  const placeHolder = document.createElement('h2');
  placeHolder.append('Welcome dear Ihor');
  placeHolder.className = 'place-course';
  placeHolder.addEventListener('click', handlerPlaceHolder);

  headerCourse.append(navMenu());
  mainCourse.append(placeHolder);
  mainCourse.append(autUser());

}
function handlerPlaceHolder() {
  console.log("Evgen");
}

createDoc();
