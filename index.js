let express = require("express");

let app = express();
let server = app.listen(4000, () => {});

app.use(express.static("public"));
