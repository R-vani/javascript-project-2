function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button").innerHTML="Addition Value is:"+c;
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let d=a-b;
    document.getElementById("button1").innerHTML="Subraction Value is:"+d;
}
function multi(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let x=a*b;
    document.getElementById("button2").innerHTML="Multiplication value is:"+x;
}
function modl(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let y=a%b;
    document.getElementById("button3").innerHTML="Modulus value is:"+y;
}
function divi(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let z=a/b;
    document.getElementById("button4").innerHTML="Division value is:"+z;
}