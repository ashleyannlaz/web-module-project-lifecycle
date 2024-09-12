import './App.css';
import React from 'react'
import axios from 'axios'

class App extends React.Component {

  state = {
    users: {},
    followers: [],
  }

  componentDidMount () {
    axios.get('https://api.github.com/users/ashleyannlaz')
    .then(res => {
      console.log(res.data)
      this.setState({
        users:res.data
      });
    })
    axios.get('https://api.github.com/users/ashleyannlaz/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        ...this.state, followers:res.data
      });
    })
  }

  render() {
    return(
      <div>
        <div className="userCard">
          <div className="userPicture">
            <img src={this.state.users.avatar_url} alt="Profile"  width={100} />
          </div>
          <div className="userDetails">
            <h2>{this.state.users.name}</h2>
            <p>{this.state.users.login}</p>
            <p>Location: {this.state.users.location}</p>
            <p>Profile: {this.state.followers.html_url}</p>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>
            <p>Biography: {this.state.users.bio}</p>
          </div>
          </div>

            {
              this.state.followers.map(item => {
                return (
                <div>
                  <img src={item.avatar_url} alt="Profile"  width={100} />
                  <p>{item.login}</p>
                  <p>Profile: {item.html_url}</p>
                  <p>Repos: {item.repos_url}</p>
                </div>
                )
              })
            }
       
        

      </div>
    )
  }
}

export default App;
