export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

// Add To Do
export function addToDo(payload) {
    console.log('Action File:',payload);
    return{
        type:ADD_TODO,
        payload
    }
}

// Delete All To Do
export function deleteAll() {
    return{
        type: DELETE_ALL
    }
}

// Delete One Single To DO
export function deleteToDo(payload) {
    return {
        type: REMOVE_TODO,
        payload
    }
}

// Update to do
export function updateToDo(payload) {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export function handleCheckBox(payload){
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}




