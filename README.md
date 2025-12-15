# The Sopranos API

A RESTful API serving quotes from "The Sopranos". Built with Node.js and Express.

**Live Demo: https://the-sopranos-api.vercel.app/**

## Features

-   **Random Quotes:** Get a random piece of wisdom from one of the wiseguys (kidding!).
-   **Character Filtering:** Search for quotes by specific characters.
-   **RESTful Architecture:** Clean and predictable endpoints.
-   **CORS Enabled:** Ready for frontend integration.

## Tech Stack

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Data:** JSON (In-memory)
-   **Deployment:** Vercel

## API Endpoints

| Method | Endpoint                 | Description                |
| :----- | :----------------------- | :------------------------- |
| `GET`  | `/quotes`                | Get all quotes             |
| `GET`  | `/quotes?character=tony` | Filter by character name   |
| `GET`  | `/quotes/random`         | Get a random quote         |
| `GET`  | `/quotes/:id`            | Get a specific quote by ID |
