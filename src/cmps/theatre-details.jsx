//? Libraries
import React, { useState, useEffect } from 'react'

export function TheaterDetails() {
  const [seats, setSeats] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      price: Math.floor(Math.random() * 100) + 1,
      reserved: false,
    }))
  )
  const [selectedSeat, setSelectedSeat] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  //? Private Functions
  const onSeatClick = (seat) => {
    setSelectedSeat(seat)
    setShowPopup(true)
  }

  const onSeatBooked = () => {
    setSeats(
      seats.map((seat) =>
        seat.id === selectedSeat.id ? { ...seat, reserved: true } : seat
      )
    )
    setShowPopup(false)
  }

  const onClosePopup = () => {
    setShowPopup(false)
  }

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

  //? Private Components
  function SeatsList() {
    return (
      <section className="theater-details-seats-list">
        {seats.map((seat, index) => (
          <article
            className={`theater-details-seats-list-seat ${
              index % 3 === 0 ? 'clear' : ''
            } ${seat.reserved ? 'reserved' : ''} ${
              selectedSeat === seat ? 'selected' : ''
            }`}
            key={seat.id}
            onClick={() => onSeatClick(seat)}
          >
            {seat.id + 1}
          </article>
        ))}
      </section>
    )
  }

  function SeatPreview() {
    return (
      <section className="theater-details-popup">
        <p>Seat price: {selectedSeat.price}</p>
        <button onClick={onSeatBooked}>Book</button>
        <button onClick={onClosePopup}>Close</button>
      </section>
    )
  }

  return (
    <section className="theater-details">
      <article className="theater-details-screen">Screen</article>
      <SeatsList />
      {showPopup && <SeatPreview />}
    </section>
  )
}
