// main.js
function startMap() {
    var ironhackBCN = {
        lat: 19.3979278 ,
        lng: -99.1716769
      };
    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
    
    var input = document.getElementById("findBeach");
   

    function autocomplete(input){
    const dropdown = new google.maps.places.Autocomplete(input);
    dropdown.addListener("place_changed", ()=>{
    const place = dropdown.getPlace();
    // console.log(place.geometry.location.lat());
    // console.log(place.geometry.location.lng());
    console.log(place);

    


    const newCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
     // markers.push(newCenter);
     // console.log(markers);
      map.setCenter(newCenter);

       myMarker = new google.maps.Marker({
        map: map,
        position:
            newCenter ,
        title: "I'm here"
        });
        
    });
   }
  
  
    autocomplete(input);
  
    
  
  }
  
  startMap();