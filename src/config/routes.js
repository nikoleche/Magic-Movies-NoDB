const { Router } = require("express");
const { home, details } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { createGET, createPost } = require("../controllers/movie");
const { notFound } = require("../controllers/404");
const { search } = require("../controllers/catalog");

const router = Router();

// TODO add routes;
router.get("/", home);
router.get("/details/:id", details);
router.get("/create", createGET);
router.post("/create", createPost);
router.get("/search", search);
router.get("/about", about);

router.get("*", notFound);

module.exports = { router };
