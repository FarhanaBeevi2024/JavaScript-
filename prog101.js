class A{
    methoda()
  {
    console.log('iniside first method');
  }
   methoda(n){
    this.n1 = n
    console.log(`iniside methoda with argument ${this.n1}`);
  }
  methoda(n,m){
    
    console.log(`iniside methoda with argument ${n} and ${m}`);
  }
}

   
//object for class c

const obj = new A()
obj.methoda(5)