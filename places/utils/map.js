const GOOGLE_API_KEY = 'AIzaSyCgmjkOqO-p8-kA2-KZKlQmSOfg7TQhni8';

export function getMapPreview(lat, lgn) {
  const imageAPI_Url = 'https://maps.googleapis.com/maps/api/staticmap?center=' 
    + (lat + ',' + lgn)
    + '&zoom=14'
    + '&size=400x200'
    + '&markers=color:pink%7Clabel:S%7C' + lat + ',' + lgn
    + '&key=' + GOOGLE_API_KEY;
  return imageAPI_Url;
}