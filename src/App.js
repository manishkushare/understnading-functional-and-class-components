import React from "react";

// function App(props) {
//   return (
//     <div className="App">
//       <h1>Hello {props.name}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
