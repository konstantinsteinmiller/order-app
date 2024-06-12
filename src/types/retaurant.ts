export interface RestaurantType {
  name: string,
  opensAt: string,
  isAvailable: boolean,
  rating: number,
  cuisine: Array<string>,
  deliveryTime: Array<number>,
  distance: number,
  deliveryPrice: number,
  minBasketTotal: number,
}