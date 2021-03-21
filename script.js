//source of truth
var items =[
    {
        
        name : "Iphone 12",
        liked : true ,
        quantity : 1 ,
        price : 1199 ,
        id : 1 ,
    },
    {
        name : "Smart TV",
        liked : true ,
        quantity : 1 ,
        price : 1999 ,
        id : 2 ,
    },
    {
        name : "Galaxy S21",
        liked : true ,
        quantity : 1 ,
        price : 999 ,
        id : 3 ,
    },

]

//Selectors
var itemsContainer = document.getElementById("items");
var itemsTotalQuantity = document.getElementById("items-TotalQuantity");
var itemsTotalPrice = document.getElementById("total-price");

//Like or not
function likeHandler(index){
    items[index].liked = !items[index].liked ;
    printitems();
}
//Adjust Quantity
function increment(index){
    items[index].quantity++ ;
    printitems();
}
function decrement(index){
    items[index].quantity-- ;
    if(items[index].quantity <= 1){
        items[index].quantity =1
    }
    printitems();
}
//Remove items
function removeItems(id){
    items = items.filter(function(item){
        return item.id != id ;
    })
    printitems();
}
//count total items
function printitemsNumbers(){
    number = 0 ;
    items.forEach(function(item){
        number += item.quantity
    })
    itemsTotalQuantity.innerText = number ;
}

//calculate total price 
function calcTotalPrice(){
    total = 0 ;
    items.forEach(function(item){
        total += item.price * item.quantity
    })
    itemsTotalPrice.innerText = total ;
}

function printitems(){
    itemsContainer.innerHTML="";

    items.forEach(function(item , index){
        itemsContainer.innerHTML += `<div class="item">
        
        <span class="item-name">${item.name}</span>
        <span class="liked" onclick="likeHandler(${index})">Do you like it?<img src="${item.liked?"img/heart.png":"img/full-heart.webp"}" alt="heart" id="heart"></span>
        <div class="counter">
            <span>Adjust quanity</span>
            <button class="counter-action increment" onclick="increment(${index})">+</button>
            <span class="counter-quantity">${item.quantity}</span>
            <button class="counter-action decrement" onclick="decrement(${index})">-</button>
    </div>
    <span>Price : <span class="item-price">${item.price * item.quantity}$</span></span>
    <button class="remove-item" onclick ="removeItems(${item.id})">Remove</button>
    </div>`
    })
    printitemsNumbers();
    calcTotalPrice();
}

function init(){
    printitems()
}

init();