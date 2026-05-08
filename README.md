# BillSplitter

## Public deployment

To make this website available to anyone, deploy it to Vercel and use a cloud MongoDB database.

### Required setup

1. Create a MongoDB Atlas cluster or another cloud MongoDB service.
2. Create a Vercel project from this repository.
3. In Vercel Project Settings, add these environment variables:
   - `MONGODB_URI` — your MongoDB connection string
   - `SESSION_SECRET` — a secret key for session cookies

### Local development

1. Copy `.env.example` to `.env`.
2. Update `.env` with your `MONGODB_URI` and `SESSION_SECRET`.
3. Run:
   ```bash
   npm install
   npm start
   ```
4. Open:
   ```text
   http://localhost:4000
   ```

### After deployment

- Use the Vercel-generated URL to share the app with anyone.
- `localhost` is only for local testing; public access requires deployment.
