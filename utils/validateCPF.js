const regexCPF = /^\d{11}$/;

function validateCPF(cpf) {
    const cpfWithoutPunctuation = cpf.replace(/[.-]/g, '');

    if(!regexCPF.test(cpfWithoutPunctuation)) {
        throw new Error('Invalid CPF');
    }

    return true;
}

console.log(validateCPF("123.456.789-09"));  // Should return true
console.log(validateCPF("12345678909"));      // Should return true
console.log(validateCPF("123-456-78909"));     // Should return true
console.log(validateCPF("1234567890a"));  // Should return error