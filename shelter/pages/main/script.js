/*-------------------------burger-menu---------------------------*/
let elem = document.getElementById("burger-menu__one");
let elem_two = document.getElementById("burger-menu__wraper");
let elem_three = document.getElementById("burger-menu__bloсk");
let elem_four = document.getElementById("burger-menu__two");
let elem_five = document.getElementById("body");
let nav_one = document.getElementsByClassName("navigation__a")[2];
let nav_two = document.getElementsByClassName("navigation__a")[3];
let bmw = document.getElementById("burger-menu__wraper");

function open_burger() {
    elem.classList.add("burger-menu__animation_one");
    elem_two.classList.add("burger-menu__wraper__animation");
    elem_three.classList.add("burger-menu__bloсk__animation");
    elem_four.classList.add("burger-menu__animation_two");
    elem_five.classList.add("body__scroll");
}
function close_burger() {
    elem.classList.remove("burger-menu__animation_one");
    elem_two.classList.remove("burger-menu__wraper__animation");
    elem_three.classList.remove("burger-menu__bloсk__animation");
    elem_four.classList.remove("burger-menu__animation_two");
    elem_five.classList.remove("body__scroll");
}

elem.onclick = open_burger;
elem_four.onclick = close_burger;
nav_one.onclick = close_burger;
nav_two.onclick = close_burger;
bmw.onclick = close_burger;

/*-------------------------------slider------------------------------*/
const BTN_RIGHT_TWO = document.getElementsByClassName("button__right");
const BTN_LEFT_TWO = document.getElementsByClassName("button__left");
const BTN_LEFT = document.querySelector(".button__left");
const BTN_RIGHT = document.querySelector(".button__right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT_TWO[1].removeEventListener("click", moveLeft);
    BTN_RIGHT_TWO[1].removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT_TWO[1].removeEventListener("click", moveLeft);
    BTN_RIGHT_TWO[1].removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT_TWO[1].addEventListener("click", moveLeft);
BTN_RIGHT_TWO[1].addEventListener("click", moveRight);
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    arr.push(Number(itemid_center[0].getAttribute("itemid") - 1));
    arr.push(Number(itemid_center[1].getAttribute("itemid") - 1));
    arr.push(Number(itemid_center[2].getAttribute("itemid") - 1));
    rg();

    BTN_LEFT_TWO[1].addEventListener("click", moveLeft);
    BTN_RIGHT_TWO[1].addEventListener("click", moveRight);
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})

const animals = [
    {
        "id": 1,
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 2,
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 3,
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": 4,
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 5,
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    {
        "id": 6,
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": 7,
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 8,
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

let arr = [];
let rand = 0;
let content = "";
let count = 0;
let slider_block_left = document.getElementById("item-left");
let slider_block_right = document.getElementById("item-right");
let slider_block_center = document.getElementById("item-active");
let button_left = document.getElementsByClassName("button__left");
let button_right = document.getElementsByClassName("button__right");
let slider_block = document.getElementById("carousel");
let itemid_center = document.getElementById("item-active").getElementsByClassName("hover__card");

let number_of_cards = 0;

for (let i = 0; i < 3; i++) {
    getRandomInt(7);
    slider_block_center.innerHTML += `<div class="our-friends__card hover__card" itemId = "${animals[rand].id}">
            <img src = "${animals[rand].img}" alt = "" >
                <p>${animals[rand].name}</p>
                 <button>Learn more</button>
                  </div > `;
}

for (let i = 0; i < 3; i++) {
    getRandomInt(7);
    slider_block_left.innerHTML += `<div class="our-friends__card hover__card" itemId = "${animals[rand].id}">
            <img src = "${animals[rand].img}" alt = "" >
                <p>${animals[rand].name}</p>
                 <button>Learn more</button>
                  </div > `;
}
slider_block_right.innerHTML = slider_block_left.innerHTML;
arr = [];

function getRandomInt(max) {
    let a = Math.floor(Math.random() * max);
    if (arr.includes(a) === true) {
        getRandomInt(7);
    }
    if (arr.includes(a) === false) { arr.push(a); rand = a; }
}

function rg() {
    slider_block_left.innerHTML = "";
    slider_block_right.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        getRandomInt(7);
        slider_block_left.innerHTML += `<div class="our-friends__card hover__card" itemId = "${animals[rand].id}">
                <img src = "${animals[rand].img}" alt = "" >
                    <p>${animals[rand].name}</p>
                     <button>Learn more</button>
                      </div > `;
    }
    slider_block_right.innerHTML = slider_block_left.innerHTML;
    arr = [];
}

/*-------------------------------popup------------------------------*/
clickDOM();
modal.style.display = "none";
function clickDOM() {
    let sliderItems = document.querySelectorAll(".hover__card");
    let modalWraper = document.querySelector(".modal__wraper");
    let modal = document.querySelector(".modal");
    let modalCloseBtn = document.querySelector(".modal__close-btn");
    let modalItem = document.querySelector(".modal__item");
    
    modalItem.onmouseover = function () {
        modalCloseBtn.style.background = "transparent";
    }
    modalItem.onmouseout = function () {
        modalCloseBtn.style.background = "#FDDCC4";
    }

    function closeModal(e) {
        const target = e.target;
        if (!target.closest(".modal") || target.closest(".modal__close-btn")) {
            modalWraper.style.display = "none";
            modal.style.display = "none";
            document.querySelector("body").style.overflow = "visible";
        }
    }

    function openModal() {
        document.querySelector("body").style.overflow = "hidden";
        modalWraper.style.display = "block";
        modal.style.display = "block";
    }

    modalWraper.addEventListener("click", closeModal);

    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].addEventListener("click", openModal);
        sliderItems[i].addEventListener("click", countId);
    }

    let countIdItems;
    function countId() {
        countIdItems = Number(this.getAttribute("itemid"));
        modalItem.innerHTML = `<div class="modal__image"><img src="${animals[countIdItems - 1].img}" alt="${animals[countIdItems - 1].name}"></div>
            <div class="modal__descr">
                <h3 class="title modal__title">${animals[countIdItems - 1].name}</h3>
                <h4 class="title modal__subtitle">${animals[countIdItems - 1].type} - ${animals[countIdItems - 1].breed}</h4>
                <p class="modal__text">${animals[countIdItems - 1].description}</p>
                <ul class="modal-list">
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Age: </span>${animals[countIdItems - 1].age}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Inoculations: </span>${animals[countIdItems - 1].inoculations}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Diseases: </span>${animals[countIdItems - 1].diseases}</h5></li>
                    <li class="modal-list__item"><h5 class="modal-list__title"><span class="modal-list__name">Parasites: </span>${animals[countIdItems - 1].parasites}</h5></li>
                </ul>
            </div>`
    }
}

window.addEventListener("click", clickDOM);