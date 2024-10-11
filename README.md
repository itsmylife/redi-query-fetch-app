# Getting Started with Data Fetching

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this?

In this repository you'll find very basic of data fetching. It'll use very simple components without any styling. Feel free to make them nice :)

The project drawing is under ./public/sketch.png

- We will load the users
- When we select a user, its details will be loaded. 
- We can delete the user, or create a new user.
- Bonus, try to update an existing user.
- Each create/update/delete action should be reflected in the list.

To be able to run the project please follow the steps below:

- `npm install` Install the dependencies. 
- `npm run start` Start development server in a terminal.

In the slides we mentioned about `json-server`. I found out that it is buggy. It has problems with [CORS](https://developer.mozilla.
org/en-US/docs/Web/HTTP/CORS). And the demo code they shared https://json-server.dev/json-server-cors/ is not working. So we will skip it. 

We use https://melivecode.com/ which is a ready-to-use CRUD API. (Create-Read-Update-Delete)
> ### Disclaimer 
> #### *Data will be reset to only have the first 12 entries every 15 minutes. 
 
In the `./src/api` you'll find the axios setup. Please check it. 
