var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
	connection.query("SELECT * FROM products", function (err, res) {
		console.log("Welcome to Bamazon");
		console.log("Items that are avilable for sale");
		console.log("ID | Product | Price($) | Stock");

		for (var i = 0; i< res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
		}
	selectProductId();
	});
}


//asking user what product id they want using inquirer
function selectProductId () {
	inquirer.prompt({
  		name:"productId",
  		type:"userInput",
  		message:"What is the ID number of the product that you would like to buy (enter a number from 1 to 10)"
	}).then(function(answer){
   		connection.query("SELECT * FROM PRODUCTS WHERE item_id=" + answer.productId, function(err, res){
	   		console.log("this is the ress!", res);
	   		numberStock(res);
   		});
	});
}


function numberStock (item) {
//ask how many you want 
//check if that number is available, if not then shoot out dont have that many
//go back and update the mysql data
    inquirer.prompt({
		name:"quantity",
		type:"userInput",
		message:"How many units would you like?"
	}).then(function(answer){
		if (answer.quantity <= item[0].stock_quantity){

			console.log("you bought that amount!! $", (answer.quantity * item[0].price))
			// this will update the amount of stock available
			var updatedStock = item[0].stock_quantity - answer.quantity;
			// changing the number on my mysql data
			connection.query("UPDATE products SET ? WHERE ?",
			[
				{
					stock_quantity: updatedStock
				},
				{	
					item_id: item[0].item_id
				}
			], function(err, res) {
				if(err) {
					console.log(err);
				}
				console.log("Remaining amount of stock: " + updatedStock);
			});

			start(); 
		} else {
			console.log("Insufficient quantity")
			start();
		}	

		// console.log("this is the quantity answer!!", answer.quantity);
		// console.log("this is resss", item[0].stock_quantity);

	});
}





