
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
      Product.find().exec((error,result)=>{
        if (error) throw error;

        console.log(result);
        resolve(result.map(x=>{
          return x.toObject()
        }))
      })
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


    const productData = new Product({
      name: product.name,
      quantity: product.quantity
    });

    const promise = new Promise((resolve, reject) => {
      resolve(productData.save((err) => {
        console.log("test")
      }));
      // resolve(this.products.find((p) => p.id === id))
      
    })

    return promise;

   
    /*const newProduct ={
      ...product,
      id: ++this.index
    }; 

  
    this.products.push(newProduct);
    return newProduct;
    */

   
  }
}