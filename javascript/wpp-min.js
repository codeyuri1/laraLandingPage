document.addEventListener("DOMContentLoaded", function() {
    const whatsappIcon = document.getElementById("whatsapp-icon");
  
    whatsappIcon.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.1)";
    });
  
    whatsappIcon.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  });
  