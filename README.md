# Michael Needleman's Indigov Takehome Submission

## Stack
- Api
  - Postgresql database
  - TypeScript + Nodejs + Express for Server
  - Knex for database middleware
  - Nodemailer and Knex-To-CSV for export
    - [Etherial Email](etherial.email) for email credentials

- Client
  - React + TypeScript
  - Tachyons for styling

### Installation
- Api
  - `npm i` to install
  - Set up account with etherial email and replace credentials
  - `npm start` to run
- Client
  - `npm i` to install
  - `npm start` to run

### Thoughts
I spent a good amount of time learning node, express, and knex to make this work. I've only ever worked with basic node, so things like setting up cors was easy while setting up knex was hard. After making my own sample project, I felt ready to start fresh with the 90min suggested time limit.

I could have added a `where` to query entries after a certain date, but tt took me the full 90min to set up the project and get basic create/list/export endpoints going. I don't believe in copy/paste when learning, so I did start completely fresh. The sole exception to that is the `public` directory in the client. That I copy from every personal react project.