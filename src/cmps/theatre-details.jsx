//? Libraries
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { theatreService } from '../services/theatre/theatre.service.local'
import { SeatsList } from './seats-list'

export function TheatreDetails() {
  const [theatre, setTheatre] = useState([])
  const { theatreId } = useParams()

  useEffect(() => {
    onloadTheatre()
  }, [theatreId])

  async function onloadTheatre() {
    try {
      const theatre = await theatreService.get(theatreId)
      console.log('Theatre', theatreId, 'loaded!')
      setTheatre(theatre)
    } catch (err) {
      console.log('Cannot load theatre:', theatreId)
    }
  }

  return (
    <section>
      {theatre && (
        <article>
          <h1>{theatre.title}</h1>
          <SeatsList seats={theatre.seats} selectedTheatre={theatre} />
        </article>
      )}
    </section>
  )
}
