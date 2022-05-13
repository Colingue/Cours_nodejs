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

    // const product = this.repository.getOne(id);
    this.repository.getOne(id).then((product) => {
      res.render("details", { product });
    })
  }

  editForm(req, res) {
    res.render("edit");
  }

  create(req, res) {
    return this.repository.create(req.body);
  }
}
