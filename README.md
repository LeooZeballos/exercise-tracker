# Exercise tracker

Simple MERN stack app to track exercises.

## Features

- Add users
- Add exercises
- View exercises
- Edit exercises
- Delete exercises

## Usage

This app is deployed on Render: [Frontend](https://exercise-tracker-frontend-ufsi.onrender.com/) | [Backend](https://exercise-tracker-backend-ahhh.onrender.com/).

## Installation

To run this app locally, you will need to install [Node.js](https://nodejs.org/en/).

### Environment variables

Create a .env file in the backend directory and add the following variables:

```bash
ATLAS_URI=
PORT=
```

Create a .env file in the frontend directory and add the following variables:

```bash
REACT_APP_API_URL=
```

If you are running the backend locally, you don't need to change the REACT_APP_API_URL variable.

### Backend

To run the backend, cd into the backend directory and run:

```bash
npm install
nodemon server
```

### Frontend

To run the frontend, cd into the frontend directory and run:

```bash
npm install
npm start
```

## Technologies

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 - Leonel A. Zeballos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
