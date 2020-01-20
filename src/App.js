import React from 'react';
import './App.css'
import { connect } from 'react-redux';


const App = (props) => {
 console.log(props.input)
  return (<div>
    <div className="section1">
      <div className="tit">
        <h1> To Do Apps!</h1>
        <p>Add New To Do</p>
      </div>
      <input type="text" placeholder="Add new task" id="inp" onChange={(e) => {props.SetInput(e.target.value) }} />
      <div className="btn-add">
        <button className="bouton" onClick={() =>{props.AddInput(props.input)} }> ADD </button>

      </div>
    </div>

    <div className="section2">
  <h1  > let's get some work done!</h1>
       {props.tab.map(el=><div key={el.id}>
       <h1 className={el.booleen&& "undo" }>{el.text}</h1>
       <button onClick={()=>props.Complete(el.id)}>{el.booleen?"undo":"complete"}</button>
       <button onClick={()=>props.Delete(el.id)}>Delete</button>
       </div>)}
  </div>



  </div>);
}


const mapDispatchToProps = (dispatch) => {
  return {
    SetInput: (input) => dispatch({ type: "SET_INPUT", value: input }),
    AddInput: (x) => dispatch({type: "ADD_INPUT", value : x}),
    Delete: (y) => dispatch({type: "DELETE", value : y}),

    Complete: (z) => dispatch({type: "COMPLETE", value : z})

    

  }


}
const mapStateToProps=(state)=> {
  return {
     input : state.input,
     tab : state.tab,
     y : state.y,
     z : state.z
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);