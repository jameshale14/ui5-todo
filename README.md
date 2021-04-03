# Offline to-do demo
 A UI5-based to-do list demo with PWA and offline support.

 🚧 This is code for a demo application. It is a UI5 application with a simple service worker - it is not a fully fledged to-do list application! 🚧

 Local development uses the UI5 tooling and does not use a service worker. The service worker is added at build time. Serving of built files with a service worker is performed using [Firebase tooling](https://firebase.google.com/docs/cli/).
  

## Prerequisites
- UI5 tooling installed globally - https://sap.github.io/ui5-tooling/
- Firebase account and CLI installed globally - https://firebase.google.com/docs/cli/

## Setup
1. Run `npm install`
2. Authenticate with Firebase and set up a sample project following the [Firebase documentation](https://firebase.google.com/docs/cli/) - this could probably be removed and instead use the UI5 tooling to serve the built resources using an alternative `ui5.yaml` config file.

## Available tasks
- `start`: serves the files in the `webapp` directory - this does not use the service worker (it's added at build time)
- `build`: build the application files *with* the service worker This builds the files in the `dist` directory
- `build-nopwa`: build the application files *without* the service worker. This builds the files in the `dist_nopwa` directory 
- `start:dist` serves the files in the `dist` and `dist_nopwa` directories using Firebase. This requires the `build` and `build-nopwa` tasks to have been run already.
