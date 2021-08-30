// Responsive_Header
const toggleCollapse = document.querySelector('.toggle__collapse img');
const header = document.querySelector('.header');


// onclick event on toggle Collapse span tag
toggleCollapse.onclick = (e) => {
    header.classList.toggle("collapse");
    e.target.classList.toggle("toggle-click");
}