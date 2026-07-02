const { Router } = require("express");
const {
  createContact,
  allContacts,
  singleContact,
  deleteContact,
  updateContact
} = require("../controller/contactCintroller");

const router = Router();

router.post("/create", createContact);

router.get("/allContacts", allContacts);

router.get("/singleContact/:id", singleContact);

router.put("/update/:id", updateContact);

router.delete('/:id' , deleteContact )

module.exports = router;
