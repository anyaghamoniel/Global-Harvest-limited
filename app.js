/* ==========================================
   ANTCASTLE AGRO COMMODITIES
   Main JavaScript
========================================== */

// =========================
// Sticky Navigation
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        header.style.padding = "14px 8%";

    } else {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "none";
        header.style.padding = "18px 8%";

    }

});

// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =========================
// Scroll To Top Button
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "scrollTop";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
right:30px;
bottom:110px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#0f5132;
color:white;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.25);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Highlight Active Nav Link
// =========================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    if(link.href===window.location.href){

        link.style.color="#0f5132";
        link.style.fontWeight="700";

    }

});

// =========================
// Fade Elements On Scroll
// =========================

const revealElements=document.querySelectorAll(".card,.feature,.intro,.cta");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:.2

});

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s ease";

    observer.observe(el);

});

// =========================
// Button Ripple Effect
// =========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-button.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-button.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

// =========================
// Dynamic Footer Year
// =========================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} AntCastle Agro Commodities`;

}

// =========================
// Console Branding
// =========================

console.log("%c🐜 AntCastle Agro Commodities","font-size:24px;color:#0f5132;font-weight:bold;");
console.log("Connecting Global Buyers with Trusted Nigerian Suppliers.");
