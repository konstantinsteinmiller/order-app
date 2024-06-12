'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { usePerson } from '@/use/usePerson'

export default function Example() {
  const [count, setCount] = useState(0)

  const [person, setPerson, fullName, setFirstName] = usePerson()

  useEffect(() => {
    console.log('mount: ')
  }, [])

  let staticVar = 0

  return (
    <div>
      <Button
        onClick={() => {
          setCount(3)
          staticVar = 3
          // console.log('data: ', staticVar)
          // @ts-ignore
          setPerson({ name: 'Bob' })
          // @ts-ignore
          setFirstName('Konstantin')
        }}
      >
        My count: {count} - {staticVar} - {fullName}
      </Button>
    </div>
  )
}
