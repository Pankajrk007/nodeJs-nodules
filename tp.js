function f (x){
    if ( x===0){
        return 1
        }else{
            return x*f(x-1)
        }
      
}
let a = console.log(f(5));
console.log(a);