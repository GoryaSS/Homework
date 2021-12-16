const navList = document.createElement("ul");

function createMenu() {
    let menuList = [
        {
            name: "Home",
            link: "http://google.com",
        },
        {
            name: "About",
            link: "http://google.com",
        },
        {
            name: "Contacts",
            link: "http://google.com",
        },
        {
            name: "Products",
            link: "http://google.com",
        },
        {
            name: "Login/Logout",
            link: "http://google.com",
        },
    ];

    let ocumMassive = "";

    for (key in menuList) {
        ocumMassive += `<li title=" ${menuList[key].link} ">
                  <a href=" ${menuList[key].link} " > ${menuList[key].name}</a>
                </li>`;
    }
    navList.innerHTML = ocumMassive;
}

createMenu();
