To init node, simply use the command **npm init --yes** which will build a package json file. The **npm i express**
To run the js file, we use the command **node index.js** or simply **node .** if only one js file exists.
But here we will have to manually close and restart the port according to changes. To avoid that install the package called nodemon(short for node monitor)
command: **npm i -g nodemon**
To set an env, in terminal write the command **export PORT={{your desired port}}** eg: export PORT=5000
To use joi **npm i joi** - This makes it easy to validate the input and displays proper error message