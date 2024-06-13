import { RestaurantType } from '@/types/retaurant'
import { restaurantList } from '@/app/db/db'

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  restaurantList: Array<RestaurantType>
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ restaurantList })
}
