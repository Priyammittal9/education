const menu = document.getElementById('Menu')
const close = document.getElementById('Close')
const menubar = document.getElementById('menu_section')
function toggleshow(){
  close.style.display="block"
  menu.style.display="none"
  menubar.classList.toggle("active");

}
function togglehide(){
  close.style.display="none"
  menu.style.display="block"
  menubar.classList.remove("active");

}
