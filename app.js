function initMap() {
    // center coordinates
    var myMapCenter = {
        // lat: 40.785091,
        // lng: -73.968285
        lat: 30.46071,
        lng: -97.74835
    };

    // create map and define which html element will show it
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myMapCenter,
        zoom: 10
    });

    // create marker and set its position

    var marker = new google.maps.Marker({
        map: map,
        position: myMapCenter,
        title: 'This is Telus ATX'
    });

    // add the addListener method
    marker.addListener('click', function(){
        alert('You just clicked on Telus ATX')
    })


   
}