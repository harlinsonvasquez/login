
function entrar(){
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    const personas=[
        {
            nombre:"harry",
            email:"harry@gmail.com",
            password:"123"
        },
        {
            nombre:"maxi",
            email:"maxi@gmail.com",
            password:"123"
        },
        {
            nombre:"kelly",
            email:"kelly@gmail.com",
            password:"123"
        }

    ]

    const usuarioEncontrado=personas.find((usuario)=>usuario.email===email && usuario.password===password);

    if(usuarioEncontrado){
        sessionStorage.setItem('nombre',usuarioEncontrado.nombre)
        window.location.href="./home.html";
    }
    else{
        window.alert("usuario incorrecto")
    }
        
    
}