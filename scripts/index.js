function toggle() {
    let main = document.querySelector("main") ; 
    let sidebar = document.querySelector(".sidebar");
    let a = document.querySelectorAll("a");
    let card = document.querySelectorAll(".card");
    main.classList.toggle("lightmode");
    sidebar.classList.toggle("lightmode2");

    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("lightmode2")
    };

    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle("lightmode2")
    };
}