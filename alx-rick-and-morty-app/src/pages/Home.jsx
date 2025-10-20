import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Rick and Morty Explorer</h1>
        <p className="hero-subtitle">
          Explore the multiverse of Rick and Morty through characters, episodes, and locations
        </p>
      </div>

      <div className="cards-grid">
        <Link to="/characters" className="feature-card">
          <div className="card-icon">👥</div>
          <h2>Characters</h2>
          <p>Browse all characters from the Rick and Morty universe</p>
        </Link>

        <Link to="/episodes" className="feature-card">
          <div className="card-icon">📺</div>
          <h2>Episodes</h2>
          <p>Explore episodes from all seasons</p>
        </Link>

        <Link to="/locations" className="feature-card">
          <div className="card-icon">🌍</div>
          <h2>Locations</h2>
          <p>Discover different dimensions and locations</p>
        </Link>
      </div>

      <div className="info-section">
        <p>
          This app uses the{' '}
          <a href="https://rickandmortyapi.com/graphql" target="_blank" rel="noopener noreferrer">
            Rick and Morty GraphQL API
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;

