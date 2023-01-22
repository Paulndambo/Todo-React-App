import React, {useState} from 'react';
import PageWrapper from "../components/PageWrapper";
import { base_url } from '../services/backend';

const CreateTodo = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    //const [status, setStatus] = useState(null);

    const token ="upWsTR1iOHpL3ZmzSGXOlS2lZLrzTYPalLTXkx66wYpxUNpj6Kp0SMxAVg9yvKF2";

    const handleSubmit = async(e) => {
        e.preventDefault();

        const todoItem = {
            title: title,
            description: description
        }
        
        await fetch(`${base_url}todos/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("Result: ", res)
            window.location.replace("/");
        })
        .catch((err) => {
            console.log("Error: ", err)
        })

        console.log('Todo Item: ', todoItem);

    }

  return (
    <PageWrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
                <h2>Create New Todo Item</h2>
                <hr/>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default CreateTodo