
function Obj(name, age) {
    this.name = name;
    this.age = age;
}

function Demo(name, age) {
    return new Obj(name, age);
}


var d  = new Demo();
console.log('d', d);