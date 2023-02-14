import uuid from 'react-native-uuid';

export default class Place {
  constructor(title, imageUrl, address, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.location = { latitude: location.latitude, longitude: location.longitude };
    this.id = uuid.v4();
  }
}