
var result = document.getElementById('myText');

function myFunction2(opretor){
    var addopa = result.value;
    result.value = (addopa + opretor);
}

function myFunction(number) {
    let lg = result.value.length
    if ( lg > 16 ) {
    } else {
        var addNumber = result.value;
        result.value = (addNumber + number);
    }
};

function cFunction(){
    if (result.value = "") {
        result.value = result.placeholder;
    }
};


function uqulFunction(){
    var fResult =  eval(result.value);
    result.value = fResult;
};


function crosFunction(){
    var valu = result.value
    if(valu!='') {
        result.value = result.value.slice(0,-1)
    }
}