// Declaração de variáveis:
let momentoDoDia;
let temConteudo = false;
const taskButton = document.getElementById('button');                       // Auto-explicativo
const menuTasks = document.getElementById('taskMenu');                      // Div onde as tasks ficam localizadas
// Tasks Loader:
document.addEventListener('DOMContentLoaded', () => {
    const batata = (JSON.parse(localStorage.getItem('tasks')) || 0);
    console.log(batata);
    const ventilador_8_helices = batata.length > 0 ? true : false;
    if (ventilador_8_helices) {
        menuTasks.innerHTML = '';
    }
    else {
        menuTasks.textContent = 'Digite + para adicionar uma nova tarefa';
    };
    for (let i = 0; i < batata.length; i++) {
        // Criação das Tasks:
        const divTask = document.createElement('p');
        const spanzin = document.createElement('span');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        // Distribuição de classes de estilo:
        editButton.className = 'editButton';
        deleteButton.className = 'editButton';
        divTask.className = 'tasks';
        spanzin.style = 'width: 100%';
        // Relacionamento de botões:
        spanzin.innerText = batata[i];
        editButton.innerHTML = '&#x270D;';
        editButton.dataset.cargoBotao = 'edita';
        editButton.type = 'button';
        editButton.title = 'Editar task';
        deleteButton.innerHTML = '&#10060;';
        deleteButton.dataset.cargoBotao = 'deleta';
        deleteButton.type = 'button';
        deleteButton.title = 'Excluir task';
        // Inserção no documento:
        divTask.append(spanzin);
        divTask.append(editButton);
        divTask.append(deleteButton);
        menuTasks.append(divTask);
    };
    console.log(batata.length);
});
// Alterador de tema:
function themeChanger(momento) {
    if (momento == 'manha') {
        document.documentElement.dataset.momento = "manha";
    }
    else if (momento == 'tarde') {
        document.documentElement.dataset.momento = "tarde";
    }
    else if (momento == 'noite') {
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
        themeChanger(momentoDoDia);
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
        themeChanger(momentoDoDia);
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
        themeChanger(momentoDoDia);
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
// Calculo do texto do menuTasks:
function temContent(conteudo) {
    if (conteudo) {
        menuTasks.innerHTML = '';
    }
    else {
        menuTasks.textContent = 'Digite + para adicionar uma nova tarefa';
    };
};
// Calculo da quantidade de tasks ativas:
function tasksCalc() {
    let listaTasks = [];
    const listinha = menuTasks.querySelectorAll('p>span');
    const taskNum = listinha.length;
    console.log(taskNum);
    for (let i = 0; i < taskNum; i++) {
        listaTasks[i] = menuTasks.querySelectorAll('p>span')[i].innerText;
    };
    localStorage.setItem('tasks', JSON.stringify(listaTasks));
    console.log(localStorage)
    //const listinha = menuTasks.querySelectorAll('p>span')[0].innerText;
    // listaTasks = {
    // };
};
// Criador de tasks:
taskButton.addEventListener('click', () => {
    if (menuTasks.querySelector('p') == null) {
        temConteudo = true;
        temContent(temConteudo);
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
    editButton.type = 'button';
    editButton.title = 'Editar task';
    deleteButton.innerHTML = '&#10060;';
    deleteButton.dataset.cargoBotao = 'deleta';
    deleteButton.type = 'button';
    deleteButton.title = 'Excluir task';
    // Inserção no documento:
    divTask.append(inputTaskCriado);
    divTask.append(editButton);
    divTask.append(deleteButton);
    menuTasks.prepend(divTask);
    inputTaskCriado.focus();
});
// Botões de edição:
menuTasks.addEventListener('click', (e) => {
    // Botões de editar e excluir task atual:
    const taskAtual = e.target.closest('p');
    const botaoDeEdicao = e.target.closest('button');
    if (!botaoDeEdicao || !menuTasks.contains(botaoDeEdicao)) return;
    if (!botaoDeEdicao.classList.contains('editButton')) return;
    // Botão de deletar:
    if (botaoDeEdicao.dataset.cargoBotao === 'deleta') {
        taskAtual.remove();
        if (menuTasks.querySelector('p') == null) {
            temConteudo = false;
            temContent(temConteudo);
        };
        tasksCalc();
    };
    // Botão de editar:
    if (botaoDeEdicao.dataset.cargoBotao === 'edita') {
        const textSpan = taskAtual.querySelector('span');
        if (!textSpan) return;
        const textoAntigo = textSpan.textContent;
        const novoInput = document.createElement('input');
        novoInput.className = 'inputTasks';
        novoInput.value = textoAntigo;
        taskAtual.replaceChild(novoInput, textSpan);
        novoInput.focus();
        tasksCalc()
    };
});
// Transformador em texto:
menuTasks.addEventListener('keydown', (e) => {
    if (!(e.target instanceof HTMLInputElement) || e.target.type !== 'text') return;
    if (e.key !== 'Enter' || e.keyCode !== 13) return;
    const input = e.target.value.trim();
    const taskAtual = e.target.closest('p');
    if (input == '' || !taskAtual) return;
    const spanzin = document.createElement('span');
    spanzin.style = 'width: 100%';
    spanzin.append(input);
    e.target.replaceWith(spanzin);
    tasksCalc()
});