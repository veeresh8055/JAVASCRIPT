const contactModel = require("../model/contactSchema.js");

// ~~~Create Contact~~~
async function createContact(req, res) {
  try {
    let { fname, lname, phoneNo, address, location = "phone" } = req.body;
    let newContact = await contactModel.create({
      fname,
      lname,
      phoneNo,
      address,
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

// ~~~All Contact~~~
async function allContacts(req, res) {
  try {
    let allContacts = await contactModel.find({});
    if (allContacts.length === 0) {
      res.status(404).json({
        success: false,
        message: "NO contacts are avilable pl add contacts ",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfullly fetched",
        allContacts,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Successfullly fetched",
      error,
    });
  }
}

// ~~~Single Contact~~~
async function singleContact(req, res) {
  let { id } = req.params;
  try {
    let contact = await contactModel.findOne({ _id: id });
    console.log(contact)
     if (contact) {
      res.status(200).json({
        success: true,
        message: "Successfullly fetched the contact ",
        contact,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "The contact is not available  ",
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No contact found ",
      error
    });
  }
}

// ~~~Delete Contact~~~
async function deleteContact(req, res) {
  try {
    let { id } = req.params;
    let contact = await contactModel.findOneAndDelete({ _id: id })
   if (contact) {
      res.status(200).json({ success: true, message: "contact deleted successfully " })
    } else {
      res.status(404).json({ success: false, message: "the contact is not found or it is already deleted " })
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "the contact is not found or it is already deleted " })
  }
}

// ~~~Update Contact~~~
async function updateContact(req, res) {
  try {
     let contact = await contactModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
     res.status(202).json({
      success: true,
      message: "Updated successfully ",
      contact
    })
    } catch (error) {
    res.status(404).json({ success: false, message: "Not found the contact " })
  }
}


module.exports = {
  createContact,
  allContacts,
  singleContact,
  deleteContact,
  updateContact
};
