var minhaPromisse = function() {
    return new Promisse(function(resolve,reject) {
    var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/tavaros');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

 minhaPromisse()
    .then(function(response) {})
    .catch(function (error) {});

function cadastrosRealizados(){
    window.location.href = "cadastros-realizados.html"
    }

   