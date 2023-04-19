let a = 10;
let b = 40; // memory me b ko memory allocate hogyi hai
const author = "shruti" 
author = 7 // throws an error because constant cannot be changed

 a = "shruti"  // javascript allow change value at run timme it allow the dynamically 
 console.log(a)
// let 8shruti = 7; // not allowed variable not begin with digit in js ,js is case sensistive language 
// let b ="shrutityagi"  // through error let can not be reallocate 
 b = 100 // but we can do this , iska mtlb ab isme 100 value dal di jaye 
 var s =10
 var s = 10 // var globally scope hota hai var me memory reallocate ho skti hai or update bhi but let me nhi hoti.

 {
    let b = 'this' // let are block scope
    console.log(b) 
 }
 console.log(b)
 
