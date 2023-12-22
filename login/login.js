
function iniciarSesion(event) {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  const usuarios = [
    {
      nombre: "harry",
      email: "harry@gmail.com",
      password: "123",
      imagenes:[
        './images/img-1.jpg',
                './images/img-2.jpeg',
                './images/img-3.jpg',
                './images/img-4.jpg',
                './images/img-5.webp',
                './images/img-6.jpg',
                './images/img-7.jpg',
                './images/img-8.jpg',
                './images/img-9.webp',
                './images/img-10.jpeg',

      ]
    },
    {
      nombre: "riwi",
      email: "riwi@gmail.com",
      password: "1234",
      imagenes : [
        './images/img-11.jpg',
        './images/img-12.jpg',
        './images/img-13.jpeg',
        './images/img-14.webp',
        './images/img-15.jpg',
        './images/img-16.jpg',
        './images/img-17.webp',
        './images/img-18.jpg',
        './images/img-19.jpg',
        './images/img-20.jpg',
    ]
    },
    {
      nombre: "maxi",
      email: "maxi@gmail.com",
      password: "12345",
      imagenes : [
        './images/img-11.jpg',
        './images/img-12.jpg',
        './images/img-13.jpeg',
        './images/img-14.webp',
        './images/img-15.jpg',
        './images/img-16.jpg',
        './images/img-17.webp',
        './images/img-18.jpg',
        './images/img-19.jpg',
        './images/img-20.jpg',
    ]
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