var express = require("express");
const upload = require("express-fileupload");
var cors = require("cors");

var app = express();

app.use(upload());
app.use(cors());

var PORT = 3001;

app.get("/", function (req, res) {
  res.code(200).send("Hello world");
});

app.post("/", async function (req, res) {
  try {
    // IN REQ.FILES."YOUR_FILE_NAME" WILL BE PRESENT
    const file = req.files;
    const bodyData = req.body;
    // console.log(file);
    // console.log(bodyData);
    res.status(200).send({
      message: "FILE RECEIVED!",
    });
  } catch (error) {
    res.send("ERROR");
  }
});

app.listen(PORT, function () {
  console.log("Server is running on PORT:", PORT);
});
