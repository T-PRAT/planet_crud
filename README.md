# 🪐Planet Crud

This is a simple API that provides endpoints to manage and retrieve information about galaxies, planetary systems, planets, and satellites.

# Installation

```bash
# Install dependencies
npm install

# Start the server
npm start
```

# Endpoints

## 🛰️ Satellites

- `GET /satellites`: Retrieves all satellites.
- `GET /satellites/:id`: Retrieves a satellite by ID.
- `GET /satellites/planet/:name`: Retrieves a satellite by planet name.
- `POST /satellites`: Adds a new satellite.
- `DELETE /satellites/:id`: Deletes a satellite by ID.
- `PUT /satellites/:id`: Updates a satellite by ID.

## 🪐 Planets

- `GET /planets`: Retrieves all planets.
- `GET /planets/:id`: Retrieves a planet by ID.
- `GET /planets/solarSystem/:name`: Retrieves a planet by solar system name.
- `POST /planets`: Adds a new planet.
- `DELETE /planets/:id`: Deletes a planet by ID.
- `PUT /planets/:id`: Updates a planet by ID.

## ☀️ Planetary Systems

- `GET /planetarySystems`: Retrieves all planetary systems.
- `GET /planetarySystems/:id`: Retrieves a planetary system by ID.
- `GET /planetarySystems/galaxy/:name`: Retrieves a planetary system by galaxy name.
- `POST /planetarySystems`: Adds a new planetary system.
- `DELETE /planetarySystems/:id`: Deletes a planetary system by ID.
- `PUT /planetarySystems/:id`: Updates a planetary system by ID.

## 🌌 Galaxies

- `GET /galaxies`: Retrieves all galaxies.
- `GET /galaxies/:id`: Retrieves a galaxy by ID.
- `POST /galaxies`: Adds a new galaxy.
- `DELETE /galaxies/:id`: Deletes a galaxy by ID.
- `PUT /galaxies/:id`: Updates a galaxy by ID.

---
