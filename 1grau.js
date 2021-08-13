
function calcula(a, b, c) {
    var x;
    var cb = c - (b)
    x = cb / a;
    return x
}

var button = document.querySelector(".button");
button.addEventListener("click", function (event) {
    event.preventDefault()

    //Capturando dados do formulário, tratando e criando tabela
    var form = document.querySelector('#form-adiciona')

    var a = parseInt(form.a.value);
    var b = parseInt(form.b.value);
    var c = parseInt(form.c.value);

    var x = calcula(a, b, c);

    //criando elementos da tabela

    var equacaoTr = document.createElement("tr");
    var equacaoTd = document.createElement("td");
    var aTd = document.createElement("td");
    var bTd = document.createElement("td");
    var cTd = document.createElement("td");
    var xFracaoTd = document.createElement("td");
    var xDecimalTd = document.createElement("td");

    //ifs para montar a equação na tabela(+ ou - no B e C)

    if (b >= 0) {
        equacaoTd.textContent = a + "x + " + b + " = " + c;
    } else {
        equacaoTd.textContent = a + "x " + b +  " = " + c;
    }

    //associando valores a seus respectivos rows na tabela

    aTd.textContent = a;
    bTd.textContent = b;
    cTd.textContent = c;

    xFracaoTd.textContent = (c-(b)) + "/" + a;
    xDecimalTd.textContent = x

    equacaoTr.appendChild(equacaoTd);
	equacaoTr.appendChild(aTd);
	equacaoTr.appendChild(bTd);
	equacaoTr.appendChild(cTd);
	equacaoTr.appendChild(xFracaoTd);
    equacaoTr.appendChild(xDecimalTd);

    var table = document.querySelector("#tabela-resultados");
	table.appendChild(equacaoTr);

})