//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

console.log('district having Highest +ve case');
highestPositive = covid_data.reduce((cov1,cov2) => cov1[2]>cov2[2]? cov1:cov2)
console.log(highestPositive[1]);
console.log('------------------------------------')


//2. district having Highest 1st dose vaccine

console.log('district having Highest 1st dose vaccine');
highestFirstDose = covid_data.reduce((cov1,cov2) => cov1[5]>cov2[5]? cov1:cov2)
console.log(highestFirstDose[1]);
console.log('------------------------------------')

//3. district having lowest death rate

console.log('district having lowest death rate');
lowestDeathRate = covid_data.reduce((cov1,cov2) => cov1[3]<cov2[3]? cov1:cov2)
console.log(lowestDeathRate[1]);
console.log('------------------------------------')

//4. sort data with +ve case in descending order

console.log('sort data with +ve case in descending order');
covid_data.sort((a,b)=> b[2]-a[2]).forEach(postv=>console.log(postv[1]))
console.log('------------------------------------')

//5. is there any district with +ve cases > 15000

console.log('is there any district with +ve cases > 15000');
morePostv = covid_data.some(cov=>cov[2] > 15000)
console.log(morePostv? 'yes': 'no');

console.log('------------------------------------')

//6. sort data with 1st dose vaccine ascending order
console.log('sort data with 1st dose vaccine ascending order');
covid_data.sort((cov1,cov2) => cov1[5] - cov2[5]).forEach((postv)=>console.log(postv[1]));

console.log('----------------------------------');

//7. Print Thrissur details

console.log('Print Thrissur details');
ThrissurDetails = covid_data.filter(cov=>cov[1]=='Thrissur').forEach(pro=>console.log(pro))
console.log('----------------------------------');

// thrissur = covid_data.find(dis => dis[1] == 'Thrissur')
// console.log(thrissur);
console.log('----------------------------------');

//8. Print total number of positive cases

console.log('Print total number of positive cases');
totalPostvCases=covid_data.map(cov=>cov[2]).reduce((postv1,postv2)=>postv1+postv2)
console.log(totalPostvCases);
console.log('----------------------------------------------');


//9. Print total number of curred cases

console.log('Print total number of curred cases');
totalCurredCases=covid_data.map(cov=>cov[4]).reduce((cure1,cure2)=>cure1+cure2)
console.log(totalCurredCases);
console.log('----------------------------------------------');


//10. Print curred cases in Idukki
console.log('Print curred cases in Idukki');
idukkiCurredCases = covid_data.find(cov => cov[1]=='Idukki')
console.log(idukkiCurredCases[4]);
console.log('------------------------------------')