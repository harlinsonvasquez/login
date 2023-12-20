function iniciarSesion(event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  var username = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  const usuarios = [
    {
      email: "harry@gmail.com",
      password: "123",
    },
    {
      email: "riwi@gmail.com",
      password: "1234",
    },
    {
      email: "maxi@gmail.com",
      password: "12345",
    },
  ];

  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === username && usuario.password === password
  );

  if (usuarioEncontrado) {
    console.log("Usuario encontrado");
    window.location.href = "index.html";
  } else {
    console.log("Credenciales inválidas");
  }
}
