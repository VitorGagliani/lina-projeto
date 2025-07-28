/** @type {import('tailwindcss').Config} */
const preset = require("tailwindcss/default-config"); // <-- Importe o preset padrão aqui

module.exports = {
  // Adiciona o preset padrão ao seu projeto,
  // isso vai incluir todas as cores, espaçamentos, etc.
  presets: [preset],

  // Muito importante: Adicione os caminhos para SEUS arquivos aqui.
  // O Tailwind vai procurar por classes nesses arquivos para gerar o CSS.
  content: [
    "./*.{html,js}", // se você tem html na pasta raiz
    "./src/**/*.{html,js,jsx,ts,tsx}", // exemplo para uma pasta src
    // Adicione outros caminhos se necessário
  ],
};
