
let loadPhotos = () => {
    console.log('moo')

    var i = 1   
    while (i < 20) {
        $('#photosRow').append('<img src="/img/concert/'+i+'.jpg" ></img>');
        i++;
    }

    while (i < 51) {
        $('#photosRow').append('<img src="/img/concert/image'+i+'.jpg" ></img>');
        i++;
    }
}