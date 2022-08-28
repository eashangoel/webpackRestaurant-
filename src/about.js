import TajLoc from './tajmahal.jpg'
import eiffelLoc from './eiffel_tower.jpg'

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

export default function getAboutContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    
    let header= document.createElement('h1');
    header.innerHTML= "Eashan's ABOUT INFO";
    
    let cardDiv1 = createCard(TajLoc, "ABOUT PAGEEEE", "Taj Mahal")
    let cardDiv2 = createCard(eiffelLoc, "ABOUT PAGEEEE", "Eiffel Tower")
    
    mainDiv.appendChild(header);
    mainDiv.appendChild(cardDiv1);
    mainDiv.appendChild(cardDiv2);
 
    return mainDiv;
}

