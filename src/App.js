import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, winner: 7 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ number: rand });
    if (rand === 7) {
      let btn = e.target;
      btn.parentNode.removeChild(btn);
    }
  }
  render() {
    return (
      <div className="App">
        <h1> Number is {this.state.number}</h1>
        <button onClick={e => this.handleClick(e)} className="App-btn">
          {" "}
          Click Me{" "}
        </button>
        <h1 className="App-winner">
          {this.state.number === 7 ? "You Win" : null}{" "}
        </h1>
      </div>
    );
  }
}
export default App;
