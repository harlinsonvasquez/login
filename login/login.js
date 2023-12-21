function iniciarSesion(event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  const usuarios = [
    {
      nombre: "harry",
      email: "harry@gmail.com",
      password: "123",
    },
    {
      nombre: "riwi",
      email: "riwi@gmail.com",
      password: "1234",
    },
    {
      nombre: "maxi",
      email: "maxi@gmail.com",
      password: "12345",
    },
  ];

  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  if (usuarioEncontrado) {
    sessionStorage.setItem('nombre', usuarioEncontrado.nombre);
    console.log("Usuario encontrado");
    window.location.href = "home.html";
  } else {
    console.log("Credenciales inválidas");
  }
}