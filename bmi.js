function calculateBMI(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return "Invalid input";
    } else if (weight <= 0 || height <= 0) {
        return "Invalid input";
    }

    const bmi = parseFloat((weight / (height * height)).toFixed(2));
    return bmi;
}

function getBMICategory(bmi) {
    if (typeof bmi !== 'number') {
        return "Invalid input";
    }

    if (bmi < 16) {
        return "Magreza grave";
    } else if (bmi >= 16 && bmi < 16.99) {
        return "Magreza moderada";
    } else if (bmi >= 17 && bmi < 18.49) {
        return "Magreza leve";
    } else if (bmi >= 18.5 && bmi < 24.99) {
        return "Peso normal";
    } else if (bmi >= 25 && bmi < 29.99) {
        return "Pré obesidade (Sobrepeso)";
    } else if (bmi >= 30 && bmi < 34.99) {
        return "Obesidade grau I";
    } else if (bmi >= 35 && bmi < 39.99) {
        return "Obesidade grau II";
    } else if (bmi >= 40) {
        return "Obesidade grau III (Obesidade mórbida)";
    }
}

// Testes valores válidos:
console.log(calculateBMI(45, 1.70));                        
console.log(getBMICategory(calculateBMI(45, 1.70)));        
console.log(calculateBMI(50, 1.75));                       
console.log(getBMICategory(calculateBMI(50, 1.75)));        
console.log(calculateBMI(55, 1.78));                        
console.log(getBMICategory(calculateBMI(55, 1.78)));        
console.log(calculateBMI(70, 1.75));                       
console.log(getBMICategory(calculateBMI(70, 1.75)));       
console.log(calculateBMI(80, 1.75));                        
console.log(getBMICategory(calculateBMI(80, 1.75)));        
console.log(calculateBMI(100, 1.75));                       
console.log(getBMICategory(calculateBMI(100, 1.75)));       
console.log(calculateBMI(120, 1.75));                      
console.log(getBMICategory(calculateBMI(120, 1.75)));       
console.log(calculateBMI(150, 1.75));                       
console.log(getBMICategory(calculateBMI(150, 1.75)));       

// Testes valores inválidos:
console.log(calculateBMI(0, 1.75));                        
console.log(calculateBMI(-10, 1.75));                      
console.log(calculateBMI(70, 0));                          
console.log(calculateBMI(70, -1.75));                      
console.log(calculateBMI("abc", 1.75));                     
console.log(calculateBMI(70, "aaaa"));                      
console.log(calculateBMI(null, 1.75));                      
console.log(calculateBMI(70, undefined));                  