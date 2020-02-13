// particlesJS("./assets/particles.js", "./assets/particlesjs-config.json");
    
let image = document.getElementById('portfolioImage');
let desc = document.getElementById('portfolioDescription');
let link = document.getElementById('portfolioLink');

let nyt = document.getElementById('clickNYT');
let hubble = document.getElementById('clickHubble');
let static = document.getElementById('clickStatic');
let css = document.getElementById('clickCSS');

nyt.addEventListener('click', nytContent);
hubble.addEventListener('click', hubbleContent);
static.addEventListener('click', staticContent);
css.addEventListener('click', cssContent);




function nytContent(event) {
    image.setAttribute('src', "./assets/nytImage.png");
    desc.textContent = nytDesc
    link.setAttribute('href', nytLink)
    nyt.setAttribute('class', 'nav-link active')
    hubble.setAttribute('class', 'nav-link')
    static.setAttribute('class', 'nav-link')
    css.setAttribute('class', 'nav-link')
}

function hubbleContent(event) {
    image.setAttribute('src', "./assets/hubbleImage.png");
    desc.textContent = hubbleDesc
    link.setAttribute('href', hubbleLink)
    nyt.setAttribute('class', 'nav-link')
    hubble.setAttribute('class', 'nav-link active')
    static.setAttribute('class', 'nav-link')
    css.setAttribute('class', 'nav-link')
}

function staticContent(event) {
    image.setAttribute('src', "./assets/staticImage.png");
    desc.textContent = staticDesc
    link.setAttribute('href', staticLink)
    nyt.setAttribute('class', 'nav-link')
    hubble.setAttribute('class', 'nav-link')
    static.setAttribute('class', 'nav-link active')
    css.setAttribute('class', 'nav-link')
}

function cssContent(event) {
    image.setAttribute('src', "./assets/cssImage.png");
    desc.textContent = cssDesc
    link.setAttribute('href', cssLink)
    nyt.setAttribute('class', 'nav-link')
    hubble.setAttribute('class', 'nav-link')
    static.setAttribute('class', 'nav-link')
    css.setAttribute('class', 'nav-link active')
}

let nytDesc = 'This project accesses the New York Time Article Search with simple search parameters and returns relevent articles.'
let staticDesc = 'This project is an accurate cloning of the Eleven Fifty Academy Website. It highlights my attention to detail and ability in HTML and CSS.'
let hubbleDesc = 'The NASA Image Search Application queries the NASA Image Repository.  It provides an easy to use interface for accessing brilliant over 140,000 images related to space exploation.'
let cssDesc = `This is a fun CSS Creature. This was my first project. It reminds me where I started and how much I've learned.`

let nytLink = 'https://rmmassie.github.io/NYT-API/'
let staticLink = 'https://rmmassie.github.io/staticWebsite/'
let hubbleLink = 'https://nasa-image-search-api.web.app/'
let cssLink = 'https://codepen.io/rmmassie/pen/MWYRLbz'