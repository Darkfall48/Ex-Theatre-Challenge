const INITIAL_STATE = {
  theatres: null,
  theatre: null,
  filterBy: {
    model: '',
    type: '',
    minBatteryStatus: '',
    maxBatteryStatus: '',
  },
}

export function theatreReducer(state = INITIAL_STATE, action) {
  let newState = state
  switch (action.type) {
    case 'SET_THEATRES':
      return {
        ...state,
        theatres: action.theatres,
      }
    case 'SET_THEATRE':
      newState = {
        ...state,
        theatre: state.theatres.filter(
          (theatre) => theatre._id === action.theatre._id
        )[0],
      }
      break
    case 'ADD_THEATRE':
      return {
        ...state,
        theatres: [...state.theatres, action.theatre],
      }
    case 'REMOVE_THEATRE':
      return {
        ...state,
        theatres: state.theatres.filter(
          (theatre) => theatre._id !== action.theatreId
        ),
      }
    case 'UPDATE_THEATRE':
      return {
        ...state,
        theatres: state.theatres.map((theatre) =>
          theatre._id === action.theatre._id ? action.theatre : theatre
        ),
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      }

    default:
      return state
  }
}
