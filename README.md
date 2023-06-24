## Order Management Api

## Documentation

- A detailed documentation of the api can be found here: [API Documentation](https://documenter.getpostman.com/view/21130368/2s93z6disH)

## Swagger documentation:

- A Swagger documentation of this api can be found locally:
- Run Project Locally

- Clone the project

- cd into the project's folder and run yarn install to install dependencies

- Create a .env file from the .env.example file for all environment keys and value name

- Run yarn start:dev to start the server

- Send a GET request to /docs

## Routes:

There are 5 routes in this API endpoint:

- Create Order
  - POST request to "https://localhost:<port>/api/orders/"
  - PAYLOAD - { email, productName, quantity }
- Read Orders
  - GET request to "https://localhost:<port>/api/orders/"
- Read Order by Id
  - GET request to "https://localhost:<port>/api/orders/:orderId"
- Update Order by Id
  - PATCH request to "https://localhost:<port>/api/orders/:orderId"
  - PAYLOAD - { status }
- Delete Order by Id
  - DELETE request to "https://localhost:<port>/api/orders/:orderId"

## HTTP Request

All API requests are made by sending a secure HTTPS request using one of the following methods:

- POST Create a resource
- GET Get a resource or list of resources
- PATCH updates a resource or list of resources
- DELETE deletes a resource or list of resources

For POST, the body of your request must be a JSON payload.

## HTTP Response code

Each response will be returned with one of the following HTTP status codes:

- 200 OK Successful request
- 400 Bad Request There was a problem with the request
- 500 Server Error Server error
