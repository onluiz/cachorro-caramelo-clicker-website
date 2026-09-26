import './index.css'

const GAMES = [
  { name: 'Clicker', url: 'https://play.google.com/store/apps/details?id=com.cachorrocaramelo.clicker&hl=pt_BR' },
  { name: 'Runner', url: 'https://play.google.com/store/apps/details?id=com.carameloclicker.app&hl=pt_BR' },
]

/* ── Pixel sparkle stars ─────────────────────────────────── */

const STARS = [
  { x: 10, y: 12, s: 3, d: 0.0, t: 2.0 }, { x: 25, y: 7,  s: 2, d: 0.5, t: 1.8 },
  { x: 45, y: 20, s: 4, d: 1.0, t: 2.5 }, { x: 70, y: 11, s: 2, d: 0.3, t: 1.6 },
  { x: 85, y: 24, s: 3, d: 0.8, t: 2.2 }, { x: 15, y: 38, s: 2, d: 1.5, t: 1.9 },
  { x: 55, y: 33, s: 4, d: 0.2, t: 2.1 }, { x: 90, y: 50, s: 3, d: 0.7, t: 1.7 },
  { x: 30, y: 58, s: 2, d: 1.2, t: 2.3 }, { x: 75, y: 65, s: 3, d: 0.4, t: 2.0 },
  { x:  5, y: 68, s: 2, d: 0.9, t: 1.5 }, { x: 50, y: 73, s: 3, d: 1.6, t: 2.4 },
  { x: 95, y: 78, s: 2, d: 0.1, t: 1.8 }, { x: 35, y: 43, s: 4, d: 1.3, t: 2.1 },
  { x: 65, y: 53, s: 2, d: 0.6, t: 1.6 }, { x: 20, y: 80, s: 3, d: 1.8, t: 2.2 },
  { x: 80, y: 36, s: 2, d: 0.4, t: 1.9 }, { x: 42, y: 60, s: 3, d: 1.1, t: 2.0 },
  { x: 58, y: 16, s: 2, d: 0.8, t: 1.7 }, { x: 88, y: 70, s: 4, d: 0.3, t: 2.5 },
]

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {STARS.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            animationDelay: `${star.d}s`,
            animationDuration: `${star.t}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ── Google Play icon SVG ────────────────────────────────── */

function PlayIcon() {
  return (
    <svg
      className="btn-store__icon"
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2z" fill="#EA4335" />
      <path d="M47.9 0C35.7.6 26 9.6 26 22.1v467.8c0 12.5 9.7 21.5 21.9 22.1L328.6 256z" fill="#4285F4" />
      <path d="M447.4 211.9l-75.8-43.7-84.3 76.9 84.3 76.9 75.8-43.7c21.5-12.4 21.5-54 0-66.4z" fill="#FBBC04" />
      <path d="M47.9 512c12.2.6 21.9-8.4 21.9-21.9L328.6 256z" fill="#34A853" />
    </svg>
  )
}

function PlayStoreBtn({ url, name }: { url: string; name: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-store btn-store--lg"
      aria-label={`Baixar Cachorro Caramelo ${name} gratuitamente no Google Play`}
    >
      <PlayIcon />
      <span>
        <small>Disponível no</small>
        Google Play
      </span>
    </a>
  )
}

/* ── HERO ────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Tela principal">
      <div className="hero__radial" aria-hidden="true" />
      <StarField />

      <div className="hero__content hero__content--centered">
        <div className="hero__text">
          <h1 className="hero__title">
            Cachorro<br />
            <span className="hero__title-accent">Caramelo</span>
          </h1>

          <div className="games-list">
            {GAMES.map(game => (
              <div key={game.name} className="games-list__item">
                <h2 className="games-list__title">{game.name}</h2>
                <PlayStoreBtn url={game.url} name={game.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__grass" aria-hidden="true" />
    </section>
  )
}

/* ── ROOT APP ────────────────────────────────────────────── */

export default function App() {
  return (
    <main>
      <Hero />
    </main>
  )
}
