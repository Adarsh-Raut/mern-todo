import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CreateTodo from './components/CreateTodo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <CreateTodo />
    </>
  );
}

export default App;
