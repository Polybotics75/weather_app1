
function checkNetwork(){
    //checking internet connection
    const noNetworkDiv = document.querySelector('.no-network-div');
    window.addEventListener("online", () => {
        noNetworkDiv.style.display = "none";
    })

    window.addEventListener("offline", () => {
        noNetworkDiv.style.display = "flex";
    })
}

function reloadIndex(){
    window.location = "./index.html";
}

window.onload = checkNetwork();