const http = require("http");
const fs = require("fs");
const path = require("path");

const baseDir = __dirname;

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".avif": "image/avif",
    ".mp4": "video/mp4",
  };

  res.writeHead(200, {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
  });
  fs.createReadStream(filePath).pipe(res);
}

http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/home") {
    sendFile(res, path.join(baseDir, "home.html"));
  } else if (req.url == "/signup") {
    sendFile(res, path.join(baseDir, "signup.html"));
  } else if (req.url == "/contact") {
    sendFile(res, path.join(baseDir, "contact.html"));
  } else if (req.url == "/login") {
    sendFile(res, path.join(baseDir, "login.html"));
  } else if (req.url.startsWith("/assets/")) {
    const assetPath = path.join(baseDir, req.url);

    if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
      sendFile(res, assetPath);
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(path.join(baseDir, "pageNotFound.html")).pipe(res);
    }
  } else {
    sendFile(res, path.join(baseDir, "pageNotFound.html"));
  }
})
.listen(3000,()=>{
    console.log('server started....!')
})
