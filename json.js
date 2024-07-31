//Product JSON: https://github.com/rvsp/database/blob/master/mongodb/product.json//

//Find all the information about each products

db.products.insertMany()

//To find the products with prices between 400 and 800

db.products.find({
    "product_price": {
        $gte: 400,
        $lte: 800  
    }
});

//To find products with prices that are not between 400 and 600

db.products.find({
    "product_price": {
        $lt: 400, 
        $gt: 600  
    }
});

//To list the four products with prices greater than 500

db.products.find({
    "product_price": { $gt: 500 }
}).limit(4);

//To retrieve only the product_name and product_material

db.products.find(
    {},
    {
        "product_name": 1,
        "product_material": 1,
        "_id": 0  
    }
);

//To find the product with an id of 10

db.products.findOne({
    "id": "10"
});

//To find only the product_name and product_material

db.products.findOne(
    { "id": "10" },
    { 
        "product_name": 1, 
        "product_material": 1,
        "_id": 0             
    }
);

//To find all products where the product_material contains the value "Soft"

db.products.find({
    "product_material": /Soft/
});

//To find products with a product_color of "indigo" and a product_price of 492.00

db.products.find({
    "product_color": "indigo",
    "product_price": 492.00
});

//Delete the products which product price value are 28

db.products.deleteMany({
    "product_price": 28
});

