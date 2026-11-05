// Interações simples do Natalino.
// Tudo aqui é melhoria: sem JavaScript o site continua completo e legível.

// ---------- Formulário demonstrativo ----------
const formulario = document.getElementById('formulario-contato');
const statusFormulario = document.getElementById('formulario-status');

if (formulario && statusFormulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nome = formulario.elements.nome.value.trim();
        formulario.reset();
        statusFormulario.textContent =
            `Obrigado, ${nome}! Este formulário é só demonstrativo, então nada foi enviado. Fale comigo pelo GitHub.`;
    });
}
