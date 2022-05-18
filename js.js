var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
fruits.includes('banana');
const isBelowThreshold = (currentValue) => isNaN(currentValue) ;
console.log(fruits.every(isBelowThreshold));

let fruitsFilter = fruits.filter(function (item, index) {
    let x = 'is a string'
    return isNaN(item)

})


let item=fruits.find(function(item,index)
{
    return item=="apple"
})

 console.log(fruitsFilter)


// for(i=0;i<=fruits.length;i++)
// {
// let a = fruits[i].startsWith("b")
// console.log(a)
// }


let newarr3 = fruits.reduce(function (value, item) {
   
    value.push('i love '+item)
 return value ;
}, []);


console.log(newarr3);


let arrmap= fruits.map(function(item,index,arrrs)
{
    return "i love "+item
})
 
console.log(arrmap)







async function se (){
    
    let data = await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
    let book=await data.json()
    console.log(book)
    for(i=0; i<book.length ;i++){
    var n =document.createElement("div");
    var h = document.createElement("h4")
    var price =document.createTextNode(book[i].price)
    var name =document.createTextNode(book[i].name)
    h.appendChild(price)
    h.appendChild(name)
    var img =document.createElement("img")
    img.style.width="50px"
    img.style.height="50px"
    img.setAttribute("src",book[i].image)
    n.appendChild(h)
    n.appendChild(img);
    n.style.border="solid 15px white"
    n.style.textAlign="center"
    n.style.background="black"
    h.style.backgroundColor="red"
    document.body.appendChild(n)
}
}
se();

function get(){
let e = document.getElementById("t").value;
fetch("https://jsonplaceholder.typicode.com/posts?userId-"+e).then(function(data)
{
    data.json().then(function(c)
    {
        console.log(c)
    })
}).catch(function(err)
{
    console.log(err);
})
}