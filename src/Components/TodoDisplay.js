function TodoDisplay({listItem, deleteEvent}) {

    console.log(listItem)

const removeList = () => {

    deleteEvent(listItem)

}

    return (
        <>
        <li>{listItem}</li>
        <button onClick={removeList}>Delete</button>
        </>
    )

}

export default TodoDisplay