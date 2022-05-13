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
      resolve(this.products)
    })
  }

  getOne(id){
    const promise = new Promise((resolve, reject) => {
      resolve(this.products.find((p) => p.id === id))
    })
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