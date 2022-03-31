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



function write(what,where){
    return new Promise((resolve, reject)=>{
        fs.writeFile(where, what, function(err) {
            if(err) {
                reject(err)
            }
            resolve()
        }); 
    })
}

        let b = process.cwd();
        if (!fs.existsSync(path.join(b,'/project_notes.json'))) {

            write(JSON.stringify([]),path.join(b, '/project_notes.json')).then(res=>{                    
                console.log("Generated new project notes!");
            },err=>{
                console.log("Gone bad generating project notes",err);
            })
              
        }
  

  rl.on('line', (answer) => {
    if(answer.length!==0){


                let b = process.cwd();
                var p = path.join(b, '/project_notes.json');
                var newArr = require(p)

                console.log('...')

                      
                        write(JSON.stringify(newArr),path.join(b, '/project_notes.json')).then(res=>{
            
                            console.log("Saved!");
                        },err=>{
                            console.log("Gone bad");
                        })

           

    }else{
      console.log("Nothing to save then...");
      setTimeout(function(){
        console.log("See Yaaaaa!");
      },1250)
      rl.close();
    }

})
