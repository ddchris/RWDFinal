function setTopMenu() {
  let mobileMenuLogo = document.getElementById('mobileMenuLogo')
  if (mobileMenuLogo) {
    mobileMenuLogo.addEventListener('click', () => {
      let menu = document.getElementById('topMenu')
      if ([...topMenu.classList].includes('topMenu-show')) {
        topMenu.classList.remove('topMenu-show')
      } else {
        topMenu.classList.add('topMenu-show')
      }
    })
  }
}
let map
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 22.613077,
      lng: 120.343064
    },
    zoom: 16
  })

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 22.613077, lng: 120.343064}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}