//? Libraries
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { theatreService } from '../services/theatre/theatre.service.local'

export function TheatreIndex() {
  const [theatres, setTheatres] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    onLoadTheatres()
  }, [])

  async function onLoadTheatres() {
    try {
      const theatres = await theatreService.query()
      console.log('Theatres loaded!')
      setTheatres(theatres)
    } catch (err) {
      console.log('Cannot load theatres')
    }
  }

  // async function onLoadTheatres() {
  //   try {
  //     await onLoadTheatres()
  //     console.log('loaded theatres')
  //   } catch (err) {
  //     console.log('Cannot load theatres')
  //   }
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const theatres = await theatreService.query()
  //     setTheatres(theatres)
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     const theatre = await theatreService.get(selectedTheatre._id)
  //     setSelectedTheatre(theatre)
  //   }
  //   if (selectedTheatre) {
  //     fetchData()
  //   }
  // }, [selectedTheatre])

  return (
    <section className="theatres-index">
      <h1 className="theatres-index-title"> Theatres</h1>
      <article className="theatres-index-theatre">
        {theatres &&
          theatres.map((theatre) => (
            <h2
              className="theatres-index-theatre-title"
              key={theatre._id}
              onClick={() => navigate(`/theatre/${theatre._id}`)}
            >
              {theatre.title}
            </h2>
          ))}
      </article>
    </section>
  )
}
