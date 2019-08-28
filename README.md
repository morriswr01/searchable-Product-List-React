# React based Searchable Product List

This is a basic product list built for me to learn the basics of full-stack developlent using the MERN stack. Also used to learn redux and it's integration with react and the backend. The applications features are as follows:
* Full login and registration system which allows users to view and perform crud functions on the list of products.
* Search box which filters list of products by name in real time.
* Checkbox to filter products by those only in stock.
* Sort by function to sort displayed items by various criteria, A-Z, name length, price etc.
* New category function to allow new categories to be added(persistent and stored in the database)
* New product function to allow new products to be added and is automatically sorted once added.
* Some backend routes protected using JWT token authentication. On login a token is generated which is then stored in local storage on the client side and passed to protected routes with every request.
* Suitable error messages for validation related issues.

## Screenshots

In the project directory, you can run:

### `npm server`
Runs only backend server
### `npm client`
Runs only the front end react server.<br>
### `npm run dev`
Runs the app in the development mode.Both server and client are run concurrently. (RECOMMENDED) <br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
