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
 * Define Global Variables
 * 
*/
let allSec = document.querySelectorAll('section');//have a variable for all sections
let nav = document.getElementById('navbar__list');//variable for nav bar element
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
let frag = document.createDocumentFragment() /*creat a document fragment as a container for all the nav's children  */
allSec.forEach(function(section,i){let l = document.createElement('li');/*create list for every section  */
      let text=section.getAttribute('data-nav') /*get the name of lists from its attreibute*/
      let a = document.createElement('a'); /*create link for each list to navigate sections */
      let t = document.createTextNode(text); /*create text node to add the name of each list of the nav bar according the name of section */
      let list = frag.appendChild(l); /*add lists to the fragment which will be a child of nav */
      let link = list.appendChild(a); /*add link to each list as its child */
      link.appendChild(t); /*add links name */
      link.className='menu__link'; /*add the CSS class to links */
      link.addEventListener('click',function(){//event listener to navigate to the section by clicking its link
            section.scrollIntoView({behavior:"smooth",block:"start"});// Scroll to anchor ID using scrollTO event
      })
});
nav.appendChild(frag); /*add the fragment and all contents to the nav bar // Build menu */

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function (){
      let options={
            rootMargin : "0px 0px 0px 0px",
            threshold: .8 ,
            };
      let observe = new IntersectionObserver(function(allSec,observe){//to observe which section in the viewport
                  allSec.forEach((section)=>{
                              if(section.isIntersecting){ //if the section in the viewport 
                                          section.target.classList.add('your-active-class');//add this class to the target section
                                          let links=document.getElementsByClassName('menu__link');
                                          let secText=section.target.getAttribute('data-nav');
                                          for (let a of links){a.classList.remove('hover')
                                                let innertextLink=a.innerText
                                                if (innertextLink===secText){
                                                a.classList.add('hover');// add class to the nav of the active section 
                                                }else{
                                                a.classList.remove('hover')// remove the class from other nav links
                                                }
                                          }
                              }else {
                                          section.target.classList.remove('your-active-class');//remove the class when section isn't in viewport
                                          observe.unobserve(section.target);
                                    };
                  });
      },options);
      allSec.forEach((section)=>{
            observe.observe(section);//observe the section that is intersecting with viewport
      });
});
//add button to go to the top of the page
const main = document.querySelector('main');//the main element to create the button after its end
main.insertAdjacentHTML('afterend',
      '<button id="button"> Top  </button>');//create the button & its id & anchor
let btn = document.getElementById('button');
btn.addEventListener('click',function(){
            main.scrollIntoView({behavior:"smooth",block:"start"});// Scroll to anchor ID using scrollTO event
      })
      
      
      
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active