import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";


function App() {
  

  return (
    <div>
      <CreateTodo />
      <Todos todos={[
        {
          title: "Hello",
          description: "Go to gym",
          completed: false
        }
        
      ]}/>

    </div>
  )
}

export default App
