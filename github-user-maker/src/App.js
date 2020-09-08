import React from 'react';
import axios from 'axios';
import User from './Components/card'

class GithubCard extends React.Component{

  state= {
    user: [], 
    follower: []
  };

  

  componentDidMount() {
    axios.get( 'https://api.github.com/users/chris-westberg')
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get('https://api.github.com/users/chris-westberg/followers')
    .then(res => {
      this.setState({
        follower: res.data[0]
      })
    })
  }

  render() {
    return (
      <div>
        <User user={this.state.user} follower={this.state.follower}/>
      </div>
    )
  }
}

export default GithubCard;
