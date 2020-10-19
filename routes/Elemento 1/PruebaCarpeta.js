const express = require('express'),
    app = express();
    const multer = require('multer')
    const upload = multer({ dest: '../../subidas' })

    app.get('/', (req, res) => res.send('Hello World!'))
    
    app.post('/create', upload.any(''), (req, res) => {
        console.log('Incoming POST')
        console.log(JSON.stringify(req.body))
        res.send('Gotcha, thank you.')
    })
    

    


// app.get('/',(req,res)=>{
// //res.render('mdmdmdmdmdjfj')
// res.send('hshbshbhbssbhshb')
// });

// app.post('/create',(req,res)=>{
//     console.log(req.files.foo)
// }); 

module.exports = app;