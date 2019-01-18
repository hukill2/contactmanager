import React, { Component } from "react";

class Chuck extends Component {
  state = {
    type: "",
    id: "",
    value: ""
  };

  componentDidMount() {
    fetch("http://api.icndb.com/jokes/random/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          type: data.type,
          id: data.value.id,
          value: data.value.joke
        })
      );
    console.log(this.state.type);
  }

  render() {
    const { value } = this.state;
    return (
      <li className="list-group-item">
        Favorite Chuck Norris Joke:
        <br /> {decodeURI(value)}{" "}
        <cite title="Source Title">
          <a href="http://www.icndb.com" className="badge badge-light">
            The Internet Chuck Norris Database
          </a>
        </cite>
      </li>
    );
  }
}

export default Chuck;
