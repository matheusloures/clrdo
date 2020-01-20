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
    if(answer.length!==0){
      
        var b = process.cwd();
        
        if (!fs.existsSync(path.join(b,'./clrdos.json'))) {
          fs.writeFile(path.join(b,'./clrdos.json'), [], function(err) {
            if(err) {
                console.log(err)
            }
            console.log('...')
        }); 
      }
        console.log('...')
        setTimeout(function(){
          var newArr = require(path.join(b, '/clrdos.json'));
        
            console.log('...')
            newArr.push([answer])
       
            write(newArr,path.join(b, '/clrdos.json')).then(res=>{

              console.log("See Yaaaaa!");
            },err=>{
                console.log("Deu ruim");
            })
       },1500)
        

      rl.close();
    }else{
      console.log("Nothing to save then...");
      setTimeout(function(){
        console.log("See Yaaaaa!");
      },1250)
      rl.close();
    }
})