const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    if(!regexEmail.test(email)) {
        throw new Error('Invalid email');
    }

  return true;
}

// Exemplos de uso:
console.log(validateEmail("usuario@dominio.com"));  // Deve retornar true
console.log(validateEmail("usuario@dominio"));      // Deve retornar erro
console.log(validateEmail("usuario@dominio.com.br")); // Deve retornar true
console.log(validateEmail("usuario.com"));           // Deve retornar erro (faltando @)
console.log(validateEmail("usuario@dominio@com"));   // Deve retornar erro (múltiplos @)
