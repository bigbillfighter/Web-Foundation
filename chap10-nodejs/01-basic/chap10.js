
// -. promise
const promise1 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('foo')
    }, 300)
})

promise1.then((value) => console.log(value))
// console.log(promise1)

// 
function timeout(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time);
    })
}




timeout(1000).then(function(){
    console.log(1)
}).then(function(){
    timeout(1000)
}).then(function(){
    console.log(2);
})

timeout(1000).then(function(){
    console.log(1);
})
timeout(1000).then(function(){
    console.log(2);
})



async function timeout(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    })
}

await timeout(1000).then(function(){
    console.log(1)
});

async function f(){
    
}

await time(1000);
console.log(2);