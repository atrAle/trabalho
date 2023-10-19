function calcularDataReforco() {
    const dataVacina = new Date((<HTMLInputElement>document.getElementById('dataVacina')).value);
    const dataReforco = new Date(dataVacina);
    dataReforco.setDate(dataVacina.getDate() + 30);

    const inputReforco = <HTMLInputElement>document.getElementById('dataReforco');
    inputReforco.valueAsDate = dataReforco;
}

document.getElementById('cadastroForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const cpf = (<HTMLInputElement>document.getElementById('cpf')).value;
    const nome = (<HTMLInputElement>document.getElementById('nome')).value;
    const nascimento = (<HTMLInputElement>document.getElementById('nascimento')).value;
    const vacina = (<HTMLInputElement>document.getElementById('vacina')).value;
    const dataVacina = (<HTMLInputElement>document.getElementById('dataVacina')).value;
    const dataReforco = (<HTMLInputElement>document.getElementById('dataReforco')).value;

    const listaVacinas = document.getElementById('listaVacinas');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>CPF:</strong> ${cpf}, <strong>Nome:</strong> ${nome}, <strong>Data de Nascimento:</strong> ${nascimento}, <strong>Vacina:</strong> ${vacina}, <strong>Data de Vacinação:</strong> ${dataVacina}, <strong>Data do Reforço:</strong> ${dataReforco}`;
    listaVacinas?.appendChild(listItem);
});
