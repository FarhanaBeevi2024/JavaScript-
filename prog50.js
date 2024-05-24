//call back function

function greet(name,callback)
{
    console.log(`hai ${name}`);
    callback()
}

function callme()
{
    console.log('iam a call back function');
}
greet('peter',callme)


//eg:2

setTimeout( () => {
    console.log('hello');
},5000 )