import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.getUsers()
  }

  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h1>All Users </h1>
            <hr/><br/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

