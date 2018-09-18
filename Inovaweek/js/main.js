var username,
    password,
    pagina;

function init() {
    pagina = logar();
    if (pagina != 0) {
        redirecionar(pagina);
    }
}

function logar() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (username == 'leo.f.costa12@hotmail.com' && password == 'leo123') {
        return pagina = "perfilLeonardo.html";
    } else if (username == 'brunobonadiman2@gmail.com' && password == 'bruno123') {
        return pagina = "dashboardBruno.html";
    } else if (username == 'julia@gmail.com' && password == 'julia123') {
        return pagina = "dashboardJúlia.html";
    } else if (username == 'nayara@gmail.com' && password == 'nayara123') {
        return pagina = "dashboardNayara.html";
    } else if (username == "" || password == "") {
        alert("Preencha os campos corretamente!");
        return pagina = 0;
    } else {
        alert("Email ou senha incorretos!");
        return pagina = 0;
    }
};

function LimparCampos() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function redirecionar(pagina) {
    document.location.href = pagina;
    alert(pagina);
}

if (localStorage.nome) {
    document.getElementById("name4").value = localStorage.nome;
}
if (localStorage.email) {
    document.getElementById("email4").value = localStorage.email;
}
if (localStorage.senha) {
    document.getElementById("password5").value = localStorage.senha;
}
if (localStorage.confirma){
    document.getElementById("password6").value = localStorage.confirma;
}
var salvarCadastro = function () {
    var nomeUsuario = document.getElementById("name4").value;
    var emailUsuario = document.getElementById("email4").value;
    var senhaUsuario = document.getElementById("password5").value;
    var confirmaSenha = document.getElementById("password6").value;
    localStorage.setItem("nome", nomeUsuario);
    localStorage.setItem("email", emailUsuario);
    localStorage.setItem("senha", senhaUsuario);
    localStorage.setItem("confirma", confirmaSenha);
}
document.onchange = salvarCadastro;