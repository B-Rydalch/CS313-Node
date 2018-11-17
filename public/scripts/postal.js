console.log("initializing calculate rate")

function calculateRate(mailType, weight) {
    console.log("calling calculate rate")

    let price = 0; 
    let totalPrice = 0;
    let totalWeight = weight/16;
   
    switch(mailType) {
        case "priority-express":
            price = 24.70;
            totalPrice = price * totalWeight;
            break;
        case "priority":
            price = 24.70;
            totalPrice = price * totalWeight;
            break;
        case "first-class-mail":
            price = 24.70;
            totalPrice = price * totalWeight;
            break; 
        case "first-class-package":
            price = 24.70;
            totalPrice = price * totalWeight;
            break;  
        case "retail":
            price = 24.70;
            totalPrice = price * totalWeight;
            break; 

        default:
            totalPrice = -1;
    }
    return totalPrice
}

module.exports.calculateRate = calculateRate;