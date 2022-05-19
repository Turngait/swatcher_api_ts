# SelfWatcher API

API of SelWatcher application

Here you can find figma file:
```
https://www.figma.com/file/yDcJx5ySr2y0z16LECbsEI/SelfWatcher?node-id=0%3A1
```

Client side here:
```
https://github.com/Turngait/swatcher_client_ts
```
This project is an open-source based. Every can use this code or join to development of the project.

## Requirements
You need to install this application:
```
git
nodejs
npm
```

## Local project set up
```
git clone https://github.com/Turngait/swatcher_api_ts.git api
cd api
npm install
cp .env.example .env
```
Next you need fill ol fields in .env file
## Run project on local machine
```
npm run server:watch
```

## How to build project for production
```
npm run build
```

## Project's structure
In src folder:
  - config - configuration files
  - controllers - conttrollers which starting on certain routes
  - intefaces - types and interfaces
  - middleware - middleware functions
  - models - models which contain logic of application
  - routes - end-points
  - utils - helpers and other functions

Locally project start from src/index.ts

This file will be updated soon...

### Developed by
```
http://ilya-r.com/
```
