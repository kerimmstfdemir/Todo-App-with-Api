import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const url = "https://635b9fbeaa7c3f113dc1c37c.mockapi.io/todoapi/todos";

  //? CRUD: (GET-READ)
  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? componentDidMount()
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <AddTutorial getTodos={getTodos}/>
      <TutorialList todos={todos} getTodos={getTodos}/>
    </>
  );
};

export default Home;
