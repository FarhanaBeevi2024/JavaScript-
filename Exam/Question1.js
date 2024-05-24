// 1 ) Car Booking Data
// [id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
// 1)	Print all car brand
// 2)	Print total number of cars available
// 3)	Print sedan car details
// 4)	Print car with price per day greater than 60
// 5)	Print details of jeep wrangler
// 6)	Arrange cars based on the descending order of price per day
// 7)	Sort car based on ascending order of available cars.
// 8)	Find the car with highest availability
// 9)	Find the revenue if all the cars are rented for a day
// 10)	Count the number of sedan car available
// 11)	 Find the car with lowest availability
// 12)	Print all car models
// 13)	Print total types of cars available
// 14)	Find the details of the car with type – mustang
// 15)	Check if there is any car with price per day exactly 55

// 1)	Print all car brand

console.log('Print all car brand:');
carBooking.forEach(car => {console.log(car[1])});

console.log('----------------------------------');

// 2)	Print total number of cars available

console.log('Print total number of cars available');
carNumbers=carBooking.map(car=>car[5])
console.log(carNumbers);
totalCars=carBooking.map(car=>car[5]).reduce((aval1,aval2)=>aval1+aval2)
console.log(totalCars);


console.log('Print total number of cars available');
totalCars=carBooking.map(car=>car[5]).reduce((aval1,aval2)=>aval1+aval2)
console.log(totalCars);

console.log('----------------------------------');


// 3)	Print sedan car details

console.log('details of sedan car');


sedan = carBooking.filter(car=>car[3]=='Sedan').forEach(pro=>console.log(pro));


console.log('----------------------------------');

// 4)	Print car with price per day greater than 60

console.log('Details of car with price per day greater than 60');
carBooking.filter(pro => pro[4]<60).forEach(item => console.log(item[1]))

console.log('----------------------------------');

// 5)	Print details of jeep wrangler

console.log('details of jeep wrangler');


jeep = carBooking.find(car => car[1] == 'Jeep')
console.log(jeep);

console.log('----------------------------------');

// 6)	Arrange cars based on the descending order of price per day

console.log('Arrange cars based on the descending order of price per day');

carBooking.sort((a,b)=> b[4]-a[4]).forEach(item=>console.log(item[1]))

console.log('----------------------------------');

// 7)	Sort car based on ascending order of available cars.

console.log('Sort car based on ascending order of available cars.');

carBooking.sort((a,b)=> a[5]-b[5]).forEach(item=>console.log(item[1]))

console.log('----------------------------------');

// 8)	Find the car with highest availability

console.log('Find the car with highest availability');
highAval = carBooking.reduce((car1,car2) => car1[5]>car2[5]? car1:car2)
console.log(highAval[1]);

// 9)	Find the revenue if all the cars are rented for a day

console.log('----------------------------------');

// 10)	Count the number of sedan car available
console.log('Count the number of sedan car available');

console.log('----------------------------------------------');

// 11)	 Find the car with lowest availability
console.log('Find the car with lowest availability');
lowAval = carBooking.reduce((car1,car2) => car1[5]<car2[5]? car1:car2)
console.log(lowAval[1]);
console.log('------------------------------------')
// 12)	Print all car models

console.log('Print all car models');
carBooking.forEach(pro => {console.log(pro[2]);});
console.log('------------------------------------')

// 13)	Print total types of cars available
// 14)	Find the details of the car with type – mustang
console.log('Find the details of the car with type – mustang');

mustang = carBooking.filter(car=>car[2]=='Mustang').forEach(pro=>console.log(pro))

console.log('----------------------------------');
// 15)	Check if there is any car with price per day exactly 55

console.log('Check if there is any car with price per day exactly 55');
price = carBooking.some(pro=>pro[4] <= 55)
console.log(price? 'yes': 'no');
console.log('------------------------------------')