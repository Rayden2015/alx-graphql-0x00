## Testing Your Queries

You can test any query file using:

```bash
curl -s -X POST https://rickandmortyapi.com/graphql \
  -H "Content-Type: application/json" \
  -d "{\"query\":\"$(cat episode-id-1.graphql | tr '\n' ' ')\"}" | python3 -m json.tool
```

All JSON outputs are valid JSON and were fetched from https://rickandmortyapi.com/graphql.

