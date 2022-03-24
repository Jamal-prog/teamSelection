require("dotenv").config();
const bodyParser = require('body-parser')
const express = require("express");
const { getMarvelCharacterData } = require("./Helpers");

const app = express();
app.use(express.static("selectTeam"))
const PORT = 3000;


app.get("/", (req, res) => {

  res.sendFile(__dirname + "/selectTeam/index.html")
  
});

// app.get("/selectTeam/index.html", (req, res) => {
//   app.use(express.static("selectTeam"))
//   res.sendFile(__dirname + "/selectTeam/index.html")
  
// });


// app.get("/frontend/teamSelection.html", (req,res) => {
  
//   res.sendFile(__dirname + "/frontend/teamSelection.html")
// })

app.get("/api/image", async (req,res) => {
  const marvelData = await getMarvelCharacterData();
    const randomInt1 = Math.floor(Math.random()* marvelData.data.results.length);
    const imgUrl1 = `${marvelData.data.results[randomInt1].thumbnail.path}.${marvelData.data.results[randomInt1].thumbnail.extension}`
    const imgName1 = marvelData.data.results[randomInt1].name;
    const randomInt2 = Math.floor(Math.random()* marvelData.data.results.length);
    const imgUrl2 = `${marvelData.data.results[randomInt2].thumbnail.path}.${marvelData.data.results[randomInt2].thumbnail.extension}`
    const imgName2 = marvelData.data.results[randomInt2].name;
    const randomInt3 = Math.floor(Math.random()* marvelData.data.results.length);
    const imgUrl3 = `${marvelData.data.results[randomInt3].thumbnail.path}.${marvelData.data.results[randomInt3].thumbnail.extension}`
    const imgName3 = marvelData.data.results[randomInt3].name;

    res.send({imgUrl1,imgUrl2,imgUrl3,imgName1,imgName2,imgName3})
    
  
 
  
 
})


app.listen(PORT, () => {
  console.log("Listening... watcha say?");
});