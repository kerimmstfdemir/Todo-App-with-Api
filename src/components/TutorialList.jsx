import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ todos, getTodos }) => {

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("")
  const [id, setId] = useState("")

  //! DELETE (CRUD-Delete)
  const deleteTodo = async (id) => {
    const url = "https://635b9fbeaa7c3f113dc1c37c.mockapi.io/todoapi/todos";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTodos();
  };

  //! PUT (CRUD-Update)
  //! Whole Update, PATCH: Partially Update
  const editTodoIcon = async (item) => {
    const {id, title, description } = item;
    setEditTitle(title);
    setEditDescription(description);
    setId(id);
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    className="me-2 text-warning"
                    onClick={() => editTodoIcon(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                    onClick={() => deleteTodo(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial todos={todos} getTodos={getTodos} editTitle={editTitle} setEditTitle={setEditTitle} editDescription={editDescription} setEditDescription={setEditDescription} id={id}/>
    </div>
  );
};

export default TutorialList;
