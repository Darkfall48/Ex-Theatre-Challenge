//? Libraries
import { theatreService } from '../../services/theatre/theatre.service.local'

export function loadTheatres() {
  return async (dispatch, getState) => {
    try {
      const filterBy = getState().theatreModule.filterBy
      const theatres = await theatreService.query(filterBy)
      dispatch({ type: 'SET_THEATRES', theatres })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export async function loadTheatre(theatreId) {
  try {
    console.log('Theatre Id:', theatreId)
    await loadTheatres()
    const theatre = await theatreService.get(theatreId)
    // console.log('Theatre from DB:', theatre)
    store.dispatch({
      type: SET_THEATRE,
      theatre,
    })
  } catch (err) {
    console.log('Cannot load theatre', err)
    throw err
  }
}

export function removeTheatre(theatreId) {
  return async (dispatch) => {
    try {
      const Theatres = await theatreService.remove(theatreId)
      dispatch({ type: 'REMOVE_THEATRE', theatreId })
      return 'hello'
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    try {
      dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
