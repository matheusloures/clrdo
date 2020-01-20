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

function processFile() {
    console.log(content);
}
  

rl.question('Do what? ', (answer) => {
    var mAnswer = answer;
    if(answer.length!==0){
      
        let b = process.cwd();

        if (!fs.existsSync(path.join(b,'/project_notes.json'))) {
          fs.writeFile(path.join(b,'/project_notes.json'), [], function(err) {
            if(err) {
                console.log(err)
            }
            console.log('...')
            }); 

            setTimeout(function(){
                console.log('...')
                let a = [];
                a.push(mAnswer);
                      
                        write(JSON.stringify(a),path.join(b, '/project_notes.json')).then(res=>{
            
                            console.log("See Yaaaaa!");
                        },err=>{
                            console.log("Deu ruim");
                        })

                    },3000)
                      
        }else{
            console.log('...')
            setTimeout(function(){

                let b = process.cwd();
                var p = path.join(b, '/project_notes.json');
                var newArr = require(p)

                console.log('...')

                newArr.push(mAnswer)

                    setTimeout(function(){
                      
                        write(JSON.stringify(newArr),path.join(b, '/project_notes.json')).then(res=>{
            
                            console.log("See Yaaaaa!");
                        },err=>{
                            console.log("Deu ruim");
                        })

                    },3000)
           
           },1500)

        }
        
        

      rl.close();
    }else{
      console.log("Nothing to save then...");
      setTimeout(function(){
        console.log("See Yaaaaa!");
      },1250)
      rl.close();
    }
})