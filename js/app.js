document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const hamburger = document.querySelector(".hamburger-nav img");
  const closeBtn = document.querySelector(".close-sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});


const  scrollBtn = document.getElementById("scrollTopBtn");

const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
   const footerTop = footer.getBoundingClientRect().top
   const windowHeight = window.innerHeight;

   if(footerTop <= windowHeight) {
     scrollBtn.classList.add("show");

    } else {
     scrollBtn.classList.remove("show");  
   }
  });


  scrollBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    }); 
  });