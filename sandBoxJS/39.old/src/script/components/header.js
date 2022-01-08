export function showSearchForm() {
  const formSection = document.querySelector('.navbaf__form'); 
  const formSearch = document.createElement('input');
  const formButton = document.querySelector('.navbaf__form-button')
  formSearch.setAttribute('type', 'search');
  formSearch.setAttribute('placeholder', 'search');
  formSearch.className = 'navbaf__form-item';
  
  formButton.addEventListener('click', (e) =>
    handlerPlaceHolder(e, formButton, formSection.append(formSearch))
  );
  
  function handlerPlaceHolder(event, oldNode, newNode) {
    oldNode.replaceWith(newNode);
  } 

// const input = document.getElementById("search-input");
// const searchBtn = document.getElementById("search-btn");
// const expand = () => {
//   searchBtn.classList.toggle("close");
//   input.classList.toggle("square");
// };
// searchBtn.addEventListener("click", expand);

  
}
showSearchForm();
