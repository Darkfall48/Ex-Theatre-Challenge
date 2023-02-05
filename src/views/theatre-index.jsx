//? Libraries
//? Components
import { TheaterDetails } from '../cmps/theatre-details'

export function TheatreIndex() {
  return (
    <section className="theatre-index-section">
      <h1> Theatre</h1>
      <article className="theatre-index-section-article">
        <TheaterDetails />
      </article>
    </section>
  )
}
