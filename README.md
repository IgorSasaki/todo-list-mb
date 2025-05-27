# 📝 To-Do List com React (Aulas 01 e 02 - Projeto Mentes Brilhantes)

Este projeto está sendo desenvolvido durante as aulas práticas do curso de Programação do projeto Mentes Brilhantes - Araraquara/SP. O objetivo é introduzir os alunos ao desenvolvimento web com React, HTML e CSS puros por meio de um projeto prático: uma aplicação de Lista de Tarefas (To-Do List).

---

## 🎯 Objetivos Gerais

- Compreender a estrutura básica de um projeto React
- Utilizar HTML (JSX) de forma semântica
- Estilizar páginas com CSS puro integrado ao React
- Desenvolver componentes organizados e reutilizáveis

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
- Efeitos de `hover`, `focus` e `transition`

---

## 🧱 Estrutura Desenvolvida

```jsx
<div className="container">
  <section className="form-container">
    <h2>Formulário</h2>
    <form>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descrição</label>
        <input type="text" id="description" />
      </fieldset>
      <button type="submit">Salvar</button>
    </form>
  </section>

  <section className="list-container">
    <h2>Lista de Tarefas</h2>
    <ul>
      <li>Tarefa 1</li>
      <li>Tarefa 2</li>
      <li>Tarefa 3</li>
    </ul>
  </section>
</div>
```

---

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- HTML5 (JSX)
- CSS3 (puro)
- Vite ou CRA para ambiente de desenvolvimento
- Node.js (para execução do React)

---

## 📚 Referências Complementares

- [MDN Web Docs – HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs – CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [React – Documentação Oficial](https://reactjs.org/docs/getting-started.html)
- [CSS Tricks – Guia Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## 🚧 Próximos Passos do Projeto

- Adicionar tarefas dinamicamente com `useState`
- Criar eventos para adicionar, remover e marcar como concluída
- Estilizar tarefas concluídas com `text-decoration: line-through`
- Implementar persistência com `localStorage`

---

## 👨‍🏫 Projeto Educacional

Este projeto faz parte do curso **Programação e Novas Mídias** do **Projeto Mentes Brilhantes – Araraquara**, voltado à formação gratuita de jovens em situação de vulnerabilidade.

Professor responsável: **Igor Leonardo Sasaki da Silva Moreira**  
[LinkedIn](https://www.linkedin.com/in/igor-sasaki) • [GitHub](https://github.com/IgorSasaki)

---
