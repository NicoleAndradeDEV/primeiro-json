function criarJSON() {
    // Obter os valores dos anos iniciais e finais
    const anoInicial = parseInt(document.getElementById('anoInicial').value);
    const anoFinal = parseInt(document.getElementById('anoFinal').value);

    // Verificar se os anos são válidos e estão em ordem sequencial
    if (isNaN(anoInicial) || isNaN(anoFinal) || anoInicial > anoFinal) {
        alert("Informe anos válidos em ordem sequencial.");
        return;
    }

    // Criar um array de objetos JSON com os anos
    const anos = [];
    for (let ano = anoInicial; ano <= anoFinal; ano++) {
        anos.push({ label: String(ano), value: String(ano - anoInicial + 1) });
    }

    // Exibir o JSON no console (pode ser alterado para fazer outras coisas com o JSON)
    console.log("JSON gerado:");
    console.log(JSON.stringify(anos, null, 2));
}
