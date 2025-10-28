function mudaTempo() {
    // Horário e Data atual
    const horarioAtual = new Date();
    const horaAtual = String(horarioAtual.getHours()).padStart(2, '0');
    const minutoAtual = String(horarioAtual.getMinutes()).padStart(2, '0');
    const segundoAtual = String(horarioAtual.getSeconds()).padStart(2, '0');
    const diaAtual = String(horarioAtual.getDate()).padStart(2, '0');
    const mesAtual = String(horarioAtual.getMonth() + 1).padStart(2, '0');
    const anoAtual = String(horarioAtual.getUTCFullYear()).padStart(2, '0');
    document.getElementById('clock').innerHTML = `${horaAtual}:${minutoAtual}:${segundoAtual}`;
    document.getElementById('data').innerHTML = `${diaAtual}/${mesAtual}/${anoAtual}`;
    //Momento do dia e quanto tempo
    if (horaAtual > 0 && horaAtual < 12) {
        if (minutoAtual == 0) {
            var minFalt = 0;
            var horasFalt = 12 - horaAtual;
        }
        else if (minutoAtual != 0) {
            var minFalt = 60 - minutoAtual;
            var horasFalt = 11 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Manhã -`;
    }
    else if (horaAtual >= 12 && horaAtual < 18) {
        if (minutoAtual == 0) {
            var minFalt = 0;
            var horasFalt = 18 - horaAtual;
        }
        else if (minutoAtual != 0) {
            var minFalt = 60 - minutoAtual;
            var horasFalt = 17 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Tarde -`;
    }
    else if (horaAtual >= 18 && horaAtual < 24) {
        if (minutoAtual == 0) {
            var minFalt = 0;
            var horasFalt = 24 - horaAtual;
        }
        else if (minutoAtual != 0) {
            var minFalt = 60 - minutoAtual;
            var horasFalt = 23 - horaAtual;
        };
        document.getElementById('momento').innerHTML = `Noite - ${horasFalt}h ${minFalt} min restantes`;
    };
    setTimeout('mudaTempo()',500);
}
mudaTempo();
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
            window.open('https://www.google.com/search?q=' + question, '_blank');
            document.getElementById('pesquisa').value = '';
        };
    });
});

