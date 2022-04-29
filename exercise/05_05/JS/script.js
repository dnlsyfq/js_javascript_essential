const ctaElement = document.querySelector(".cta a")

console.log(ctaElement.attributes)

if(ctaElement.hasAttribute("target")){
    console.log(ctaElement.getAttribute("target"))
} else {
    ctaElement.setAttribute("target","_blank");
}




