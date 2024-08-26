## About

Gamified Goals is an application to view and manage your goals for the week. It adds incentive to complete your goals by defining and entering 3 rewards to treat yourself throughout the week. The applicaation works by increasing your score after clicking on and completing each goal, and upon reaching certain goals, you unlock your rewards.

## Setup

### Dependencies
- Run `npm install` in project directory
- `cd client` and run `npm install`

### Database Prep

- Access the MySQL interface in a new window in your terminal by running `mysql -u root -p`
- Create a new database called goal: `create database goal`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=root
    DB_NAME=goal

-Run `npm run migrate` in the project folder. This will create tables 'goals' and 'rewards'

### Development

- Run `npm start` in the project directory to start the backend server on port 4000.
- `cd client` and run `npm run dev` to start the client server on port 5173





_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp based in Barcelona._