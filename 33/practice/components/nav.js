function navMenu() {
  const navComp = document.createElement('nav');
  navComp.className = "nav-comp";

  const navList = document.createElement('ul');
  const navItem = document.createElement('li');

  navComp.append(navList);
  navComp.append(navItem);

  return navComp;
}