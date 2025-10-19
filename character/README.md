This folder contains GraphQL queries and their JSON responses for the Rick and Morty GraphQL API.

Files:
- character-id-1.graphql — GraphQL query for character id 1
- character-id-1-output.json — JSON response for id 1
- character-id-2.graphql — GraphQL query for character id 2
- character-id-2-output.json — JSON response for id 2
- character-id-3.graphql — GraphQL query for character id 3
- character-id-3-output.json — JSON response for id 3
- character-id-4.graphql — GraphQL query for character id 4
- character-id-4-output.json — JSON response for id 4
- characters-page-1.graphql — GraphQL query for characters page 1
- characters-page-2.graphql — GraphQL query for characters page 2
- characters-page-3.graphql — GraphQL query for characters page 3
- characters-page-4.graphql — GraphQL query for characters page 4
- characters-page-1-output.json — JSON response for page 1
- characters-page-2-output.json — JSON response for page 2
- characters-page-3-output.json — JSON response for page 3
- characters-page-4-output.json — JSON response for page 4

Endpoint: https://rickandmortyapi.com/graphql

How to re-run a query (example for id 1):

```bash
curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { character(id: 1) { id name status species type gender } }"}'
```

The output will be a JSON object containing `data.character` with the requested fields.

Example saved outputs (in this folder):

- `character-id-1-output.json` contains Rick Sanchez (id 1)
- `character-id-2-output.json` contains Morty Smith (id 2)
- `character-id-3-output.json` contains Summer Smith (id 3)
- `character-id-4-output.json` contains Beth Smith (id 4)

All JSON outputs are valid JSON and were fetched from https://rickandmortyapi.com/graphql.



curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { characters(id: 1) { id name status image } }"}'