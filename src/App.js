import React from "react";
import "./App.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            <h3>What needs to be finished?</h3>
          </label>{" "}
          <p></p>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button style={{ margin: "5px" }}>
            Add #{this.state.items.length + 1}
          </button>
          <p></p>
          <input type="checkbox" value="0" id="checkbox1" />
          Tick when you Finished !
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleDelete = (id) => {
    const newItem = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: newItem });
  };
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => this.handleDelete(item.id)}
              style={{ margin: "20px" }}
            >
              Delete
            </button>
            <button onClick={this.onUpdate} style={{ margin: "5px" }}>
              {" "}
              Edit
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
