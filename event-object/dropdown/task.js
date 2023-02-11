const dropdownValue = document.querySelector(".dropdown__value");
const arrDropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener("click", function(event) {
  const dropdown = event.target.closest(".dropdown");
  const dropdownList = dropdown.querySelector(".dropdown__list");

  if (dropdownList) {            
    dropdownList.classList.toggle("dropdown__list_active");
    event.preventDefault();
    return false;            
  }
})

for (let i = 0; i < arrDropdownItem.length; i++) {
  arrDropdownItem[i].addEventListener("click", function(event) {
    dropdownValue.textContent = arrDropdownItem[i].textContent;
    document.querySelector(".dropdown__list_active").classList.remove("dropdown__list_active");
    event.preventDefault();
  })
}