const express = require ('express');
const app = express();
const PORT = 5555;

app.get('/',(req, res)=>{
    res.end('Hello World')
})
app.listen(PORT,"localhost",()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})