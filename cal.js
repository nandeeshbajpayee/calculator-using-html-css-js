var strcal="";
var k=strcal.length-1;
var arstr0;
function bdecimal(){
    if(strcal.slice(k)!='+' && strcal.slice(k)!='-' && strcal.slice(k)!='*' && strcal.slice(k)!='/' && strcal.slice(k)!='.' &&strcal.slice(0)!=""){
        strcal=strcal+".";
        document.getElementById("display").innerHTML=strcal;}  
}
function bdivide(){
    if(strcal.slice(k)!='+' && strcal.slice(k)!='-' && strcal.slice(k)!='*' && strcal.slice(k)!='/' && strcal.slice(k)!='.' &&strcal.slice(0)!=""){
        strcal=strcal+" / ";
        document.getElementById("display").innerHTML=strcal;}
}
function bmultiply(){
    
    if(strcal.slice(k)!='+' && strcal.slice(k)!='-' && strcal.slice(k)!='*' && strcal.slice(k)!='/' && strcal.slice(k)!='.' &&strcal.slice(0)!=""){
        strcal=strcal+" * ";
        document.getElementById("display").innerHTML=strcal;}
}
function bminus(){
    if(strcal.slice(k)!='+' && strcal.slice(k)!='-' && strcal.slice(k)!='*' && strcal.slice(k)!='/' && strcal.slice(k)!='.' &&strcal.slice(0)!=""){
        strcal=strcal+" - ";
        document.getElementById("display").innerHTML=strcal;}   
}
function bplus(){
    if(strcal.slice(k)!='+' && strcal.slice(k)!='-' && strcal.slice(k)!='*' && strcal.slice(k)!='/' && strcal.slice(k)!='.' &&strcal.slice(0)!=""){
        strcal=strcal+" + ";
        document.getElementById("display").innerHTML=strcal;}    
}
function bequal(){
    if(strcal.length>0 && strcal!="display"){
    const arstr=strcal.split(" ");
    let got=eval(arstr[0] + arstr[1] + arstr[2]);
    //const arstr1=parseFloat(arstr[0]);
    //const arstr2=arstr[1];
    //const arstr3=parseFloat(arstr[2]);
    //switch(arstr2){
    //    case "+":
    //    arstr0=arstr1+arstr3;
    //    break;
    //    case "-":
    //    arstr0=arstr1-arstr3;
    //    break;
    //    case "/":
    //    arstr0=arstr1/arstr3;
    //    break;
    //    case "*":
    //    arstr0=arstr1*arstr3;
        strcal=got+"";
        document.getElementById("display").innerHTML=got;
    }
}
function bx(){
    if(strcal.length>0){
        var k=strcal.length-1;
        strcal= strcal.slice(0,k);
        document.getElementById("display").innerHTML=strcal;} 
}
function bc(){
    if(strcal.length>0){
        strcal="";
        document.getElementById("display").innerHTML=strcal;} 
}
function bone(){
    cal=parseFloat(strcal); 
    strcal=strcal+"1";
    document.getElementById("display").innerHTML=strcal;
}
function btwo(){
    strcal=strcal+"2";
    document.getElementById("display").innerHTML=strcal;
}
function bthree(){
    strcal=strcal+"3";
    document.getElementById("display").innerHTML=strcal;
}
function bfour(){
    strcal=strcal+"4";
    document.getElementById("display").innerHTML=strcal;
}
function bfive(){
    strcal=strcal+"5";
    document.getElementById("display").innerHTML=strcal;
}
function bsix(){
    strcal=strcal+"6";
    document.getElementById("display").innerHTML=strcal;
}
function bseven(){
    strcal=strcal+"7";
    document.getElementById("display").innerHTML=strcal;
}
function beight(){
    strcal=strcal+"8";
    document.getElementById("display").innerHTML=strcal;
}
function bnine(){
    strcal=strcal+"9";
    document.getElementById("display").innerHTML=strcal;
}

function bzero(){
    strcal=strcal+"0";
    document.getElementById("display").innerHTML=strcal;
}