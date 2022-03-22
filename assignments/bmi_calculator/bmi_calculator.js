// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(height === '' || height <=0){
        return "INVALID INPUT";
        
    } else if (mass === '' || mass <=0 ){
        return "INVALID INPUT";
    } else {
    return (mass /(height*height));
    }
}

module.exports = BMICalculator;
