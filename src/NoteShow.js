import React,{useState} from 'react';

const NoteShow = (props) => {

  const deleteNote = () => {
    props.deleteItem(props.id);
   };

  let cTimes = new Date().toLocaleTimeString();
   const c2Time = useState(cTimes);

  return <>
     <div className="note">
        <h1> {props.title} </h1>
         <br />
        <p> {props.content} </p>
         <hr />
        <h6> {c2Time} </h6>
        <button className="btn" onClick={deleteNote}>
          <span className="deleteIcon"> <i className="fa fa-trash-o" ></i> </span>
        </button>
      </div>
    </>
 };

export default NoteShow;