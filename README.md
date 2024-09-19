# Country Info App

Full-Stack JS engineer test assessment - the Country Info App

## Configuration

### Backend

1. Go to `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file on /backend directory with .env.example content:
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

1. Go `frontend` directory on another terminal:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file on /frontend directory with .env.example content:
   ```
    HOST=localhost
    PORT=3000
    // Replace localhost:3001 with your backend url
    REACT_APP_API_URL=http://localhost:3001/v1
   ```
4. Start the frontend app:
   ```
   npm run start
   ```

## App now is working!

1. Start the backend server (should be at http://localhost:3001)
2. Start the frontend server (should be at http://localhost:3000)
3. Open your favourite browser and go to http://localhost:3000

## Linting y Formattng

To lint the code:

```
npm run lint
```

To format the code:

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