import { useState } from 'react'
import TodoDisplay from './TodoDisplay.js'


const Todo = (props) => {

    // console.log(props.todoList)
    const [list, newList] = useState(props.todoList)


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        const newTodoItem = e.target[0].value

        const newListItems = [...list, newTodoItem]
        newList(newListItems)
        // console.log(newListItems)
    }



    const deleteEvent = (listItem) => {
        console.log(list)
     const filteredList = list.filter(item => {

            if (item !== listItem) {
                return listItem
            }
        })
        newList(filteredList)
    }
    
    

   return (

    <div>
        <form onSubmit={handleSubmit}>
            <input></input>
            <button>Submit</button>
        </form>
        <ul>
            {
            list.map((li, index) => <TodoDisplay listItem={li} key={index} deleteEvent={deleteEvent}/>)
            }
        </ul>
    </div>
   )
}



export default Todo