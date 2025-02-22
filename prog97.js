//write methods for solving the given questions


class Bank{
//property
accountDetails = {
    1001 :{acno :1001, username :'userone',password : 'userone', balance : 50000},
    1002 :{acno :1002, username :'usertwo',password : 'usertwo', balance : 5000},
    1003 :{acno :1003, username :'userthree',password : 'userthree', balance : 10000},
    1004 :{acno :1004, username :'userfour',password : 'userfour', balance : 6000}
}

//validate a given account number
validate(acno){
    return acno in this.accountDetails?true:false
}
//authenticate the account(accno, password)
authenticate (acno,pswd){
    if(this.validate(acno)){
        if(this.accountDetails[acno].password==pswd){
            console.log('authentication successful');
        }
        else{
            console.log('invalid password');
        }
    }
    else{
        console.log('invalid account');
    }
}
//check the balance
balance(acno,pswd){
    if(this.validate(acno)){
    if (this.accountDetails[acno].password==pswd){
        console.log(`Current balance of ${acno} is ${this.accountDetails[acno].balance}`);
    }
    else{
        console.log('invalid password');
    }
}
else{
    console.log('invalid account number');
 }
}
//fund transfer
fundTransfer(fromAcno,ToAcno,fpswd,amount){
    if (this.validate(fromAcno) && this.validate(ToAcno)){
        if(this.accountDetails[fromAcno].password==fpswd){
            if(this.accountDetails[fromAcno].balance==amount){
                console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance}and ${ToAcno} is ${this.accountDetails[ToAcno].balance}before fund transfer`);
                this.accountDetails[fromAcno].balance-=amount
                this.accountDetails[ToAcno].balance+=amount
                console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${ToAcno} is ${this.accountDetails[ToAcno].balance} after Fund transfer`);

            }else{
                console.log('insufficient balance');
            }
        }
        else{
            console.log('invalid password');
        }
    }else{
        console.log('invalid account number');
    }
  }
}

const user1 = new Bank()
console.log(user1.validate(1004)?'valid':'invalid')
console.log('-------------------------------------------');
user1.authenticate(1000,'userone')
console.log('-------------------------------------------');

user1.balance(1000,'userone')