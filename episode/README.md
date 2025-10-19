This folder contains GraphQL queries and their JSON responses for the Rick and Morty GraphQL API - Episodes.

## Objective
Learners will write a GraphQL query to fetch the details of a specific episode using its ID.

## Files

### Individual Episode Queries (by ID)
- episode-id-1.graphql — GraphQL query for episode id 1
- episode-id-1-output.json — JSON response for id 1
- episode-id-2.graphql — GraphQL query for episode id 2
- episode-id-2-output.json — JSON response for id 2
- episode-id-3.graphql — GraphQL query for episode id 3
- episode-id-3-output.json — JSON response for id 3
- episode-id-4.graphql — GraphQL query for episode id 4
- episode-id-4-output.json — JSON response for id 4

### Paginated Episode Queries
- episodes-page-1.graphql — GraphQL query for episodes page 1
- episodes-page-1-output.json — JSON response for page 1
- episodes-page-2.graphql — GraphQL query for episodes page 2
- episodes-page-2-output.json — JSON response for page 2
- episodes-page-3.graphql — GraphQL query for episodes page 3
- episodes-page-3-output.json — JSON response for page 3
- episodes-page-4.graphql — GraphQL query for episodes page 4
- episodes-page-4-output.json — JSON response for page 4

## Endpoint
https://rickandmortyapi.com/graphql

## Query Fields
Each episode query includes the following fields:
- **id** — The unique identifier of the episode
- **name** — The name of the episode
- **air_date** — The air date of the episode
- **episode** — The episode code (e.g., S01E01)

## How to Run Queries

### Example: Fetch a Specific Episode by ID

```bash
curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { episode(id: 1) { id name air_date episode } }"}'
```

### Example: Fetch Episodes by Page

```bash
curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { episodes(page: 1) { results { id name air_date episode } } }"}'
```

## Example Output

The output will be a JSON object containing the requested episode data:

```json
{
  "data": {
    "episode": {
      "id": "1",
      "name": "Pilot",
      "air_date": "December 2, 2013",
      "episode": "S01E01"
    }
  }
}
```

For paginated queries, the response includes a `results` array:

```json
{
  "data": {
    "episodes": {
      "results": [
        {
          "id": "1",
          "name": "Pilot",
          "air_date": "December 2, 2013",
          "episode": "S01E01"
        },
        ...
      ]
    }
  }
}
```

## Testing Your Queries

You can test any query file using:

```bash
curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d "{\"query\":\"$(cat episode-id-1.graphql | tr '\n' ' ')\"}" | python3 -m json.tool
```

All JSON outputs are valid JSON and were fetched from https://rickandmortyapi.com/graphql.

