import React from "react";
import "./styles.css";

class Middle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data == null) {
      return <h3>Nobody here</h3>;
    } else {
      return (
        <div className={"contact"}>
          <img className={"photo"} src={this.props.data.photo_url} />
          {this.props.data.nume}
        </div>
      );
    }
  }
}

export default Middle;
