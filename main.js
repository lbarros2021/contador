function count () {
    let init = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (init.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
      window.alert('Error')
    } else {
        res.innerHTML = "Counting... "
        let i = Number(init.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if ( p <= 0) {
            window.alert('Passo Invalido')
            p = 1
        }
        if (i < f) {
            // ascending order
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
            // descending order
        } else {
            for (let c = i; c >= f; c-= p)
            res.innerHTML += `${c} \u{1F449} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
