//Buffer Object

fs.readFile('sample.txt',function(err,data){
  
  console.log(data);

});

//output will be buffered data

fs.readFile('sample.txt',function(err,data){
  
  console.log(data.toString());

});

fs.readFile('sample.txt','utf8',function(err,data){
  
  console.log(data);

});


buffer = new Buffer(10);
buffer.write("Hi Node");

buffer.toString();

buffer.write('Wow',2);
buffer.toString();
//to overwrite

buffer.write('Now',2,1);
buffer.toString();
//to replace

buffer.write('Now,2,1,'utf8');
buffer.toString();
//----------------------

//Methods for Comparison

bufferE=new Buffer('12');
bufferX=new Buffer('12');
bufferY=new Buffer('10');

bufferE.equals(bufferX); //true

bufferE.compare(bufferY); //1 - not matching

bufferE.compare(bufferX); //0 - matching

bufferN=new Buffer("Hello Node");

buf_slice= bufferN.slice(0,2);

buf_slice.toString();

//He

buf_slice.write('Hi');
buf_slice.toString();

//Hi

bufferN.toString();
//Hillo Node












