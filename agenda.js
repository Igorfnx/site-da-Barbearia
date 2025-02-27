// Obtém a referência ao elemento da lista de agendamentos
const listaAgendamento = document.getElementById("listaAgendamento");

// Recupera os agendamentos do localStorage
const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

// Recupera os agendamentos removidos do localStorage
const agendamentosRemovidos = JSON.parse(localStorage.getItem("agendamentosRemovidos")) || [];

// Filtra os agendamentos para remover os que já foram riscados
const agendamentosFiltrados = agendamentos.filter(agenda => !agendamentosRemovidos.includes(`${agenda.nome}-${agenda.data}-${agenda.hora}`));

// Adiciona os agendamentos à lista na página
agendamentosFiltrados.forEach(agenda => {
    const item = document.createElement("li");
    item.textContent = `${agenda.nome} - ${agenda.data} - ${agenda.hora}`;
    listaAgendamento.appendChild(item);

    // Evento de clique para riscar e remover o item
    item.addEventListener("click", () => {
        item.classList.add("concluido");
        setTimeout(() => {
            listaAgendamento.removeChild(item);

            // Adiciona o agendamento removido ao localStorage
            agendamentosRemovidos.push(`${agenda.nome}-${agenda.data}-${agenda.hora}`);
            localStorage.setItem("agendamentosRemovidos", JSON.stringify(agendamentosRemovidos));
        }, 4000); // Tempo em milissegundos (10000 = 10 segundos)
    });
});