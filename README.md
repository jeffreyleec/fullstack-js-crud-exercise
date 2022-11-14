# fullstack-js-crud-exercise

### Contributors: [Jeffrey Lee](https://github.com/jeffreyleec)

### Overview
Plexxis

### Getting Started
1. Run `npm i` in both server and client folders
2. Set up a db with the credentials in the .env example
3. In psql "CREATE DATABASE users OWNER _____;"
4. Start the server with `npm start`
5. Start the client with `npm start`


<!-- ### Project Instructions
Requirements
Create a simple but impressive (looks good, works well, has intuitive design, etc.) CRUD application that can do the following:

1) Retrieve employees from a REST API
2) Display the employees in a React application
3) Has UI mechanisms for creating and deleting employees
4) Has API endpoints for creating and deleting employees
5) Edit your version of the README.md file to explain to us what things you did, where you focussed your effort, etc.

Read over the Bonus objectives and consider tackling those items as well

Bonus (Highly Encouraged)
1) Use a relational database to store the data (SQLite, MariaDB, Postgres)
2) UI mechanisms to edit/update employee data
3) Add API endpoint to update employee data
4) Use React Table

Other Technologies
You are permitted to use the following if you prefer ...
1) TypeScript, Front-end or backend.
2) NestJS, back end.

Getting Started
This project was bootstrapped with Create React App. The front-end app runs off localhost:3000. The REST API is located in the /server folder and runs off localhost:8080. The data is being served from a JSON file located in the /server/data folder. Run npm start to start both servers.

Getting it Done
You are free to use whatever libraries that you want. Be prepared to speak to your decisions decisions.
There is no time limit. Use as little or as much time as is necessary, but aim to get it done within a week. If you need more time it's no problem, but you must let us know. Sometimes life happens. That's ok.
Fork or clone our repository into your own repository.
Send us the link when you are done the exercise (pglinker at plexxis dot com).
When you are done, we'll schedule a zoom call with you where you will share your screen, demo the application for us, and walk us through the code while we ask questions about it. -->

### Main Focus
1. RESTful API routes, Postgres CRUD functionality 
2. React-table 
3. Organized file structure 


### Personal goals and steps
1. Get comfortable with react-table
  - add features: pagination, show x rows, sort columns
2. Connect react-table with provided mock data
3. Create Postgres DB, schema for drop/create users table, inserting seed data
4. Create CRUD routes and link server to client
5. Context react-table with db data
6. Creat UI for CRUD, user able to delete/add/edit/getone/getall users
7. polish styling, debug and edge cases. 
 - Delete and Update only accepts integers
 - all inputs for C,U,D must be filled for button to be active
 - Data formatting with Utils Functions

 ### Future improvements for considerations
 1. TDD and addition testing for edge cases (C,U,D request with ID that does not exist)
 2. UX/UI for different screen size media queries
 3. additional error handling and messages 

![Home Page](https://user-images.githubusercontent.com/105941243/201580054-b7339edc-c5c1-43f7-92b7-0238195631cc.png)
![Update Page](https://user-images.githubusercontent.com/105941243/201579549-69d4d1be-aff1-4927-9965-b9003ab86816.png)



