import { v4 as uuidv4 } from 'uuid';

export default class Place {
  constructor(title, imageUrl, address, location) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.address = address;
    this.location = location;
    this.id = uuidv4();
  }
}