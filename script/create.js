initialize();


function initialize() {
    const list = localStorage.getItem("list");
    if (list) {
        document.querySelector("textarea").value = list;
    }
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("mouseenter", mouseOverButton);
        button.addEventListener("mouseleave", mouseLeaveButton);
    });
}

function create() {
    const list = document.querySelector("textarea").value;
    if (list) {
        console.log(list);
        localStorage.setItem("list", list);
        location = "checklist.html";
    }
}

function del() {
    const list = document.querySelector("textarea");
    list.value = "";
    localStorage.removeItem("list");
}

function mouseOverButton(e) {}

function mouseLeaveButton(e) {}