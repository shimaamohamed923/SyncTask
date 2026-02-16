import React from 'react';


export default function AddItem({ addTask, inputval, editing, setInputval }) {

  return (
    <div className='container'>
      <form className="p-3 m-auto col-md-5">
        <div className="mb-3 input-group">

          <input id="text" className='form-control' type="text" value={inputval} placeholder='add item ....' onChange={(e) => setInputval(e.target.value)} />
          <button className="btn btn-primary" onClick={addTask}> {editing ? 'Update' : 'ADD'}</button>
        </div>

      </form>
    </div>
  )
}
