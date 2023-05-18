const express = require("express");
const app = express();
app.use(express.static("public"));
const bodyParser = require("body-parser");
const https = require("https");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res)=> {
    
    const htmlResponse = `
    <html>
      <body>
        <h1>Welcome, ${req.body.firstName + " " + req.body.lastName}. You will recieve the newsletter shorlty!</h1>
      </body>
    </html>
  `;
  res.send(htmlResponse);
    
})




app.listen(3000, console.log("Server started"));