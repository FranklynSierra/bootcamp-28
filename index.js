function initMap(){
    // console.log('reh')
const posicion={
    lat:41.890046,
    lng: 12.492253
};
const posicion2={
    lat:28.532435, 
    lng:-80.664748
};
const posicion3={
    lat: 48.856928,
    lng: 2.294948,


   
}
const map=new google.maps.Map(document.getElementById('map'),{
    zoom:4,
    center:posicion
});
const marker=new google.maps.Marker({
    position:posicion,
    map,
    title:'El coliseo'

})
const marker2=new google.maps.Marker({
    position:posicion2,
    map,
    title:'Space X'

})
const marker3=new google.maps.Marker({
    position:posicion3,
    map,
    title:'Paris'

})

}


