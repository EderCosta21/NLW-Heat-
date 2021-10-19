import "dotenv/config";
import express = require("express");

const app = express();


app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID} `)
});

app.get("/signin/calback", (request, response) => {

    const { code } = request.query;

    return response.json(code); 


})

app.listen(4000, () => console.log("Server is running port 4000 "))