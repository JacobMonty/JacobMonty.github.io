const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {

    //toggling menu visisiblity
    document.body.classList.toggle("show-mobile-menu");

});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());  