
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuElements = $$('.nav-menu-image');
const menu= $$('.menu-sidebar');
const closeElements= $$('.menu-sidebar-close');
const barElements= $$('.bars-item');

menuElements.forEach((menuElement, index) => {
    const sidebar= menu[index];
    menuElement.onclick= function (){
       sidebar.style.transform = 'translateX(0%)';
       sidebar.style.transition= 'transform linear .3s';
    }
});

closeElements.forEach((closeElement, index) => {
    const closeSidebar = menu[index];
    closeElement.onclick= function (){
        closeSidebar.style.transform = 'translateX(100%)';
        closeSidebar.style.transition= 'transform linear .3s';
    }
});


barElements.forEach((bar, index) => {
    bar.onclick= function (){   
        $(".bars-item.selected").classList.remove('selected');
        this.classList.add('selected');
    }
});




