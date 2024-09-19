# Country Info App

Full-Stack JS engineer test assessment - the Country Info App

## Configuration

### Backend

1. Go to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `/backend` directory with .env.example content:
   ```
    APP_NODE_ENV=development
    APP_PROTOCOL=http
    APP_URL=localhost
    APP_PORT=3001
   ```

4. Start the server:
   ```
   npm run start
   ```

### Frontend

1. Open another terminal and navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `/frontend` directory with .env.example content:
   ```
    HOST=localhost
    PORT=3000
    // Replace localhost:3001 with your backend url
    REACT_APP_API_URL=http://localhost:3001/v1
   ```
4. Start the frontend application:
   ```
   npm run start
   ```

## Application Setup

1. Start the backend server (it should be accessible at http://localhost:3001)
2. Start the frontend server (it should be accessible at http://localhost:3000)
3. Open your preferred web browser and navigate to http://localhost:3000 to use the app.

## Linting and Formatting

You can lint and format both the frontend and backend codebases separately.

### Frontend

To lint the frontend codebase, navigate to the `frontend` directory and run:

```
cd frontend
npm run lint
```

To format the frontend codebase, run:

```
npm run format
```

### Backend

To lint the frontend codebase, navigate to the `backend` directory and run:

```
cd backend
npm run lint
```

To format the frontend codebase, run:

```
npm run format
```

## Project Structure

```
/
├── backend/
│   ├── src/ 
│   │    ├── services/
│   │    │   ├── index.js
│   │    │   └── country.service.js
│   │    ├── controllers/
│   │    │   ├── index.js
│   │    │   └── country.controller.js
│   │    ├── routes/v1
│   │    │   ├── index.js
│   │    │   └── country.route.js
│   │    └── index.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── CountryList.js
    │   │   └── CountryInfo.js
    │   └── App.js
    └── package.json
```