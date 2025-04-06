const accordionHeaders = document.querySelectorAll(".accordionHeader");
const accordionBodies = document.querySelectorAll(".accordionBody");
const chevronIcons = document.querySelectorAll(".fa-chevron-down");

accordionHeaders.forEach((header,index) => {
    header.addEventListener("click" , () => {
        const bodies = accordionBodies[index];
        const icons = chevronIcons[index]
        bodies.classList.toggle("h-[4rem]")
        icons.classList.toggle("rotate-180")
    });
});
