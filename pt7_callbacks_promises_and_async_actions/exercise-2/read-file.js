// Should read from file which is passed in execution of file
const fs = require("fs");
let content;
const file_to_read = process.argv[2];
// const file_to_read = process.argv.slice(2);
console.log(file_to_read);

// node exec_path file_to_read

  fs.readFile('./'+file_to_read,'utf8', function read(err,data) {
    // readStream.on('open', function())
    if (err) throw err;
    content = data;
    console.log(data);
  });


const readFile = (file_to_read) => new Promise((resolve, reject) => {
  if(!file_to_read){
      reject('Missing file');
  }else{
    fs.readFile('./'+file_to_read, 'utf8')
    content = data;
    resolve(data);
  }
  }
});
