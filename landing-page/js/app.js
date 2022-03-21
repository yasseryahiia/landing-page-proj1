/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
    const sections = document.querySelectorAll("section");
    const scLenght = sections.length ;
    const navbar = document.querySelector(".navbar_menu");
    const ul = document.querySelector("#navbar__list");   
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/  

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
    
// Add class 'active' to section when near top of viewport


const viewportSec = ()=>{
    for(const section of sections){
        if(section.getBoundingClientRect().top > 0 &&
        section.getBoundingClientRect().top < 450){
            return section;
        } 
    }    
}
const liveSection = (viewedSection) =>{
    const currentActSec = document.querySelector(".act_class");
    if(currentActSec !== null){
        const currLink = liveAnchor(currentActSec);
        currLink.classList.add("act_class");
        currentActSec.classList.remove("act_class");
        currLink.classList.remove("act_class");
    }
    if(viewedSection !== undefined){
        liveAnchor(viewedSection).classList.add("act_class");
        viewedSection.classList.add("act_class");
    }
}

const liveAnchor = (pickedSec)=> {
    const sectionID = pickedSec.getAttribute("id");
    const anchor = document.querySelector(`a[href*=${sectionID}]`);

    return anchor ;
}
// Scroll to anchor ID using scrollTO event
    
 
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
    document.addEventListener("DOMContentLoaded" , function(){
        const fragment = document.createDocumentFragment();
        for (const section of sections){
            const li = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.setAttribute("href",`#${section.id}`);
            anchor.classList.add("menu__link");
            anchor.textContent = section.dataset.nav;
            li.appendChild(anchor);
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);

    });
// Scroll to section on link click

ul.addEventListener("click",function(event){
    event.preventDefault;
    event.target.scrollIntoView({
        behavior : "smooth",
        block : "center"
    })
    console.log(event.target.getAttribute("href").substring(1))
})
// Set sections as active
document.addEventListener("scroll" , function(){
    const activeSection = viewportSec();
    liveSection(activeSection);

});

