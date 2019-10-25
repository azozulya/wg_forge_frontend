import React from "react";
import ReactDOM from 'react-dom';
import Orders from "./components/Orders";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h1>Orders list</h1>
        </div>
        <Orders />
      </div>
    )
  }
}

export default App;
