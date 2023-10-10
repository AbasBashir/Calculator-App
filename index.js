

let result = document.getElementById("display");


let calculate = (number) => {

    result.value += number;

}


let Result = () => {
    
    try{

        result.value = eval(result.value)
    }
    catch(err){

        alert("Enter the valid input");
    }

}


function Clear(){

    result.value = '';

}

let Delete = () => {

    result.value = result.value.slice(0 , -1);

}