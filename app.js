const express = require('express');
const blogController = require('./controller/blogsController')
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');

// ..........middle wares and statics .........
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'));

// connection to DB......................

const dbURI='mongodb+srv://isma:PvqEvvK129NJfNgT@cluster0.mbg58r6.mongodb.net/blogs_DB';
mongoose.connect(dbURI)
.then((results)=>app.listen(3000))
.catch((err)=>console.log(err));

app.get('/',blogController.blogs_index);
app.get('/about',blogController.blog_about_page);
app.get('/create',blogController.blog_form);
app.get('/blog',blogController.blog_lists);
app.post('/blogs',blogController.blog_create_post)
app.get('/single/:id_value',blogController.blog_details);
app.get('/blog_remove/:id',blogController.blog_delete);
app.use(blogController.blog_err_page);
