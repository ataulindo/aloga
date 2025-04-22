// Scroll Suave para os Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manipulação do Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegando os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Validação simples
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos!';
        formMessage.style.color = '#ff3333';
        return;
    }

    // Simulando envio (você pode integrar com um backend aqui)
    formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    formMessage.style.color = '#fff';

    // Limpando o formulário
    this.reset();
});
