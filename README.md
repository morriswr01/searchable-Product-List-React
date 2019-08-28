# React based Searchable Product List

This is a basic product list built for me to learn the basics of full-stack developlent using the MERN stack. Also used to learn redux and it's integration with react and the backend. The applications features are as follows:
* Full login and registration system which allows users to view and perform crud functions on the list of products.
* Search box which filters list of products by name in real time.
* Checkbox to filter products by those only in stock.
* Sort by function to sort displayed items by various criteria, A-Z, name length, price etc.
* New category function to allow new categories to be added(persistent and stored in the database).
* New product function to allow new products to be added and is automatically sorted once added.
* X button next to each product to allow you to delete products on the fly.
* Some backend routes protected using JWT token authentication. On login a token is generated which is then stored in local storage on the client side and passed to protected routes with every request.
* Suitable error messages for validation related issues.

## Technologies used:
* Node.js(Some experience)
* Express.js(Some experience)
* React.js(Completely new to me before project)
* Redux(Completely new to me before project)
* MongoDB(Mongoose.js)(Some experience)

## Screenshots of some of the features
Before Login<br>
![#1](https://user-images.githubusercontent.com/19209657/63857244-44a09800-c99b-11e9-83c3-ed2b9c026171.PNG)<br>
After Login<br>
![#2](https://user-images.githubusercontent.com/19209657/63857250-466a5b80-c99b-11e9-872d-ade84a049545.PNG)<br>
Sort by dropdown<br>
![#3](https://user-images.githubusercontent.com/19209657/63857262-49fde280-c99b-11e9-87ed-89b317ef23c7.PNG)<br>
Add new product modal<br>
![#5](https://user-images.githubusercontent.com/19209657/63857264-4a967900-c99b-11e9-985c-b56450454637.PNG)<br>
Some error messages<br>
![#6](https://user-images.githubusercontent.com/19209657/63857260-49fde280-c99b-11e9-8fae-0c9899335aad.PNG)<br>
![image](https://user-images.githubusercontent.com/19209657/63857173-23d84280-c99b-11e9-9da0-00f642ac9f7f.png)<br>

## Future Features
* Make fully responsive using mobile first methods
* Add pagination for the list of items

In the project directory, you can run:

### `npm server`
Runs only backend server
### `npm client`
Runs only the front end react server.<br>
### `npm run dev`
Runs the app in the development mode.Both server and client are run concurrently. (RECOMMENDED) <br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
