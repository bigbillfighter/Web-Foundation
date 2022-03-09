
const obj = {foo: 1, bar:2};
for(let [key, value] of Object.entries(obj)){
    console.log(key, value);
}