

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('change');
    
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
  }

  window.addEventListener("load", function() {
    var loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.opacity = 0;
    setTimeout(function() {
      loaderWrapper.style.display = "none";
    }, 1000);
  });
  //use microsoft edge, turn on media autoplay on settings
  window.addEventListener('load', () => {
    homemusic.muted = false;
    homemusic.play();
  });