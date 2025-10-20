import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_EPISODES } from '../../graphql/queries';
import './Episodes.css';

function Episodes() {
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState('');

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page,
      filter: {
        name: nameFilter || undefined,
      },
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="episodes-container">
      <h1>Episodes</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search episodes by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading episodes...</div>
      ) : (
        <>
          <div className="episodes-grid">
            {data?.episodes?.results?.map((episode) => (
              <div key={episode.id} className="episode-card">
                <div className="episode-header">
                  <span className="episode-number">{episode.episode}</span>
                  <span className="episode-air-date">{episode.air_date}</span>
                </div>
                <h3>{episode.name}</h3>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data?.episodes?.info?.prev}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {page} of {data?.episodes?.info?.pages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!data?.episodes?.info?.next}
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

export default Episodes;

