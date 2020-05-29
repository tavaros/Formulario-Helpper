var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var cadastros = JSON.parse(localStorage.getItem('list_todos'));

function renderCadastros(){

    listElement.innerHTML = '';  //ocultar os itens já listados anteriormente

    for(cadastro of cadastros){
        var cadastroElement = document.createElement('li');
        var cadastroText = document.createTextNode(cadastro);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = cadastros.indexOf(cadastro);
        linkElement.setAttribute('onclick', 'deleteCadastro(' + pos + ')' )

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        cadastroElement.appendChild(cadastroText);
        cadastroElement.appendChild(linkElement);
        
        listElement.appendChild(cadastroElement);
    }
}

renderCadastros();             

function addCadastro() {
    var cadastroText = inputElement.value;

    cadastros.push(cadastroText);       // add novo valor na variavel cadatros
    inputElement.value = '';
    renderCadastros();
    saveToStorage();

}

buttonElement.onclick = addCadastro;

function deleteCadastro(pos) {
    cadastro.splice(pos, 1)
    renderCadastros();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_cadastros', JSON.stringify(cadastros));
}
