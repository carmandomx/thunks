import { ActionTypes } from '../actions/pokeActions'

const InitialState = {
  pokeUrls: [],
  pokeData: [],
  searchQuery: ''
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.fetchPokemonsSuccess:
      return {
        ...state,
        pokeUrls: action.payload.slice(0, 5)
      }

    case ActionTypes.fetchPokeInfoSuccess:
      return {
        ...state,
        pokeData: [...state.pokeData, action.payload]
      }

    default:
      return state
  }
}
