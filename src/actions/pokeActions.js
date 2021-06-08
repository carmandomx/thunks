import axios from 'axios'
import getPokeByType from '../services/getPokeByType'

export const ActionTypes = {
  fetchPokemons: 'fetch_pokemons',
  fetchPokemonsSuccess: 'fetch_pokemons_success',
  fetchPokemonsFail: 'fetch_pokemons_fail',
  fetchPokeInfo: 'fetch_poke_info',
  fetchPokeInfoSuccess: 'fetch_poke_info_success',
  fetchPokeInfoFail: 'fetch_poke_info_fail'
}

export const fetchPokemons = query => ({
  type: ActionTypes.fetchPokemons,
  payload: query
})

export const fetchPokemonsSuccess = pokemons => ({
  type: ActionTypes.fetchPokemonsSuccess,
  payload: pokemons
})

export const fetchPokemonsFail = err => ({
  type: ActionTypes.fetchPokemonsFail,
  payload: err
})

// esto es un thunk

export const fetchPokemonsThunk = query => {
  return dispatch => {
    return getPokeByType(query).then(
      res => {
        console.log(res.data)
        dispatch(fetchPokemonsSuccess(res.data.pokemon))
      },
      error => dispatch(fetchPokemonsFail(error))
    )
  }
}

export const fetchPokeInfoSuccess = data => ({
  type: ActionTypes.fetchPokeInfoSuccess,
  payload: data
})

export const fetchPokeInfoFail = err => ({
  type: ActionTypes.fetchPokeInfoFail,
  payload: err
})

export const fetchPokeInfoThunk = url => {
  return dispatch => {
    return axios.get(url).then(
      res => {
        console.log(res.data)
        dispatch(fetchPokeInfoSuccess(res.data))
      },
      err => dispatch(fetchPokeInfoFail(err))
    )
  }
}
