import express from "express";

export function routes(controller) {
  const router = express.Router();

  router.get("", (req, res) => controller.getAll(req, res));
  router.post("", (req, res) => controller.create(req, res));
  router.get(":id", (req, res) => controller.getOne(req, res));
  router.get(":edit", (req, res) => controller.editForm(req, res));

  return router;
}
