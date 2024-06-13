import * as React from "react";

import { RestaurantType } from "@/types/retaurant";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Star, Bike, ShoppingBasket, Clock, MapPin } from "lucide-react";

interface RestaurantProps {
  restaurant: RestaurantType,
}

export default function RestaurantCard ({ restaurant }:RestaurantProps) {
  return (
    <Card className="w-72 overflow-hidden text-xs">
      <div className="bg-gray-600 text-white flex justify-center">
        Opens at {restaurant.opensAt}
      </div>
      <img
        className="w-full h-32 object-cover"
        src={restaurant.image}
        alt="pizza"
      />
      <CardContent className="flex p-2">
        <div className="w-full">
          <CardTitle>{restaurant.name}</CardTitle>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="flex items-center text-muted-foreground text-nowrap">
                <Star /> {restaurant.rating}
              </span>
              <span className="ml-2 text-muted-foreground">
                {restaurant.cuisine.join(", ")}
              </span>
            </div>
            <Button className="text-xs">Order</Button>
          </div>

          <div className="flex items-center">
            {restaurant.isAvailable ? (
              <span className="flex items-center text-muted-foreground">
                <Clock />
                {restaurant.deliveryTime.join("-")}
              </span>
            ) : (
              <span className="flex items-center text-muted-foreground text-nowrap">
                <MapPin />
                {restaurant.distance}
              </span>
            )}
            <span className="flex items-center ml-2 text-muted-foreground text-nowrap">
              <Bike /> {restaurant.deliveryPrice}€ delivery
            </span>
            <span className="flex items-center ml-2 text-muted-foreground">
              <ShoppingBasket /> Min. {restaurant.minBasketTotal}€
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
