function copyPasteContent()
{
    var input = document.getElementById("input-content")
    var alertSucess = document.getElementById("alert-sucess")

    if(input.value.trim() != "")
    {
        input.select()
    
        input.setSelectionRange(0, 99999);
    
        navigator.clipboard.writeText(input.value);
    
        alertSucess.classList.add("active")
    
        setTimeout(function() {
            alertSucess.classList.remove("active")
        }, 2500);
    }
}
// Gerador De CPF
function cpfGenerator()
{
    var input = document.getElementById("input-content")

    const num1 = randomNumCpf();
    const num2 = randomNumCpf();
    const num3 = randomNumCpf();
    const dig1 = dig(num1, num2, num3);
    const dig2 = dig(num1, num2, num3, dig1);

    var result = `${num1}.${num2}.${num3}-${dig1}${dig2}`

    input.value = result
}

function dig(n1, n2, n3, n4) 
{ 
    const nums = n1.split("").concat(n2.split(""), n3.split(""));
    if (n4 !== undefined){ 
      nums[9] = n4;
    }
    
    let x = 0;
    for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
      x += parseInt(nums[j]) * i;
    }
    
    const y = x % 11;
    return y < 2 ? 0 : 11 - y; 
}

function randomNumCpf() 
{
    const aleat = Math.floor(Math.random() * 999);
    return ("" + aleat).padStart(3, '0'); 
}
// Gerador De CNPJ
function randomNumCnpj() {
    const aleat = Math.floor(Math.random() * 9); // Gera um número aleatório de 0 a 9
    return aleat;
}

function mod(dividend, divider) {
    return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

function cnpjGenerator() {
    var input = document.getElementById("input-content");

    var comPontos = true;

    var n1 = randomNumCnpj();
    var n2 = randomNumCnpj();
    var n3 = randomNumCnpj();
    var n4 = randomNumCnpj();
    var n5 = randomNumCnpj();
    var n6 = randomNumCnpj();
    var n7 = randomNumCnpj();
    var n8 = randomNumCnpj();
    var n9 = 0;
    var n10 = 0;
    var n11 = 0;
    var n12 = 1;

    var d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    var cnpj = comPontos 
        ? '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2
        : '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;

    input.value = cnpj;
}
// Gerador De Cep
function CEPGenerator() {
    var input = document.getElementById("input-content")

  // Lista de faixas de CEP válidas para garantir um CEP realista
    const faixasCep = [
        { inicio: 01000, fim: 19999 }, // São Paulo - SP
        { inicio: 20000, fim: 28999 }, // Rio de Janeiro - RJ
        { inicio: 30000, fim: 39999 }, // Minas Gerais - MG
        { inicio: 40000, fim: 48999 }, // Bahia - BA
        { inicio: 50000, fim: 56999 }, // Pernambuco - PE
        { inicio: 70000, fim: 72799 }, // Brasília - DF
        { inicio: 80000, fim: 84999 }, // Paraná - PR
        { inicio: 90000, fim: 99999 }  // Rio Grande do Sul - RS
        // Outras faixas podem ser adicionadas conforme necessário
    ];

    // Escolhe uma faixa de CEP aleatoriamente
    const faixaEscolhida = faixasCep[Math.floor(Math.random() * faixasCep.length)];

    // Gera um número aleatório dentro da faixa escolhida
    const primeiraParte = Math.floor(Math.random() * (faixaEscolhida.fim - faixaEscolhida.inicio + 1)) + faixaEscolhida.inicio;

    // Gera a segunda parte do CEP (3 dígitos)
    const segundaParte = Math.floor(Math.random() * 900) + 100;

    // Formata o CEP no padrão brasileiro (XXXXX-XXX)
    const cepAleatorio = `${primeiraParte.toString().padStart(5, '0')}-${segundaParte}`;

    input.value = cepAleatorio

}
  