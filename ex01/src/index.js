function myRecursion(arr, n){
    if (n < 1){
        return [1];

    } else {
        const arr = myRecursion(arr, n -1) * arr [n - 1];
        arr.push(n);
        return arr;
    }

}
console.log(myRecursion([1], 0));
console.log(myRecursion[1, 2, 3, 4], 2);

module.exports = myRecursion;