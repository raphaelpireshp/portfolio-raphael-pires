document.addEventListener("DOMContentLoaded", function () {
  const toggleTheme = document.getElementById("toggleTheme");
  const rootHtml = document.documentElement;

  // Função para atualizar o ícone com base no tema atual
  function updateIcon(theme) {
      if (theme === "light") {
          toggleTheme.classList.remove("fa-moon");
          toggleTheme.classList.add("fa-sun");
      } else {
          toggleTheme.classList.remove("fa-sun");
          toggleTheme.classList.add("fa-moon");
      }
  }

  // Função para alternar o tema
  function changeTheme() {
      const currentTheme = rootHtml.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      // Aplica o novo tema ao HTML e salva no localStorage
      rootHtml.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateIcon(newTheme);

      console.log("Tema alterado para:", newTheme);
  }

  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme");

  // Aplica o tema salvo ou o tema padrão (dark)
  if (savedTheme) {
      rootHtml.setAttribute("data-theme", savedTheme);
      updateIcon(savedTheme);
  } else {
      rootHtml.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateIcon("dark");
  }

  // Adiciona o evento de clique ao botão de troca de tema
  if (toggleTheme) {
      toggleTheme.addEventListener("click", changeTheme);
  } else {
      console.error("Botão de troca de tema não encontrado!");
  }
});