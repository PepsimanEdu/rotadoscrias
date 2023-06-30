const express = require('express');
const routes = require('./src/Routes');

const app = express();
app.use(routes);

app.listen('3344',()=>{
    console.log('servidor on na porta 3344');
})


