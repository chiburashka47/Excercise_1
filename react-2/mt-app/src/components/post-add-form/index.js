import React from "react";

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="О чем вы думаете сейчас"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        ></input>
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
