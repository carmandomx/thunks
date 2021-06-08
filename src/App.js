import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsThunk } from './actions/pokeActions'
import { useEffect } from 'react'
import PokemonContainer from './components/PokemonContainer'

function App () {
  const pokemons = useSelector(state => state.pokeUrls)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsThunk('electric'))
  }, [dispatch])

  const list = pokemons.map(value => (
    <PokemonContainer
      url={value.pokemon.url}
      key={value.pokemon.name}
      name={value.pokemon.name}
    />
  ))
  return (
    <div className='App'>
      <header className='App-header'>{list}</header>
    </div>
  )
}

export default App
