//LOGO SWITCH
const overlays = document.querySelectorAll(".name-logo");




overlays.forEach((overlay) => {
    overlay.addEventListener('click', function() {
        const child = this.querySelector('.team-name-circle');
        if (child) {
            child.classList.toggle('opacity-100');
        }
    });
});


window.onload = function() {
    console.log("Script is running");
    const img = document.getElementById('fallingImage');
    setTimeout(() => {
        img.style.top = '-17px'; 
    }, 200); 
};
