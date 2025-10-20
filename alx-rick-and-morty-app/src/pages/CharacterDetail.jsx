import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_CHARACTER_BY_ID } from '../../graphql/queries';
import './CharacterDetail.css';

function CharacterDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) return <div className="loading">Loading character details...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  const character = data?.character;

  return (
    <div className="character-detail-container">
      <Link to="/characters" className="back-button">
        ← Back to Characters
      </Link>

      <div className="character-detail-content">
        <div className="character-detail-image">
          <img src={character.image} alt={character.name} />
          <div className="character-status-badge">
            <span className={`status-indicator ${character.status.toLowerCase()}`}></span>
            {character.status}
          </div>
        </div>

        <div className="character-detail-info">
          <h1>{character.name}</h1>

          <div className="info-grid">
            <div className="info-item">
              <h3>Species</h3>
              <p>{character.species}</p>
            </div>

            <div className="info-item">
              <h3>Gender</h3>
              <p>{character.gender}</p>
            </div>

            {character.type && (
              <div className="info-item">
                <h3>Type</h3>
                <p>{character.type}</p>
              </div>
            )}
          </div>

          <div className="location-section">
            <div className="location-card">
              <h3>Origin</h3>
              <p className="location-name">{character.origin.name}</p>
              {character.origin.type && (
                <p className="location-detail">Type: {character.origin.type}</p>
              )}
              {character.origin.dimension && (
                <p className="location-detail">Dimension: {character.origin.dimension}</p>
              )}
            </div>

            <div className="location-card">
              <h3>Last Known Location</h3>
              <p className="location-name">{character.location.name}</p>
              {character.location.type && (
                <p className="location-detail">Type: {character.location.type}</p>
              )}
              {character.location.dimension && (
                <p className="location-detail">Dimension: {character.location.dimension}</p>
              )}
            </div>
          </div>

          <div className="episodes-section">
            <h3>Episodes</h3>
            <div className="episodes-grid">
              {character.episode.map((episode) => (
                <div key={episode.id} className="episode-card">
                  <div className="episode-number">{episode.episode}</div>
                  <div className="episode-info">
                    <h4>{episode.name}</h4>
                    <p>{episode.air_date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;

