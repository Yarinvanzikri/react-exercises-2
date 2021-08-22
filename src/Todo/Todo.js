import React, {useState} from 'react';
import './Todo.css';

function Todo() {
	const [value, setValue] = useState('');
	const [tasks, setTasks] = useState([])

	const DeletedTask = (taskIndex) => {
		let tempTasksList = [];

		tasks.map((currTask, index) =>{
			if(index !== taskIndex){
				tempTasksList.push(currTask);
			}
		})

		setTasks(tempTasksList);
	}

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input  onChange={(e) => setValue(e.target.value)} value={value} placeholder="Your task..." />
			<button onClick={()=> setTasks([...tasks, value])}>Add task</button>
			<ul>
				{tasks.map((task, index)=> {
					return <li key={index}>{task}<button onClick={()=> DeletedTask(index)}>Delete</button></li>
				})}
			</ul>
		</div>
	)
}

export default Todo;
