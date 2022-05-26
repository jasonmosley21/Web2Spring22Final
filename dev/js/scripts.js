let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let closeBtn = document.querySelector("#close-btn");

let canSeeMenu = false;

// console.log("this is can see" + canSeeMenu)

burgerBtn.addEventListener("click", () => {
    console.log("this is can see" + canSeeMenu)

    if (!canSeeMenu) {
        mainMenu.classList.add("show-menu");
        // hide the burger
        burgerBtn.classList.add("show-hide");

        // show the X
        closeBtn.classList.remove("show-hide");


        canSeeMenu = true;
        console.log("show")


    } else {
        mainMenu.classList.remove("show-menu");
        // hide the burger
        burgerBtn.classList.remove("show-hide");

        // hide the X
        closeBtn.classList.add("show-hide");
        canSeeMenu = false;
        console.log("hide")
    }
})




closeBtn.addEventListener("click", () => {
    mainMenu.classList.remove("show-menu");
    canSeeMenu = false;
})