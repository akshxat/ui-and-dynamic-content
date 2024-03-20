let input = document.getElementById("input");
let addbtn = document.getElementById("addbtn");
let feedback = document.getElementById("feedback");
let list = document.getElementById("list");

function addItem() {

    let listItem = document.createElement("li");

    if (input.value) {
        listItem.textContent = input.value;
        list.appendChild(listItem);
        feedback.textContent = "";
        input.value = "";
        input.focus();
    } else {
        feedback.textContent = "Nothing Entered";
    }
}

addbtn.addEventListener("click", addItem);
