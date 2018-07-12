# Frontend vacancy assignment for [Usabilla](http://usabilla.com)
# [Live demo](http://codigodiario.me/usabilla)
![Preview](http://img110.xooimage.com/files/4/0/9/screencapture-loc...11_22_18-54c96db.png)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.


## Note
* Using [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) Chrome plugin because I'm being blocked by the CORS of the static files api.
* Downloaded the json from your server and uploaded it on my personal website server to resolve CORS and error 403 related issues trying to request on your given URL.

## Development server

Run `npm install` and after `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Implemented features
    * Comments country, on hover you can see the lat and lon's location on a static map
    * When we hover on comment, we can see a screenshot thumbnail image in a tooltip 

## TODO

- [x] Tooltip with map with the coord's
- [x] Screenshot of comment on hover
- [x] Country flag
- [x] ~~Loading screen~~ Empty feed message
- [x] On click on the static map open new tab to google maps with the direction
