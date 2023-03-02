const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
const div = document.createElement('div');

div.className = 'tooltip';


tooltips.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();

    div.classList.toggle('tooltip_active');
    div.innerText = element.title;
    const { bottom, left } = element.getBoundingClientRect();
    div.style = `left: ${left}px; top: ${bottom}px`;
    element.insertAdjacentElement('afterEnd', div);
  })
})