# 📝 To-Do List com React (Mentes Brilhantes)

Este projeto foi desenvolvido nas aulas práticas do curso de Programação do projeto **Mentes Brilhantes – Araraquara/SP**. O objetivo foi introduzir os alunos ao desenvolvimento web com React, HTML, CSS puro e integração com API Express, resultando em uma aplicação funcional de Lista de Tarefas.

---

## 🎯 Objetivos Gerais

- Compreender a estrutura de um projeto React
- Utilizar HTML (JSX) e CSS puro de forma semântica e responsiva
- Implementar controle de estado com `useState` e efeitos com `useEffect`
- Integrar o frontend a uma API real com Axios
- Trabalhar com requisições HTTP (`GET`, `POST`)
- Exibir mensagens de carregamento para melhorar a experiência do usuário

---

## 🧠 Conteúdo Abordado

### 📄 Aula 01 – Estrutura HTML com JSX

- Tags semânticas: `section`, `form`, `fieldset`, `label`, `input`, `ul`, `li`
- Organização visual da interface sem CSS
- JSX: diferença entre `class` e `className`, `for` e `htmlFor`
- Criação de componentes funcionais

### 🎨 Aula 02 – Estilização com CSS puro

- Integração de CSS com React via `import './App.css'`
- Conceitos de Box Model e Flexbox
- Seletores e propriedades básicas de estilo
- Responsividade e organização visual

### ⚛️ Aula 03 e seguintes – React com Estado e Integração com API

- `useState` para controlar inputs e lista de tarefas
- `useEffect` para carregar tarefas ao abrir o app
- `axios` para fazer requisições à API (`GET /tasks`, `POST /tasks`)
- Mensagens de carregamento (`loading`, `creating`)
- Exibição dinâmica da lista de tarefas a partir do banco de dados

---

## 🧱 Estrutura Final Desenvolvida

```jsx
<div className="container">
  <section className="form-container">
    <h2>Formulário</h2>

    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Descrição</label>
        <input type="text" id="description" name="description" />
      </fieldset>

      <button type="submit">Salvar</button>
    </form>
  </section>

  <section className="list-container">
    <h2>Lista de Tarefas</h2>

    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> – {task.description}
        </li>
      ))}
    </ul>
  </section>
</div>
```

---

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- HTML5 (JSX)
- CSS3 (puro)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/) para ambiente de desenvolvimento
- Node.js (executando a API)

---

## 📚 Referências Complementares

- [MDN Web Docs – HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs – CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [React – Documentação Oficial](https://reactjs.org/docs/getting-started.html)
- [Axios – Documentação Oficial](https://axios-http.com/)
- [CSS Tricks – Guia Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## ✅ Projeto Concluído

Todas as metas da aplicação foram atingidas:

- Integração completa com backend via API REST
- Tarefas são criadas e listadas usando dados reais
- O usuário recebe feedback visual em tempo real
- Organização semântica, responsiva e funcional

---

## 👨‍🏫 Projeto Educacional

Este projeto faz parte do curso **Programação e Novas Mídias** do **Projeto Mentes Brilhantes – Araraquara**, voltado à formação gratuita de jovens em situação de vulnerabilidade social.

Professor responsável: **Igor Leonardo Sasaki da Silva Moreira**  
[LinkedIn](https://www.linkedin.com/in/igor-sasaki) • [GitHub](https://github.com/IgorSasaki)

---
