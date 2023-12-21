export interface Users {
  address: {
    geolocation: {
      lat: string;
      long: string;
    }
    city: string;
    street: string;
    number: string;
    zipcode: string;
  }
  id: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  }
  phone: string;
}
