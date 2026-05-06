function showFor() {
    const num = parseInt(document.getElementById("numFor").value);
    const text = document.getElementById("textFor").value;

    let result = "";

    for (let i = 1; i <= num; i++) {
        result += i + ". " + text + "<br>";
    }

    document.getElementById("resultFor").innerHTML = result;

    if(isNaN(num)){
        alert("Invalid input! Please enter a valid number.");
    }
}

function showWhile() {
    const num = parseInt(document.getElementById("numWhile").value);
    const text = document.getElementById("textWhile").value;

    let result = "";
    let i = 1;

    while (i <= num) {
        result += i + ". " + text + "<br>";
        i++;
    }

    document.getElementById("resultWhile").innerHTML = result;

    if(isNaN(num)){
        alert("Invalid input! Please enter a valid number.");
    }
}

function showDo() {
    const num = parseInt(document.getElementById("numDo").value);
    const text = document.getElementById("textDo").value;

    let result = "";
    let i = 1;

    do {
        result += i + ". " + text + "<br>";
        i++;
    } while (i <= num);

    document.getElementById("resultDo").innerHTML = result;

    if(isNaN(num)){
        alert("Invalid input! Please enter a valid number.");
    }
}

function clearFor() {
    document.getElementById("numFor").value = "";
    document.getElementById("textFor").value = "";
    document.getElementById("resultFor").innerHTML = "";
}

function clearWhile() {
    document.getElementById("numWhile").value = "";
    document.getElementById("textWhile").value = "";
    document.getElementById("resultWhile").innerHTML = "";
}

function clearDo() {
    document.getElementById("numDo").value = "";
    document.getElementById("textDo").value = "";
    document.getElementById("resultDo").innerHTML = "";
}