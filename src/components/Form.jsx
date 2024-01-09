import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo, updateToDo } from '../redux/toDoApp/action/Action';

const Form = ({editFormVisibility, editToDo, cancelUpdate}) => {

    let [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    let [editValue, setEditValue] = useState(''); 

    useEffect(()=>{
        console.log('Data from useEffect:', editToDo);
        setEditValue(editToDo.toDo);
    }, [editToDo]);

    let handleChange = (e) => {

        console.log(e.target.value);
        // inputValue = e.target.value;
        setInputValue(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        let date = new Date();
        let time = date.getTime();


        let toDoObj = {
            id: time,
            toDo: inputValue,
            complated: false
        }

        // setInputValue = "Demo";
        // inputValue = " ";
        setInputValue('');
        setEditValue('');
        // console.log('submit btn result:',inputValue);

        dispatch(addToDo(toDoObj))
        // console.log('dispatch data:', toDoObj);
    }

    const editUpdated = (e) =>{
        e.preventDefault();
        let editObj = {
            id: editToDo.id,
            toDo: editValue,
            complated: false
        }
        dispatch(updateToDo(editObj));
    }

    return (

        <>
            {editFormVisibility === false ? (
                <div>
                    <form className='form-group' onSubmit={handleSubmit}>
                        <p className='text-start'>Add Your To Do Items</p>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add To Do" value={inputValue} onChange={handleChange} />
                            <button className='btn btn-secondary btn-md ms-1' type='submit'>ADD</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <form className='form-group' onSubmit={editUpdated}>
                        <p className='text-start'>Update Your To Do Items</p>
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Update Your To Do" required value={editValue || " "} onChange={(e)=> setEditValue(e.target.value)}/>
                            <button className='btn btn-secondary btn-md ms-1' type='submit'>UPDATE</button>
                        </div>
                        <button className='btn btn-primary btn-md' onClick={cancelUpdate}>Back</button>
                    </form>
                </div>
            )}
        </>
        // <div>
        //     <form className='form-group' onSubmit={handleSubmit}>
        //             <p className='text-start'>Add Your To Do Items</p>
        //         <div className="mb-3 d-flex">
        //             <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add To Do" value={inputValue} onChange={handleChange} />
        //             <button className='btn btn-secondary btn-md ms-1' type='submit'>ADD</button>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Form
