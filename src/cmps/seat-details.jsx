export function SeatDetails({ selectedSeat, onClosePopup, onSeatBooked }) {
  return (
    <section className="theater-details-popup">
      <p>Seat price: {selectedSeat.price}</p>
      <button onClick={onSeatBooked}>Book</button>
      <button onClick={onClosePopup}>Close</button>
    </section>
  )
}
