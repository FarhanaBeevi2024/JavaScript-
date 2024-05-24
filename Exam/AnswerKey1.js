

// [id, brand, model, type, pricePerDay, available]
 carBooking = [
        [1,'Toyota', 'Corolla', 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic', 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang', 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler', 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima', 'Sedan' ,45 ,12]
];
//1) Print all car brand
console.log('1) Print all car brand');
console.log('----------------------');
carBooking.forEach(car => {console.log(car[1]);});
console.log('----------------------');


//2)Print total number of cars available
console.log('2)Print total number of cars available');
console.log('----------------------');
totalAvlCar= carBooking.map(car=>car[5]).reduce((c1,c2)=>c1+c2)
console.log(totalAvlCar);
console.log('----------------------');


//3)Print sedan car details
console.log('3)Print sedan car details');
console.log('----------------------');
carBooking.filter(car=>car[3]=='Sedan').forEach(item=>console.log(item))
console.log('----------------------');


//4)	Print car with price per day greater than 60
console.log('4)Print car with price per day greater than 60');
console.log('----------------------');
carBooking.filter(car=>car[4]>60).forEach(item=>console.log(item))
console.log('----------------------');


//5)	Print details of jeep wrangler
console.log('5)Print details of jeep wrangler');
console.log('----------------------');
jeepWrangler = carBooking.find(car=>car[2]=='Wrangler')
console.log(jeepWrangler);
console.log('----------------------');


//6)	Arrange cars based on the descending order of price per day
console.log('6)Arrange cars based on the descending order of price per day');
console.log('----------------------');
carBooking.sort((c1,c2)=>c2[4]-c1[4]).forEach(item=>console.log(item[1]))
console.log('----------------------');


//7)	Sort car based on ascending order of available cars.
console.log('7)Sort car based on ascending order of available cars');
console.log('----------------------');
carBooking.sort((c1,c2)=>c1[5]-c2[5]).forEach(item=>console.log(item[1]))
console.log('----------------------');

//8)	Find the car with highest availability
console.log('8) Find the car with highest availability');
console.log('----------------------');
carHighestAvl=carBooking.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)
console.log(carHighestAvl[1]);
console.log('----------------------');

//9)	Find the revenue if all the cars are rented for a day
console.log('9) Find the revenue if all the cars are rented for a day');
console.log('----------------------');
revenue = carBooking.map(item=>item[4]*item[5]).reduce((c1,c2)=>c1+c2)
console.log(revenue);
console.log('----------------------');

//10)	Count the number of sedan car available
console.log('10) Count the number of sedan car available');
console.log('----------------------');
sedanCarAvl = carBooking.filter(car=>car[3]=='Sedan').map(c=>c[5]).reduce((c1,c2)=>c1+c2)
console.log(sedanCarAvl);
console.log('----------------------');

//11)	 Find the car with lowest availability
console.log('11) Find the car with lowest availability');
console.log('----------------------');
carLowestAvl = carBooking.reduce((c1,c2)=>c1[5]<c2[5]?c1:c2)
console.log(carLowestAvl[1]);
console.log('----------------------');

//12)	Print all car models
console.log('12) Print all car models');
console.log('----------------------');
carBooking.forEach(item=>console.log(item[2]))
console.log('----------------------');

//13)	Print total type of cars available
console.log('13) Print total type of cars available');
console.log('----------------------');
tc=[]
carBooking.map(item=>item[3]).filter(item=>!(tc.includes(item))&&tc.push(item))
console.log(tc.length);


//14)	Find the details of the car with type – mustang
console.log('14) Find the details of the car with type – mustang');
console.log('----------------------');
mustang = carBooking.find(car=>car[2]=='Mustang')
console.log(mustang);
console.log('----------------------');


//15)	Check if there is any car with price per day exactly 55
console.log('Check if there is any car with price per day exactly 55');
console.log('----------------------');
ppd = carBooking.some(car=>car[4]==55)
console.log(ppd?'yes':'no');
console.log('----------------------');



