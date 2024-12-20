function toggleScrollUpButton() {
    let TOP_OFFSET = 200;
	let scrollY = window.scrollY;
    if (scrollY > TOP_OFFSET) {
        document.getElementById('scrollUpArrow').classList.add('visible');
    }
    else {
        document.getElementById('scrollUpArrow').classList.remove('visible');
    }
}

window.addEventListener('scroll', () => {
	toggleScrollUpButton();
});

var newFeedbacks = document.getElementById('hiddenFeedbacks');
var button = document.getElementById('showAllFeedbacks');

var show = true;

button.onclick = showAllFeedbacks
    
function showAllFeedbacks() {
    newFeedbacks.classList.toggle('hidden');
    newFeedbacks.classList.toggle('loaded');
    button.classList.toggle('loaded');
};

let buttonUp = document.getElementById('scrollUpArrow');
buttonUp.onclick = scrollUp;

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let subPopBut = document.getElementById('subscribePopupButton');
subPopBut.onclick = showModalWindow;

function showModalWindow() {
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('popupWindow').classList.add('visible');
}

let subPopCloseBut = document.getElementById('subscribePopupCloseButton');
subPopCloseBut.onclick = closeModalWindow;

function closeModalWindow() {
    document.getElementById('overlay').classList.remove('visible');
    document.getElementById('popupWindow').classList.remove('visible');
}


let helpPopBut = document.getElementById('help_button');
let helpPopBut2 = document.getElementById('help_button2');
helpPopBut.onclick = showModalHelp;
helpPopBut2.onclick = showModalHelp;

function showModalHelp() {
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('helpWindow').classList.add('visible');
}

let helpCloseBut = document.getElementById('HelpCloseButton');
helpCloseBut.onclick = closeModalHelp;

function closeModalHelp() {
    document.getElementById('overlay').classList.remove('visible');
    document.getElementById('helpWindow').classList.remove('visible');
}


document.getElementById('menuButton').onclick = initMobileMenu;

function initMobileMenu() {
    document.getElementById('menuButton').classList.toggle('active');
    document.getElementById('menuContainer').classList.toggle('active');
}
