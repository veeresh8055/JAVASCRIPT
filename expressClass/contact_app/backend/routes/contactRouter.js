const { Router } = require("express");
const {
  createContact,
  allContacts,
  singleContact,
  deleteContact,
  updateContact
} = require("../controller/contactCintroller");

const router = Router();

router.post("/new", createContact);

router.get("/", allContacts);

router.get("/:id", singleContact);

router.put("/:id", updateContact);

router.delete('/:id' , deleteContact )

module.exports = router;