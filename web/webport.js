var arr = [2, 5, 8, 4]
//foreach
arr.forEach(function(val){
    console.log(val + " hello");
})

//map
var newarr = arr.map(function(val){
    return val;
})
console.log(newarr);

//filter
var ans = arr.filter(function(val){
    if(val > 3) {
        return true;
    } else return false;
})
console.log(ans);

//find 
var n = arr.find(function(val){
    if(val == 2) return val;
})
console.log(n)

//index
var arra = arr.indexOf(8);
console.log(arra);

//objects
var obj = {
    name: "harsh",
    age: 23,
}
Object.freeze(obj);
obj.age = 21;
console.log(obj.name);
console.log(obj);
console.log(arr.length);

//functions
function abcd() {
    return 12;
}
console.log(abcd.length);

console.log(abcd());


//await in js


//async js- line by line code na chle no wait for second code
async function abcd(){
    var blob = await fetch('https://randomuser.me/api/');
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

//console.log(abcd());