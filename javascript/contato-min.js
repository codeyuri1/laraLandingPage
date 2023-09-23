document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      // Substitua com o código para enviar o e-mail aqui
      // Pode usar serviços de terceiros como Formspree ou implementar um servidor de e-mail
      // Exemplo simples:
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
  
      const mailtoLink = `mailto:seuemail@example.com?subject=Contato do Site&body=Nome: ${nome}%0AE-mail: ${email}%0AMensagem: ${mensagem}`;
      window.location.href = mailtoLink;
    });
  });
  