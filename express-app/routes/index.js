exports.index=function(request,response){
  //response.send('<h1>Welcome To Express Web App</h1>');
  response.render('index',{
      title:'Express EJS',
      courses:['Master NodeJS','Master EmberJS']
  });
}

exports.courses=function(request,response){
  //response.send('<h1>Welcome To Express Web App</h1>');
  response.render('courses.ejs',{
      title:'Our Courses',
      courses:['Master NodeJS','Master EmberJS']
  });
}