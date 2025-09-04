for(i=1;i<=10;i++){
    
    console.log("9  * ",i,"=",i*9)
    // j=j+1/j++
}



let a=1;

while(a<=30){

    console.log(a);
    a++;
}
// do while

do{
    console.log(a);
    a+=1;
}
while(a<=30)//infinite loop



students = [23,25,36,35,3,33,46,16,47,90,67,87]
        //   0, 1, 2 ,3,4, 5, 6, 7, 8, 9,10, 11

console.log(students.length)
j=0;
for(i=0;i<students.length;i++){
    if(students[i]<25){
        continue;// skip this particular execution
    }
    console.log("you got", students[i] ,"marks so you are promoted")
    j++;
}

console.log(j)


names=["john","ram","sita","priya","mira","akash","suraj"]


// for(i=0;i<names.length;i++){
   
//     console.log(names[i] ," you are promoted")
//     // j++;
// }

// alternative

for(abc in names ){
        console.log(abc ," you are promoted")

}

