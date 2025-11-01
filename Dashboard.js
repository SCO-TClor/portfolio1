// Declaração de variáveis:
let taskInitCriada = false;
let momentoDoDia;           
let quantidadeDeTasks = (Number(localStorage.getItem('tasks')) || 0);
let textTemp;
const taskButton = document.getElementById('button');                       // Auto-explicativo
const inputTasks = document.getElementById('inputTasksID');                 // Shortcut para as Tasks
const menuTasks = document.getElementById('taskMenu');                      // Div onde as tasks ficam localizadas
// Alterador de tema:
function themeChanger(momento) {
    if (momentoDoDia == 'manha') {
        document.documentElement.dataset.momento = "manha";
    }
    else if (momentoDoDia == 'tarde') {
        document.documentElement.dataset.momento = "tarde";
    }
    else if (momentoDoDia == 'noite') {
        document.documentElement.dataset.momento = "noite";
    };
};
// Relógio em tempo real:
function mudaTempo() {
    // Horário e Data atual
    const horarioAtual = new Date();
    const horaAtual = String(horarioAtual.getHours()).padStart(2, '0');
    const minutoAtual = String(horarioAtual.getMinutes()).padStart(2, '0');
    const segundoAtual = String(horarioAtual.getSeconds()).padStart(2, '0');
    const diaAtual = String(horarioAtual.getDate()).padStart(2, '0');
    const mesAtual = String(horarioAtual.getMonth() + 1).padStart(2, '0');
    const anoAtual = String(horarioAtual.getFullYear()).padStart(2, '0');
    document.getElementById('clock').innerHTML = `${horaAtual}:${minutoAtual}:${segundoAtual}`;
    document.getElementById('data').innerHTML = `${diaAtual}/${mesAtual}/${anoAtual}`;
    //Momento do dia e quanto tempo
    let minFalt;
    let horasFalt;
    if (horaAtual >= 0 && horaAtual < 12) {
        if (minutoAtual == 0) {
            minFalt = 0;
            horasFalt = 12 - horaAtual;
        }
        else if (minutoAtual != 0) {
            minFalt = 60 - minutoAtual;
            horasFalt = 11 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Manhã - ${horasFalt}h ${minFalt} min restantes`;
        momentoDoDia = 'manha';
        document.addEventListener('DOMContentLoaded', themeChanger(momentoDoDia));
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        if (minutoAtual == 0) {
            minFalt = 0;
            horasFalt = 18 - horaAtual;
        }
        else if (minutoAtual != 0) {
            minFalt = 60 - minutoAtual;
            horasFalt = 17 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Tarde - ${horasFalt}h ${minFalt} min restantes`;
        momentoDoDia = 'tarde';
        document.addEventListener('DOMContentLoaded', themeChanger(momentoDoDia));
    }
    else if (horaAtual >= 18 && horaAtual < 24) {
        if (minutoAtual == 0) {
            minFalt = 0;
            horasFalt = 24 - horaAtual;
        }
        else if (minutoAtual != 0) {
            minFalt = 60 - minutoAtual;
            horasFalt = 23 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Noite - ${horasFalt}h ${minFalt} min restantes`;
        momentoDoDia = 'noite';
        document.addEventListener('DOMContentLoaded', themeChanger(momentoDoDia));
    };
};
setInterval(mudaTempo, 1000);
mudaTempo();
// Pesquisa Online:
document.addEventListener('DOMContentLoaded', () => {
    const pesquisa = document.getElementById('pesquisa');
    if (!pesquisa) {
        return;
    }
    pesquisa.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // Pesquisa
            e.preventDefault()
            const question = pesquisa.value;
            if (!question) return;
            window.open('https://www.google.com/search?q=' + question);
            document.getElementById('pesquisa').value = '';
        };
    });
});
// Calculo da quantidade de tasks ativas:
function tasksCalc(input) {
    const nivelTaskAntigo = localStorage.getItem('tasks');
    // Calcular quantidade de tasks:
    const tasksVazias = menuTasks.querySelectorAll('p:has(input)');
    const totalDeTasks = menuTasks.querySelectorAll('p');
    const totalDeTasksEmNumero = totalDeTasks.length;
    const todosOsJogos = tasksVazias.length;
    const tasksCompletas = totalDeTasksEmNumero - todosOsJogos;
    localStorage.setItem('tasks', String(tasksCompletas));
    // Nomeação da quantidade:
    const nivelTaskAtual = localStorage.getItem('tasks');
    console.log(nivelTaskAtual +' tasks ativas');
    if (input == '') return;
    if (parseFloat(nivelTaskAntigo) < parseFloat(nivelTaskAtual)) {
        localStorage.setItem(String(input), nivelTaskAtual);
    }
    else if (parseFloat(nivelTaskAntigo) > parseFloat(nivelTaskAtual)) {
        localStorage.removeItem(String(input));
    }
};
// Guarda as tasks ativas:
function saveTasks(input) {
    const tasksTotal = localStorage.getItem('tasks');       // Total de tasks ativas
    console.log(input);
    localStorage.setItem(tasksTotal,input);
    console.log(localStorage);
};
// Apaga as tasks guardadas no localStorage:
function deleteTasks(e) {
    const delTask = (e.target.contains(closest('span')));
    if (delTask === false) return;
    const quantasTasks = localStorage.getItem('task');

};
// Criador de tasks:
taskButton.addEventListener('click', () => {
    if (!taskInitCriada) {
        menuTasks.textContent = '';
        taskInitCriada = true;
    };
    // Criação das Tasks:
    const divTask = document.createElement('p');
    const inputTaskCriado = document.createElement('input');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    inputTaskCriado.dataset.inputQuest = 'inputAdded';
    // Distribuição de classes de estilo:
    editButton.className = 'editButton';
    deleteButton.className = 'editButton';
    divTask.className = 'tasks';
    inputTaskCriado.className = 'inputTasks';
    // Relacionamento de botões:
    editButton.innerHTML = '&#x270D;';
    editButton.dataset.cargoBotao = 'edita';
    deleteButton.innerHTML = '&#10060;';
    deleteButton.dataset.cargoBotao = 'deleta';
    // Inserção no documento:
    divTask.append(inputTaskCriado);
    divTask.append(editButton);
    divTask.append(deleteButton);
    menuTasks.append(divTask);
    inputTaskCriado.focus();
    tasksCalc();
});
// Botões de edição:
menuTasks.addEventListener('click', (e) => {
    // Botões de editar e excluir task atual:
    let valorInput;
    const taskAtual = e.target.closest('p');
    const botaoDeEdicao = e.target.closest('button');
    if (!botaoDeEdicao || !menuTasks.contains(botaoDeEdicao)) return;
    if (!botaoDeEdicao.classList.contains('editButton')) return;
    // Botão de deletar:
    if (botaoDeEdicao.dataset.cargoBotao === 'deleta') {
        const tipoDeTaskInput = taskAtual.querySelector('input');
        const tipoDeTaskSpan = taskAtual.querySelector('span');
        if (tipoDeTaskSpan) {
            valorInput = (tipoDeTaskSpan.textContent || '');
        }
        else if(tipoDeTaskInput) {
            valorInput = (tipoDeTaskInput.value || '');
        };
        taskAtual.remove();
        tasksCalc(valorInput);
        if (menuTasks.innerHTML === '') {
            menuTasks.textContent = 'Digite + para adicionar uma nova tarefa';
            taskInitCriada = false;
        };
    };
    // Botão de editar:
    if (botaoDeEdicao.dataset.cargoBotao === 'edita') {
        const textSpan = taskAtual.querySelector('span');
        const textoAntigo = textSpan.textContent;
        if (!textSpan) return;
        const novoInput = document.createElement('input');
        novoInput.className = 'inputTasks';
        novoInput.value = textoAntigo;
        taskAtual.replaceChild(novoInput, textSpan);
        novoInput.focus();
        tasksCalc(textoAntigo);
    };
});
// Transformador em texto:
menuTasks.addEventListener('keydown', (e) => {
    if (!(e.target instanceof HTMLInputElement) || e.target.type !== 'text' || e.key !== 'Enter') return;
    const input = e.target.value.trim();
    const taskAtual = e.target.closest('p');
    if (input == '' || !taskAtual) return;
    const spanzin = document.createElement('span');
    spanzin.append(input);
    e.target.replaceWith(spanzin);
    tasksCalc(input);
});