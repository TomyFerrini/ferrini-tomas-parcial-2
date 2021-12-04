const iphoneColors = document.getElementById('colors');
const iphoneCapacity = document.getElementById('capacity');
const iphoneQuantity = document.getElementById('quantity');

const result = document.getElementById('result');
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
        result.style.display = "block";
        result.style.color = "white";
        result.style.backgroundColor = "#a84432";
        result.style.borderColor = "#a84432";
        result.innerHTML = "Error: ingresar valores válidos"
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

        result.style.display = "block";
        result.style.color = "white";
        result.style.borderColor = "#68b54e";
        result.style.backgroundColor = "#68b54e";

        return result.innerHTML = "Cotización:  $" + total;
    }

} 
 
