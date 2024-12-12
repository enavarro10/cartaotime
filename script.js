const mensagens = {
    "Samuel": "Obrigado por toda paciencia, parceria e proximidade. Tenho muita gratidão pela empatia e pelo suporte quando precisei. Agradeço tambem pelos aprendizados.",
    "Juliana": "",
    "Rodrigo": "Bom dia, boa tarde e boa noite Ro, obrigado pela parceria e ensinamentos. Alem disso, agradeço pelos momentos de descontração e risadas. Esses momentos fazem com que o dia seja mais leve. Agora eu já sei o que significa constelação familiar...rs",
    "Erika": "Tia, gratidão por todas as risadas e parceria. Voce é uma pessoa de muita luz e ",
    "Eduardo": "teste",
    "Renan": "teste",
    "Gustavo": "teste",
    "Everton": "teste",
    "Alessandra": "teste",
    "Camila": "teste",
    "Sarah": "teste",
    "Ana": "teste",
    "Gustavo": "teste",
    "Camila": "teste",
    "Aline": "teste",
    "Henrique": "teste",
    "Camila": "teste",
    "Liliane": "teste",
    "Amanda": "teste",
    "Luan": "teste",
    "Jenifer": "teste",
    "Gabriel": "teste",
    "Gisele": "teste"
};

function gerarCartao() {
    const nome = document.getElementById('nome').value;
    const cartao = document.getElementById('cartao');
    const mensagem = mensagens[nome];
    if (mensagem) {
        cartao.innerHTML = `<h2>Feliz Natal, ${nome}!</h2><p>${mensagem}</p>`;
        cartao.style.display = 'block';
    } else {
        cartao.innerHTML = `<h2>Feliz Natal!</h2><p>Que seu Natal seja cheio de alegria e amor!</p>`;
        cartao.style.display = 'block';
    }
}