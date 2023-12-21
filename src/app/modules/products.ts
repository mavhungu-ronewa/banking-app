export interface Products {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: string;
  rating: {
    count: string;
    rate: string;
  }
}
