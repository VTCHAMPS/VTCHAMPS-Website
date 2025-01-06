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




// CHANGE CHAMPION IMAGE
//const leagueImage = document.querySelector('.header-logo-image');


//const teamImage = document.createElement('img');
//teamImage.src = 'https://yahoofantasysports-res.cloudinary.com/image/upload/t_s192sq/fantasy-logos/37444957561_80afbd.jpg'; // Replace with your new image URL
//teamImage.alt = 'Team Image';
//teamImage.classList.add('existingChampion');
//
//leagueImage.parentNode.insertBefore(teamImage, leagueImage.nextSibling);

