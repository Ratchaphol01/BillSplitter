# Copilot Instructions for Final Project

## Architecture Overview
This is an Express.js web application following MVC architecture:
- **Controllers**: Handle business logic and route responses (currently empty)
- **Models**: Mongoose schemas for MongoDB data models (currently empty)
- **Views**: EJS templates for rendering HTML (currently empty)
- **Middleware**: Custom middleware functions (currently empty)
- **Public**: Static assets (CSS, JS) served at `/public`

## Tech Stack
- **Backend**: Express.js v5.2.1 with EJS templating
- **Database**: MongoDB via Mongoose v9.6.1
- **Authentication**: bcrypt v6.0.0 for password hashing
- **Sessions**: express-session v1.19.0 with connect-flash v0.1.1 for messages

## Development Workflow
- **Start server**: `npm start` (uses nodemon for auto-restart)
- **Database**: Ensure MongoDB is running locally or configure connection string
- **Static files**: Place CSS in `public/css/`, JS in `public/js/`

## Code Patterns
- Use Express middleware for request processing
- Implement authentication with sessions and bcrypt
- Render views with EJS, passing data from controllers
- Structure routes in controllers with clear separation of concerns

## Key Files
- `index.js`: Main application entry point (fixed mongoose require, added ejs require, MongoDB connection, session setup)
- `package.json`: Dependencies and scripts (added nodemon to devDependencies)
- Folders are structured but empty - populate with MVC components

## Notes
- Fixed `index.js` line 3: `const mongoose = require('mongoose')` and added `const ejs = require('ejs')`
- Added nodemon to devDependencies to fix npm start script
- MongoDB connection configured for local instance at mongodb://localhost:27017/final
- Session middleware configured with basic secret (change in production)
- No tests configured yet
- No build process - direct Node.js execution