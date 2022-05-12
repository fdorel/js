//understanding destructuring

/***DESTRUCTURING ASSIGNMENT******/

let [x,y] = [1,2];
console.log(x,y);
[x,y] = [x+1, y+1];
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);
[x,y];
console.log(x,y);
console.log("****************");

function polar(x,y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}
console.log(polar(5,9));
console.log("****************");

let o = {x:1, y:2};
for( const [name, value] of Object.entries(o) ) {
    console.log(name + " =", value);
}
console.log("****************");

let [a,b] = [1];
console.log(a,b);
[a,b] = [1,2,3];
console.log(a,b);
[,a,,b] = [1,2,3,4];
console.log(a,b);
console.log("****************");

let [c, ...d] = [1,2,3,4];
console.log(c);
console.log(d);
console.log("c este egal cu " + c);
console.log("d este egal cu " + d);
console.log("****************");

let [f, [g, h]] = [35, [40,27], 55];
console.log(f,g,h);
console.log("****************");

let [first, se, ...rest] = "Programming";
console.log(first);
console.log(se);
console.log(rest);
console.log("****************");
