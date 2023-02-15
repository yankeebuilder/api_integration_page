const express = require("express");

const axios =require("axios").default
const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');


app.get("/", async (req, res) =>
{
  console.log(req.query)
  let post_body = {
    client_id: '0726a25d4d74d0e29afa',
    client_secret: '3e3ccc6c71ff8f067c3b8c211f9b9e2ad1f47f84',
    code:req.query.code
  }
  const config = {
    headers:{
      Accept: "application/json"

    }
  };
  const key = await axios.post("https://github.com/login/oauth/access_token",post_body,config)
    

  console.log(key.data)
  res.render('index', {
    token:key.data.access_token
  })
}  );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

