export async function fetchData(path:string) {
  const res = await fetch(`/api${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    console.log(res); 
    throw new Error(`Failed to fetch data from ${path}`)
  }

  return res.json()
}
