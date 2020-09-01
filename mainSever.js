const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))


api.get('/api/getList', (req, res) => {
    var list = ["item1", "banana", "orange"]
    res.join(list);
    console.log("Send some random crap, john");
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

