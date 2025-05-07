function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert(`Por favor, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        //`` - Recebe nada, limpa o campo
        while (c <= 10) {
            let item = document.createElement('option')
            //createElement: Criar um elemento no HTML dentro do option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            //appendChild: Add elemento filho
            c++
        }
    }
}