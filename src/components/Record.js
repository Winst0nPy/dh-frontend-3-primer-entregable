import { Component } from "react";

export class Record extends Component {
  render() {
    return (
      <div className="record">
        <h4>
          Selección previa: <span>{this.props.prevSelection}</span>
        </h4>
        <h4>
          Selecciones históricas:{" "}
          {this.props.historySelection.map((option, index) => (
            <span key={index}>
              {++index}°{option} -{" "}
            </span>
          ))}
        </h4>
      </div>
    );
  }
}
