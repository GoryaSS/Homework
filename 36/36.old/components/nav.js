const navComp = document.createElement('nav');
navComp.className = "nav_comp";

const navList = document.createElement('ul');
navList.className = "nav_list";
navComp.append(navList);

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
      `<li class = "nav_item item-${key}" title=" ${menuList[key].link} ">
        <a href=" ${menuList[key].link} " > ${menuList[key].name}</a>
      </li>`;
  }
  navList.innerHTML = ocumMassive;
}

createMenu();