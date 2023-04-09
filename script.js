const observer=new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var nav = document.getElementById('navlist');

    function toggleNav () {       

        if ( nav.style.display === "" )
        nav.style.display = "block";

        else
        nav.style.display = "";
    }


    function windowResizeHandler () {
        if ( screen.width > 500 )
        nav.style.display = "";
    }

    window.addEventListener("resize", windowResizeHandler);


let bushback = document.getElementById('bushback');
let bushfront = document.getElementById('bushfront');
let yccegate = document.getElementById('yccegate');
let text = document.getElementById('venuetxt');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let parallaxSection = document.querySelector('.parallax');

    if (parallaxSection.getBoundingClientRect().top <= 0) {
        bushback.style.bottom = (value - parallaxSection.offsetTop) * -0.5 + 'px';
        yccegate.style.bottom = (value - parallaxSection.offsetTop) * -0.15 + 'px';
        bushfront.style.bottom = (value - parallaxSection.offsetTop) * -0.75 + 'px';
        text.style.marginTop = (value - parallaxSection.offsetTop) * 2.5 + 'px';
    } else {
        bushback.style.bottom = 0;
        yccegate.style.bottom = 0;
        bushfront.style.bottom = 0;
        text.style.marginTop = 0;
    }
});
