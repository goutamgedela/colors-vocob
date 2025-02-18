const array=[1,2,3,3,2,1,4,5,6,11,13,24,13,14,15,15,16,16,16]
const arr1=[];
//[4,5,6,11,24,14]
//[1,2,3,4,5,6,11,13,24,14,15,16]
for(int i=0;i<array.lenth;i++){
    for(int j=1;j<array.length;j++){
        if(!arr1.includes(array[i]))
            arr1.push(array[i]);
    }
}
console.log(arr1);

