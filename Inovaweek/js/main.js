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
        return (pagina = "dashboardLeonardo.html");
    } else if (username == 'brunobonadiman2@gmail.com' && password == 'bruno123') {
        return (pagina = "dashboardBruno.html");
    } else if (username == 'julia@gmail.com' && password == 'julia123') {
        return (pagina = "dashboardJúlia.html");
    } else if (username == 'nayara@gmail.com' && password == 'nayara123') {
        return (pagina = "dashboardNayara.html");
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


         M.toast({ html: 'Cadastrar!', classes: 'rounded' });     