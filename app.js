const express=require('express');
const app=express();
const fs=require('fs');
const port=80;

// app.get("/",(req,res)=>{
//     res.status(202).send("this is harry hatela");
// });

// app.get("/aboutus",(req,res)=>{
//     res.status(404).send("without args")
// })
// app.post("/aboutus",(req,res)=>{
//     res.status(404).send("using post req to send the data")
// })

// app.listen(port,()=>{
//     console.log(`starting local server using express at ${port}`);
// });



// SERVING THE STATIC FILES
app.use("/static",express.static('static'));
app.use(express.urlencoded());

// SETTING THE VIEW TEMPLATE ENGINE AS- PUG
app.set('view engine','pug');

//SET THE VIEWS DIRECTORY
app.set('views','./views');

//MAKING RQST OR ENDPOINTS
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'pug template', message: 'learning pug!' })
})


const params={"tittle":"hello motto","content":"learning motto"}

app.get("/motto",(req,res)=>{
    res.status(200).render('motto',params)
})

app.get('/',(req,res)=>{
    let con='EQUIPPED WITH LATEST MACHINERY AND 24*7 ASSISTANCE';
    const  params={'title':"CULT-FILT GYM",'content':con}
    res.status(200).render('index.pug',params)
});

app.get('/:id',(req,res)=>{
    const id=req.params.id
    res.status(200).send("yeh!everything fine udit without tension with"+id);
});
app.post('/about',(req,res)=>{
    const name=req.query.id
    res.status(404).send("page not found with"+name);

});

app.post('/',(req,res)=>{
    name1= req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;
    output =`the name of the person is ${name1} and his /her age is ${age} and sex is ${gender}.furthur he belongs to ${address} and he is a ${more}`;
    fs.writeFileSync('info.txt',output)
    console.log(req.body);
    res.status(200).render('index.pug');
})
 
    var info =fs.readFileSync('info.txt',"utf-8")
    console.log(info);


  // CONTACT TO THE SERVER
  app.listen(port,()=>{
    console.log('hurrah! server running');
 })