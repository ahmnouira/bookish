import * as React from 'react'
import axios from 'axios'

export const useFetch = <T = any>(url: string, initState?: T) => {
  const [loading, setloading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [data, setData] = React.useState<typeof initState>(initState)

  React.useEffect(() => {
    const fetchData = async () => {
      setError(null)
      setloading(true)
      try {
        const res = await axios.get<T>(`${process.env.NEXT_PUBLIC_API_URI}/${url}`)
        setData(res.data)
      } catch (error) {
        setError(error)
      } finally {
        setloading(false)
      }
    }

    fetchData()
  }, [])

  return {
    loading,
    error,
    data,
  }
}
