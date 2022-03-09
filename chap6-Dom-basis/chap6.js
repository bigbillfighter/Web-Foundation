// 6-1
// -. get root node
// method one
function getRootNode(node){
    while(node.parentNode){
        node = node.parentNode;
    }
    return node;
}

// method two
Node.getRootNode();

// -. root element
function getRootElement(node){
    while(node.parentElement){
        node = node.parentElement;
    }

    // 可能本身node不是element类型
    if(node.nodeType === Node.ELEMENT_NODE) {
        return node;
    }
    
    return null;
}

// get document
node.ownerDocument;

// get html element
document.documentElement;

// get window element
document.defaultView;
document.parentElement; // only fit for IE


// -.批量插入子节点
// 第一个种不太推荐，效率低
for(let i=0; i<10; i++){
    let p = document.createElement('p');
    p.textContent=`这是第$(i+1)个`;
    document.body.appendChild(p);
}
// 第二种
let arr = [];
for(let i=0; i<10; i++){
    let p = document.createElement('p');
    p.textContent=`这是第$(i+1)个`;
    arr.push(p);
}
document.appendChild(...arr);

// 第三种
let frag = document.createDocumentFragment();
for(let i=0; i<10; i++){
    let p = document.createElement('p');
    p.textContent=`这是第$(i+1)个`;
    frag.appendChild(p);
}
document.bocy.appendChild(frag);
console.log(frag.parentNode);
console.log(frag.children);

// 插入文本，appendChild() 方法支持文本和Element的插入
let p = document.createElement('p');
p.textContent=`这是一个段落`;
document.body.appendChild('这是段落前的文本', p, '这是段落后的文本');

// 插入到指定节点之前,这里以插入到一个段落之前为例
let p = document.getElementById('p');
let text = document.createTextNode('这是一段文本');
document.body.insertBefore(text, p);

document.body.replaceChild(text, p); // 将p替换为text
p.parentNode.removeChild(p);//移除当前节点

// 6-3
// 注册事件处理程序的传统方法，
// 就是为事件目标的一个属性设置为关联的事件处理函数
// 事件处理函数属性名为 on`事件名称`，如 onclick、onload等

window.onload = function(){
    let form = document.querySelector('form#shipping');
    form.onsubmit = function(event){
        if(!isFormVaild(this)){
            event.preventDefault();
        }
    }
}

// 使用事件处理程序属性的缺点是每种事件最多只有一个处理程序
// 也可以将函数直接写到html代码中，只不过没有函数名和传入参数
let htmlEvent = `<button onclick="console.log('Thank you');">Please Click</button>`;


// 创建自定义事件，使用CustomEvent()函数。一般自定义的事件不能通过常规的鼠标、键盘事件触发
// 第一个参数是事件名，一个字符串；第二个参数是用于指定事件的属性
// 我们可以使用dispatchEvent()函数，在代码里显式触发函数
document.dispatchEvent(new CustomEvent("busy", {detail: true}));
fetch(url)
    .then(handlerNetworkResponse)
    .catch(handerNetworkError)
    .finally(()=>{
        document.dispatchEvent(new CustomEvent("busy", {detail: false}));
    });

document.addEventListener("busy", (e)=>{
    if(e.detail){
        showSpinner();
    }else{
        hideSpinner();
    }
});

const template = document.createElement("template");
template.content.cloneNode