# 🎬 The Sopranos API

A RESTful API serving memorable quotes from "The Sopranos" - the greatest TV show of all time (according to critics!). Built with Node.js, Express, and MongoDB.

**🎬 Live Demo:** [https://the-sopranos-api.vercel.app/](https://the-sopranos-api.vercel.app/)

## ✨ Features

- **Random Quotes** - Get a random piece of wisdom from Tony and the crew
- **Character Filtering** - Search for quotes by specific characters with case-insensitive matching
- **Quote by ID** - Retrieve specific quotes using their unique identifier
- **RESTful Architecture** - Clean, predictable endpoints following REST conventions
- **CORS Enabled** - Ready for frontend integration
- **MongoDB Powered** - Scalable data storage with Mongoose ODM

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB with Mongoose v9.3.0
- **Middleware:** CORS
- **Deployment:** Vercel

## 📡 API Endpoints

### Base URL
```
https://the-sopranos-api.vercel.app
```

### Get All Quotes

Returns all quotes from the database. Optionally filter by character name.

**Endpoint:** `GET /quotes`

**Query Parameters:**
- `character` (optional) - Filter quotes by character name (case-insensitive)

**Example URLs:**
```
https://the-sopranos-api.vercel.app/quotes
https://the-sopranos-api.vercel.app/quotes?character=tony
https://the-sopranos-api.vercel.app/quotes?character=paulie
```

**Example Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 22,
      "characters": ["Tony Soprano"],
      "quote": "Tony Soprano: Those who want respect, give respect."
    },
    {
      "id": 9,
      "characters": ["Tony Soprano"],
      "quote": "Tony Soprano: I'm in the waste management business. Everybody immediately assumes you're mobbed up. It's a stereotype, and it's offensive."
    }
  ]
}
```

### Get Random Quote

Returns a single random quote from the database.

**Endpoint:** `GET /quotes/random`

**Example URL:**
```
https://the-sopranos-api.vercel.app/quotes/random
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": 8,
    "characters": ["Uncle Junior"],
    "quote": "Uncle Junior: Hear about the Chinese godfather? He made them an offer they couldn't understand."
  }
}
```

### Get Quote by ID

Returns a specific quote by its unique ID.

**Endpoint:** `GET /quotes/:id`

**Parameters:**
- `id` (required) - The unique identifier of the quote (integer)

**Example URL:**
```
https://the-sopranos-api.vercel.app/quotes/22
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": 22,
    "characters": ["Tony Soprano"],
    "quote": "Tony Soprano: Those who want respect, give respect."
  }
}
```

**Error Response (Quote Not Found):**
```json
{
  "success": false,
  "msg": "Quote not Found"
}
```

## 📊 Data Structure

Each quote object contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | Unique identifier for the quote |
| `characters` | Array[String] | List of characters involved in the quote |
| `quote` | String | The actual quote text including character name(s) |

**Example Quote Object:**
```json
{
  "id": 1,
  "characters": ["Tony Soprano", "Jennifer Melfi"],
  "quote": "Dr. Jennifer Melfi: What line of work are you in? | Tony Soprano: Waste management consultant."
}
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn

### Clone and Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Sopranos-API
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
   
   Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/sopranos-api
PORT=8000
```

4. **Seed the database:**
```bash
node seeder.js
```

5. **Start the server:**

**Development mode (with hot reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The API will be available at `http://localhost:8000`

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | Required |
| `PORT` | Server port number | 8000 |

## 📁 Project Structure

```
Sopranos-API/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   └── quotesController.js # Route handlers for quotes
├── data/
│   └── data.js            # Seed data (67 quotes)
├── middleware/
│   ├── errorHandler.js    # Global error handling
│   └── notFound.js        # 404 route handler
├── models/
│   └── Quote.js           # Mongoose schema for quotes
├── public/
│   ├── css/
│   │   └── styles.css     # Landing page styles
│   ├── img/               # Images
│   └── index.html         # API landing page
├── routes/
│   └── quotes.js          # Quote route definitions
├── .env                   # Environment variables (not in repo)
├── .gitignore
├── index.js               # Application entry point
├── package.json
├── seeder.js              # Database seeding script
└── vercel.json            # Vercel deployment config
```

## 🚀 Deployment

This API is configured for deployment on Vercel. The `vercel.json` file handles routing configuration.

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project into Vercel
3. Add your `MONGO_URI` environment variable in Vercel dashboard
4. Deploy!

## 🎯 Usage Examples

### JavaScript (Fetch API)
```javascript
// Get all quotes
fetch('https://the-sopranos-api.vercel.app/quotes')
  .then(res => res.json())
  .then(data => console.log(data));

// Get random quote
fetch('https://the-sopranos-api.vercel.app/quotes/random')
  .then(res => res.json())
  .then(data => console.log(data));

// Filter by character
fetch('https://the-sopranos-api.vercel.app/quotes?character=tony')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Python (requests)
```python
import requests

# Get all quotes
response = requests.get('https://the-sopranos-api.vercel.app/quotes')
print(response.json())

# Get random quote
response = requests.get('https://the-sopranos-api.vercel.app/quotes/random')
print(response.json())

# Filter by character
response = requests.get('https://the-sopranos-api.vercel.app/quotes?character=paulie')
print(response.json())
```

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Start | `npm start` | Run production server |
| Development | `npm run dev` | Run with hot reload and .env support |

## ⚠️ Disclaimer

This is a fan project for educational purposes. "The Sopranos" and all related characters and quotes are property of HBO and their respective owners. This API is not affiliated with, endorsed, sponsored, or specifically approved by HBO.
