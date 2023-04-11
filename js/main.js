/**
                                    CREATED ON 31/03/2023 BY JOY SAHA

    Author: JOY SAHA
    Github: https://github.com/TheSonett
    Website live On: 

**/


let menuBtn = document.querySelector('#menu-bar');
let navList = document.querySelector('.navbar');

menuBtn.addEventListener('click', (event)=> {
    menuBtn.classList.toggle('fa-times');
    navList.classList.toggle('active');
});

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navList.classList.remove('active');

    if(window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');
    }
    else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}


function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();


document.querySelector('#toggle-btn').addEventListener('click', (event) => {
    const toggleBtn = document.getElementById('toggle-btn');

    if(toggleBtn.style.color === 'black') {
        toggleBtn.style.color = 'white';
        document.querySelector('body').classList.add('dark-theme');
        document.querySelector('header').classList.add('dark-theme');
    }
    else {
        toggleBtn.style.color = 'black';
        document.querySelector('body').classList.remove('dark-theme');
        document.querySelector('header').classList.remove('dark-theme');
    }
    
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => {
    observer.observe(el);
});