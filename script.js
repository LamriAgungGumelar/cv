/* =========================================
   MOBILE SIDEBAR
========================================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (sidebar.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu */

document.querySelectorAll(".side-nav a").forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typingText");

const words = [

    "Technology",
    "PC Hardware",
    "Marketplace",
    "Digital Marketing",
    "Product Management",
    "Problem Solving"

];

let wordIndex = 0;
let charIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1700);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 80
    );
}


typingEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".side-nav a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================
   CURSOR
========================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorOutline =
    document.querySelector(".cursor-outline");


document.addEventListener(
    "mousemove",
    (event) => {

        cursorDot.style.left =
            `${event.clientX}px`;

        cursorDot.style.top =
            `${event.clientY}px`;


        cursorOutline.animate(

            {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            },

            {
                duration: 400,
                fill: "forwards"
            }

        );

    }
);


/* Cursor hover */

document.querySelectorAll(
    "a, button, .project-card, .skill-item"
).forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorOutline.style.width = "55px";

            cursorOutline.style.height = "55px";

            cursorOutline.style.borderColor =
                "#ff3b30";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorOutline.style.width = "35px";

            cursorOutline.style.height = "35px";

            cursorOutline.style.borderColor =
                "rgba(255,255,255,.5)";

        }
    );

});


/* =========================================
   MOUSE PAGE GLOW
========================================= */

const pageGlow =
    document.querySelector(".page-glow");


document.addEventListener(
    "mousemove",
    event => {

        pageGlow.animate(

            {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            },

            {
                duration: 1000,
                fill: "forwards"
            }

        );

    }
);


/* =========================================
   PROJECT IMAGE FALLBACK
========================================= */

document.querySelectorAll(
    ".project-image img"
).forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.display = "none";

        }
    );

});


/* =========================================
   PREVENT CURSOR ON MOBILE
========================================= */

function checkMobile() {

    const isMobile =
        window.matchMedia(
            "(max-width: 800px)"
        ).matches;

    if (isMobile) {

        cursorDot.style.display = "none";

        cursorOutline.style.display = "none";

    } else {

        cursorDot.style.display = "block";

        cursorOutline.style.display = "block";

    }

}


checkMobile();

window.addEventListener(
    "resize",
    checkMobile
);
