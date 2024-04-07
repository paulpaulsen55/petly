![Banner Image](/banner.png)

## What is petly?

The project was developed as part of the 'Web Programming' module at the Berlin School of Economics and Law (HWR Berlin). 
Petly is a great web application that allows you to easily manage and care for your pets. Once you have registered, you can adopt new animals on the Adopt page. All your animals are stored in a database and you can view them at any time on your profile page. It is important that you have a balanced currency in order to feed and care for your animals in the best possible way. You can purchase new animals at any time to expand your collection.


## Prerequisites
[Node.js](https://nodejs.org/en/download) (>= 18.0.0)


## Docker
For a quick start, you can use Docker. To do this, simply run the following commands in the project directory:
```bash
docker-compose build
docker-compose up -d
```

## Developing

1. Clone the repository: `git clone https://github.com/paulpaulsen55/petly.git`
2. Navigate to the project directory: `cd petly`
3. Install the frontend and backend dependencies (in their respective directories): `npm install`
4. Start the backend: `npm start`
5. Start the frontend: `npm run dev`
6. Open your browser and navigate to `http://localhost:5137`

The backend is a RESTful API written in Node.js using Express.js. It uses a in-memory SQLite database to store the data and also handles authentication.

The frontend is a single page application written in SvelteKit. The structure of the application is based on the [SvelteKit template](https://kit.svelte.dev/docs/project-structure). Various routes are located in the `src/routes' directory`. The components are in the `src/lib/components` directory. Other functionality is in the `src/lib` directory, such as the store.

## Known Issues
- The application is not yet fully responsive.
- Reloading the page will cause the user to be logged out.
