const { Router } = require("express");
const {
  createContact,
  allContacts,
  singleContact,
} = require("../controller/contactCintroller");

const router = Router();

router.post("/create", createContact);

router.get("/allContacts", allContacts);

router.get("/singleContact/:id", singleContact);

module.exports = router;
