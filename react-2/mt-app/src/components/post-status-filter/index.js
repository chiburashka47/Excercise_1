import React from "react";
import { Button } from "reactstrap";

export default class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравилось" },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;

      const active = filter === name;
      const activeClass = active ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={name}
          type="button"
          className={`btn ${activeClass}`}
          onClick={() => {
            onFilterSelect(name);
          }}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
