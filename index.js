var fs = require('fs');

fs.readdir('../File Reader Task', (err, files) => {
  files.forEach((file) => {
    if(file.split('.').length !== 1){
        console.log(`${file} is a file`);
    }
    else{
        console.log(`${file} is a folder`);
    }
  });
});
