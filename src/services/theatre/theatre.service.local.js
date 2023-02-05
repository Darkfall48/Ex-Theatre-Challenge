import { utilService } from '../util.service'
import { storageService } from '../connection/async-storage.service'

const THEATRE_KEY = 'theatreDB'

_createTheatres()

export const theatreService = {
  query,
  get,
  remove,
  save,
  getEmptyTheatre,
  getDefaultFilter,
  getDefaultSort,
}

async function query() {
  try {
    return await storageService.query(THEATRE_KEY)
  } catch (err) {
    console.log('Cannot load theatres', err)
    throw err
  }
}

async function get(theatreId) {
  try {
    return await storageService.get(THEATRE_KEY, theatreId)
  } catch (err) {
    console.log('Cannot get theatre:', theatreId, err)
    throw err
  }
}

async function remove(theatreId) {
  try {
    return await storageService.remove(THEATRE_KEY, theatreId)
  } catch (err) {
    console.log('Cannot remove theatre:', theatreId, err)
    throw err
  }
}

async function save(theatre) {
  try {
    if (theatre._id) {
      return await storageService.put(THEATRE_KEY, theatre)
    } else {
      theatre._id = utilService.makeId()
      return await storageService.post(THEATRE_KEY, theatre)
    }
  } catch (err) {
    console.log('Cannot save theatre', err)
    throw err
  }
}

function getEmptyTheatre() {
  return {
    // _id: utilService.makeId(),
    title: '',
  }
}

function getDefaultFilter() {
  return { title: '', price: '', pageIdx: '' }
}

function getDefaultSort() {
  return { title: '' }
}

function _createTheatres() {
  let theatres = utilService.loadFromStorage(THEATRE_KEY)
  if (!theatres || !theatres.length) {
    const theatres = [_createTheatre(), _createTheatre()]
    utilService.saveToStorage(THEATRE_KEY, theatres)
  }
}

function _createTheatre() {
  const numberOfSeats = +utilService.getRandomIntInclusive(40, 150)
  return {
    _id: 't' + utilService.getRandomIntInclusive(100, 900),
    title: 'F-' + utilService.getRandomIntInclusive(1, 90),
    seats: _createSeats(numberOfSeats),
  }
}

function _createSeats(numberOfSeats) {
  const seat = Array.from({ length: numberOfSeats }, (_, i) => ({
    id: 'S-' + i,
    price: Math.floor(Math.random() * 100) + 1,
    reserved: false,
  }))
  return seat
}
