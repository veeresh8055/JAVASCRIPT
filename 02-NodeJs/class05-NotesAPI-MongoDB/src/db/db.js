const mongoose = require("mongoose");
const dns = require("node:dns");

// Some networks/ISPs block SRV DNS lookups used by `mongodb+srv://` URIs.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connToDB() {
  const mongoUri =
    process.env.MONGODB_URI ||
    "mongodb+srv://VeereshBC:igxU8n4szyT74PDh@cluster0.jujpvdi.mongodb.net/backend";

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error(
      "If you see 'querySrv ECONNREFUSED', switch DNS to 1.1.1.1/8.8.8.8 or use a non-SRV Atlas URI."
    );
    throw error;
  }
}

module.exports = connToDB;
