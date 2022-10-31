import axios from "axios";

const EditTutorial = ({ todos, getTodos, editTitle, setEditTitle, editDescription, setEditDescription, id }) => {

  const editTodo = async (editTitle, editDescription) => {
    const url = "https://635b9fbeaa7c3f113dc1c37c.mockapi.io/todoapi/todos";
    try {
      await axios.put(`${url}/${id}`, {"title": editTitle, "description": editDescription})
    } catch (error) {
      console.log(error)
    }
  getTodos();
  }

  return (
    <div>
      {/* Modal */}
      <div className="modal fade" id="editModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* MODAL FORM */}
              <form>
                <div className="mb-3">
                  <label htmlFor="InputText1" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="InputText1" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="InputText2" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="InputText2" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => editTodo(editTitle, editDescription)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
