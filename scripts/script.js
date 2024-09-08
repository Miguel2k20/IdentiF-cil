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
function CEPGenerator() 
{
    var input = document.getElementById("input-content")

    const cepArrays = [
        "76808-196", "58406-545", "69314-224", "64258-970",
        "72003-485", "41180-855", "79062-161", "69093-813", 
        "29201-017", "59040-476", "69041-505", "61944-110",
        "94416-130", "68903-465", "58040-290", "69907-804",
        "71650-075", "31910-187", "60140-050", "39803-405",
        "45994-393", "61940-090", "59280-971", "90830-380",
        "64155-970", "45823-430", "48610-248", "44006-466",
        "64083-225", "42810-320", "54715-600", "29227-412",
        "58100-122", "69060-097", "78120-064", "94465-500",
        "65031-220", "78557-700", "68927-363", "64076-435",
        "29103-012", "69044-530", "21862-540", "52280-216",
        "24867-024", "77001-088", "65044-814", "68458-060",
        "87501-045", "69074-525", "58036-565", "30590-390",
        "87033-240", "76801-700", "69921-755", "79320-270",
        "91450-571", "77425-260", "68900-800", "77060-480",
        "69917-746", "49055-100", "78553-528", "72579-120",
        "65035-034", "69317-004", "58046-225", "68925-216",
        "35054-274", "58305-170", "90570-100", "68511-340",
        "93145-508", "89032-307", "66811-290", "25804-280",
        "65066-857", "72318-021", "78141-250", "14026-900",
    ];
    const randomIndex = Math.floor(Math.random() * cepArrays.length);
    const randomCep = cepArrays[randomIndex];
    input.value = randomCep
}

function emailGerador()
{
    var input = document.getElementById("input-content")

    const names = [
        "joao", "miguel", "yuri", "lucas", 
        "breno", "gabriel", "carol", "luana", 
        "kim", "mario", "hermes", "zeca"
    ];

    const domains = [
        "gmail", "yahoo", "outlook",
        "hotmail", "live", "uol", "terra",
        "globo", "email", "teste", "lotus"
    ];

    const extensions = [
        "com", "net", "org", 
        "br", "co", "info"
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    
    const randomExtension = extensions[Math.floor(Math.random() * extensions.length)];

    const randomNumber = Math.floor(Math.random() * 1000);
    
    const randomEmail = `${randomName}${randomNumber}@${randomDomain}.${randomExtension}`;

    input.value = randomEmail
}

function numberGerador()
{
    var input = document.getElementById("input-content")

    const areaCode = Math.floor(Math.random() * (99 - 11 + 1)) + 11;

    const isCellphone = Math.random() < 0.5;

    const firstPart = isCellphone ? 9 : Math.floor(Math.random() * 8); 
    
    const middlePart = Math.floor(Math.random() * 9000) + 1000;
    
    const lastPart = Math.floor(Math.random() * 9000) + 1000;

    const phoneNumber = `(${areaCode}) ${firstPart}${middlePart}-${lastPart}`;

    input.value = phoneNumber

}
  