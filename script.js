const hamburger = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.mobile-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('ham-open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  body.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('ham-open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    body.classList.toggle('active');
  });
});

// dynamic data

function screensize()
{
    let x;
    if(window.innerWidth > 768){
        x=guests.length;
        return x;
    }
    else {
        x=2;
        return x;
    }
};

const guests = [
  {
    name: 'Stone Cold',
    profession: 'retired professional wrestler',
    description:
      'Steve Austin, Widely regarded as one of the greatest and most influential professional wrestlers of all time, he was integral to the development and success of the World Wrestling Federation during the Attitude Era, an industry boom period in the late 1990s and early 2000s.',
    src: "url('img/steve-austin.jpeg')",
    alt: 'Fighter Stone Cold Steve Austin',
  },
  {
    name: 'Shawn Michaels',
    profession: 'retired professional wrestler',
    description:
      'Michaels is a four-time world champion, having held the WWF Championship three times and WWEs World Heavyweight Championship once. He is also a two-time Royal Rumble winner, the companys first Grand Slam Champion and fourth Triple Crown Champion, as well as a two-time WWE Hall of Fame inductee.',
    src: "url('img/shawn-michaels.jpg')",
    alt: 'retired professional wrestler Shawn Michaels',
  },
  {
    name: 'The Rock',
    profession: 'former professional wrestler, actor',
    description:
      'Dwayne Douglas Johnson, one of the greatest professional wrestlers of all time, he fought during the period in the late 1990s and early 2000s. Johnson wrestled for the WWF for eight years prior to pursuing an acting career.',
    src: "url('img/the-rock.jpg')",
    alt: 'former professional wrestler the rock',
  },
  {
    name: 'Vince McMahon',
    profession: 'businessman, media proprietor and professional wrestling executive',
    description:
      'businessman, media proprietor and professional wrestling executive. He is the executive chairman of WWE, the worlds largest professional wrestling company, having previously served as its chairman, CEO and controlling shareholder for 40 years. He is also the founder and owner of Alpha Entertainment, which he established in 2017 to oversee the 2020 revival of the XFL American football league.',
    src: "url('img/vince-mcmahon.jpg')",
    alt: 'Vincent Kennedy McMahon',
  },
  {
    name: 'The Undertaker',
    profession: 'retired professional wrestler',
    description:
      'Mark William Calaway, one of the greatest professional wrestlers of all time, Calaway spent the vast majority of his career wrestling for WWF/E, and is best known for his critically acclaimed "Deadman" Undertaker gimmick, for which he was inducted into the WWE Hall of Fame in 2022.',
    src: "url('img/undertaker.png')",
    alt: 'Mark William Calaway, the undertaker',
  },
  {
    name: 'John Cena (you cant see him)',
    profession: 'professional wrestler, actor, and former rapper',
    description:
      'John Felix Anthony Cena, is a professional wrestler, actor, and former rapper currently signed to WWE. Cena started learning Mandarin Chinese in 2016 to help the WWE expand its reach, and he spoke in Mandarin at a press conference in China.',
    src: "url('img/john-cena.gif')",
    alt: 'you cant see him cause hes john cena',
  }

];

const guestsContainer = document.getElementsByClassName('guests-container')[0];

function generateGuests(x){
    for(let i = 0; i < guests.length ; i+=1){
    const guestWhat = document.createElement('div');
    guestWhat.classList="guestWhat";
    guestWhat.id = "guestWhat";
    const guestArticle = document.createElement('article');
    guestArticle.id = "guestArt";
    guestArticle.classList = "guestArt flex justify-start";
    if(x<3 && i>1){guestArticle.classList.toggle("hidden");}

    const guestImgContainer = document.createElement('div');
    guestImgContainer.classList = "min-w-[140px] md:flex flex-col";
    guestArticle.appendChild(guestImgContainer);

    const guestImgFig = document.createElement('img');
    guestImgFig.classList = "trans-img";
    if(screensize()>2){
        guestImgFig.src = 'img/transparent.jpg';
    }
    else{
        guestImgFig.src = 'img/flag-mobile.png';
    }
    
    guestImgFig.alt = guests[i].alt;
    guestImgFig.setAttribute = ('alt','transparent image background');
    guestImgContainer.appendChild(guestImgFig);

    const guestImg = document.createElement('div');
    guestImg.classList = "guests-img";
    guestImg.style.backgroundImage = guests[i].src;
    guestImgContainer.appendChild(guestImg);

    const cardContainer = document.createElement('div');
    cardContainer.classList = "card-content md:ml-4 ml-8";
    guestArticle.appendChild(cardContainer);

    const cardTitle = document.createElement('h2');
    cardTitle.classList = "card-title text-xl font-bold";
    cardTitle.textContent = guests[i].name;
    cardContainer.appendChild(cardTitle);

    const cardProf = document.createElement('h3');
    cardProf.classList = "card-pro font-medium text-sm pt-1";
    cardProf.textContent = guests[i].profession;
    cardContainer.appendChild(cardProf);

    const sLine = document.createElement('div');
    sLine.classList = "s-line my-1";
    cardContainer.appendChild(sLine);

    const cardDesc = document.createElement('p');
    cardDesc.classList = "w-max-64 md:w-48 text-sm card-desc";
    cardDesc.textContent = guests[i].description;
    cardContainer.appendChild(cardDesc);

    guestWhat.appendChild(guestArticle);
    guestsContainer.appendChild(guestWhat);
};
}

function unhidden(){
    var guestArticle = document.getElementsByClassName('guestArt');
    for(let i = 2;i < guests.length; i+=1){
        guestArticle[i].classList.toggle("hidden");
    }
    var butMore = document.getElementById('more');
    butMore.classList.toggle('hidden');
}



window.onload = () => {
    generateGuests(screensize());
};
