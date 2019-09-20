
##Calculator How-To:

After cd-ing into the project directory, for intial set-up:

###1: Run `npm i`

This will bring in all project dependencies.

###2: Create a .env file at the root of the project
This will be used to store our server port.
 <b>*Make sure to add the .env to the .gitignore if you are going to use any API keys or store any sensitive information in the .env </b>

###3: Add `SERVER_PORT=4444`

This is the server port that this project will run on. 

###4: Run `nodemon`

This will kick up our server.

###5: `npm start`
Run this in a separate terminal so both the front end and back end can run at the same time.
This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##To Test:

###Using Newman-
###`npm i -g newman`

Installs newman testing library globally to your machine.


###`newman run postman_collection/Calculator.postman_collection.json`

This will run the entire applications postman test collection in the terminal.<br>

###Using Postman-

Import the collection found in the folder `postman_collection` into postman, and run the collection via postmans collection runner.


##To Use the Command Line Calculator Tool:

###`npm i -g ./`

This will install the command `calculator` to your machine

###`calculator`
You can use any of the following commands following the calculator command in the terminal: <br>
<b>Commands:</b> <br>
  `add <num1> <num2> `     : adds two numbers together <br>
  `subtract <num1> <num2> ` : subtracts a number from another<br>
  `multiply <num1> <num2>` : multiplies one number by another<br>
  `divide <num1> <num2>`    : divides one number by another <br>
  `plugin <num1> <operator> <num2> `: uses two numbers and a custom operator to return total (operator must be in a string)

