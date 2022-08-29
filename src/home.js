import TajLoc from './tajmahal.jpg'
import eiffelLoc from './eiffel_tower.jpg'
import jsLoc from './js-javascript.gif'

function createCard(imgsrc, content, head){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("cardDiv");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= head
    let image1= new Image();
    image1.classList.add('cardImage')
    image1.src= imgsrc;
    let p1 = document.createElement('p');
    p1.innerHTML= content

cardDiv1.appendChild(cardHeader1)
cardDiv1.appendChild(p1);
cardDiv1.appendChild(image1);
return cardDiv1;
}

function makeBanner(imgsrc){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("bannerDiv");
    let image1= new Image();
    image1.classList.add('bannerImage')
    image1.src= imgsrc;
    cardDiv1.appendChild(image1);
    return cardDiv1;
}

export default function getHomeContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    
    let header= document.createElement('h1');
    header.innerHTML= "Eashan's JS Profile";
    
    let cardDiv1 = createCard(TajLoc, "This is the best place I've ever been to", "Taj Mahal")
    let cardDiv2 = createCard(eiffelLoc, "This is the best place I've ever been to", "Eiffel Tower")
    
    let bannerDiv = makeBanner(jsLoc);

    let header2= document.createElement('h1');
    header2.innerHTML= "My projects";

    mainDiv.appendChild(header);
    mainDiv.appendChild(bannerDiv);
    mainDiv.appendChild(header2);
    mainDiv.appendChild(cardDiv1);
    mainDiv.appendChild(cardDiv2);
 
    return mainDiv;
}

