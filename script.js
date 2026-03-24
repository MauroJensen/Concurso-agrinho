// Navegação entre abas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Lógica do Simulador
const inputs = ['temp', 'ar', 'solo'];
const plant = document.getElementById('plant-status');
const feedback = document.getElementById('feedback');

inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', updateSimulator);
});

function updateSimulator() {
    const t = document.getElementById('temp').value;
    const a = document.getElementById('ar').value;
    const s = document.getElementById('solo').value;

    // Atualiza os números na tela
    document.getElementById('temp-val').innerText = t;
    document.getElementById('ar-val').innerText = a;
    document.getElementById('solo-val').innerText = s;

    // Lógica de saúde da planta (Morangos gostam de 18-25°C, Umidade Ar 60-80%, Solo 50-70%)
    let status = "🌱";
    let msg = "Condições Ideais!";
    let color = "#2e7d32";

    if (t > 30 || s < 30 || a < 40) {
        status = "🥀";
        msg = "Alerta: Planta sofrendo com estresse hídrico/térmico!";
        color = "#d32f2f";
    } else if (t < 10) {
        status = "❄️";
        msg = "Muito frio! O crescimento estagnou.";
        color = "#0288d1";
    } else if (s > 85) {
        status = "💧";
        msg = "Cuidado: Solo encharcado pode apodrecer as raízes.";
        color = "#00796b";
    } else if (t >= 18 && t <= 25 && s >= 50 && s <= 70) {
        status = "🍓";
        msg = "Perfeito! Produzindo morangos saudáveis.";
    }

    plant.innerText = status;
    feedback.innerText = msg;
    feedback.style.color = color;
}