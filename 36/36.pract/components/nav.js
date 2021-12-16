// function navMenu()
// {
const navComp = document.createElement('nav');
navComp.className = "nav_comp";

const navList = document.createElement('ul');
navList.className = "nav_list";
  
  // const navItem = document.createElement('li');
  // const navLink = document.createElement('a');
  // navLink.setAttribute('href', '#');
  // navLink.textContent= 'HOME';
  navComp.append(navList);
  // navList.append(navItem);
  // navItem.append(navLink);
//   return navComp;
// }
function createMenu() {
  let menuList = [
    {
        name: "Home",
        link: "#",
    },
    {
        name: "About",
        link: "#",
    },
    {
        name: "Contacts",
        link: "#",
    },
    {
        name: "Products",
        link: "#",
    },
    {
        name: "Login/Logout",
        link: "#",
    },
  ];
  let ocumMassive = "";
  for (key in menuList) {
    ocumMassive +=
      `<li class = "nav_item" title=" ${menuList[key].link} ">
        <a href=" ${menuList[key].link} " > ${menuList[key].name}</a>
      </li>`;
  }
  navList.innerHTML = ocumMassive;
}

createMenu();