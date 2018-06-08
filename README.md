<h2 align="center">ZipCode</h2>
<h4 align="center">A CODE CHALLENGE THAT NEEDS YOUR ZIPCODE.</h4>

[![Build Status](https://travis-ci.org/Iamheathsmith/weather-by-zip-frontend.svg?branch=master)](https://travis-ci.org/Iamheathsmith/weather-by-zip-frontend)

### [Link to live site hosted on Heroku.com](https://zip-weather-frontend.herokuapp.com/)

## Overview
Weather for you is a basic React app that is built with Redux. We use the [Open WeatherMap current weather API](https://openweathermap.org/api), [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/start?hl=en_US) and [Google Elevation API](https://developers.google.com/maps/documentation/elevation/start) to create a weather page that has all the info that you will ever need for a location based of a Zip Code.

### Dependencies
`package.json`
```
   "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-emotion": "^9.2.0",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.1",
    "eslint": "^4.19.1",
    "extract-text-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.2",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  },
  "dependencies": {
    "cors": "^2.8.4",
    "eslint-plugin-react": "^7.7.0",
    "express": "^4.16.2",
    "redux-mock-store": "^1.5.1",
    "redux-thunk": "^2.3.0"
  }
```

`.env`
```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000/api/v1
```
* will need to download the [backend here](https://github.com/Iamheathsmith/weather-by-zip) to run it.

## test

-------------------|----------|----------|----------|----------|-------------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |      100 |    66.67 |      100 |      100 |                   |
 action            |      100 |      100 |      100 |      100 |                   |
  find-location.js |      100 |      100 |      100 |      100 |                   |
 reducer           |      100 |    66.67 |      100 |      100 |                   |
  addLocation.js   |      100 |    66.67 |      100 |      100 |                 1 |
-------------------|----------|----------|----------|----------|-------------------|
Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.574s, estimated 2s

## Built With
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [npm](https://www.npmjs.com/)
* [Jest](https://www.npmjs.com/package/jest)
* [Express](https://www.npmjs.com/package/express)
* [Superagent](https://www.npmjs.com/package/superagent)

## Creators
The Creator of Weather for you!

* [Heath Smith](https://github.com/Iamheathsmith)
