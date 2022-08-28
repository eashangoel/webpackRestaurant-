import emailLoc from './email.png'
import instaLoc from './instagram.png'
import phoneLoc from './phone.png'
import githubLoc from './github.png'
import silverLoc from './silverware-variant.png'

function createCard(imgsrc, content, head){
    let cardDiv1 = document.createElement('div');
    cardDiv1.classList.add("cardDiv");
    cardDiv1.classList.add("contact");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= head
    cardHeader1.classList.add("contactHeader")
    let image1= new Image();
    image1.classList.add('contactImage')
    image1.src= imgsrc;
    if (head=="Instagram"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://www.instagram.com/eashangoel/";
        cardDiv1.appendChild(p1);
    } else 
    if (head=="GitHub"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://github.com/eashangoel";
        cardDiv1.appendChild(p1);
    } else 
    if (head =="T.R.O.T"){
        let p1 = document.createElement('a');
        p1.classList.add("contactP");
        p1.innerHTML= content;
        p1.href= "https://www.instagram.com/the_republic_of_taste/?hl=en";
        cardDiv1.appendChild(p1);
    }
    else{
    let p1 = document.createElement('p');
    p1.classList.add("contactP");
    p1.innerHTML= content;
    cardDiv1.appendChild(p1);
}

cardDiv1.appendChild(cardHeader1)
cardDiv1.appendChild(image1);
return cardDiv1;
}

export default function getContactContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    mainDiv.classList.add("contact");
    
    let header= document.createElement('h1');
    header.innerHTML= "Eashan's Contact Info";
    
    let cardDiv1 = createCard(emailLoc, "eashan2@gmail.com", "E-mail")
    let cardDiv2 = createCard(instaLoc, "@eashangoel", "Instagram")
    let cardDiv3 = createCard(phoneLoc, "(+91) 9632 969989", "Phone")
    let cardDiv4 = createCard(githubLoc, "Link to GitHub!", "GitHub")
    let cardDiv5 = createCard(silverLoc, "Link to my food page!", "T.R.O.T")

    mainDiv.appendChild(header);
    mainDiv.appendChild(cardDiv1);
    mainDiv.appendChild(cardDiv2);
    mainDiv.appendChild(cardDiv3);
    mainDiv.appendChild(cardDiv4);
    mainDiv.appendChild(cardDiv5);
    return mainDiv;
}

