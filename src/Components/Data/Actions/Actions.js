const { ADD_TASK, FILTER_TASK, TOGGLE_COMPLETE } = require("./ActionType")

const Add_Task = (desc) => {
    return {
        type: ADD_TASK,
        payload: {
            desc: desc
        }
    }
}

const Toggle_complete = (id) => {
    return {
        type:TOGGLE_COMPLETE,
        payload: {
            id: id
        }
    }
}

export {
    Add_Task,
    Toggle_complete
}