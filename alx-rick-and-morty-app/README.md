# Rick and Morty GraphQL App

A React application that uses GraphQL with Apollo Client to explore the Rick and Morty universe.

## 🚀 Features

- Browse characters with search and filter capabilities
- View detailed character information including episodes
- Explore episodes from all seasons
- Discover locations across different dimensions
- Fully responsive design
- Real-time data from Rick and Morty GraphQL API

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn
- nvm (Node Version Manager) - recommended

## 🛠️ Installation

### Using nvm (Recommended)

This project includes a `.nvmrc` file that specifies the required Node.js version.

```bash
# Install and use the correct Node.js version
nvm install
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

### Without nvm

```bash
# Make sure you're using Node.js 20.19+ or 22.12+
node --version

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
alx-rick-and-morty-app/
├── graphql/
│   ├── apolloClient.ts      # Apollo Client configuration
│   └── queries.ts            # GraphQL queries
├── pages/
│   └── _app.tsx              # Next.js app wrapper with Apollo Provider
├── src/
│   ├── components/           # React components
│   │   └── Navigation.jsx    # Navigation bar
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── Characters.jsx    # Characters list
│   │   ├── CharacterDetail.jsx  # Character details
│   │   ├── Episodes.jsx      # Episodes list
│   │   └── Locations.jsx     # Locations list
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
└── README.md
```

## 🔧 Technologies

- **React 19** - UI Library
- **Vite** - Build Tool
- **Apollo Client 4.0** - GraphQL Client
- **React Router** - Client-side Routing
- **GraphQL** - Query Language
- **TypeScript** - Type Safety (for GraphQL files)

## 🌐 API

This project uses the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

## 📝 GraphQL Queries

The app includes queries for:
- `GET_CHARACTERS` - Fetch characters with pagination and filters
- `GET_CHARACTER_BY_ID` - Get detailed character information with episodes
- `GET_EPISODES` - Fetch episodes with pagination
- `GET_LOCATIONS` - Fetch locations with pagination and filters

## 🎨 Pages

1. **Home** (`/`) - Landing page with navigation cards
2. **Characters** (`/characters`) - Browse and search characters with filters
3. **Character Detail** (`/characters/:id`) - View full character information, origin, location, and episodes
4. **Episodes** (`/episodes`) - Browse all episodes with search
5. **Locations** (`/locations`) - Explore locations with search and filters

## 🎯 Features by Page

### Characters
- Search by name
- Filter by status (Alive, Dead, Unknown)
- Pagination
- Character cards with images and status indicators
- Click to view details

### Character Detail
- Full character profile with image
- Status indicator
- Origin and location information
- Complete list of episodes featuring the character
- Episode air dates

### Episodes
- Search by episode name
- Episode number display
- Air date information
- Pagination

### Locations
- Search by name
- Filter by type
- Dimension information
- Pagination

## 🚨 Important Note

This project requires Node.js version **20.19+** or **22.12+**. 

### Quick Fix for Node.js Version Issues

If you see an error like "You are using Node.js 18.x.x. Vite requires Node.js version 20.19+ or 22.12+":

```bash
# Using nvm (will use the version specified in .nvmrc)
nvm install
nvm use

# Or install a specific version
nvm install 20.19.0
nvm use 20.19.0

# Then reinstall dependencies and run the dev server
npm install
npm run dev
```

## 📄 Required Files

Per the ALX GraphQL curriculum, this project includes:
- `README.md` - This file
- `graphql/apolloClient.ts` - Apollo Client setup
- `graphql/queries.ts` - GraphQL queries
- `pages/_app.tsx` - App wrapper with Apollo Provider

## 📄 License

This project is part of the ALX GraphQL curriculum.
