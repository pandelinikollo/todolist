import { useState } from 'react'


function TodoList () {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value)
      }

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
      }
    
    
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputValue} onChange={handleChange} />
          <button>Add Todo</button>
        </form>
        <ul>
            <li>
            {todos.map((todo, index) => (
          <li key={todo}>{todo}
             <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
           </li>
        </ul>
      </div>
    );
  }
  

export default TodoList
