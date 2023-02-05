//? Libraries
import React, { useState, useEffect } from 'react'
//? Services
import { theatreService } from '../services/theatre/theatre.service.local'
//? Components
import { SeatDetails } from './seat-details'

export function SeatsList({ seats, selectedTheatre }) {
  const [selectedSeat, setSelectedSeat] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    let timeout
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false)
        setSelectedSeat(null)
      }, 10 * 1000)
    }
    return () => clearTimeout(timeout)
  }, [showPopup])

  //? Private Functions
  const onSeatClick = (seat) => {
    setSelectedSeat(seat)
    setShowPopup(true)
  }

  const onSeatBooked = async () => {
    const updatedTheatre = {
      ...selectedTheatre,
      seats: seats.map((seat) =>
        seat.id === selectedSeat.id ? { ...seat, reserved: true } : seat
      ),
    }
    await theatreService.save(updatedTheatre)
    setShowPopup(false)
  }

  const onClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <section className="theater-details-seats-list">
      {seats &&
        seats.map((seat) => (
          <article
            key={seat.id}
            className={`theater-details-seats-list-seat ${
              seat.reserved
                ? 'reserved'
                : seat.id === selectedSeat?.id
                ? 'selected'
                : ''
            }`}
            onClick={() => !seat.reserved && onSeatClick(seat)}
          >
            {seat.price}
          </article>
        ))}

      {showPopup && (
        <SeatDetails
          selectedSeat={selectedSeat}
          onClosePopup={onClosePopup}
          onSeatBooked={onSeatBooked}
        />
      )}
    </section>
  )
}
