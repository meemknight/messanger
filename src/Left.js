import React from "react";
import "./styles.css";

class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="left">
        {this.props.data.map(x => {
          return (
            <div
              onClick={e => {
                alert(x.key);
                this.props.changeStudentId(x.key);
              }}
              className="contact"
            >
              <img className={"photo"} src={x.photo_url} />
              {x.nume}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Left;
