// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// import "./styles.css";

// Select and cache the <main> element in a variable named mainEl.
//1
let mainEl= document.querySelector('main');

console.log(mainEl);
//2 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

mainEl.style.backgroundColor= 'var(--main-bg)'
//3
let h1 =document.createElement('h1');
h1.textContent='dom manupulation';
mainEl.appendChild(h1);
//4Add a class of flex-ctr to mainEl.

mainEl.classList.add('flex-ctr');
//part2
let topMenu=document.getElementById('top-menu');
//step2-part2
topMenu.style.height='100%';
//step3-part2
topMenu.style.backgroundColor='var(--top-menu-bg)';

//step4
topMenu.classList.add('flex-around');
//part3


    menuLinks.forEach(link =>{

        let anchorEl =document.createElement('a');
        anchorEl.href=link.href;

        anchorEl.textContent=link.text;
        topMenu.appendChild(anchorEl);

    });
    
//lab2

//part1
// let subMenuEl= document.querySelector(');
//     console.log(subMenuEl);

//     subMenuEl.style.height='100%';

//Part 2: Adding Additional HTML and CSS


// Part 3: Creating the Submenu

subMenuEl=document.querySelector('#sub-menu');
subMenuEl.style.height="100%";
subMenuEl.style.backgroundColor='--top-menu-bg';
subMenuEl.classList.add('fle-around');
subMenuEl.style.position="absolute";
subMenuEl.style.top='0';
// Part 4: Adding Menu Interaction

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


//   Part 4: Adding Menu Interaction


const topMenuLinks = document.querySelectorAll("#top-menu a")
// console.log(topMenuLinks);
topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.localName !== "a") {
        return
    }
    e.target.classList.toggle("active")
    topMenuLinks.forEach((aTag) => {
        if (aTag !== e.target) {
            aTag.classList.remove("active")
        }
    })
    // console.log(e.target.classList.contains("active"));

    // Part 5: Adding Submenu Interaction
    
    let isActive = e.target.classList.contains("active")
    let index = getIndex(topMenuLinks, e.target)
    let hasSubLink = menuLinks[index].subLinks
    
    
    if (isActive && hasSubLink) {
        subMenuEl.style.top = "100%"
        buildSubmenu(hasSubLink)
    } else {
        subMenuEl.style.top = "0%"
        mainEl.firstChild.textContent = e.target.textContent
    }
})
function getIndex(nodeList, target) {
    for ( let i in nodeList) {
        if (nodeList[i] === target)
        return i
    }
    return -1
}
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ""
    subLinks.forEach((link) => {
        let a = document.createElement("a")
        a.hasAttribute(`href`, link.href)
        a.textContent = link.text
        subMenuEl.appendChild(a)
    })
}
subMenuEl.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.localName !== "a") {
        return
    }
    console.log(e.target);
    subMenuEl.style.top = "0"
    let topMenuTag = document.querySelector(".active")
    topMenuTag.classList.remove("active")
    
    mainEl.firstChild.textContent = e.target.textContent
    
})