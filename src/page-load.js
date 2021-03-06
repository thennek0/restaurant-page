import './style.css';
import Icon from './assets/food-pic.png';

const navBar = (()=>{
    const content = document.querySelector("#content");
    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");
    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("page-title");
    pageTitle.textContent = "sussy restaurant"
    const navList = document.createElement("ul");
    const pageOptions = ["Home","Menu","Contact"];
    const navLinks = [];
    for (let i = 0; i < pageOptions.length; i++) {
        const list = document.createElement("li");
        list.classList.add("list-links");
        list.textContent = pageOptions[i];
        list.classList.add("list");
        navList.appendChild(list);
        navLinks.push(list);
    }
    function appendElement() {
        navBar.appendChild(pageTitle);
        navBar.appendChild(navList);
        content.appendChild(navBar);
    }
    return{
        appendElement,navLinks
    }
})();

function mainContent(content) {
    const main = document.createElement("main");
    const firstSection = document.createElement("section");
    firstSection.classList.add("first-section");
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");
    const test = new Image();
    test.src = Icon;
    secondSection.appendChild(test);
    const div1 = document.createElement("div");
    div1.textContent = "Eat Today"
    const div2 = document.createElement("div");
    div2.textContent = "Live Another Day"
    const div3 = document.createElement("div");
    div3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at laoreet lectus. Vestibulum faucibus justo condimentum quam pretium, id bibendum metus commodo.";
    firstSection.appendChild(div1);
    firstSection.appendChild(div2);
    firstSection.appendChild(div3);

    main.appendChild(firstSection);
    main.appendChild(secondSection);
    content.appendChild(main);

}
function loadPage() {
    const content = document.querySelector("#content");
    navBar.appendElement();
    mainContent(content);
}
export { loadPage, mainContent,navBar}