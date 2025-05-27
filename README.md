# 📝 To-Do List com React (Aula 01 - Projeto Mentes Brilhantes)

Este projeto foi desenvolvido durante a **primeira aula prática** do curso de Programação do projeto Mentes Brilhantes - Araraquara/SP. O objetivo principal é introduzir os alunos ao desenvolvimento web com foco em **estruturação semântica de páginas HTML utilizando React (JSX)**.

---

## 🎯 Objetivos da Aula

- Introduzir os conceitos de HTML e JSX
- Compreender a estrutura básica de um projeto React
- Construir a interface inicial de uma lista de tarefas (To-Do List)
- Desenvolver o HTML da aplicação utilizando boas práticas de semântica e organização

---

## 🧠 Conteúdo Abordado

### 📄 HTML (JSX)

- `div`, `section`, `form`, `fieldset`, `label`, `input`, `ul`, `li`
- Semântica de marcação
- Estruturação visual de formulários e listas

### ⚛️ React

- Criação de componentes funcionais
- Sintaxe JSX
- Diferença entre `className` e `class`
- Uso de `htmlFor` em vez de `for` nas labels

---

## 🧱 Estrutura Criada

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
- Vite / CRA (dependendo da inicialização)
- Node.js (para ambiente React)

---

## 📚 Referências Complementares

- [MDN Web Docs – HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [React – Documentação Oficial](https://reactjs.org/docs/getting-started.html)
- [JSX – O que é e como funciona](https://reactjs.org/docs/introducing-jsx.html)

---

## 🚧 Próximos Passos do Projeto

- Estilização com CSS puro
- Implementação de estados com `useState`
- Adição de novas tarefas dinamicamente
- Remoção e marcação de tarefas como concluídas
- Persistência no `localStorage`

---

## 👨‍🏫 Projeto Educacional

Este projeto faz parte do curso **Programação e Novas Mídias** do **Projeto Mentes Brilhantes – Araraquara**, voltado à formação gratuita de jovens em situação de vulnerabilidade.

Professor responsável: **Igor Leonardo Sasaki da Silva Moreira**  
[LinkedIn](https://www.linkedin.com/in/igor-sasaki) • [GitHub](https://github.com/IgorSasaki)

---
