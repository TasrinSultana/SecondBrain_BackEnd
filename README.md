# SecondBrain_BackEnd

SecondBrain_BackEnd is a backend API for a personal knowledge management system ("Second Brain") built with Node.js, Express, TypeScript, and MongoDB.

## Features
- User signup and login with JWT authentication
- Secure password hashing
- Add, retrieve, and delete personal content
- Share your content via unique links

## Tech Stack
- Node.js, Express
- TypeScript
- MongoDB (Mongoose)
- Zod (validation)
- JWT, bcrypt

## Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up a `.env` file with your MongoDB URI and JWT secret:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_PASSWORD=your_jwt_secret
   ```
4. Build and start the server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/v1/signup` — Register a new user
- `POST /api/v1/signin` — Login and receive a JWT
- `POST /api/v1/content` — Add content (auth required)
- `GET /api/v1/content` — Get your content (auth required)
- `DELETE /api/v1/content` — Delete content (auth required)
- `POST /api/v1/brain/share` — Share your content via link (auth required)
- `GET /api/v1/brain/:shareLink` — View shared content

## License
ISC
