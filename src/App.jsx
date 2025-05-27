import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Seção do formulário para adicionar nova tarefa */}
      <section className="form-container">
        <h2>Adicionar Tarefa</h2>

        <form>
          {/* Campo para o título da tarefa */}
          <fieldset>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              placeholder="Digite o título da tarefa"
            />
          </fieldset>

          {/* Campo para a descrição da tarefa */}
          <fieldset>
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              type="text"
              placeholder="Descreva a tarefa"
            />
          </fieldset>

          <button type="submit">Salvar</button>
        </form>
      </section>

      {/* Seção que exibe a lista de tarefas já adicionadas */}
      <section className="list-container">
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
