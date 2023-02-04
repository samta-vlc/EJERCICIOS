const usuarios = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true}
  ];

// Una frase en consola por cada usuario que SÍ es premium
usuarios.map(usuarios => {
    if (usuarios.premium) {
    console.log(`El usuario ${usuarios.username} tiene cuenta premium.`)
    }
});

// Nuevo array de usuarios SIN cuenta premium
const noPremium = usuarios.filter(usuarios => !usuarios.premium);
console.log("Esta es la lista de usuarios que NO son premium:" , noPremium);
