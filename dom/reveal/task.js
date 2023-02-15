const reveals = Array.from(document.getElementsByClassName("reveal")); 

window.addEventListener("scroll", () => {
  reveals.forEach(reveal => {
    const {top, bottom} = reveal.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
      return false;
    }
    reveal.classList.add("reveal_active");
  });
});