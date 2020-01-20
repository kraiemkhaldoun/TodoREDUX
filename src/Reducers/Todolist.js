 const TodoListReducer =(state=[],action)=> {

    if(action.type==='ADD_INPUT') {
    return state = [...state,{text:action.value,id:Math.random(),booleen:false}]
    
} else if (action.type==='COMPLETE')
{
    return state =state.map(el => el.id===action.value ? {...el, booleen:!el.booleen}:el) 
}
else if (action.type==='DELETE')
{
    return state = state.filter(el=>el.id!==action.value)
}
    else return state

   


 }

 export default TodoListReducer