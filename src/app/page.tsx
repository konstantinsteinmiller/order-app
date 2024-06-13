'use client'
import RestaurantCard from '@/components/RestaurantCard'
import { fetchData } from '@/utils/fetchdata'
import { useEffect, useState } from 'react'

export default function Home() {
  const [restaurantList, setRestaurantList] = useState([])
  const fetchRestaurants = async function () {
    const res = await fetchData('/restaurants')
    setRestaurantList(res.restaurantList)
  }
  useEffect(() => {
    fetchRestaurants()
  }, [])
  return (
    <div className="grid gap-8 w-full px-auto justify-center grid-cols-[repeat(auto-fit,280px)]">
      {restaurantList.map((restaurant, index) => {
        return (
          <RestaurantCard key={index} restaurant={restaurant}></RestaurantCard>
        )
      })}
    </div>
  )
}
