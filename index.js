#!/usr/bin/env node
const readline = require('readline');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');

clear();

console.log(
    figlet.textSync('JUSTDIDIT', { horizontalLayout: 'full' })
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    // console.log(`Received: ${input}`);
});

function write(what,where){
    return new Promise((resolve, reject)=>{

        fs.writeFile(where, what, function(err) {
            if(err) {
                reject()
            }
            resolve()
        }); 
    })
}

  

rl.question('Do what? ', (answer) => {

    var b = process.cwd();
    var newArr;
    if (fs.existsSync(path.join(b,'./clrdos.json'))) {
      newArr = require('./clrdos.json');
    }else{
        write([],'./clrdos.json');
    }
    newArr.push(answer)
    write(newArr,path.join(b, '/todos.json')).then(res=>{

        console.log("See Yaaaaa!");
    },err=>{
        console.log("Deu ruim");
    })
     
  
  rl.close();
})