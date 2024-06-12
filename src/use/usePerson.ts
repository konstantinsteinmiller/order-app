import { useMemo, useState } from 'react'

export const usePerson = () => {
  const [person, setPerson] = useState({ name: 'no name' })
  const [firstName, setFirstName] = useState('nobody')
  const [lastName, setLastName] = useState('else')
  const fullName = useMemo(() => {
    console.log('fullname recalc: ')
    return `${firstName}, ${lastName}`
  }, [firstName, lastName])

  console.log('person: ', person)
  return [person, setPerson, fullName, setFirstName]
}
