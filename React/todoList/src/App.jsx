import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'

const currentTime = new Date().getTime()
const mockData = [
  {
    id: 0,
    isDone: false,
    content : "React 공부하기",
    date: currentTime,
  }
];

function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    }
    setTodos([newTodo , ...todos]);
  }

  const onUpdate = (targetID) => {
    setTodos(todos.map(todo => {
      if (todo.id === targetID) {
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      }
      return todo;
    }))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter(todo => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
