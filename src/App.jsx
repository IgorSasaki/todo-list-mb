import { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const newTask = {
      id: Date.now().toLocaleString(),
      title,
      description,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <section id="form-container">
        <h2>Formulário</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Título</label>
            <input
              type="text"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </fieldset>

          <fieldset>
            <label>Descrição</label>
            <input
              type="text"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </fieldset>

          <button type="submit">Salvar</button>
        </form>
      </section>

      <section id="list-container">
        <h2>Lista</h2>

        <ul>
          {tasks?.map((item, index) => (
            <li key={item.id}>
              {item.title} - {item.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
