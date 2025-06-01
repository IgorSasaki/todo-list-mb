import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const [loadingTasks, setLoadingTasks] = useState(false);
  const [creatingTask, setCreatingTask] = useState(false);

  const loadTasks = async () => {
    setLoadingTasks(true);

    try {
      const response = await axios.get("http://localhost:3333/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error({ loadTasksError: error });
    } finally {
      setLoadingTasks(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    try {
      setCreatingTask(true);

      const response = await axios.post("http://localhost:3333/tasks", {
        title,
        description,
      });

      setTasks((prev) => [...prev, response.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error({ handleSubmitError: error });
    } finally {
      setCreatingTask(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container">
      <section className="form-container">
        <h2>Formulário</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              disabled={creatingTask}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              disabled={creatingTask}
            />
          </fieldset>

          <button type="submit" disabled={creatingTask}>
            {creatingTask ? "Salvando..." : "Salvar"}
          </button>
        </form>
      </section>

      <section className="list-container">
        <h2>Lista</h2>

        {loadingTasks ? (
          <p>Carregando tarefas...</p>
        ) : (
          <ul>
            {tasks.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong> – {item.description}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default App;
