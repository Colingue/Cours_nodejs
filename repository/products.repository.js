
import Product from "../models/products.models.js"

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

      Product.find().exec((error,result)=>{
        if (error) throw error;

        resolve(result.map(product => {
          return product.toObject()
        }))
      })
    })
    return promise;
  }

  getOne(id){
    const promise = new Promise((resolve, reject) => {

      resolve(Product.findById(id))
    })

    return promise;
  }

  getByName(name){
    const promise = new Promise((resolve, reject) => {

      Product.find({"name": {$regex: name}}).exec((error,result)=>{
        if (error) throw error;

        resolve(result.map(product => {
          return product.toObject()
        }))
      })
    })
    return promise
  }

  create(product) {

    const productData = new Product({
      name: product.name,
      quantity: product.quantity
    });

    const promise = new Promise((resolve, reject) => {
      resolve(productData.save((err) => {
      }));      
    })

    return promise;
   
  }

  delete(name) {


    const promise = new Promise((resolve, reject) => {
    resolve(Product.findOneAndDelete({name: name}).exec(() => {
        console.log("Suppression")
      }))     
    })

    return promise;
  }
}