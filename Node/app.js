const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/demo", (req, res) => {
    console.log(req.body);
   res.json(req.body);
})

app.listen(port, () => {
    console.log("server s running");
})