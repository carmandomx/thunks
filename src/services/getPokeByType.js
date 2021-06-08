import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

const getPokeByType = type => {
  const promise = axios(
    `${baseUrl}type/${encodeURIComponent(type.toLowerCase())}`,
    {
      method: 'GET'
    }
  )

  return promise
}

export default getPokeByType
