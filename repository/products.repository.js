import Product from "../models/products.models.js"
// const Product = require("../models/products.models")
export class ProductsRepository {

  
  index;

  products = [
    {id: 1, name: "Cristaline", qty: 50 },
    {id: 2, name: "Contrex", qty: 30 },
    {id: 3, name: "Abatilles", qty: 500 },
    {id: 4, name: "Hepar", qty: 5 }
  ];

  
  constructor(){
    this.index = this.products.length;
  }

  get(){
    const promise = new Promise((resolve, reject) => {
      // resolve(this.products)
      resolve(Product.find())
    })

    return promise;
    //console.log(Product.find())
  }

  getOne(id){
    const promise = new Promise((resolve, reject) => {
      // resolve(this.products.find((p) => p.id === id))
      resolve(Product.findById(id))
    })

    return promise;
    // return this.products.find((p) => p.id === id);
  }

  create(product) {
    const newProduct ={
      ...product,
      id: ++this.index
    };
    this.products.push(newProduct);
    return newProduct;
  }
}