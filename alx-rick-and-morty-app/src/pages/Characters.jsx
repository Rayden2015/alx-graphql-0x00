import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_CHARACTERS } from '../../graphql/queries';
import './Characters.css';

function Characters() {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      filter: {
        name: nameFilter || undefined,
        status: statusFilter || undefined,
      },
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page when searching
  };

  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="characters-container">
      <h1>Characters</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="filter-select"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading characters...</div>
      ) : (
        <>
          <div className="characters-grid">
            {data?.characters?.results?.map((character) => (
              <Link
                to={`/characters/${character.id}`}
                key={character.id}
                className="character-card"
              >
                <img src={character.image} alt={character.name} />
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <div className="character-status">
                    <span className={`status-indicator ${character.status.toLowerCase()}`}></span>
                    {character.status} - {character.species}
                  </div>
                  <p className="character-location">
                    <strong>Last known location:</strong>
                    <br />
                    {character.location.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data?.characters?.info?.prev}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {page} of {data?.characters?.info?.pages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!data?.characters?.info?.next}
              className="pagination-button"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Characters;

