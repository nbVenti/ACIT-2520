const express = require('express');

const app = express();
app.use(express.urlencoded ({extended: true}));
app.set('view engine', 'ejs');
// app.use(express.static("public"));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

app.get('/', (req, res) => {
    res.render("homepage");
    }
);

app.post("/convert", (req, res) => {

    console.log(res.body)
}
);

app.get("/convert", (req, res) => {
    res.render("convert");
})