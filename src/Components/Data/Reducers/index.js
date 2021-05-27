import { ADD_TASK, FILTER_TASK, TOGGLE_COMPLETE } from '../Actions/ActionType';

let ItemsID = 0;

const taskReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, {
                id: ++ItemsID,
                desc: action.payload.desc,
                finished: false
            }]
        case TOGGLE_COMPLETE:
            return state.filter(data => {
                if(data.id == action.payload.id) {
                    data.finished = !data.finished;
                }

                return data;
            })
        default:
            return state;
    }
}


export default taskReducer;