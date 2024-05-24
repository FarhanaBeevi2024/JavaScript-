//w.a.p to check whether the given number is mobile number or not(10 digits)

//data that will be coming to backend as string

num = '9876543210'
console.log(num.length==10?'its a mobile number' : 'not a mobile number')


//w.a.p to check then given mail id is gmail.com(@gmail.com)
mail = 'abc@gmail.com'
console.log(mail.endsWith('@gmail.com')?'its a gmail id' : 'not a gmail id')

//w.a.p to check a word starts with the letter q
word = 'query'
console.log(word.startsWith('q')|| word.startsWith('Q')? 'the given word starts with letter q': 'no')