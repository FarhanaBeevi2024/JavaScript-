// exp = 10*2+5
// result = eval(exp)
// //eval - predefined funvction to evaluate the expression
// console.log(result);
// console.log('task complted');

//if there is a error

// exp = '**10*2+5'
// result = eval(exp)
// console.log(result);
// console.log('task complted');


exp = '**10*2+5'
try{result = eval(exp)
console.log(result);}
catch{
    console.log('check the eval expression');
}
finally{console.log('task completed');}
