# FillKart-Api

This is Rest API for My E Commerce project called [FillKart](https://github.com/RameesJahan/FillKart)

## Run

- Clone the repository.
- Setup .env
- Install dependencies: npm install
- Configure MongoDB
- Start the development server: npm run test

## API Endpoints:

#### 1.Get all Products
Return list of all products.

```
GET /products

```

##### Output:

```
[
  {
    "_id": "643159b2718b98370bd6f94d",
    "id": "P100",
    "img": "/resources/products/images/img_P100.jpg",
    "name": "Lenovo Ideapad Slim 3i",
    "brand": "Lenovo",
    "price": 42999,
    "category": "Laptops",
    "disc": "The Lenovo Ideapad Slim 3i laptop features a 15.6-inch Full HD display and is powered by a 10th Gen Intel Core i5 processor. It comes with 8GB DDR4 RAM and a  HDD, making it a great option for everyday use and light gaming."
  },
  {
    "_id": "643159b2718b98370bd6f94e",
    "id": "P101",
    "img": "/resources/products/images/img_P101.jpg",
    "name": "Samsung Galaxy A52s 5G",
    "brand": "Samsung",
    "price": 35999,
    "category": "Phones",
    "disc": "The Samsung Galaxy A52s 5G smartphone comes with a 6.5-inch Full HD+ Super AMOLED display and is powered by a Snapdragon 778G processor. It features a 64MP quad-camera setup and a 32MP front-facing camera for selfies. The phone also has a 4500mAh battery and supports 25W fast charging."
  },
  :
  :
  :
  {
    "_id": "643159b2718b98370bd6f97f",
    "id": "P150",
    "img": "/resources/products/images/img_P150.jpg",
    "name": "Wireless Earbuds",
    "brand": "Sony",
    "price": 2499,
    "category": "Accessories",
    "disc": "Experience high-quality sound with these wireless earbuds from Sony. With a sleek design and comfortable fit, these earbuds are perfect for on-the-go listening. With long battery life and easy-to-use controls, you can enjoy your favorite music for hours on end."
  }
]

```

#### 2.Get One Product
Return one product with given id.

```
GET /products/view/_id
```
Example:

```
GET /products/view/643159b2718b98370bd6f97f
```
##### Output:
```
  {
    "_id": "643159b2718b98370bd6f97f",
    "id": "P150",
    "img": "/resources/products/images/img_P150.jpg",
    "name": "Wireless Earbuds",
    "brand": "Sony",
    "price": 2499,
    "category": "Accessories",
    "disc": "Experience high-quality sound with these wireless earbuds from Sony. With a sleek design and comfortable fit, these earbuds are perfect for on-the-go listening. With long battery life and easy-to-use controls, you can enjoy your favorite music for hours on end."
  }
```

#### 3.Get Categories
Return list of categories.

```
GET /products/categories

```
##### Output:
```
[
  "Accessories",
  "Kids",
  "Laptops",
  "Mens",
  "Phones",
  "Womens"
]
```
#### 4.Get Products of One Category
Return list of products that have given category

```
GET /products/categories/category

```

Example:
```
GET /products/categories/Laptops

```
##### Output:
```
[
  {
    "_id": "643159b2718b98370bd6f94d",
    "id": "P100",
    "img": "/resources/products/images/img_P100.jpg",
    "name": "Lenovo Ideapad Slim 3i",
    "brand": "Lenovo",
    "price": 42999,
    "category": "Laptops",
    "disc": "The Lenovo Ideapad Slim 3i laptop features a 15.6-inch Full HD display and is powered by a 10th Gen Intel Core i5 processor. It comes with 8GB DDR4 RAM and a  HDD, making it a great option for everyday use and light gaming."
  },
  {
    "_id": "643159b2718b98370bd6f950",
    "id": "P103",
    "img": "/resources/products/images/img_P103.jpg",
    "name": "HP 14s-dq2535TU",
    "brand": "HP",
    "price": 40990,
    "category": "Laptops",
    "disc": "The HP 14s-dq2535TU laptop features a 14-inch Full HD display and is powered by a 11th Gen Intel Core i3 processor. It comes with 8GB DDR4 RAM and a 512GB SSD, making it a great option for everyday use and light gaming."
  },
  :
  :
  :
  {
    "_id": "643159b2718b98370bd6f960",
    "id": "P119",
    "img": "/resources/products/images/img_P119.jpg",
    "name": "Dell Inspiron 15 5510",
    "brand": "Dell",
    "price": 79990,
    "category": "Laptops",
    "disc": "The Dell Inspiron 15 5510 laptop features a 15.6-inch Full HD display and is powered by an 11th Generation Intel Core i5 processor. It comes with 8GB DDR4 RAM and a 512GB SSD, making it a good option for productivity and multitasking. The laptop also has a backlit keyboard and a built-in fingerprint reader for secure login."
  }
]
  

```

### Upcoming:

- `/signin`
- `/signup`
- `/user`


