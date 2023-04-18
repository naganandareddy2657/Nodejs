const {exec} = require('child_process');
//const { callbackify } = require('util');
//node naga.js real update message 
console.log("this is child class \"naga\"");
//let args = process.argv;
//args.splice(0,2);
//let str = args.join(' ');

console.log('naga.js');
//console.log(str);
exec('git add .', cbadd);

//exec("git push -u origin master", cbadd)
function cbadd(err, strout, sdtin){
    if(err){
        console.log(err);
        return;
    }
    exec("git commit -m \"updated\"", cbcommit);
}

function cbcommit(err, strout, sdtin){
    if(err){
        console.log(err);
        return;
    }
    exec('git push -uf origin master');
}

//git clone https://github.com/naganandareddy2657/Nodejs.git