export function SeatDetails({ selectedSeat, onClosePopup, onSeatBooked }) {
  return (
    <section className="seat-details">
      <a className="seat-details-close-btn" onClick={onClosePopup}>
        X
      </a>
      <p className="seat-details-price">
        Seat price: {'$ ' + selectedSeat.price}
      </p>
      <button
        className="seat-details-book-btn nice-button"
        onClick={onSeatBooked}
      >
        Book
      </button>
    </section>
  )
}
