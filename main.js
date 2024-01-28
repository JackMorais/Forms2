const form = document.getElementById('form');
const Nome = [];
const Contato = [];

let linhas = '';

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}



form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const inputNome = document.getElementById('input-nome');
    const inputContato = document.getElementById('input-contato');
    const mensagemInsucesso = `O nome não está completo`;

    formValido = validaNome(inputNome.value);
    if(formValido){
        

    }else{
        alert(mensagemInsucesso);

        inputNome.value = '';
        inputContato.value = '';v
    }

    adicionarLinha();
    atualizarTabela();


});

function adicionarLinha(){
    const inputNome = document.getElementById('input-nome');
    const inputContato = document.getElementById('input-contato');

    if(Nome.includes(inputNome.value)){
        alert(`Esse nome: ${inputNome.value} já existe.`);

    }else
    {
        Nome.push(inputNome.value);
        Contato.push(parseFloat(inputContato.value));

        let linha ='<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputContato.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

