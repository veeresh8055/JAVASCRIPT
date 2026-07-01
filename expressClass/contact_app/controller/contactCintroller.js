const contactModel = require("../model/contactSchema.js");

async function createContact(req, res) {
  try {
    let { fname, lname, phoneNo, location } = req.body;
    let newContact = await contactModel.create({
      fname,
      lname,
      phoneNo,
      location,
    });
    res.status(201).json({
      success: true,
      message: "Contact created Successfully",
      newContact,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
}

async function allContacts(req, res) {
  try {
    let allContacts = await contactModel.find({});
    console.log(allContacts);

    res.status(200).json({
      success: true,
      message: "Successfullly fetched",
      allContacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Successfullly fetched",
      error,
    });
  }
}

async function singleContact(req, res) {
  let { id } = req.params;
  try {
    let contact = await contactModel.findOne({ _id: id });
    console.log(contact);

    res.status(200).json({
      success: true,
      message: "Successfullly fetched the contact ",
      contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in  fetching",
      error,
    });
  }
}

module.exports = {
  createContact,
  allContacts,
  singleContact,
};
