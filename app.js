let arr = [];

function isPrimo(valor) {
    for(let i = 2; i<=valor; i++){
        contagem = 0;
        for(let e = i; e>=0; e--){
            if(i%e==0){
                contagem++
            }
        }
        if(contagem == 2){
            arr.push(i)
        }
    }
}

const saida = document.querySelector(".saida");

document.querySelector("#enviar").addEventListener('click', (e) => {
    e.preventDefault()
    saida.innerHTML = "";
    saida.append(document.createTextNode("Os número primos até esse são: "))
    isPrimo(document.querySelector("#numero").value)

    let texto = "";

    arr.forEach(i => {
        if(i != arr.at(-1)){
            saida.append(document.createTextNode(i+", "))
        } else {
            saida.append(document.createTextNode(i))
        }
    })
    arr = []
})