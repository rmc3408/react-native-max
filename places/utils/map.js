const GOOGLE_API_KEY = 'GET_ON_WEBSITE';

export function getMapPreview(lat, lgn) {
  const imageAPI_Url = 'https://maps.googleapis.com/maps/api/staticmap?center=' 
    + (lat + ',' + lgn)
    + '&zoom=14'
    + '&size=400x200'
    + '&markers=color:pink%7Clabel:S%7C' + lat + ',' + lgn
    + '&key=' + GOOGLE_API_KEY;
  return imageAPI_Url;
}

export async function getGeoCodingReverse(lat, lgn) {
  const address_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
  + (lat + ',' + lgn)
  + '&key=' + GOOGLE_API_KEY;

  
  const result = await fetch(address_URL)
  if(result.status !== 200) {
    return '';
  }
  const data = await result.json();
  return data.results[1].formatted_address;
}