const express = require('express');
const app = express();
const router = express.Router();
var port = process.env.PORT || 8080;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'html/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port);

console.log(`Running at Port ${port}`);