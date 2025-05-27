const App = () => {
  return (
    <div>
      <section>
        <h2>Formulário</h2>

        <form>
          <label>Título</label>
          <input type="text" />

          <label>Descrição</label>
          <input type="text" />

          <button>Salvar</button>
        </form>
      </section>

      <section>
        <h2>Lista de Tarefas</h2>

        <ul>
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
          <li>Tarefa 3</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
