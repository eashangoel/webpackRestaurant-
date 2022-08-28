import './style.css'
import getHomeContent from './home'
import getContactContent from './contact';
import getAboutContent from './about';

function menuBar (){
    let menuBarDiv= document.createElement('div');
    menuBarDiv.classList.add("menuBar");
    menuBarDiv.innerHTML= `<button type="submit" class="menuButton" id="home">Home</button>
    <button type="submit" class="menuButton" id="about">About us</button>
    <button type="submit" class="menuButton" id="contact">Contact</button> `
    return menuBarDiv;
}

let contentDiv = document.createElement('div');
contentDiv.classList.add('contentDiv');

let homeDiv= getHomeContent();
contentDiv.appendChild(homeDiv);

let menuBarDiv = menuBar();

document.body.appendChild(menuBarDiv);
document.body.appendChild(contentDiv);

let contactButton= document.getElementById("contact");
contactButton.addEventListener('click', function setContactContent(){
    contentDiv.innerHTML='';
    let contactDiv = getContactContent();
    contentDiv.appendChild(contactDiv);
});

let aboutButton= document.getElementById("about");
aboutButton.addEventListener('click', function setAboutContent(){
    contentDiv.innerHTML='';
    let aboutDiv = getAboutContent();
    contentDiv.appendChild(aboutDiv);
});

let homeButton= document.getElementById("home");
homeButton.addEventListener('click', function setHomeContent(){
    contentDiv.innerHTML='';
    contentDiv.appendChild(homeDiv);
});