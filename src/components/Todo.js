import React, { useEffect, useRef, useState } from "react";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import Checkbox from "antd/lib/checkbox/Checkbox";

export default function Todo(props) {
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const editButtonRef = useRef(null);
  const editFieldRef = useRef(null);
  const [newName, setNewName] = useState("");
  const [isEditing, setEditing] = useState(false);
  const wasEditing = usePrevious(isEditing);
  function handleChange(e) {
    setNewName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="btn-group">
        <div className="c-cb">
          <Checkbox
            id={props.id}
            checked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <input
            type="text"
            className="todo-label"
            id={props.id}
            value={props.name}
          />
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
        >
          <EditTwoTone /> <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          <DeleteTwoTone />{" "}
          <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
