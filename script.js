const dbin = document.getElementById("bin")

//when bin is hovered, check if empty
//should show user whether bin is full

const dbinFull = true;


dbin.onclick = checkStatus

function checkStatus() {
    if(dbinFull) {
        prompt("Empty bin now!")
        dbin.style.backgroundColor = "red"
    } else {
        //
    }
}
