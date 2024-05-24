products=[
    {pId:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pId:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pId:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pId:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pId:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

console.log('print product name only')
// for(data of products)
// {
//     console.log(data.pName);
// }

products.forEach(pro => {console.log(pro.pName)});

console.log('------------------------------------------');

//2. print all mobile details whose display is lcd
console.log('print all mobile details whose display is lcd')
// for(data of products)
// {
//     if(data.display =='lcd')
//     {
//         console.log(data);
//     }
// }

products.filter(pro=>pro.display=='lcd').forEach(item=>console.log(item))

console.log('------------------------------------------');


//3. print 5g mobile phone name
console.log('print 5g mobile phone name')

// for(data of products)
// {
//     if(data.band=='5g')
//     {
//         console.log(data.pName)
//     }
// }

products.filter(pro=>pro.band=='5g').forEach(item=>console.log(item.pName))
console.log('------------------------------------------');


//4. sort mobile based on price
console.log('sort mobile based on price')
products.sort((pro1,pro2)=>pro1.price - pro2.price).forEach(item=>console.log(item.pName))

console.log('------------------------------------------');


//5. print costly mobile
console.log('print costly mobile');
cpro = products.reduce((pro1,pro2)=>pro1.price>pro2.price?pro1:pro2);
console.log(cpro.pName);
console.log('------------------------------------------');


//6. print low cost mobile
console.log('print low cost mobile');
lpro = products.reduce((pro1,pro2)=>pro1.price<pro2.price?pro1:pro2)
console.log(lpro.pName);
console.log('------------------------------------------');

