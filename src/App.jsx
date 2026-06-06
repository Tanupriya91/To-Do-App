import { useState } from 'react'
import Header from './components/Header.jsx'
import TaskInput from './components/TaskInput.jsx'
// import Header from './components/Header.jsx'
// import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app">
      <Header />
      <TaskInput />
      {/* <TaskItem />
      <TaskList /> */}
      
    </div>
    
  );
}

export default App;
