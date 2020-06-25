# Customer API

Simple customer details API written using ExpressJS.

## Features

* List customers
* View customer info

## Requirements

* Latest stable version of NodeJS installed.
* MySQL or Mariadb database.

## Running the project

* Clone or download the project to a directory.
* Run ``npm install`` to install code dependencies.
* Create ``development.json`` or ``production.json`` inside ``config`` folder depending upon your server environment to override default config options if needed.
* Create database named ``customer`` and run the execute ``db.sql`` to create required table and insert seed data.
* Run ``npm start`` to start the API server.

## Running tests

* Set up the project.
* Create ``test.json`` inside ``config`` folder to override default config options if needed.
* Use the command ``npm test`` to run tests once project set up is done.

## Endpoints

| Endpoint      | Method | Description
| ------------- | ------ | --------------------
| /             | GET    | API version and name
| /customer     | GET    | Customer listing
| /customer/:id | GET    | Customer info

## Clients

The following are the clients available for the API

* ReactJS client: https://github.com/cyberinferno/customer-api-react-client
