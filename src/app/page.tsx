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
    <main className="flex min-h-screen flex-col items-center justify-between p-4 w-full">
      <div className="z-10 max-w-5xl items-center justify-center font-mono text-sm mx-auto xl:w-[1024px] md:w- sm:w-[]">
        <div className="flex gap-8 flex-wrap">
          {restaurantList.map((restaurant, index) => {
            return (
              <RestaurantCard
                key={index}
                restaurant={restaurant}
              ></RestaurantCard>
            )
          })}
        </div>
      </div>
    </main>
  )
}
