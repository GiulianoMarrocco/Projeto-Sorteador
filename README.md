# 🎲 Sorteador de Números

Aplicação web para sortear números aleatórios dentro de um intervalo definido pelo usuário. Desenvolvida durante minha transição de carreira para a área de tecnologia.

---

## 🖥️ Demonstração

![Tela do Sorteador](./assets/site-sorteador.png)

---

## ✨ Funcionalidades

- 🔢 Define o **intervalo mínimo e máximo** para o sorteio
- 🎯 Gera um **número aleatório** dentro do intervalo escolhido
- 🔄 Botão de **reiniciar** para realizar um novo sorteio
- 🎨 Interface visual limpa e intuitiva

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e layout |
| JavaScript (ES6+) | Lógica de sorteio e manipulação do DOM |

---

## 🧠 Como Funciona

O sorteio utiliza a função nativa `Math.random()` do JavaScript combinada com `Math.floor()` para gerar um número inteiro aleatório dentro do intervalo definido pelo usuário:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

---

## 🚀 Como Rodar o Projeto

Não precisa instalar nada! É um projeto de HTML, CSS e JavaScript puro.

```bash
# Clone o repositório
git clone https://github.com/GiulianoMarrocco/Projeto-Sorteador.git

# Entre na pasta
cd Projeto-Sorteador

# Abra o arquivo no navegador
# Clique duas vezes no index.html
# ou use a extensão Live Server no VS Code
```

---

## 📂 Estrutura do Projeto

```
Projeto-Sorteador/
├── index.html    # Estrutura da página
├── style.css     # Estilização
├── script.js     # Lógica de sorteio
└── assets/       # Imagens e ícones
```

---

## 👨‍💻 Sobre o Projeto

Este projeto foi desenvolvido como parte da minha jornada de transição de carreira para a área de tecnologia. O foco foi praticar a manipulação do DOM com JavaScript puro, trabalhando com eventos, inputs do usuário e atualização dinâmica da interface.

---

## 📬 Contato

Feito por **Giuliano Marrocco**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GiulianoMarrocco)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---

## 📝 Licença

Este projeto está sob a licença MIT.

