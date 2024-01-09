function criarJSON() {
    // Obter os valores dos anos iniciais e finais
    const anoInicial = parseInt(document.getElementById('anoInicial').value);
    const anoFinal = parseInt(document.getElementById('anoFinal').value);

    // Obter a opção selecionada para a ordem
    const ordem = document.getElementById('ordem').value;

    // Verificar se os anos são válidos e estão em ordem sequencial
    if (isNaN(anoInicial) || isNaN(anoFinal) || anoInicial > anoFinal) {
        alert("Informe anos válidos em ordem sequencial.");
        return;
    }

    // Criar um array de objetos JSON com os anos em ordem crescente
    const anosCrescente = [];
    for (let ano = anoInicial; ano <= anoFinal; ano++) {
        anosCrescente.push({ label: String(ano), value: String(ano - anoInicial + 1) });
    }

    // Criar um array de objetos JSON com os anos em ordem decrescente
    const anosDecrescente = [];
    for (let ano = anoFinal; ano >= anoInicial; ano--) {
        anosDecrescente.push({ label: String(ano), value: String(anoFinal - ano + 1) });
    }

    // Exibir os JSONs no console com o IF para exibir somente a escolha. 
    if (ordem === 'crescente') {
        console.log("JSON gerado (crescente):");
        console.log(JSON.stringify(anosCrescente, null, 2));
    } else if (ordem === 'decrescente') {
        console.log("JSON gerado (decrescente):");
        console.log(JSON.stringify(anosDecrescente, null, 2));
    } else {
        alert("Escolha uma ordem válida (crescente ou decrescente).");
    }
}

