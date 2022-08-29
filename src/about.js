import eashanLoc from './eashuimage.jpg'
import emailLoc from './email.png'
import instaLoc from './instagram.png'
import phoneLoc from './phone.png'
import githubLoc from './github.png'
import silverLoc from './silverware-variant.png'

function makeSkillsImage(imgsrc, div){
    let image1= new Image();
    image1.classList.add('aboutSkillsImage')
    image1.src= imgsrc;
    div.appendChild(image1);
}

export default function getAboutContent(){
    
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("mainAboutDiv");
    
    let header= document.createElement('h1');
    header.innerHTML= "About Eashan Goel";
    
    let image1= new Image();
    image1.classList.add('cardAboutImage')
    image1.src= eashanLoc;
    let cardImage1 = document.createElement('div');
    cardImage1.classList.add("aboutImageDiv");
    cardImage1.appendChild(image1);

    let aboutDiv = document.createElement('div');
    aboutDiv.classList.add("aboutDiv");
    let cardHeader1= document.createElement('h2');
    cardHeader1.innerHTML= "My journey"
    let p1 = document.createElement('p');
    p1.innerHTML= `lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn
    lorem fviuwbrovw okrnvow knvow bnwofibnwr onvworinvo rwinv ownwokn`

    let skills1Div = document.createElement('div');
    skills1Div.classList.add("skills1Div");
    let cardHeader2= document.createElement('h2');
    cardHeader2.innerHTML= "Skills"


    aboutDiv.appendChild(cardHeader1);
    aboutDiv.appendChild(p1);

    skills1Div.appendChild(cardHeader2);

    let skillsDiv = document.createElement('div');
    skillsDiv.classList.add("skillsDiv");
    makeSkillsImage(emailLoc, skillsDiv);
    makeSkillsImage(instaLoc, skillsDiv);
    makeSkillsImage(phoneLoc, skillsDiv);
    makeSkillsImage(silverLoc, skillsDiv);
    makeSkillsImage(githubLoc, skillsDiv);
    skills1Div.appendChild(skillsDiv);

    mainDiv.appendChild(header);
    mainDiv.appendChild(cardImage1);
    mainDiv.appendChild(aboutDiv);
    mainDiv.appendChild(skills1Div);
 
    return mainDiv;
}

