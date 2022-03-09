// js原生是一个单线程语言，只能顺序执行代码
// 后续的技术可以使得js能够使用多线程技术
//-. unicode 字符集
const CARD_POINTS = ['A', '2', '3'];
const CARD_SUITS = ['🙏', '🎡', '❤'];


function getRandomItems(list){
    return list[Math.floor(Math.random(list.length))];
}

function getRandCard(){
    const point = getRandomItems(CARD_POINTS);
    const suit = getRandomItems(CARD_SUITS);

    console.log(point);
    console.log(suit);
}

getRandCard();

//-. test var
console.log(a===undefined)
var a =10;

function foo(){
    console.log(a, i);
    var a = 20;
    for(var i=0; i<a; i++);
    console.log(a, i);
}

foo();

//-. test let
{
    let x = 10;
    // js 是弱类型语言，存在隐含类型转换
    console.log('x is '+ x); 
}

console.log(typeof x); // 会报错
let x = 10;
function foo(){
    console.log(x);
    var x = 20;
    return x*x;
}

console.log(foo());

//-. test const
const BUFFER_SIZE = 1024;
const buffer = new ArrayBuffer(BUFFER_SIZE);
console.log(buffer);

const data = new Uint16Array(buffer);
const data2 = new Uint8Array(buffer);

// 这里定义const的只是数组的引用，data不可变，但是数组的内容可变
data[0] = 0xff06;
console.log(data[0], data2[1]);


//-. typeof
console.log(
    typeof null, // object
    typeof undefined,
    typeof 123,
    typeof 'abc',
    typeof true,
    typeof Symbol(),
    typeof 2n,
    typeof Object(),
)

function add(x, y){
    return x+y;
}

console.log(typeof add); // function

// -. 隐式类型转换
const a=10, b='abc', c=1;
console.log(a+b+c);

let a = 123, b='345', c=1;
console.log(a+b-c);

const a = 123, b='abc',c=1;
console.log(a+b-c);

const a = true, b = false;
console.log(a+1, b*3);

const a = true, b = false;
console.log(a+'',b+'foobar');

//-. ==和===
console.log(100 == '1e2');
console.log(true == 1, false == '0');

let foo, bar = null;
console.log(
    foo==null,
    bar==null,
    foo==undefined,
    bar==undefined
);

console.log(true==1, true===1);

// -. 显示类型转换
console.log(Number('123')===123);
console.log(String(0xf)==='15');
console.log(Boolean(null)===false);
console.log(Number(null)===0);

// -. 值类型好引用类型
let x = 20, y=30;

function foo(a, b){
    a++; b++;
    console.log([a, b]);
}

foo(x, y);
console.log([x, y]);

const obj = {x:20, y:30};
console.log(typeof obj);
function foo2(obj){
    obj.x++;
    obj.y++;
    console.log(obj);
}
foo2(obj);
console.log(obj);

//-. test Null and Undefined
let foo;
console.log(foo);

function bar(a, b){
    return [a, b];
}

// 由于第二个实参没有传入，所以b被认为是未定义的
console.log(bar(1));

let sum=0;
function addSum(num){
    sum += num;
}

console.log(addSum(10));

let p = {x:2, y:2};
console.log(p.z);

let foo = null;
console.log(foo);

//-. test Number
nbr = [0, 7, -3, 0b101, 0o777, -0x7f, 3e5];
console.log(nbr); 

let n1 = 10, n2 = Number.MAX_SAFE_INTEGER, n3 = 1.2;
console.log(
    Number.isSafeInteger(n1),
    Number.isSafeInteger(n2),
    Number.isSafeInteger(n3), // n3不是整数，所以也返回false
    Number.isSafeInteger(n2+1)
);

// -. test float number
nbr = [.3, 3.14159, 6.62e34]
console.log(nbr);

console.log(
    Number.MAX_VALUE,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_VALUE,
    Number.EPSILON
);

let n1 = Number.MIN_VALUE, n2 = 1, n3 = n2+n1, n4 = n2+Number.EPSILON;
console.log(n1>0, n2<n3, n2<n4); // 中间的精度太高，会丢失

console.log(
    Number.MAX_VALUE*2,
    -Number.MAX_VALUE*2,
    -1/0,
    1/0
);

// -. test float compare
console.log(0.1+0.2);
console.log(0.1+0.2===0.3);
function floatEqual(a, b){
    return Math.abs(a - b) < Number.EPSILON;
}
console.log(floatEqual(0.1+0.2, 0.3));

// -. test NaN
const n1 = Math.sqrt(-1);
n2 = 3*'abc';
console.log(n1, n2);

console.log(n1==n2);
console.log(Number.isNaN(n1), Number.isNaN(n2));
console.log(Object.is(n1, n2));
console.log(0/0, 0/-0, -0/0, -0/-0);

// -. test 0, -0
const a = 0, b = -0;
console.log(a===b, 1/a, 1/b);
console.log(1/Infinity, 1/-Infinity);

// - test boolean
const TRUE = true, FALSE = false;
console.log(typeof TRUE, typeof FALSE);

if(!0 && !null && !'' && !undefined && !false && !(-0) &&!NaN){
    console.log('Something should print');
}

if(1){
    console.log("Something else to print");
}

const result = (6*7===42);
console.log(result);

// -. text string
var text = 'This is a text.';
var html = '<p class = "sth"> a<em>paragraph</em></p>';
console.log(text);
console.log(html);

var text2 = 'my pancake\nis the best\nin the world!';
console.log(text2);

var text3 = 'if(a){\n\tconsole.log(b);\n}';
console.log(text3);

var text4 = '\u5947\u821e\u56e2';
console.log(text4);

// -. test Unicode
var str = 'lucas';
console.log(str.codePointAt(2));

const str1 = '东南';
const arr = [...str1];
console.log(arr);
console.log(str1.codePointAt(0));
console.log(str1.codePointAt(1));

const str2 = String.fromCodePoint(str1.codePointAt(0)+2, str1.codePointAt(0)+3);
console.log(str1+str2);

// -. test type transform
console.log(1+2, '1'+2, '1'-2);
console.log(Number.parseInt('100abc'));
console.log(Number.parseInt('100abc', 2));

console.log(Number.parseFloat('12.3e10x13'));
console.log(Number.parseFloat('abc12.3e10'));

var foo = {
    // toString(){
    //     return 'foo';
    // }
};
console.log(foo+'bar');

// -. test string operation
const a = 'hello';
const b = 'WORLD';
const c = '!';

console.log(a+' '+b+c);
console.log(a.toUpperCase() + ' '+ b.toLowerCase() +c);

console.log(a.split('').reverse().join(''));
// slice 表示【2,3）， substr表示从2开始的3个字符
console.log(a.slice(2, 3), a.substr(2, 3));

const d = a+' '+b+c+b;
// 查找第一个b开头的下标
console.log(d.indexOf(b));
// 查找内容为a的子串然后替换为小写
// replace 也可以用来匹配正则表达式
console.log(d.replace(a, a.toUpperCase()));

// -. test long text
const tpl1 = `The pancakes I made
is the best
in the world!`;
console.log(tpl1, typeof tpl1);

let who = 'lucas', what = 'pancakes';
const tpl2 =  `The ${what} ${who} made
is the best
in the world!`;

console.log(tpl2);

// -. test sumbol
const id1 = Symbol('foo');
const id2 = Symbol('foo');
console.log(id1, typeof id1);
console.log(id1==id2, id1===id2)

const foo = Symbol.for('foobar'), bar = Symbol.for('foobar');
console.log(foo===bar, foo, typeof foo);

const foo = Symbol.for('foobar');
console.log(Symbol.keyFor(foo));

// -. test symbol application
const size = Symbol('size');
class Collection{
    constructor(){
        this[size] = 0;
    }
    add(item){
        this[this[size]] = item;
        this[size]++;
    }
    static sizeOf(instance){
        return instance[size];
    }
}

class Path{
    constructor(){
        this._points = [];
    }

    add(...points){
        this._points.push(...points);
    }

    *[Symbol.iterator](){
        yield *this._points;
    }

    get length(){
        return this._points.length;
    }
}

const path = new Path();
path.add([1, 1], [1, 2], [2, 3]);
console.log(path.length);

for(let point of path){
    console.log(point);
}

// -. test Bigint
const a = Number.MAX_SAFE_INTEGER+1;
const b = a+1;
const c = BigInt(a)+1n;
console.log(a, b, c);

const d = Number.MAX_VALUE;
const e = d*2;
const f = BigInt(d)*2n;
console.log(d, e, f);

// -.test BigInt method

const a = -1n;
// 转化为16位无符号数
const b = BigInt.asUintN(16, a);
const c = BigInt.asIntN(16, b-1n);
console.log(b, c);

// -.test function
function foo(){
    console.log('foo bar');
}
foo();

function add(x, y=0){
    return x+y;
}
console.log(add(1,2));

// 实际定义了一个长度至少为1的形参表，且第一个有缺省值0
function sum(x=0, ...rest){
    // reduce() 方法会给数组中的每个元素执行这个匿名函数
    // 当匿名函数要多于1个的参数时，第二个参数表示匿名函数第一个参数的值
    // 如果reduce 只有一个参数，则如果多于1个参数则会将数组中前n个元素作为匿名函数的参数
    // reduce会保证数组中的元素有且仅适用一次
    // 实际上这个函数和下面一个效果一样
    return rest.reduce((a, b) => a+b, x);
}
console.log(sum(1, 2, 3, 4, 5));
function sum2(...rest){
    return rest.reduce((a, b) => a+b);
}
console.log(sum2(1, 2, 3, 4, 5));

function vertorLength({x=0, y=0, z=0} = {}){
    return Math.hypot(x, y, z);
}

const v = {x:3, y:4, z:0};
console.log(vertorLength(v));

// -.test functional equation
const factorial = function f(n){
    if(typeof n==='number') n = BigInt(n);
    if(n <= 1n) return 1n;
    return n*f(n-1n);
}
console.log(factorial(100));

const factorial = function(n){
    if(typeof n==='number') n = BigInt(n);
    if(n <= 1n) return 1n;
    return n*factorial(n-1n);
}
console.log(factorial(100));

// 使用 map 进行计算，传入一个函数，匿名和具名都可
const angles = [30, 45, 60, 90, 180];
const radAngles = angles.map(
    function(angle){
        return Math.PI*angle/180;
    }
);
console.log(radAngles);

// -. test 箭头函数
const angles = [30, 45, 60, 90, 180];
const radAngles = angles.map(
    angle => {
        var c = Math.PI*angle;
        return c/180;   
    }
);
console.log(radAngles);

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((x, y) => x+y);
console.log(sum);

// -. 执行上下文（闭包）
function sayHelloTo(person){
    return function(){
        console.log(`Hello ${person}!`);
    }
}

let greeting1 = sayHelloTo('Toe');
let greeting2 = sayHelloTo('Mike');
greeting1();
greeting2();

const person = {
    firstName: '三',
    lastName: '张',
    getFullName: function(){
        return this.lastName + ' '+ this.firstName;
    },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFullName());

person.sayHelloTo = function(){
    console.log(`hello ${this.lastName}!`);
}

person.sayHelloTo();
// 这个实际上只是将对象的函数传入作为参数，实际的调用者是更加外界的调用者，
// 即global对象，使用动态绑定，此时外部对象没有lastName这个属性
setTimeout(person.sayHelloTo, 100);


const person = {
    firstName: '三',
    lastName: '张',
    getFullName: function(){
        return this.lastName + ' '+ this.firstName;
    },

    // 由于箭头函数没有this上下文，实际上会使用上一级调用者的this上下文
    // 即不使用 sayHelloTo的this上下文，而是使用person 的this上下文
    sayHelloTo(){
        setTimeout(
            () => console.log(`hello ${this.lastName}!`),
            100
        );
    },
};

person.sayHelloTo();


// -. test dynamic binding
function getFullName(){
    return this.firstName + ' '+this.lastName;
}

const person1 = {firstName: '三', lastName: '张'};
console.log(getFullName.call(person1));


const logger = {
    type: 'info',
    count: 0,
    log: function(message) {
        console[this.type](message, ++this.count);
    }
};

setInterval(
    logger.log.bind(logger, 'heart beat'),
    1000
);

// -. Function class
const add = new Function('x', 'y', 'return x+y');
console.log(add(1, 2));

const tpl = "{foo: 'bar'}";
const obj = (new Function(`return ${tpl}`))();
console.log(obj);

// -. construct obj

{
    let myObj = {
        name: "akira",
        birthday: "12-29"
    };
}

{
    let myObj = new Object();
    myObj.name = 'akira';
    myObj.birthday = '12-29';
}

{
    let myObj = Object.create({
        name:'akira',
        birthday: '21-29'
    });
}

// -. constructor
function Vector2D(x, y){
    this.x = x;
    this.y = y;
}
const v = new Vector2D(3, 4);
console.log(v);

class Vector2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

const v = new Vector2D(3, 4);
console.log(v);

// -. attribute define
const data1 = {
    foo: 'foo',
    bar: 'bar',
};

const data2 = {
    'foo-bar':'foo bar'
};

const foo = 'foo';
const data3 = {
    [foo + 'bar']:'foobar',
};

console.log(data1);
console.log(data2);
console.log(data3);

const id = Symbol('id');
const obj = {[id]:'message'};
console.log(obj);

// -. visit attributes
const id = Symbol('id');
const data = {
    'foo-bar':'foo-bar',
    [id]:'message',
    '12':'result'
};

console.log(data['foo-bar'], data[id], data[3*4]);

// 动态计算属性
const students = ['张三', '李四', '王五'];
const scores = [70, 100, 80];
const results = {};
for(let i=0; i<students.length; i++){
    results[students[i]] = scores[i];
}
console.log(results);

// traverse attribute
const scores = {
    'zhangsan':80,
    'lisi':100,
    'wangwu':60
};

for(let name in scores){
    console.log(name, scores[name]);
}

for(let [name, score] of Object.entries(scores)){
    console.log(name, score);
}

// -. cud
const data = {};
data.foo = 'foo';
data['foo-bar'] = 'foo-bar';

delete data.foo;
console.log(data.foo, data['foo-bar']);
console.log('foo' in data, 'foo-bar' in data);

const data = {}
data.foo = '123';
data['foo']='234';
console.log(data.foo, data['foo']);

// -. prototype
const obj = {foo:'foo'};
const a = Object.create(obj);
const b = Object.create(obj);
a.bar = 'bar1';
b.bar = 'bar2';
console.log(a.foo, a.bar);
console.log(b.foo, b.bar);


function Foo(message = 'foo'){
    this.foo = message;
}

Foo.prototype.bar = 'bar';
const a = new Foo('foo1'),
b = new Foo('foo2');
console.log(a.foo, b.bar);
console.log(b.foo, b.bar);

function Animal(){}
    
Animal.prototype = {
    eat(){console.log("I am eating");}
}
function Person(){}
Person.prototype = new Animal();
Person.prototype.speak = function(){
    console.log('I can say something')
}

function Student(name){
    this.name = name;
}

Student.prototype = new Person();
Student.prototype.study = function(){
    console.log("I'm learning ...")
}

const student = new Student('zhangsan');
student.eat(), student.speak(), student.study();

class Animal{
    eat(){
        console.log("I'm eating");
    }

    run(){
        console.log("I'm running");
    }
}

class Person extends Animal{
    speak(){
        console.log("I can say something");
    }
}

class Student extends Person{
    study(){
        console.log("I'm learning...");
    }
}

const student = new Student('zhangsan');
student.study(), student.speak(), student.eat(), student.run();


class Vector2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }

    set length(len){
        const scale = len/this.length;
        this.x *= scale;
        this.y *= scale;
    }
}

const v1 = new Vector2D(3, 4);
console.log(v1.x, v1.y, v1.length);

v1.length *= 2;
console.log(v1.x, v1.y, v1.length);

// -. defineProperties
const obj = {};
Object.defineProperties(obj, {
    foo:{
        value:'foo',
        writable:true,
        configurable:true
    },
    bar:{
        get(){return 'bar'}
    },
    
    tool:{
        value: "tool"
    }
});

const obj1 = {
    foo: 'foo',
    f:function(){
        console.log("function");
    }
}

console.log(obj.foo, obj.bar);
obj.foo = "foo2";
console.log(obj.foo, obj.bar);
delete obj.foo;
console.log(obj.foo, obj.bar);
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(obj1));

// -.destructor, 结构的属性名必须和对象的属性名相同
const obj = {foo:'foo', bar:'bar'};
const {bar, foo} = obj;
console.log(foo, bar);

const {foo: a, bar: b} = obj;
console.log(a, b);

// 这种只能访问k和z
const obj = {x:{y:1}, z:2};
const {x:{y:k}, z} = obj;
console.log(k, z);

const obj = {foo: 1, bar:2};
for(let [key, value] of Object.entries(obj)){
    console.log(key, value);
}