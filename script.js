var colorsIdsList = ["green","yellow","red","black"]

for(i=0;  i < 3; i++){
    task(i)
}

function task(i){
    setTimeout(function(){
        document.getElementById(colorsIdsList[i]).style.backgroundColor = colorsIdsList[i];
     }, 2000 * (i + 1));    
    setTimeout(function(){
        document.getElementById(colorsIdsList[i]).style.backgroundColor = colorsIdsList[3];
    }, 3000 * (i + 1));
}


/*

function greenColor (){
    setTimeout(function(){document.getElementById("green").style.backgroundColor  = "green"; }, 2000);    
    setTimeout(function(){clearLight();},4000);
    }

function yellowColor(){
    setTimeout(function(){ document.getElementById("yellow").style.backgroundColor  = "yellow"; }, 4000);
    setTimeout(function(){clearLight();},6000);
}

function redColor(){
    setTimeout(function(){ document.getElementById("red").style.backgroundColor  = "red"; }, 6000);
    setTimeout(function(){clearLight();},8000);
}

function clearLight(){
 
    document.getElementById("green").style.backgroundColor  = "black";
    document.getElementById("yellow").style.backgroundColor  = "black";
    document.getElementById("red").style.backgroundColor  = "black";
}


greenColor();
yellowColor();
redColor();
*/