# Rick and Morty Explorer - Project Structure

A modern React application using GraphQL to explore the Rick and Morty universe.

## 🚀 Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool & Dev Server
- **React Router** - Client-side Routing
- **Apollo Client** - GraphQL Client
- **Rick and Morty GraphQL API** - Data Source

## 📁 Project Structure

```
alx-rick-and-morty-app/
├── graphql/
│   ├── apolloClient.ts      # Apollo Client configuration
│   └── queries.ts            # GraphQL queries
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Navigation bar component
│   │   └── Navigation.css    # Navigation styles
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css
│   │   ├── Characters.jsx    # Characters listing with search & filters
│   │   ├── Characters.css
│   │   ├── CharacterDetail.jsx  # Individual character details
│   │   ├── CharacterDetail.css
│   │   ├── Episodes.jsx      # Episodes listing
│   │   ├── Episodes.css
│   │   ├── Locations.jsx     # Locations listing
│   │   └── Locations.css
│   ├── App.jsx               # Main app component with routing
│   ├── App.css
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── package.json
└── vite.config.js
```

## 🎯 Features

### Pages

1. **Home** (`/`)
   - Landing page with links to all sections
   - Modern card-based UI

2. **Characters** (`/characters`)
   - Browse all Rick and Morty characters
   - Search by name
   - Filter by status (Alive, Dead, Unknown)
   - Pagination support
   - Click to view character details

3. **Character Detail** (`/characters/:id`)
   - Full character information
   - Origin and location details
   - List of episodes the character appears in
   - Status indicators (alive/dead/unknown)

4. **Episodes** (`/episodes`)
   - Browse all episodes
   - Search by episode name
   - Shows episode number and air date
   - Pagination support

5. **Locations** (`/locations`)
   - Browse all locations from the series
   - Search by name
   - Filter by type
   - Shows location type and dimension
   - Pagination support

### Components

- **Navigation**: Sticky navigation bar with active state indicators

## 🔧 GraphQL Queries

The app uses the following queries (defined in `graphql/queries.ts`):

- `GET_CHARACTERS` - Fetch paginated characters with filters
- `GET_CHARACTER_BY_ID` - Fetch detailed character information
- `GET_EPISODES` - Fetch paginated episodes
- `GET_LOCATIONS` - Fetch paginated locations

## 🎨 Design Features

- Modern gradient-based color scheme (purple/blue)
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Card-based layouts
- Custom scrollbars
- Status indicators for characters
- Hover effects

## 🚦 Running the App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 API

This project uses the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

## 📝 Notes

- All GraphQL queries are centralized in `graphql/queries.ts`
- Apollo Client is configured once in `graphql/apolloClient.ts`
- React Router handles all client-side routing
- Each page has its own CSS file for styling
- No state management library needed (Apollo handles data caching)

