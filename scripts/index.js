function toggle() {
    let main = document.querySelector("main") ; 
    let sidebar = document.querySelector(".sidebar");
    let a = document.querySelectorAll("a");
    let card = document.querySelectorAll(".card");
    let hide = document.querySelectorAll(".hide > i");
    let td = document.querySelectorAll("td");
    main.classList.toggle("lightmode2");
    sidebar.classList.toggle("lightmode");
    console.log(hide)
    for (let i = 0; i < hide.length; i++) {
        hide[i].classList.toggle("lightmode3")
    };

    for (let i = 0; i < td.length; i++) {
        td[i].classList.toggle("lightmode2")
    };

    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("lightmode")
    };

    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle("lightmode")
    };
}