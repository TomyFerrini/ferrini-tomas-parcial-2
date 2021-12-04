const iphoneColors = document.getElementById('colors');
const iphoneCapacity = document.getElementById('capacity');
const iphoneQuantity = document.getElementById('quantity');

const resultado = document.getElementById('result');
const colorChange = document.getElementById("iphone");

const prices = {
    128: 150000,
    256: 165000,
    512: 180000
};

function changeProductImage(){
    switch(iphoneColors.value){
        case "graphite":
            colorChange.src="img/iphone_13_graphite.png";
            break;
        case "silver":
            colorChange.src="img/iphone_13_silver.png";
            break;
        case "sierra":
            colorChange.src="img/iphone_13_sierra.png";
            break;
        case "gold":
            colorChange.src="img/iphone_13_gold.png";
            break;
        default:
            alert("Ha habido algun error");
            break;
    }   
}

let capacityValue = Number(iphoneCapacity.value);
let colorsValue = Number(iphoneColors.value);
let quantityValue = Number(iphoneQuantity.value);

function validate(){
    if(colorsValue == 0 ||
        capacityValue == 0 || 
        !Number(quantityValue) || 
        quantityValue < 1 || 
        quantityValue > 10)
    {
        resultado.style.display = "block";
        resultado.style.color = "white";
        resultado.style.backgroundColor = "#a84432";
        resultado.style.borderColor = "#a84432";
        resultado.innerHTML = "Error: ingresar valores válidos"
        return false;
    }
    return true;
}

function calculatePrice(){
    
    if(validate()){
        switch(capacityValue){
            case 128:
                total = quantityValue * prices[128];
                break;
            case 256:
                total = quantityValue * prices[256];
                break;
            case 512:
                total = quantityValue * prices[512];
                break;
            default:
                alert("Ha habido algun error");
                break;
        }   

        resultado.style.display = "block";
        resultado.style.color = "white";
        resultado.style.borderColor = "#68b54e";
        resultado.style.backgroundColor = "#68b54e";

        return resultado.innerHTML = "Cotización:  $" + total;
    }

} 
 
