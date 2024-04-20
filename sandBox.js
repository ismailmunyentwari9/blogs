// ...................SandBox Codes................
app.get('/add-blogs',(req,resp)=>{
    const blog= new Blogs({
        title: 'kelly Books',
        snippet: 'We are adding new books here',
        body: 'Just Read it and get more results'
    });
    blog.save()
    .then((results)=>{
        resp.send(results);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/all-blogs',(req,resp)=>{
    Blogs.find()
    .then((results)=>{
        resp.send(results);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get('/single-blog',(req,resp)=>{
    Blogs.findById("6623809287eef2b673ce2eae")
    .then((results)=>{
        resp.send(results)
    })
    .catch((err)=>{
        console.log(err);
    })
})

