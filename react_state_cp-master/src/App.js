import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Khalid A Mohamed",
        bio: "A Coffee Engineer With a Computer Problem",
        imgSrc: "./img.jpg",
        profession: "Frontend Dev",
      },

      shows: true,
      date: new Date(),
      count: 0,
    };
  }

  // Added functions
  toggle() {
    if (this.state.shows === false) this.setState({ shows: true });
    else this.setState({ shows: false });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  render() {
    if (this.state.shows) {
      return (
        <div className="App">
          <h3> {this.state.date.toLocaleTimeString()} </h3>
          <img src={this.state.person.imgSrc} />
          <h1>{this.state.person.fullName}</h1>
          <h2>{this.state.person.bio}</h2>
          <h3>{this.state.person.profession}</h3>

          <button onClick={() => this.toggle()}>Shows</button>
          <p>Component was mounted {this.state.count} seconds ago.</p>
        </div>
      );
    } else
      return (
        <>
          <div class="container">
            <div class="center">
              <button onClick={() => this.toggle()} style={{ displa: "flex" }}>
                Shows
              </button>
            </div>
          </div>
        </>
      );
  }
}

export default App;
