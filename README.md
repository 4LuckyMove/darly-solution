## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run dev`

Running react app and local json-server in developer mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Answers on questions
### 4. State manager (or lack thereof, justify the choice or lack of a tool).

In this application, I used the Redux state manager, because it solves a number of tasks for managing the state of data and the user interface in this application, and in the future development of the project it will be a good choice due to the fact that the application will have a large number of entities. It also greatly facilitates the work of the developer in tracking data updates on the server.

### Notes: d. The server may not accept the form and return errors (you may not implement it, but describe the implementation) 

The server may fail to accept the form in three cases:
1. When the form is empty on the client - the client will not be able to submit the form until all the form fields are filled in.
2. Infinite upload of data to the server - there is no limit on the maximum amount of data on the server.
3. There is no connection with the server - in the state manager, through try-catch, it catches errors and provides an answer to the client in the table.

### The use of any third-party libraries is allowed (but you will need to justify their use).

In this application I used the following libraries:
1. axios - gives you the ability to use async and await to get more readable asynchronous code;
2. bootstrap, react-bootstrap - allows you to create a website that contains design templates for typography, web forms, buttons, labels, navigation blocks and other web interface components;
3. concurrently - makes it possible to run react app and json-server in one terminal;
4. formik - allows you to work with the form, which simplifies getting data from the form, validating data, displaying error messages and much more;
5. framer-motion - makes it possible to simplify animation by passing animated properties to JSX / TSX elements, in this project I planned to use this library, but made animation through CSS;
6. react-icons - makes it possible to get a large number of icons needed for the project in the form of JSX / TSX elements;
7. react-paginate - allows you to quickly configure and connect pagination to a web site page;
8. yup - allows you to quickly set up form or model validation on a web page.