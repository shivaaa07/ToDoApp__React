import { ADD_TODO } from "../action/Action";
import { DELETE_ALL } from "../action/Action";
import { REMOVE_TODO } from '../action/Action';
import { UPDATE_TODO } from '../action/Action';
import { UPDATE_CHECKBOX } from '../action/Action';


let initialState = [
    { id: 1, toDo: 'Buy Laptop', complated: false },
    { id: 2, toDo: 'Sell Laptop', complated: false },
    { id: 3, toDo: 'Rent Laptop', complated: false },
];

export let operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('operation file:', action.payload);
            return [...state, action.payload];
            break;
        case DELETE_ALL:
            console.log('Delete the ToDo');
            return [];
            break;
        case REMOVE_TODO:
            console.log('deleted to do:', action.payload);
            const filterdToDo = state.filter(todo => todo.id !== action.payload);
            return filterdToDo;
            break;
        case UPDATE_TODO:
            let data = action.payload;
            const upadtedArray = [];
            state.map((item)=>{
                if (item.id === data.id) {
                    item.toDo = data.toDo;
                    item.complated = data.complated;
                }
                upadtedArray.push(item);
            })
            return upadtedArray;
            break;
        case UPDATE_CHECKBOX:
            let checkBoxArr = [];
            state.map((ele)=>{
                if (ele.id === action.payload) {
                    ele.complated = !ele.complated;
                }
                checkBoxArr.push(ele);
            });
            console.log('The Checkbox update reducer:',checkBoxArr);
            return checkBoxArr;
            break;
        default: return state
            break;
    }
}