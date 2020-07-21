
var homed = document.querySelector("#homed");
var home = document.querySelector ("#home");
// var home = document.querySelector("a").getAttribute ("#home");
// var home = window.location.assign("#home");
// var aboutd = document.getElementById("aboutd");
// var about = document.getElementById("about");
// var edud = document.getElementById("edud");
// var edu = document.getElementById("edu");


let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

let callback = (entries) => {
  
  entries.forEach(entry => {
      // if (entry.target.id === 'homed') {
      //     divItem.style.background = (entry.isIntersecting) ?
      //         'green' :
      //         'red';
      // }
      if (entry.target.id === 'home') {
          homed.style.background = (entry.isIntersecting) ?
              "yellow" : "black"
          homed.style.color = (entry.isIntersecting) ?
              'black' : 'white';
      }
      // else(entry.target.id === !'homed') {
      //     home.style.background = (null)
      // };

    //   if (entry.target.id === 'about') {
    //       aboutd.style.background = (entry.isIntersecting) ?
    //           "yellow" : "black"
    //       aboutd.style.color = (entry.isIntersecting) ?
    //           'black' : 'white';
    //   }
    //   if (entry.target.id === 'edu') {
    //       edud.style.background = (entry.isIntersecting) ?
    //           "yellow" : "black"
    //       edud.style.color = (entry.isIntersecting) ?
    //           'black' : 'white';
    //   }
  })
};
var observer = new IntersectionObserver(callback, options);
observer.observe(homed);
observer.observe(home);

// observer.observe(aboutd);
// observer.observe(about);
// observer.observe(edud);
// observer.observe(edu);