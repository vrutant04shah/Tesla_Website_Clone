const openMenu = document.querySelector('.menuBtn');
const sidebar = document.querySelector('aside');

const closeMenu = () => {
    document.querySelector(selectors:'aside').className ='';
}

//document.getElementById(elementId:'menuBtn').onclick = e => {
//    e.preventDefault();
//    openMenu();
//}

openMenu.addEventListener('click', show);

function show(){
    sidebar.className = 'active';
}

document.querySelector(selectors:'aside').onclick = e => {
    closeMenu();
}

const openVehiclesTab = () => {
    document.querySelector(selectors:'vehicles').className = 'active';
}

const closeVehiclesTab = () => {
    document.querySelector(selectors:'vehicles').className = '';
}

document.querySelector(selectors: 'vehiclestab').onMouseOver = e => {
    openVehiclesTab();
}

