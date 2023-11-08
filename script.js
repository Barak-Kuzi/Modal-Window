const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(`.close-modal`);
const openModalBtn = document.querySelectorAll(`.show-modal`);

for (let i = 0; i < openModalBtn.length; i++)
    openModalBtn[i].addEventListener("click", clickOnShowModal);

closeModalBtn.addEventListener("click", clickOnXBtnOrOverlay);
overlay.addEventListener("click", clickOnXBtnOrOverlay);
document.addEventListener(`keydown`, (event) => {
    if (event.key === `Escape` && !modal.classList.contains(`hidden`))
        clickOnXBtnOrOverlay();
    // Another option
    //const keyPressed = event.keyCode;
    //if (keyPressed === 27) clickOnXBtnOrOverlay();
});

function clickOnShowModal(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // Another option
    //modal.style.display = `block`;
    //overlay.style.display = `block`;
}

function clickOnXBtnOrOverlay(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

