import React from "react";
import { MdClose } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

import styled from "styled-components";

export const TodoList = ({ ...props }) => {
  const [active, setActive] = React.useState(false);
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Next.js",
      completed: false,
    },
  ]);
  const completedTodos = todos.filter((todo) => todo.completed === true);

  const addTodo = (title, e) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      addTodo(e.target.value, e);
      e.target.value = "";
    }
  };

  const toggleCompleted = () => {
    setActive(!active);
  };

  console.log(completedTodos);

  return (
    <Container {...props}>
      <div className="todo-header">
        <div className="header-wrapper">
          <h1>TodoList</h1>
          <ToggleCompleted active={active} onClick={toggleCompleted}>
            Completed
          </ToggleCompleted>
        </div>
        <MdClose />
      </div>

      <input className="todo-input" onKeyPress={(e) => handlePressEnter(e)} />

      {active ? (
        <ul className="todo-list">
          {completedTodos.map((todo) => (
            <div className="todo-item">
              <li key={todo.id}>- {todo.title}</li>
              <div className="icon-wrapper">
                <button onClick={() => completeTodo(todo.id)}>
                  <BsCheckLg className="checked" />
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                  <MdClose className="close" />
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem className="todo-item" completed={todo.completed}>
              <li key={todo.id}>- {todo.title}</li>
              <div className="icon-wrapper">
                <button onClick={() => completeTodo(todo.id)}>
                  <BsCheckLg className="checked" />
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                  <MdClose className="close" />
                </button>
              </div>
            </TodoItem>
          ))}
        </ul>
      )}
    </Container>
  );
};

const ToggleCompleted = styled.button`
  background: ${(props) => props.active && "green"};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 300px;
  min-height: 300px;
  background: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow-small);
  padding: 1.4rem;
  color: var(--text-color);
  font-family: var(--font-robotoMono);
  font-size: 1.4rem;

  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-wrapper {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      button {
        background: ${(props) => props.active && "green"};
      }
    }
  }

  /* .todo-item {
    display: ${(props) => (props.completed ? "none" : "flex")};
    justify-content: space-between;
    align-items: center;

    .icon-wrapper {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: red;
      padding: 0.4rem;
    }

    .close {
      color: red;
    }

    .checked {
      color: green;
      font-size: 1.2rem;
    }
  } */

  .todo-input {
    width: 100%;
    height: auto;
    border: 1px solid var(--color-grey-200);
    border-radius: 4px;
    padding: 1rem 0.8rem;
    font-family: var(--font-robotoMono);
    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    height: 2.4rem;
    border: 1px solid var(--color-grey-200);
    border-radius: 4px;
  }
`;

const TodoItem = styled.li`
  display: ${(props) => (props.completed ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;

  .icon-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: red;
    padding: 0.4rem;
  }

  .close {
    color: red;
  }

  .checked {
    color: green;
    font-size: 1.2rem;
  }
`;
