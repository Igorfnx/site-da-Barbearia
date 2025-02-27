// Adiciona um evento de submit ao formulário de agendamento
document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const hora = document.getElementById('horarios').value;
    const data = document.getElementById('data').value;

    // Verifica se os campos não estão vazios
    if (nome && data) {
        // Exibe mensagem de sucesso
        const mensagem = document.getElementById('mensagem-sucesso');
        mensagem.style.display = 'block';

        // Limpa os campos do formulário após agendar
        document.getElementById('nome').value = "";
        document.getElementById('data').value = "";

        // Salva o agendamento
        salvarAgendamento(nome, hora, data);

        // Define um tempo para o aviso sumir
        setTimeout(function() {
            mensagem.style.display = "none"; // Esconde a mensagem
        }, 4000); // Tempo em milissegundos (4000 = 4 segundos)

    } else {
        alert("Preencha todos os campos");
    }

    /*console.log('agendamento registrado: '+ nome, hora, data )
    alert('horário agendado com sucesso!')*/
});

// Função para salvar o agendamento no localStorage
function salvarAgendamento(nome, hora, data) {
    // Pega os agendamentos no local storage se tiver
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    // Adiciona o novo agendamento
    agendamentos.push({ nome, hora, data });

    // Salva novamente no localStorage
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
}

// Função para gerar horários disponíveis de 08:00 até 19:30 com intervalos de 30 minutos
function gerarHorarios() {
    const horarios = [];
    let horaAtual = new Date();
    horaAtual.setHours(8, 0, 0, 0); // Define a hora inicial como 08:00

    while (horaAtual.getHours() < 20 || (horaAtual.getHours() === 19 && horaAtual.getMinutes() <= 30)) {
        const horas = horaAtual.getHours().toString().padStart(2, '0');
        const minutos = horaAtual.getMinutes().toString().padStart(2, '0');
        horarios.push(`${horas}:${minutos}`);
        horaAtual.setMinutes(horaAtual.getMinutes() + 30); // Incrementa 30 minutos
    }

    return horarios;
}

// Função para mostrar os horários disponíveis de acordo com a data selecionada
function mostrarHorarios() {
    const dataSelecionada = document.querySelector("#data").value;
    const selectHorarios = document.getElementById("horarios");

    selectHorarios.innerHTML = ""; // Limpa as opções do select

    const horarios = gerarHorarios();
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    const horariosMarcados = agendamentos
        .filter(agenda => agenda.data === dataSelecionada)
        .map(agenda => agenda.hora);

    const horariosDisponiveis = horarios.filter(horario => !horariosMarcados.includes(horario));

    if (horariosDisponiveis.length > 0) {
        horariosDisponiveis.forEach((horario) => {
            // Adiciona as opções ao select
            const option = document.createElement("option");
            option.value = horario;
            option.textContent = horario;
            selectHorarios.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Nenhum horário disponível para esta data.";
        selectHorarios.appendChild(option);
    }
}

// Adiciona um evento de mudança ao campo de data para mostrar os horários disponíveis
document.querySelector("#data").addEventListener("change", mostrarHorarios);

// Função para exibir um alerta de sucesso ao agendar
function agendar() {
    alert("Horário agendado com sucesso");
}


