import React, { UseState } from "react";

import Task from "../tasks";
import InputTask from "../inputtask";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Read book",
            completed: false
        },
        {
            title: "Cooking",
            completed: true
        },
        {
            title: "Walking",
            completed: false
        }
    ]);

    const addTask = (title) => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const toogleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks)
    };

    const deleteList = () => {
        const newTasks = [...tasks];
        newTasks.splice(0, newTasks.length);
        setTasks(newTasks);
    };

    return (
        <div className="todolist-container">
            <TodoListTitle>What to do?</TodoListTitle>
            <div className="add-task">
                <InputTask addTask={addTask} />
            </div>
            <TodoListComponent>
                {tasks.length === 0 ? (
                    <EmptyListMessage>Everything is done! Nothing to do...</EmptyListMessage>
                ) : (
                    tasks.map((task, index) => (
                        < Task
                            key={index}
                            task={task}
                            index={index}
                            toogleTask={toogleTask}
                            removeTask={removeTask}
                        />
                    ))
                )}
            </TodoListComponent>
            {tasks.length !== 0 && (
                <ClearAll onClick={deleteList}>Clear all</ClearAll>
            )

            }
        </div>
    );
};

export default TodoList;