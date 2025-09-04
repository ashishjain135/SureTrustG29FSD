let fruits=['apple','mango','banana','guava',90]//-> exmple of an array     0       1       2          3    4
console.log(fruits[2])
console.log(typeof fruits)
console.log(fruits)
fruits.pop()//removes last element
console.log(fruits)
fruits.unshift("grape")//add element in first position
console.log(fruits)
fruits.shift()//remove first element
console.log(fruits)
for(let fruit of fruits)
   { console.log(fruit)//->tip: if u are not using "{}" after loop, compiler will consider next line as a part of loop
    console.log('ok')
}
fruits.push("jackfruit")//add element to it's last position
console.log(fruits)