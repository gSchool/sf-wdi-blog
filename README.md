# Sample React Blog Application

This is a simple, stripped-down Blog application for the purposes of teaching _one way_ to achieve modularity and TDD with React.

Keep in mind:
- This is still very much a work-in-progress.
- This is an incomplete application.
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- This project uses [json-server](https://github.com/typicode/json-server) as a mock API server

TODO:
- Complete unit tests for functional React UI components (using Jest snapshots testing)
- Add features:
  - ArticlePage: Support writing a comment on an article
  - ArticlePage: Include list of comments for an article
  - General: Add user authentication
  - ArticlePage: Support editing article (if you're the author)
- Add a CSS framework / UI kit

## Environment Configuration

Make sure to create and include the following files at the top-level of your application:

| File | Description |
| ---- | ----------- |
| `.env.local` | Environment variables for local development |
| `.env.production.local` | Environment variables for production |

In both of these files, you should define the `REACT_APP_API_BASE_URL` environment variable. This variable is used to populate the API_BASE_URL configuration variable (located in `src/config.js`), which tells the application which API to point to.

For local development purposes, you should point to an instance of the Mock API Server provided in this repository at [opt/mock-api-server](opt/mock-api-server)


```bash
REACT_APP_API_BASE_URL=http://localhost:5000
```

## Mock API Server

The Mock API Server is built on top of json-server. To start the server, simply run the following:

```bash
cd opt/mock-api-server
npm install                 # if you haven't already
npm start
```
