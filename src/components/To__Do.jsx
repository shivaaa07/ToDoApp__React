import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../redux/toDoApp/action/Action';
import { updateToDo } from '../redux/toDoApp/action/Action';
import { handleCheckBox } from '../redux/toDoApp/action/Action';



const To__Do = ({ handleEditClick, editFormVisibility }) => {
    let todos = useSelector((state) => state.operationsReducer);

    console.log('To Do List:', todos);

    const dispatch = useDispatch();

    return todos.map((ele) => {
        return (
            <div className="container d-flex justify-content-between align-items-center my-2" key={ele.id}>
                <div className="content d-flex align-items-baseline">
                    {editFormVisibility === false && (
                        <input type="checkbox" checked={ele['complated']} onChange={()=>dispatch(handleCheckBox(ele['id']))} />
                    )}
                        {/* {console.log('The To Do Page:',ele.complated)} */}
                    <p className='ms-2' style={ele['complated'] == true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{ele['toDo']} </p>
                </div>
                <div className="actions-box">
                    {/* <span className='btn btn-secondary mx-2' onClick={()=> dispatch(updateToDo(ele['id']))}>Update</span> */}
                    {editFormVisibility === false && (
                        <>
                            <span className='btn btn-secondary mx-2' onClick={() => handleEditClick(ele)}>Update</span>
                            <span className='btn btn-danger' onClick={() => dispatch(deleteToDo(ele['id'], ele['toDO']))}>Delete</span>
                        </>
                    )}
                </div>
            </div>
        );
    });

}

export default To__Do;
