function initialize() {     
    var myLatlng = new google.maps.LatLng(59.962200, 30.294830);
    var myOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions); 
};