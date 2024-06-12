import * as React from "react";

import { RestaurantType } from "@/types/retaurant";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="pizza"
      />
      <CardContent className="flex justify-end p-2">
        <div>
          <CardTitle>{restaurant.name}</CardTitle>
          {/* <CardDescription>
            Deploy your new project in one-click.
          </CardDescription> */}

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="flex items-center text-muted-foreground text-nowrap">
                <Star /> {restaurant.rating}
              </span>
              <span className="ml-2 text-muted-foreground">
                {" "}
                {restaurant.cuisine.join(", ")}
              </span>
            </div>
            <Button className="text-xs">Choose</Button>
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
