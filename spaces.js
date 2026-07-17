function showPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}


function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}


window.addEventListener("click", function (event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

function check(passID, imageName, correctPassword) {
    const PassCheck = document.getElementById(passID).value;

    if (PassCheck === correctPassword){
        
        const link = document.createElement('a');
        
        link.href = imageName; 
        
        link.download = imageName; 
        
        link.click();
        
    } else {
        alert("Wrong passcode! Try again 🚪🔒");
    }
}



