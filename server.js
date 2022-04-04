const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const path = require("path");
const port = 3002;
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.get("/", async function (req, res) {
  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "7994189f-f8d6-478b-868f-342a95a1db3f",
        },
      }
    )

    .then((response) => {
      var values = response.data;
      res.render("index", { data: values.data });
    })
    .catch((error) => {
      console.log(error);
    });

  //res.render("index", { data: response.data });
});
app.listen(port, () => {
  console.log("connected");
});
