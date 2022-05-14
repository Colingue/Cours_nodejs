export class ProductsController {
  constructor(repository) {
    this.repository = repository;
  }

  getAll(req, res) {
    this.repository.get().then((products) => {
      res.render("index", { products });
    });
  }

  getOne(req, res) {
    const id = req.params.id;

    this.repository.getOne(id).then((product) => {
      res.render("details", { product });
    })
  }

  editForm(req, res) {
    res.render("edit");
  }

  create(req, res) {
    return this.repository.create(req.body).then(()=>{
      res.redirect("/")
    });
  }

  search(req, res){
    const name = req.query.name;

    this.repository.getByName(name).then((products) => {
      res.render("search", { products })
    })
  }

  delete(req, res) {

    let name = req.params.name

    this.repository.delete(name).then(() => {
      res.redirect("/")
    })
  }
}
