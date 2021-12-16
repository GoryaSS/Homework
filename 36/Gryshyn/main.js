function createDoc() {
    const rootEl = document.querySelector(".playground");
    const headerCourse = document.createElement("header");
    const navCourse = document.createElement("nav");
    const asideCourse = document.createElement("aside");
    const mainCourse = document.createElement("main");
    const footerCourse = document.createElement("footer");

    rootEl.append(headerCourse);
    headerCourse.append(navCourse);
    navCourse.append(navList);
    rootEl.append(asideCourse);
    rootEl.append(mainCourse);
    rootEl.append(footerCourse);

    headerCourse.setAttribute("id", "header-course");
    navCourse.setAttribute("id", "course-nav");
    asideCourse.setAttribute("id", "aside-course");
    mainCourse.setAttribute("id", "main-course");
    footerCourse.setAttribute("id", "footer-course");
    footerCourse.textContent = "JS Course Beetroot";

    const placeHolder = document.createElement("h2");
    placeHolder.append("Welcome dear strange!!!");
    placeHolder.className = "place-course";
    placeHolder.addEventListener("click", handlerPlaceHolder);

    mainCourse.append(placeHolder);
    mainCourse.append(authUser());
}

function handlerPlaceHolder() {
    console.log("Evgeniy");
}

createDoc();
