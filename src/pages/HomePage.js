import React, {useState, useEffect} from 'react';
import PageWrapper from '../components/PageWrapper';
import { base_url } from '../services/backend';

const HomePage = () => {
  const [todos, setTodos] = useState([])
  let token ="upWsTR1iOHpL3ZmzSGXOlS2lZLrzTYPalLTXkx66wYpxUNpj6Kp0SMxAVg9yvKF2";

   useEffect(() => {
     getTodos();
   }, [0]);

  let getTodos = async () => {
    let response = await fetch(`${base_url}todos/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + String(token)
        },
    })
    let data = await response.json()
    setTodos(data)
    //console.log('Notes', data)
  }
  console.log('Todos', todos)
  console.log("BASE URL", base_url)


  return (
    <PageWrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{
                    todo.status === 'complete' ? 'complete' : 'In Progress'
                  
                  }</td>

                  <td>
                    <a href="/" className="btn btn-sm btn-primary">
                      Update
                    </a>
                   
                  </td>
                  <td>
                  
                    <a href="/" className="btn btn-sm btn-danger">
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

export default HomePage