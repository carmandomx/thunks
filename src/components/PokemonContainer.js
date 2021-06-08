import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokeInfoThunk } from '../actions/pokeActions'
import PokemonItem from './PokemonItem'
const PokemonContainer = ({ url, name }) => {
  const dispatch = useDispatch()
  const pokeData = useSelector(state =>
    state.pokeData.find(value => value.name === name)
  )
  useEffect(() => {
    dispatch(fetchPokeInfoThunk(url))
  }, [url])

  console.log(pokeData)

  return (
    <div>
      {pokeData && (
        <PokemonItem
          name={pokeData.name}
          type={pokeData.types[0].type.name}
          imgUrl={pokeData.sprites.front_shiny}
        />
      )}
    </div>
  )
}

export default PokemonContainer
