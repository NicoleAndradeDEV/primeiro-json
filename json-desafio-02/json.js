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
  
    // Criar um array de objetos JSON com os anos
    const anos = [];
  
    // Executar o loop `for` apenas uma vez, dependendo da ordem selecionada
    if (ordem === 'crescente') {
      for (let ano = anoInicial; ano <= anoFinal; ano++) {
        anos.push({ label: String(ano), value: String(ano - anoInicial + 1) });
      }
    } else if (ordem === 'decrescente') {
      for (let ano = anoFinal; ano >= anoInicial; ano--) {
        anos.push({ label: String(ano), value: String(anoFinal - ano + 1) });
      }
    } else {
      alert("Escolha uma ordem válida (crescente ou decrescente).");
    }
  
    // Exibir o JSON no console
    console.log("JSON gerado:");
    console.log(JSON.stringify(anos, null, 2));
  }
