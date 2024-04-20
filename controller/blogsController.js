//blogs_index, blog_details,blog_delete,blog_create_get,blog_create_post.

const Blogs =require('../models/blogs');

// ..............blog index pages.............................
const blogs_index =(req,resp)=>{
     // resp.sendFile('./pages/index.html',{root: __dirname});
     resp.redirect('/blog');
}

// .................blog lists......................
const blog_lists = (request,respond)=>{
    Blogs.find().sort({createdAt:-1})
    .then((results)=>{
        respond.render('blog',{title:'blog Page',blogs:results});
    })
    .catch((err)=>{
        console.log(err);
    })  
}
// ................blog details page..................
const blog_details=(req,resp)=>{
    const id =req.params.id_value;
    Blogs.findById(id)
    .then((results)=>{
     resp.render('blog_details',{title: 'Single Blog', blog:results});
    })
    .catch((err)=>{
        console.log(err);
    })
}

// ................blog delete..................
const blog_delete = (req,resp)=>{
    const id = req.params.id;
    Blogs.findByIdAndDelete(id)
    .then((results)=>{
        resp.redirect('/blog');
    })
    .catch((err)=>{
        console.log(err);
    })

}

// .................form to create new blog .................

const blog_form = (req,resp)=>{
    resp.render('create',{title:'Cretae Blog'});
}

// .................create new blog .................

const blog_create_post = (req,resp)=>{
    const blog =new  Blogs (req.body);
     blog.save()
     .then((results)=>{
      resp.redirect('/blog');
     })
     .catch((err)=>{
      console.log(err);
     })
  }

// ......................blog error page...............

const blog_err_page = (req,resp)=>{
    // resp.status(404).sendFile('./pages/404.html',{root:__dirname});  
       resp.render('404',{title:'404'});
   }

//...............blog about page ............

const blog_about_page = (req,resp)=>{
    // resp.sendFile('./pages/about.html',{root:__dirname});
   resp.render('about',{title:'About Page'})
}
module.exports={
    blogs_index,
    blog_details,
    blog_delete,
    blog_create_post,
    blog_lists,
    blog_err_page,
    blog_about_page,
    blog_form 
}