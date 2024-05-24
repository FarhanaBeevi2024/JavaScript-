class A{
    methoda()
  {
    console.log('iniside methoda function');
  }
}
class B extends A{
    methodb()
  {
    console.log('iniside methodb function');
  }
}
class C extends B{
    methodc(){
        console.log('iniside methodc function');
    }
  
}
//object for class c

const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()
