
function calculaDelta(a, b, c) {

	var delta = ((b * b) - (4 * a * c));

	return delta

}

function calculax1(b, delta) {

	var bd = -b + delta

	return bd

}

function calculaDenominador(a) {

	var denominador = 2 * a
	return denominador
}


function calculax2(b, delta) {

	var bd = (-b - delta)

	return bd

}

var button = document.querySelector(".button");
button.addEventListener("click", function (event) {
	event.preventDefault()
	

	//Capturando dados do formulário, tratando e criando tabela
	var form = document.querySelector('#form-adiciona')

	var a = parseInt(form.a.value);
	var b = parseInt(form.b.value);
	var c = parseInt(form.c.value);

	var delta = calculaDelta(a, b, c);
	var raizDelta = Math.sqrt(delta);
	var bd1 = calculax1(b, raizDelta);
	var bd2 = calculax2(b, raizDelta);
	var denominador = calculaDenominador(a)

	//criando elementos da tabela

	var equacaoTr = document.createElement("tr");
	var equacaoTd = document.createElement("td");
	var aTd = document.createElement("td");
	var bTd = document.createElement("td");
	var cTd = document.createElement("td");
	var deltaTd = document.createElement("td");
	var x1FracaoTd = document.createElement("td");
	var x1DecimalTd = document.createElement("td");
	var x2FracaoTd = document.createElement("td");
	var x2DecimalTd = document.createElement("td");
	var explicacaoTd = document.createElement("td");

	//ifs para montar a equação na tabela(+ ou - no B e C)
	if(b >= 0) {
		if(c>=0) {
			equacaoTd.textContent = a + "x² +" + b + "x +" + c + " = 0";
		} else {
			equacaoTd.textContent = a + "x² +" + b + "x " + c + " = 0";
		}
	} else {
		if(c>=0) {
			equacaoTd.textContent = a + "x² " + b + "x +" + c + " = 0";
		} else {
			equacaoTd.textContent = a + "x² " + b + "x " + c + " = 0";
		}
	}

	//associando cada row da tabela com sua variável
	aTd.textContent = a;
	bTd.textContent = b;
	cTd.textContent = c;

	deltaTd.textContent = delta;

	//associando X1 e X2 na tabela e validando se delta é positivo(se existem respostas)

	if (delta >= 0) {
		x1FracaoTd.textContent = bd1 + "/" + 2 * a;
		x1DecimalTd.textContent = bd1 / denominador;
		x2FracaoTd.textContent = bd2 + "/" + 2 * a;
		x2DecimalTd.textContent = bd2 / denominador;

	} else {
		x1FracaoTd.textContent = "";
		x1FracaoTd.textContent = "";
		x1DecimalTd.textContent = "";
		x2DecimalTd.textContent = "";
	}

	//ifs para colocar explicação
	if (delta == 0) {
		explicacaoTd.textContent = "Como o valor de delta é 0, os valores de X1 e X2 são iguais"
	}
	if (delta < 0) {
		explicacaoTd.textContent = "Como o valor de delta é negativo, não existem raízes reais :("
	}
	if (delta > 0) {
		explicacaoTd.textContent = "O valor de delta é positivo, portanto existem 2 raízes diferentes"
	}

	equacaoTr.appendChild(equacaoTd);
	equacaoTr.appendChild(aTd);
	equacaoTr.appendChild(bTd);
	equacaoTr.appendChild(cTd);
	equacaoTr.appendChild(deltaTd);
	equacaoTr.appendChild(x1FracaoTd);
	equacaoTr.appendChild(x1DecimalTd);
	equacaoTr.appendChild(x2FracaoTd);
	equacaoTr.appendChild(x2DecimalTd);
	equacaoTr.appendChild(explicacaoTd);

	var table = document.querySelector("#tabela-resultados");
	table.appendChild(equacaoTr);

})