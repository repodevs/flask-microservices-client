import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({ users: res.data.data.users  }); })
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
            {
              this.state.users.map((user) => {
                return <h4 key={user.id} className="well"><strong>{ user.username }</strong> - <em>{user.created_at}</em></h4>
              })
            }
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

