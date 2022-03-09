async function timeout(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    })
}

await timeout(1000).then(function(){
    console.log(1)
});