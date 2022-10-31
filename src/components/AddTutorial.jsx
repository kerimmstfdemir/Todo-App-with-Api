import axios from "axios";
import { useState } from "react";

const AddTutorial = ({getTodos}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { title: title, description: description };
    addTodo(newTodo);
    setTitle("");
    setDescription("");
  };

  //! POST - CRUD (CREATE)
  const addTodo = async (newTodo) => {
    const url = "https://635b9fbeaa7c3f113dc1c37c.mockapi.io/todoapi/todos";
    try {
      await axios.post(url, newTodo);
    } catch (error) {
      console.log(error);
    }
    getTodos();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Todos</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
