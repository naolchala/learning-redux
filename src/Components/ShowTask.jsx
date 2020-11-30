import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../index.scss'
import { Get_Task, Toggle_complete } from './Data/Actions/Actions';

const filterData = (data, filter) => {
    switch(filter){
        case 'all':
            return data;
        case 'finished':
            return data.filter(data => data.finished === true);
        case 'unfinished':
            return data.filter(data => data.finished === false);
    }
}

const ShowTask = () => {
    const dispatch = useDispatch();
    let data = useSelector(state => state);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        data = filterData(data, filter);
    }, [filter])

    const updateToggle = (id) => {
        dispatch(Toggle_complete(id));
    }

    return(
        <div className="card show">
            <div className="tabBar">
                <button onClick={()=> setFilter('all')}>All</button>
                <button onClick={()=> setFilter('unfinished')}>UnFinished</button>
                <button onClick={()=> setFilter('finished')}>Completed</button>
            </div>
            <div className="List">
                {
                    data.length === 0 ?
                    <p>No Data</p> :
                    data.map(task => {
                        return <ListItem key={task.id} id={task.id} desc={task.desc} finished={task.finished} updateFunc={updateToggle}></ListItem>
                    })
                }
            </div>
        </div>
    )
}

const ListItem = (props) => {
    const updateToggle = props.updateFunc;
    return (
        <div className={props.finished ? "listItem finished" : "listItem"}>
            <label>
                <input type="checkbox" onChange={() => updateToggle(props.id)} checked={props.finished}></input>
                <span>{props.desc}</span>
            </label>
        </div>
    )
}
export default ShowTask