'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('mount: ')
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setCount(3)
          console.log('count: ', count)
        }}
      >
        Increase Button
      </Button>
    </div>
  )
}
