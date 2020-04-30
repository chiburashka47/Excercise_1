import React from "react";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }
  onLike() {
    this.setState(({ like }) => ({
      like: !like,
    }));
  }

  render() {
    const { label } = this.props;
    const { important, like } = this.state;

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <div className={classNames}>
        <span onClick={this.onLike} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onImportant}
            className="btn-star btn-sm"
            type="button"
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
