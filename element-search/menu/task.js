const arrMenuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuItem = document.querySelectorAll('.menu__item');


for (let i = 0; i < arrMenuLinks.length; i++) {
  const link = arrMenuLinks[i];
  const item = link.closest('.menu__item');
  const subMenu = item.querySelector('.menu_sub');
  link.onclick = function () {
    if (subMenu) {
      subMenu.className = "menu menu_sub menu_active";
      return false;
    }
  };
}
