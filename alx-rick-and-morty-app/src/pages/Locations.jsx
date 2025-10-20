import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_LOCATIONS } from '../../graphql/queries';
import './Locations.css';

function Locations() {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: {
      page,
      filter: {
        name: nameFilter || undefined,
        type: typeFilter || undefined,
      },
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="locations-container">
      <h1>Locations</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Filter by type..."
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading locations...</div>
      ) : (
        <>
          <div className="locations-grid">
            {data?.locations?.results?.map((location) => (
              <div key={location.id} className="location-card">
                <div className="location-icon">🌍</div>
                <h3>{location.name}</h3>
                <div className="location-details">
                  <div className="detail-item">
                    <span className="detail-label">Type:</span>
                    <span className="detail-value">{location.type || 'Unknown'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Dimension:</span>
                    <span className="detail-value">{location.dimension || 'Unknown'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data?.locations?.info?.prev}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {page} of {data?.locations?.info?.pages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!data?.locations?.info?.next}
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

export default Locations;

