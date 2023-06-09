var header = document.getElementById('header');
var menu = document.getElementById('menu');
var content = document.getElementById('content');
var showSidebar = false;

function button() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        menu.style.marginLeft = '-0vw';
        menu.style.animationName = 'showSidebar';
        content.style.filter = 'blur(1px)';
    }
    else {
        menu.style.marginLeft = '-100vw';
        menu.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        button();
    }
}