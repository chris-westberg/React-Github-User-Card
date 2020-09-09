import React from 'react';
import axios from 'axios';
import User from './Components/card'
import FollowerCard from './Components/follower-card'

class GithubCard extends React.Component{

  state= {
    user: [], 
    follower: []
  };

  

  componentDidMount() {
    axios.get( 'https://api.github.com/users/chris-westberg')
      .then(res => {
        console.log('User Data', res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get('https://api.github.com/users/chris-westberg/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        follower: res.data[0]
      })
    })
  }

  render() {
    return (
      <div>
        <User user={this.state.user}/>
        <FollowerCard follower={this.state.follower}/>
      </div>
    )
  }
}

export default GithubCard;
