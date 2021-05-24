# Matterway Test

## Stack

---

For the front end of this test I used:

- React
- Material UI
- Redux Toolkit
- Cypress

For the back end of this test I used:

- Express
- Typescript
- Jest

## How to run the app

---

- First of all is important to install all the dependencies in both front and back:
  1. Go to root folder and run `npm install`
  2. Then go to `cd server` and run `npm install`
- Second to run the app, you must create an .env file in the root folder for the whole project and put your amazon credentials, like the following example:
  ```
  REACT_APP_AMAZON_USERNAME=fake@fake.com
  REACT_APP_AMAZON_PASSWORD=fake123
  ```
- It's important to create a build for the back before running the whole application so the following commands are necessary:

  - `cd server`
  - `npm run build`

- To run both apps simultaneously, is needed to run the following command on the root folder:
  `npm run start:dev`

## How to run the tests

---

### Front

- To run the tests in the front run the following command:
  - `npm run cypress:open`
    This will open a Chrome Browser where you can run all the tests.

### Back

- To run the tests in the back run the following commands:
  - `cd server`
  - `npm test`

## Juan Pablo Rothkegel Ide
