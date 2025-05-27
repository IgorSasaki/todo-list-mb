import { useState } from "react";
import "./App.css";

const App = () => {
  // Estado para armazenar o título e a descrição digitados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Estado que mantém a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Função que será chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Verifica se os campos foram preenchidos
    if (!title.trim() || !description.trim()) return;

    // Cria um novo objeto de tarefa
    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    // Atualiza a lista de tarefas com a nova tarefa
    setTasks([...tasks, newTask]);

    // Limpa os campos do formulário
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      {/* Seção do formulário para adicionar nova tarefa */}
      <section className="form-container">
        <h2>Adicionar Tarefa</h2>

        <form onSubmit={handleSubmit}>
          {/* Campo para o título da tarefa */}
          <fieldset>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              placeholder="Digite o título da tarefa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          {/* Campo para a descrição da tarefa */}
          <fieldset>
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              type="text"
              placeholder="Descreva a tarefa"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <button type="submit">Salvar</button>
        </form>
      </section>

      {/* Seção que exibe a lista de tarefas já adicionadas */}
      <section className="list-container">
        <h2>Lista de Tarefas</h2>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> — {task.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
