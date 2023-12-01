const regexStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateStrongPassword(password) {
    if(!regexStrongPassword.test(password)) {
        throw new Error('The password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).');
    }
    
    return true;
}

// Exemplos de uso:
console.log(validateStrongPassword("Senha1@"));     // Deve retornar true
console.log(validateStrongPassword("senhafraca"));  // Deve retornar false (sem caracteres especiais)
console.log(validateStrongPassword("SENHA1"));      // Deve retornar false (sem minúsculas)
console.log(validateStrongPassword("S1@"));         // Deve retornar false (menos de 8 caracteres)
