function GroupArray(array,n){
    var result = [];
    for(var i=0;i<array.length;i+=n){
        result.push(array.slice(i,i+n));
    }
    return result;
}
GroupArray([1,2,3,4,5,6,7,8,9,10],3);